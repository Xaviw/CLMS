import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationParam, ApplicationInfo } from '@app/shared/types/commonTypes';
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

  // 获取申请信息
  getApplicationInfo(id: string) {
    const url = '/application/info';
    return this.http.post(url, { id });
  }

  // 申请
  apply(param: ApplicationInfo) {
    const url = '';
    return this.http.post(url, param);
  }

  // 审核
  examine(param: { status: boolean; id: string; remark?: string }) {
    const url = '';
    return this.http.post(url, param);
  }

  // 维修完成
  repairFinish(id: string) {
    const url = '';
    return this.http.post(url, { id });
  }

  // 获取申请历史
  getApplicationHistory(id: string) {
    const url = '/application/history';
    return this.http.post(url, { id });
  }
}
