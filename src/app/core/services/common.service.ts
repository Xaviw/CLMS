import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 请求用户信息
  getUserInfo() {
    const url = '/user/info';
    return this.http.post(url, {});
  }

  // 获取所有页面
  getAllPages() {
    const url = '/page/getAllRouterInfo';
    return this.http.post(url, null);
  }

  // 获取页面功能
  getPageFunctions(param: string) {
    const url = '/page/getPermissionsInPage';
    return this.http.post(url, { page_id: param });
  }

  // 获取个人课程表
  getOwnClassSchedule(param: any) {
    const url = '/courseSchedule';
    return this.http.post(url, param);
  }

  // 获取角色
  getRoles() {
    const url = '/permissions/getAllRoles';
    return this.http.get(url);
  }
}
