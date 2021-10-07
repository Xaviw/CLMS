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
  getMajor(param: { year: string; collegeId: string }) {
    const url = '/management/getAllProfession';
    return this.http.post(url, param);
  }

  // 获取班级信息
  getClass(param: { year: string; collegeId: string; professionId: string }) {
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

  downloadTemplate() {
    const url = '/user/downloadErrorUser';
    return this.http.get(url, { observe: 'response', responseType: 'blob' });
  }
}
