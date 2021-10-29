import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pagination } from '@app/shared/types/commonTypes';

@Injectable()
export class BulletinService {
  constructor(private http: HttpClient) {}

  // 获取公告
  getBulletin(param: pagination) {
    const url = '/bulletin';
    return this.http.post(url, param);
  }

  // 搜索公告
  searchBulletin(param: { key: string; pageIndex: number; pageSize: number }) {
    const url = '/bulletin/search';
    return this.http.post(url, param);
  }

  // 发布公告
  publishBulletin(param: { title: string; content: string }) {
    const url = '/bulletin/publish';
    return this.http.post(url, param);
  }

  // 获取公告详细
  getBulletinDetail(id: string) {
    const url = `/bulletin/detail`;
    return this.http.post(url, { id });
  }
}
