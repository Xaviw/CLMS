import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { tap } from 'rxjs/operators';

@Injectable()
export class PermissionSetupService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  getRoles() {
    const url = '/role';
    return this.http.post(url, null);
  }

  setPagePermission(param: { roleId: string; pageId: string }) {
    const url = '/permission/page';
    return this.http.post(url, param);
  }

  setFunctionPermission(param: { roleId: string; functionId: string }) {
    const url = '/permission/function';
    return this.http.post(url, param);
  }
}
