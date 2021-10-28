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

  // 启动轮询
  public startCheckInInterval() {
    // 已登录且未启动轮询，每十分钟请求一次是否需要签到
    if (this.userInfo && !this.checkInInterval) {
      // 先请求一次，等到整10分钟时开启轮询
      this.getCheckInInfo();
      const timeDiff = 600000 - (Date.now() % 600000);
      console.log('timeDiff: ', timeDiff);
      setTimeout(() => {
        console.log('timeOut', new Date().getMinutes());
        this.getCheckInInfo();
        this.checkInInterval = setInterval(this.getCheckInInfo, 600000);
      }, timeDiff);
    }
  }

  // 请求签到信息
  public getCheckInInfo = () => {
    console.log('轮询执行', new Date().getMinutes());
    this.common.needCheckIn().subscribe((res) => {
      this.checkIn = (res as CheckInInfo) || null;
    });
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

  constructor(private common: CommonService) {}
}
