import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class IndexService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取公告
  getBulletin() {
    const url = '/bulletin';
    return this.http.get(url);
  }
}
