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

  // 获取课程表
  getCourseSchedule(param: any) {
    const url = '/courseSchedule';
    return this.http.post(url, param);
  }

  // 获取角色
  getRoles() {
    const url = '/permissions/getAllRoles';
    return this.http.get(url);
  }

  // 获取机房列表（id--name)
  getLabList() {
    const url = '/lab/list';
    return this.http.get(url);
  }

  // 修改某课程课表
  modifyCourseSchedule(param: { courseId: string; weekTime?: number; data: Array<{ labId: string } | null>[] }) {
    const url = '';
    return this.http.post(url, param);
  }
}
