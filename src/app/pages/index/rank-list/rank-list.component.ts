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
  className: string;
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
    offset: 0,
    count: 50,
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
            this.param.offset += this.param.count;
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
  async getRankList(param: { offset: number; count: number }) {
    // 已经到底则停止请求
    if (this.hasNext) {
      await this.service.getRankList(param).then((res) => {
        this.rankList = [...this.rankList, ...(res as rank).data];
        if (!(res as rank).hasNext) {
          this.hasNext = (res as rank).hasNext;
          this.scrollDispatcher.deregister(this.scrollDispatcher.scrollContainers.keys().next().value);
        }
      });
    }
  }

  // 重排前三名
  calTopThree() {
    if (this.rankList.length) {
      let data = this.rankList.slice(0, 3);
      return [data[1], data[0], data[2]];
    } else {
      return [];
    }
  }

  // 获取自己自习排名
  async getOwnRank() {
    // 先获取排名
    if (!this.userIndex) {
      await this.service
        .getOwnRank()
        .toPromise()
        .then((res) => {
          this.userIndex = res as number;
        });
    }
    // 已加载=》跳转
    if (this.userIndex && this.userIndex <= this.rankList.length + 2) {
      // 减去不在列表中的前三项（下标从0开始，所以减4）
      this.rankScroll.scrollToIndex(this.userIndex - 4);
      this.activeItem = (this.userIndex as number) - 4;
    } else if (this.userIndex && this.userIndex > this.rankList.length) {
      // 未加载=》加载
      const param = {
        offset: this.rankList.length,
        count: this.userIndex - this.rankList.length + 10,
      };
      await this.getRankList(param);
      this.getOwnRank();
    }
  }
}
