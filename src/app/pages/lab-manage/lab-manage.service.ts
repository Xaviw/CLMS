import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class LabManageService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取机房列表
  getLabList(id?: string) {
    const url = `/lab/infoList`;
    return this.http.get(url);
  }

  // 获取机房基础信息
  getLabInfo(id: string) {
    const url = '/lab/detailInfo';
    return this.http.post(url, { labId: id });
  }

  // 删除机房
  deleteLab(id: string) {
    const url = '/lab/del';
    return this.http.post(url, { labId: id });
  }

  // 设置机房状态
  setLabStatus(param: { labId: string; status: number }) {
    const url = '/lab/status';
    return this.http.post(url, param);
  }

  // 添加机房
  addLab(param: { name: string; description?: string }) {
    const url = '/lab/add';
    return this.http.post(url, param);
  }
}
