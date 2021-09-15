import { CacheService } from './../../../core/services/cache.service';
import { Component, OnInit } from '@angular/core';
import { _session } from '@app/shared/utils/Storage';
import { userInfo } from '@app/shared/types/commonTypes';
import { IndexService } from '../index.service';

enum week {
  'single',
  'double',
}

@Component({
  selector: 'class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.scss', '../index.component.scss'],
  providers: [IndexService],
})
export class ClassScheduleComponent implements OnInit {
  user: userInfo = this.cache.userInfo;
  week: week = week.single; // 单双周
  param = {
    userId: this.user?.account,
    time: this.week,
  };

  constructor(public cache: CacheService) {}

  ngOnInit() {}

  switchWeek(e: week) {
    this.param = {
      userId: this.user.account,
      time: this.week,
    };
  }
}
