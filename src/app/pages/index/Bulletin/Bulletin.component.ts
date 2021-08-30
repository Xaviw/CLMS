import { IndexService } from '../index.service';
import { Component, OnInit } from '@angular/core';

interface bulletin {
  total: number;
  data: Array<{
    title: string;
    id: string;
    createTime: string;
    views: number;
  }>;
}

@Component({
  selector: 'bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss', '../index.component.scss'],
  providers: [IndexService],
})
export class BulletinComponent implements OnInit {
  data: bulletin | undefined;
  constructor(private service: IndexService) {}

  ngOnInit() {
    this.getBulletin();
  }

  // 获取公告
  getBulletin() {
    const param = { start: 0, count: 5 };
    this.service.getBulletin(param).subscribe((res) => {
      this.data = res as bulletin;
    });
  }
}
