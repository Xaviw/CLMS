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
    return this.http.get(url);
  }

  // 修改密码
  modifyPassword(param: { confirm_password: string; new_password: string }) {
    const url = '/user/updateUserPassword';
    return this.http.post(url, param);
  }

  // 获取是否需要签到
  needCheckIn() {
    const url = '/checkIn';
    return this.http.get(url);
  }

  // 签到
  checkIn(id: string) {
    const url = '/';
    this.http.post(url, { id });
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
    const url = '/course/getSelfCourse';
    return this.http.post(url, param);
  }

  // 获取角色
  getRoles() {
    const url = '/permissions/getAllRoles';
    return this.http.get(url);
  }

  // 获取机房列表
  getLabList() {
    const url = `/lab/getAllLab`;
    return this.http.get(url);
  }

  // FIXME：修改某课程课表
  modifyCourseSchedule(param: { courseId: string; weekTime?: number; data: Array<{ labId: string } | null>[] }) {
    const url = '';
    return this.http.post(url, param);
  }

  // 设置机房状态
  setLabStatus(param: { labIds: string[]; status: number }) {
    const url = '/lab/setLabStatus';
    return this.http.post(url, param);
  }

  // 退出登录
  logout() {
    const url = '/user/logout';
    return this.http.post(url, {});
  }

  // 下载文件
  download(url: string, param?: any) {
    return (
      param
        ? this.http.post(url, param, { observe: 'response', responseType: 'blob' })
        : this.http.get(url, { observe: 'response', responseType: 'blob' })
    ).subscribe((res: any) => {
      if (res) {
        // 获取文件名
        let fileName = res.headers.get('content-disposition').split('=')[1];
        // 获取数据类型
        let type = res.headers.get('content-type').split(';')[0];
        let blob = new Blob([res.body], { type: type });
        const a = document.createElement('a');
        // 创建URL
        const blobUrl = window.URL.createObjectURL(blob);
        a.download = fileName;
        a.href = blobUrl;
        document.body.appendChild(a);
        // 下载文件
        a.click();
        // 释放内存
        URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
      } else {
        this.message.error('下载失败，请尝试重新下载！');
      }
    });
  }
}
