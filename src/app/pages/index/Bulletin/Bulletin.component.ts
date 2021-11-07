import { BulletinService } from './../../bulletin-list/bulletin.service';
import { Component, OnInit } from '@angular/core';
import { BulletinInfo } from '@app/shared/types/commonTypes';

type Bulletin = {
  total: number;
  data: BulletinInfo[];
};

@Component({
  selector: 'bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss', '../index.component.scss'],
  providers: [BulletinService],
})
export class BulletinComponent implements OnInit {
  data: BulletinInfo[] = [];
  constructor(private service: BulletinService) {}

  ngOnInit() {
    this.getBulletin();
  }

  // 获取公告
  getBulletin() {
    const param = { pageIndex: 1, pageSize: 5 };
    this.service.getBulletin(param).subscribe((res) => {
      this.data = (res as Bulletin).data;
    });
  }
}
