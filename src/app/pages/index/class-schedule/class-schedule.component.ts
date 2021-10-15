import { CacheService } from './../../../core/services/cache.service';
import { Component, OnInit } from '@angular/core';
import { _session } from '@app/shared/utils/Storage';
import { User } from '@app/shared/types/commonTypes';
import { IndexService } from '../index.service';

@Component({
  selector: 'class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.scss', '../index.component.scss'],
  providers: [IndexService],
})
export class ClassScheduleComponent implements OnInit {
  week = 1; // 单双周
  param = {
    userId: this.cache.userInfo?.account,
    weekTime: this.week,
  };

  constructor(public cache: CacheService) {}

  ngOnInit() {}

  switchWeek(e: number) {
    this.param = {
      userId: this.cache.userInfo?.account,
      weekTime: this.week,
    };
  }
}
