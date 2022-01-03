import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pagination } from '@app/shared/types/commonTypes';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class IndexService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取机房统计信息
  getLabStatistic() {
    const url = '/lab/getAllLabStatus';
    return this.http.get(url);
  }

  // 获取用户统计信息
  getUserStatistic() {
    const url = '/user/getAllUser';
    return this.http.get(url);
  }

  // 获取采购申请统计信息
  getShopApplyStatistic() {
    const url = '/apply/getAllPurchaseStatus';
    return this.http.get(url);
  }

  // 获取机房申请统计信息
  getLabApplyStatistic() {
    const url = '/apply/getAllApplyStatus';
    return this.http.get(url);
  }

  // 获取报修申请统计信息
  getRepairApplyStatistic() {
    const url = '/apply/getAllRepairStatus';
    return this.http.get(url);
  }

  // 获取自习排行榜
  getRankList(param: { offset: number; count: number }) {
    const url = '/user/getApplyRank';
    return this.http.post(url, param).toPromise();
  }

  // 获取自己自习排名
  getOwnRank() {
    const url = '/user/getSelfApplyRank';
    return this.http.get(url);
  }

  // 获取自习统计数据
  getHistoryStatistic(param: { startTime: string; endTime: string }) {
    const url = '/user/getApplyInfo';
    return this.http.post(url, param);
  }

  // 获取评论列表
  getComments(param: { pageIndex: number; pageSize: number }) {
    const url = '/ann/getAnnInRange';
    return this.http.post(url, param);
  }

  // 获取评论回复
  getReply(id: string) {
    const url = '/ann/getAnnByParent';
    return this.http.post(url, { id: id });
  }

  // 发布/回复留言
  postMessage(param: { content: string; id?: string }) {
    const url = '/ann/addAnn';
    return this.http.post(url, param);
  }
}
