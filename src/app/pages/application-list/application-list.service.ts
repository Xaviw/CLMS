import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationParam, ApplicationInfo } from '@app/shared/types/commonTypes';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class ApplicationListService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取申请列表
  getApplicationList(param: ApplicationParam) {
    const url = '/apply/getApplyList';
    return this.http.post(url, param);
  }

  cancelApply(param: { id: string; type: number }) {
    const url = '/apply/cancelApply';
    return this.http.post(url, param);
  }

  // 获取申请信息
  getApplicationInfo(param: { id: string; type: number }) {
    const url = '/apply/getApplyById';
    return this.http.post(url, param);
  }

  // 申请
  apply(param: ApplicationInfo) {
    const url = '/apply/updateApply';
    return this.http.post(url, param);
  }

  // 审核
  examine(param: { status: boolean; id: string; remark?: string; type: number }) {
    const url = '/apply/passApply';
    return this.http.post(url, param);
  }

  // 维修完成
  repairFinish(id: string) {
    const url = '/apply/repairDone';
    return this.http.post(url, { id });
  }

  // 获取申请历史
  getApplicationHistory(param: { id: string; type: number }) {
    const url = '/apply/getLog';
    return this.http.post(url, param);
  }
}
