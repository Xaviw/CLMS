import { User } from '@app/shared/types/commonTypes';
import { Injectable } from '@angular/core';
import { _session } from '@app/shared/utils/Storage';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CacheService {
  public loading: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  public _userInfo!: User;
  get userInfo() {
    if (!this._userInfo) {
      this._userInfo = _session.get('userInfo');
    }
    return this._userInfo;
  }

  constructor() {}
}
