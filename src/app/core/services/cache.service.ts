import { CommonService } from '@app/core/services/common.service';
import { CheckInInfo, User } from '@app/shared/types/commonTypes';
import { Injectable } from '@angular/core';
import { _session, _local } from '@app/shared/utils/Storage';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CacheService {
  // 顶部加载条
  public loading: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  // 签到轮询
  public checkInInterval?: any;

  // FIXME：启动轮询
  public startCheckInInterval() {
    // // 已登录且未启动轮询，每十分钟请求一次是否需要签到
    // if (!this.checkInInterval && _local.get('token')) {
    //   // 先请求一次，等到整10分钟时开启轮询
    //   this.getCheckInInfo();
    //   // 计算整距10分钟时间差
    //   const timeDiff = 600000 - (Date.now() % 600000);
    //   // 记录setTimeout或setInterval，用于清除
    //   this.checkInInterval = setTimeout(() => {
    //     this.checkInInterval = setInterval(this.getCheckInInfo(), 600000);
    //   }, timeDiff);
    // }
  }

  // 请求签到信息
  public getCheckInInfo = () => {
    this.common.needCheckIn().subscribe((res) => {
      this.checkIn = (res as CheckInInfo) || null;
    });
    return this.getCheckInInfo;
  };

  // 关闭轮询
  public stopCheckInInterval() {
    if (this.checkInInterval) {
      clearInterval(this.checkInInterval);
      this.checkInInterval = undefined;
    }
  }

  // 签到信息
  public _checkIn: null | CheckInInfo = null;
  get checkIn(): CheckInInfo | null {
    if (!this._checkIn) {
      let value = _local.get('checkIn');
      if (value) this._checkIn = value as CheckInInfo;
    }
    return this._checkIn;
  }
  set checkIn(v: CheckInInfo | null) {
    if (v) {
      _local.set('checkIn', v, 1000 * 30);
    } else {
      this._checkIn = null;
      _local.remove('checkIn');
    }
  }

  // 用户信息
  public _userInfo!: User;
  get userInfo() {
    if (!this._userInfo) {
      this._userInfo = _session.get('userInfo');
    }
    return this._userInfo;
  }

  // 页面权限信息
  public _pagePermissions?: string[];
  pagePermissions(key: string) {
    if (!this._pagePermissions) {
      this._pagePermissions = _session.get('pagePermissions');
    }
    return this._pagePermissions?.includes(key);
  }

  // 功能权限信息
  public _functionPermissions?: string[];
  functionPermissions(code: string) {
    if (!this._functionPermissions) {
      this._functionPermissions = _session.get('functionPermissions');
    }
    return this._functionPermissions?.includes(code);
  }

  // 清空缓存
  public clearCache() {
    _local.clear();
    _session.clear();
    clearInterval(this.checkInInterval);
  }

  constructor(private common: CommonService) {}
}
