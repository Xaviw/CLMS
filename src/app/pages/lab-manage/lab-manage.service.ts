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

  // 添加机房
  addLab(param: { name: string; description?: string }) {
    const url = '/lab/add';
    return this.http.post(url, param);
  }

  // 修改机房信息
  setLabInfo(param: { labId: string; name: string; description?: string }) {
    const url = '';
    return this.http.post(url, param);
  }
}
