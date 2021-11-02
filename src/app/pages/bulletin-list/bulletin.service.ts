import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pagination } from '@app/shared/types/commonTypes';

@Injectable()
export class BulletinService {
  constructor(private http: HttpClient) {}

  // 获取公告
  getBulletin(param: { key?: string; pageIndex: number; pageSize: number }) {
    const url = '/ann/getMessage';
    return this.http.post(url, param);
  }

  // 发布公告
  publishBulletin(param: { title: string; content: string }) {
    const url = '/ann/addMessage';
    return this.http.post(url, param);
  }

  // 获取公告详细
  getBulletinDetail(id: string) {
    const url = `/ann/getMessageById`;
    return this.http.post(url, { id });
  }
}
