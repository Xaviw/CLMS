import { debounceTime, tap } from 'rxjs/operators';
import { IndexService } from './../index.service';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { pagination } from '@app/shared/types/commonTypes';

interface rank {
  hasNext: boolean;
  data: list[];
}

interface list {
  name: string;
  account: string;
  avatar: string;
  times: number;
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
  rankList: list[] = []; // 自习排行榜数据
  @ViewChild('rankScroll') rankScroll!: any; // 排行榜列表
  userIndex: number | undefined; // 用户自己排名
  hasNext: boolean = true; // 加载中状态
  activeItem: number = -1;
  // 请求参数
  param = {
    pageIndex: 1,
    pageSize: 10,
  };

  constructor(private service: IndexService, private scrollDispatcher: ScrollDispatcher) {}

  ngOnInit() {
    // 获取列表
    this.getRankList(this.param);
    // 订阅列表滚动，距离底部小于50请求下一页数据
    this.scrollDispatcher
      .scrolled()
      .pipe(debounceTime(300))
      .subscribe((scrollable: any) => {
        if (scrollable) {
          let offset = this.rankScroll.measureScrollOffset('bottom');
          if (offset < 50) {
            this.param.pageIndex++;
            this.getRankList(this.param);
          }
        }
      });
  }

  // active
  clickItem(i: number) {
    this.activeItem = i;
  }

  // 获取排行榜
  async getRankList(param: pagination) {
    // 已经到底则停止请求
    if (this.hasNext) {
      await this.service.getRankList(param).then((res) => {
        this.rankList.push(...(res as rank).data);
        if (!(res as rank).hasNext) {
          this.hasNext = (res as rank).hasNext;
          this.scrollDispatcher.deregister(this.scrollDispatcher.scrollContainers.keys().next().value);
        }
      });
    }
  }

  // 获取自己自习排名
  getOwnRank() {
    if (this.userIndex) {
      // 减去不在列表中的前三项（下标从0开始，所以减4）
      this.rankScroll.scrollToIndex(this.userIndex - 4);
      this.activeItem = (this.userIndex as number) - 4;
    } else {
      this.service.getOwnRank().subscribe(async (res) => {
        this.userIndex = res as number;
        // 在列表中直接请求
        if (res <= this.rankList.length + 2) {
          this.rankScroll.scrollToIndex((res as number) - 4);
          this.activeItem = (this.userIndex as number) - 4;
        } else {
          const param = {
            pageIndex: this.rankList.length / this.param.pageSize + 1,
            pageSize: this.param.pageSize,
          };
          await this.getRankList(param);
          this.rankScroll.scrollToIndex((res as number) - 4);
          this.activeItem = (this.userIndex as number) - 4;
        }
      });
    }
  }
}
