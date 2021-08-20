import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Res } from '@app/shared/types/commonTypes';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: object): any {
    const url = '/user/login';
    return this.http.post<Res>(url, data);
  }
}
