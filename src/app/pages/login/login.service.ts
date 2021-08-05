import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Res } from '@app/shared/types/commonTypes';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  public login(data: object): any {
    const url = '/user/login';
    return this.http.post<Res>(url, data);
  }
}
