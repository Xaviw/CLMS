import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class UserManageService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取学院信息
  getCollege() {
    const url = '/college';
    return this.http.get(url);
  }

  // 获取专业信息
  getMajor(param: { grade: number; college_id: string }) {
    const url = '/major';
    return this.http.post(url, param);
  }

  // 获取班级信息
  getClass(param: { grade: number; college_id: string; major_id: string }) {
    const url = '/class';
    return this.http.post(url, param);
  }

  // 获取教师关联班级
  getChargeClass() {
    const url = '/class/own';
    return this.http.get(url);
  }

  // 查询用户
  queryUser(param: any) {
    const url = '/user/query';
    return this.http.post(url, param);
  }
}
