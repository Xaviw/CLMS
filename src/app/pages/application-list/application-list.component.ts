import { Router } from '@angular/router';
import { ApplicationListService } from './application-list.service';
import { Component, OnInit } from '@angular/core';
import { ApplicationInfo, ApplicationParam } from '@app/shared/types/commonTypes';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { ApplicationType, ApplicationStatus } from '@app/shared/enum/enum';
import * as base64 from 'js-base64';
import { base64Filter } from '@app/shared/utils/utils';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss'],
  providers: [ApplicationListService],
})
export class ApplicationListComponent implements OnInit {
  type = ApplicationType;
  status = ApplicationStatus;
  listOfData: ApplicationInfo[] = []; // 列表数据
  pageIndex = 1;
  pageSize = 20;
  total = 0;
  param?: ApplicationParam;

  constructor(private service: ApplicationListService, private router: Router) {}

  ngOnInit() {}

  // 表格参数
  onQueryParamsChange(e: NzTableQueryParams) {
    this.param = e as unknown as ApplicationParam;
    this.getApplicationList(e as unknown as ApplicationParam);
  }

  // 获取申请列表
  getApplicationList(param: ApplicationParam) {
    this.service.getApplicationList(param).subscribe((res: any) => {
      this.listOfData = res.data as ApplicationInfo[];
      this.total = res.total;
    });
  }

  // 取消申请
  cancelApply(id: string) {
    this.service.cancelApply(id).subscribe((res) => {
      if (this.param) {
        this.getApplicationList(this.param);
      }
    });
  }

  // 跳转详细
  redirectDetail(type: number, id?: string) {
    const param = base64Filter(base64.encodeURI(JSON.stringify({ type, id })));
    this.router.navigate(['/apply'], { queryParams: { param } });
  }
}
