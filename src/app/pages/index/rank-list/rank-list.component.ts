import { IndexService } from './../index.service';
import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface rank {
  name: string;
  account: string;
  avatar: string;
  count: number;
  class: string;
  classId: string;
}

// export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
//   constructor() {
//     super(50, 250, 500);
//   }
// }

@Component({
  selector: 'rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss', '../index.component.scss'],
  providers: [IndexService],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RankListComponent implements OnInit {
  rankList: rank[] = []; // 自习排行榜数据

  constructor(private service: IndexService) {}

  ngOnInit() {
    this.getRankList();
  }

  getRankList() {
    this.service.getRankList().subscribe((res) => {
      console.log('rank: ', res);
      this.rankList = res as rank[];
    });
  }
}
