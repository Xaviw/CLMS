import { debounceTime, tap } from 'rxjs/operators';
import { IndexService } from './../index.service';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';

interface rank {
  name: string;
  account: string;
  avatar: string;
  count: number;
  class: string;
  classId: string;
}

@Component({
  selector: 'rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss', '../index.component.scss'],
  providers: [IndexService],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RankListComponent implements OnInit {
  rankList: rank[] = []; // 自习排行榜数据
  @ViewChild('rankScroll') rankScroll!: CdkScrollable; // 排行榜列表
  loading: boolean = false; // 加载中状态

  constructor(private service: IndexService, private scrollDispatcher: ScrollDispatcher) {}

  ngOnInit() {
    this.getRankList();
    this.scrollDispatcher
      .scrolled()
      .pipe(debounceTime(300))
      .subscribe((scrollable) => {
        if (scrollable) {
          let e = scrollable.getElementRef().nativeElement;
          let offset = this.rankScroll.measureScrollOffset('bottom');
          if (offset < 50) {
            this.loading = true;
            this.service
              .getRankList()
              .pipe(
                tap((err) => {
                  this.loading = false;
                }),
              )
              .subscribe((res) => {
                this.rankList.push(...(res as rank[]));
                this.loading = false;
              });
          }
        }
      });
  }

  // 获取排行榜
  getRankList() {
    this.service.getRankList().subscribe((res) => {
      console.log('rank: ', res);
      this.rankList = res as rank[];
    });
  }
}
