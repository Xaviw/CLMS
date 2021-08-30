import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pagination } from '@app/shared/types/commonTypes';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class IndexService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取机房统计信息
  getLabStatistic() {
    const url = '/lab';
    return this.http.get(url);
  }

  // 获取设备统计信息
  getEquipmentStatistic() {
    const url = '/equipment';
    return this.http.get(url);
  }

  // 获取用户统计信息
  getUserStatistic() {
    const url = '/user';
    return this.http.get(url);
  }

  // 获取机房申请统计信息
  getLabApplyStatistic() {
    const url = '/apply/lab';
    return this.http.get(url);
  }
  // 获取采购申请统计信息
  getShopApplyStatistic() {
    const url = '/apply/equipment';
    return this.http.get(url);
  }
  // 获取报修申请统计信息
  getRepairApplyStatistic() {
    const url = '/apply/repair';
    return this.http.get(url);
  }

  // 获取公告
  getBulletin(param: pagination) {
    const url = '/bulletin';
    return this.http.post(url, param);
  }

  // 获取自习排行榜
  getRankList(param: pagination) {
    const url = '/rank';
    return this.http.post(url, param).toPromise();
  }

  // 获取自己自习排名
  getOwnRank() {
    const url = '/rank/own';
    return this.http.get(url);
  }

  // 获取自习统计数据
  getHistoryStatistic(param: { startTime: string; endTime: string }) {
    const url = '/rank/history';
    return this.http.post(url, param);
  }

  // 获取课程表
  getCourseSchedule() {
    const url = '/courseSchedule';
    return this.http.get(url);
  }
}
