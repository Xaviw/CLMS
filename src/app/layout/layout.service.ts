import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService {
  constructor(private http: HttpClient) {}

  logout() {
    const url = '/user/logout';
    return this.http.post(url, {});
  }
}
