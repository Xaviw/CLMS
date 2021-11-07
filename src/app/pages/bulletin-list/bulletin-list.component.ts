import { BulletinService } from './bulletin.service';
import { Component, OnInit } from '@angular/core';
import { BulletinInfo } from '@app/shared/types/commonTypes';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-bulletin-list',
  templateUrl: './bulletin-list.component.html',
  styleUrls: ['./bulletin-list.component.scss'],
  providers: [BulletinService],
})
export class BulletinListComponent implements OnInit {
  // 公告列表数据
  listData: BulletinInfo[] = [];
  total = 0;
  pageIndex = 1;
  pageSize = 20;
  searchKey?: string;
  previousKey?: string;

  constructor(private service: BulletinService) {}

  ngOnInit() {
    this.getList();
  }

  // 请求列表
  getList() {
    this.service.getBulletin({ pageIndex: this.pageIndex, pageSize: this.pageSize }).subscribe((res) => {
      this.total = (res as { total: number; data: BulletinInfo[] }).total;
      this.listData = (res as { total: number; data: BulletinInfo[] }).data;
    });
  }

  // 搜索公告
  search() {
    let param: { key: string; pageIndex: number; pageSize: number };
    if (this.searchKey) {
      if (this.searchKey !== this.previousKey) {
        this.previousKey = this.searchKey;
        this.pageIndex = 1;
      }
      param = { pageIndex: this.pageIndex, pageSize: this.pageSize, key: this.previousKey };
      this.service.getBulletin(param!).subscribe((res) => {
        this.total = (res as { total: number; data: BulletinInfo[] }).total;
        this.listData = (res as { total: number; data: BulletinInfo[] }).data;
      });
    } else if (!this.searchKey && this.previousKey) {
      this.pageIndex = 1;
      this.previousKey = undefined;
      this.getList();
    }
  }

  // 删除公告
  delete(id: string) {
    this.service.deleteBulletin(id).subscribe(() => {
      this.getList();
    });
  }
}
