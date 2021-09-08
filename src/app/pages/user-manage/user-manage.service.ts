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
}
