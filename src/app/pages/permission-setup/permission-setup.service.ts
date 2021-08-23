import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class PermissionSetupService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  getRoles() {
    const url = '/role';
    return this.http.post(url, null);
  }
}
