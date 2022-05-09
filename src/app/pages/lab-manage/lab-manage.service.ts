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

  exportUseList() {
    const url = '/lab/exportLabApplyInfo';
    return this.http.get(url);
  }

  // 删除机房
  deleteLab(id: string) {
    const url = '/lab/deleteLab';
    return this.http.post(url, { labId: id });
  }

  // 添加机房
  addLab(param: { name: string; description?: string }) {
    const url = '/lab/addLab';
    return this.http.post(url, param);
  }

  // 修改机房信息
  setLabInfo(param: { labId: string; name: string; description?: string }) {
    const url = '/lab/updateLab';
    return this.http.post(url, param);
  }

  // 删除照片
  deletePicture(param: { labId: string; image: string }) {
    const url = '/lab/deleteImage';
    return this.http.post(url, param);
  }

  // 上传机房照片
  uploadPicture(param: { labId: string; names: string[] }) {
    const url = '/lab/upImageInLabId';
    return this.http.post(url, param);
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
    const url = '/lab/editSeat';
    return this.http.post(url, param);
  }
}
