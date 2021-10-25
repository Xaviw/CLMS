import { Router } from '@angular/router';
import { ApplicationListService } from './application-list.service';
import { Component, OnInit } from '@angular/core';
import { ApplicationInfo, ApplicationParam } from '@app/shared/types/commonTypes';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss'],
  providers: [ApplicationListService],
})
export class ApplicationListComponent implements OnInit {
  listOfData: ApplicationInfo[] = []; // 列表数据
  type = [
    { text: '机房申请', value: 0, byDefault: true },
    { text: '采购申请', value: 1, byDefault: true },
    { text: '报修申请', value: 2, byDefault: true },
  ]; // 申请类型
  status = [
    { text: '待审核', value: 0, byDefault: true },
    { text: '已通过', value: 1, byDefault: true },
    { text: '未通过', value: 2, byDefault: true },
    { text: '已完成', value: 3, byDefault: true },
    { text: '未完成', value: 4, byDefault: true },
    { text: '已取消', value: 5, byDefault: true },
  ]; // 申请状态
  pageIndex = 1;
  pageSize = 20;
  total = 0;
  param?: ApplicationParam;

  constructor(private service: ApplicationListService, private router: Router) {}

  ngOnInit() {}

  // 表格参数
  onQueryParamsChange(e: NzTableQueryParams) {
    console.log(e);
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
    this.router.navigate(['/apply'], { queryParams: { type, id } });
  }
}
