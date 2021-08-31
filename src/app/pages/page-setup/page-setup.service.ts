import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

interface page {
  parent_page_id: string;
  title: string;
  link: string;
  icon?: string;
  page_id: string;
  sort?: number;
}

@Injectable()
export class PageSetupService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 添加页面
  addPage(param: page) {
    const url = '/page/addPage';
    return this.http.post(url, param);
  }

  // 删除页面
  deletePage(param: string) {
    const url = '/page/deletePage';
    return this.http.post(url, { page_id: param });
  }

  // 调整页面顺序
  adjustPage(param: page) {
    const url = '/page/adjustPage';
    return this.http.post(url, param);
  }
}
