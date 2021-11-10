import { CacheService } from '@app/core/services/cache.service';
import { environment } from './../../../environments/environment.mock';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { _session, _local } from '@app/shared/utils/Storage';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private message: NzMessageService,
    private title: Title,
    private cache: CacheService,
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // 不判断查询参数
    state.url = state.url.split('?')[0];
    // 是否不需要登陆
    const noLoginRequired = Boolean(childRoute.data?.noLoginRequired);
    // 是否跳过权限验证
    const skipAuth = Boolean(childRoute.data?.skipAuth);
    // 是否已登录
    const isLogin = Boolean(_local.get('token'));
    // 页面key
    const key = childRoute.data?.key;
    // 是否拥有页面权限
    const hasPermission = this.cache.pagePermissions(key);
    // 页面标题
    const title = childRoute.data?.title || environment.systemName;

    // 已登录状态前往登录页，跳转首页
    if (state.url === '/blank/login' && isLogin) {
      this.message.info('已经登录！');
      return this.router.parseUrl('/index');
    }

    if (isLogin && !skipAuth && !hasPermission) {
      // 已登录、需要权限、无权限，跳转首页(无权限跳转登录页)
      if (this.cache.pagePermissions('index')) {
        return this.router.parseUrl('/index');
      } else {
        this.message.error('无相关页面权限，请联系管理员！');
        this.cache.clearCache();
        return this.router.parseUrl('/blank/login');
      }
    } else if (!isLogin && !noLoginRequired) {
      // 需要登录、未登录，跳转登录页
      this.message.error('登录信息已失效，请重新登录！');
      this.cache.clearCache();
      return this.router.parseUrl('/blank/login');
    } else {
      this.title.setTitle(title);
      return true;
    }
    // this.title.setTitle(title);
    // return true;
  }
}
