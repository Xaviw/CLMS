import { Res } from '@app/shared/types/commonTypes';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 请求用户信息
  getUserInfo() {
    const url = '/user/info';
    return this.http.post(url, {});
  }

  // 获取所有页面
  getAllPages() {
    const url = '/page/getAllRouterInfo';
    return this.http.post(url, null);
  }

  // 获取页面功能
  getPageFunctions(param: string) {
    const url = '/page/functions';
    return this.http.post(url, param);
  }
}
