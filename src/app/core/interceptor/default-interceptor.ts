import { CacheService } from './../services/cache.service';
import { _local } from '@app/shared/utils/Storage';
import { environment } from '@env/environment';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { clearCache } from '@app/shared/utils/utils';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private message: NzMessageService,
    private notification: NzNotificationService,
    private cache: CacheService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // 添加Token
    const token = _local.get('token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // 添加统一API前缀
    req = req.clone({
      url: environment.api + req.url,
    });
    return next.handle(req).pipe(
      tap(
        (res) => {
          if (res instanceof HttpResponse && res.body.code !== 0) {
            this.message.error(res.body.msg);
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
                clearCache();
                this.router.navigate(['/blank/login']);
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
