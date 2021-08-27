import { IndexService } from '../index.service';
import { Component, OnInit } from '@angular/core';

interface bulletin {
  title: string;
  id: string;
  createTime: string;
  views: number;
}

@Component({
  selector: 'bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss', '../index.component.scss'],
  providers: [IndexService],
})
export class BulletinComponent implements OnInit {
  data: bulletin[] = [];
  constructor(private service: IndexService) {}

  ngOnInit() {
    this.getBulletin();
  }

  // 获取公告
  getBulletin() {
    this.service.getBulletin().subscribe((res) => {
      this.data = res as bulletin[];
    });
  }
}
