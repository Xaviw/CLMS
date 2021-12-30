import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class LabManageService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取机房基础信息
  getLabInfo(id: string) {
    const url = '/lab/getLabById';
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
    const url = '/lab/updateLab';
    return this.http.post(url, param);
  }

  // 删除照片
  deletePicture(img: string) {
    const url = '/lab/deleteImage';
    return this.http.post(url, { image: img });
  }

  // 获取机房座位表
  getSeatingChart(id: string) {
    const url = '/lab/getLabSeatById';
    return this.http.post(url, { labId: id });
  }

  // 获取某日空闲时段
  getFreeTimeRange(param: { labId: string; date: Date }) {
    const url = '/lab/getLabFreeTimeByTime';
    return this.http.post(url, param);
  }

  // 获取某时间段座位表
  getFreeTimeChart(param: { labId: string; time: number; date: string }) {
    const url = '/lab/getSeat';
    return this.http.post(url, param);
  }

  // 编辑座位表
  editSeatingChart(param: { labId: string; chart: Array<Array<number>> }) {
    const url = '/lab/getLabFreeTimeByTime';
    return this.http.post(url, param);
  }
}
