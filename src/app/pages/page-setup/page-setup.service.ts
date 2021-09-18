import { PageAction } from '@app/shared/types/commonTypes';
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

interface modifyFunction extends PageAction {
  permission_id: string;
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

  // 修改页面
  modifyPage(param: page) {
    const url = '/page/updatePage';
    return this.http.post(url, param);
  }

  // 调整页面顺序
  adjustPage(param: { parent_page_id: string; page_id: string; sort: number }) {
    const url = '/page/adjustPage';
    return this.http.post(url, param);
  }

  // 添加功能
  addFunction(param: PageAction) {
    const url = '/page/addPermissions';
    return this.http.post(url, param);
  }

  // 修改功能
  modifyFunction(param: modifyFunction) {
    const url = '/page/updatePermissions';
    return this.http.post(url, param);
  }

  // 删除功能
  deleteFunction(id: string) {
    const url = '/page/deletePermissions';
    return this.http.post(url, { feature_id: id });
  }
}
