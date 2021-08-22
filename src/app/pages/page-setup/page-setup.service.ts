import { PageSetupModule } from './page-setup.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class PageSetupService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  getAllPages() {
    const url = '/pages';
    return this.http.post(url, null);
  }
}
