import { CommonService } from './../../../core/services/common.service';
import { Component, Input, OnInit } from '@angular/core';

interface schedule {
  courseId: string;
  courseName: string;
  teacherId: string;
  teacherName: string;
  labId: string;
  labName: string;
}

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  // 课程表参数
  _param: any;
  @Input()
  get param() {
    return this._param;
  }
  set param(v) {
    this._param = v;
    this.getOwnClassSchedule();
  }
  schedule: Array<schedule[]> = []; // 课程表

  constructor(private common: CommonService) {}

  ngOnInit() {}

  // 获取课表
  getOwnClassSchedule() {
    return this.common.getOwnClassSchedule(this.param).subscribe((res) => {
      this.schedule = res as Array<schedule[]>;
    });
  }
}
