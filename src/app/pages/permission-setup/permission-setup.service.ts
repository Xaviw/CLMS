import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { tap } from 'rxjs/operators';

@Injectable()
export class PermissionSetupService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取角色
  getRoles() {
    const url = '/role';
    return this.http.post(url, null);
  }

  // 修改页面权限
  setPagePermission(param: { roleId: string; pageId: string }) {
    const url = '/permission/page';
    return this.http.post(url, param);
  }

  // 修改功能权限
  setFunctionPermission(param: { roleId: string; functionId: string }) {
    const url = '/permission/function';
    return this.http.post(url, param);
  }

  // 删除角色
  deleteRole(id: string) {
    const url = '/permission/delete';
    return this.http.post(url, id);
  }

  // 修改角色
  modifyRole(name: string) {
    const url = '.permission/modify';
    return this.http.post(url, name);
  }

  // 添加角色
  addRole(name: string) {
    const url = '.permission/add';
    return this.http.post(url, name);
  }
}
