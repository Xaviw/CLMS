import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class UserManageService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取学院信息
  getCollege() {
    const url = '/management/getAllCollege';
    return this.http.get(url);
  }

  // 获取专业信息
  getMajor(param: { grade: string | Number; college: string }) {
    const url = '/management/getAllProfession';
    return this.http.post(url, param);
  }

  // 获取班级信息
  getClass(param: { grade: string; college: string; major: string }) {
    const url = '/management/getAllClass';
    return this.http.post(url, param);
  }

  // 获取教师关联班级
  getChargeClass() {
    const url = '/user/getClassByUser';
    return this.http.get(url);
  }

  // 查询用户
  queryUser(param: any) {
    const url = '/user/getUserByCondition';
    return this.http.post(url, param);
  }

  // 搜索用户
  searchUser(param: { keyword: string; type: number; pageIndex: number; PageSize: number }) {
    const url = '/user/findUser';
    return this.http.post(url, param);
  }

  // 强制下线
  makeOffLine(ids: string[]) {
    const url = '/user/logoutById';
    return this.http.post(url, { user_ids: ids });
  }
  // 重置密码
  resetDefaultPassword(ids: string[]) {
    const url = '/user/resetPassword';
    return this.http.post(url, { user_ids: ids });
  }
  // 删除用户
  deleteUsers(ids: string[]) {
    const url = '/user/deleteUser';
    return this.http.post(url, { user_ids: ids });
  }

  // 设置用户角色
  setUserRole(param: { user_ids: string[]; roles: string[] }) {
    const url = '/user/setUserRole';
    return this.http.post(url, param);
  }

  // 修改用户
  updateUser(param: {
    account: string;
    class: string;
    college: string;
    grade: string;
    major: string;
    name: string;
    role: string[];
  }) {
    const url = '/user/updateUser';
    return this.http.post(url, param);
  }

  // 添加用户
  addUser(param: {
    account: string;
    class?: string;
    college: string;
    grade?: string;
    major?: string;
    name: string;
    role: string[];
  }) {
    const url = '/user/addUser';
    return this.http.post(url, param);
  }
}
