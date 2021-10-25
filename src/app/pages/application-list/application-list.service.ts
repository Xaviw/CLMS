import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationParam } from '@app/shared/types/commonTypes';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class ApplicationListService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取申请列表
  getApplicationList(param: ApplicationParam) {
    const url = '/application/list';
    return this.http.post(url, param);
  }

  // 取消申请
  cancelApply(id: string) {
    const url = '';
    return this.http.post(url, { id });
  }
}
