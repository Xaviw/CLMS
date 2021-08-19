import { clearCache } from '@app/shared/utils/utils';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { _session, _local } from '@app/shared/utils/Storage';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router, private message: NzMessageService) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // 是否需要登陆
    const needLogin = Boolean(childRoute.data?.needLogin);
    // 是否已登录
    const isLogin = Boolean(_local.get('token'));
    // 是否不需要校验权限
    const skipPermission = Boolean(childRoute.data?.skipPermission);
    // 是否拥有页面权限
    const hasPermission = JSON.stringify(_session.get('routes')).indexOf(state.url) !== -1;

    // 已登录状态前往登录页，跳转首页
    if (state.url === '/blank/login' && isLogin) {
      this.message.info('已经登录！');
      return this.router.parseUrl('/index');
    }

    if (!needLogin) {
      // 不需要登录直接跳转
      return true;
    } else {
      if (isLogin && skipPermission) {
        // 需要登陆，不需要校验权限，直接跳转
        return true;
      } else if (isLogin && hasPermission) {
        // 需要登陆，已登录、有权限，直接跳转
        return true;
      } else if (isLogin && !hasPermission) {
        // 需要登录，已登录、无权限，跳转首页
        return this.router.parseUrl('/index');
      } else {
        // 未登录，跳转登录页
        this.message.error('登录信息已失效，请重新登录！');
        clearCache();
        return this.router.parseUrl('/blank/login');
      }
    }
  }
}
