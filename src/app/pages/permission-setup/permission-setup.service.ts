import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { tap } from 'rxjs/operators';

@Injectable()
export class PermissionSetupService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取角色菜单权限
  getRolePages(id: string) {
    const url = '/permissions/getPageByRole';
    return this.http.post(url, { role_id: id });
  }

  // 获取角色功能权限
  getRolePageFunctions(id: string) {
    const url = '/permissions/getPermissionsByRole';
    return this.http.post(url, { role_id: id });
  }

  // 添加页面权限
  addPagePermission(param: { role_id: string; page_id: string }) {
    const url = '/permissions/addPageInRole';
    return this.http.post(url, param);
  }

  // 取消页面权限
  cancelPagePermission(param: { role_id: string; page_id: string }) {
    const url = '/permissions/cancelPageInRole';
    return this.http.post(url, param);
  }

  // 添加功能权限
  addFunctionPermission(param: { role_id: string; permissions_id: string }) {
    const url = '/permissions/addPermissionsInRole';
    return this.http.post(url, param);
  }

  // 取消功能权限
  cancelFunctionPermission(param: { role_id: string; permissions_id: string }) {
    const url = '/permissions/deletePermissionsInRole';
    return this.http.post(url, param);
  }

  // 删除角色
  deleteRole(id: string) {
    const url = '/permission/delete';
    return this.http.post(url, { role_id: id });
  }

  // 修改角色
  modifyRole(param: { role_id: string; role_name: string }) {
    const url = '/permissions/modifyRole';
    return this.http.post(url, param);
  }

  // 添加角色
  addRole(name: string) {
    const url = '/permissions/addRole';
    return this.http.post(url, { role_name: name });
  }
}
