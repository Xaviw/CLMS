import { environment } from '@env/environment';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private message: NzMessageService, private notification: NzNotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const token = this.storage.retrieve('token');
    // if (token) {
    //   // 如果有token，就添加
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token.access_token}`,
    //     },
    //   });
    // }
    console.log(environment);
    req = req.clone({
      url: environment.api + req.url
    })
    console.log(req);
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            // 这里是返回，可通过event.body获取返回内容
            // event.body
          }
        },
        (error) => {
          // 统一处理所有的http错误
          if (error instanceof HttpErrorResponse) {
            switch (error.status) {
              case 400:
                this.message.error('错误请求！');
                break;
              case 401:
                this.message.error('登录信息已失效，请重新登录！');
                this.router.navigate(['/index/login']);
                break;
              case 403:
                this.message.error('禁止访问！');
                break;
              case 404:
                this.message.error('未找到对应资源！');
                break;
              case 405:
                this.message.error('错误的请求方法！');
                break;
              case 408:
                this.message.error('请求超时！');
                break;
              case 500:
                this.notification.error('服务器错误', '请稍后再试');
                break;
              case 503:
                this.notification.error('服务器维护中', '请稍后再试');
                break;
              case 504:
                this.notification.error('错误', '请检查您的网络');
                break;
              default:
                this.notification.error('错误', '请稍后再试\n' + error.message);
                break;
            }
          }
        },
      ),
    );
  }
}
