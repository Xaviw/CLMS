import { Res } from '@app/shared/types/commonTypes';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class CommonRequestService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 请求用户信息
  getUserInfo() {
    const url = '/user/info';
    return this._post(url, {});
  }

  _get(url: string) {
    return this.http.get<Res>(url).pipe(
      map((res: Res) => {
        if (res.code === 0) {
          return res?.data;
        }
      }),
    );
  }
  _post(url: string, param: Object) {
    return this.http.post<Res>(url, param).pipe(
      map((res: Res) => {
        if (res.code === 0) {
          return res?.data;
        }
      }),
    );
  }
}
