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
    this.singleCourse = v?.courseId ? true : false;
    this.getOwnClassSchedule();
  }

  // 启用编辑
  _editable = false;
  @Input()
  get editable() {
    return this._editable;
  }
  set editable(v: boolean) {
    this._editable = v;
    // 映射编辑课程二维表
    if (v) {
      this.editList = [];
      for (let i = 0; i < this.schedule.length; i++) {
        const father = this.schedule[i];
        if (!Array.isArray(this.editList[i])) this.editList[i] = [];
        for (let j = 0; j < father.length; j++) {
          const child = father[j];
          this.editList[i].push(child ? true : false);
        }
      }
    } else {
      this.saveEdit();
    }
  }

  // 保存编辑
  saveEdit() {
    console.log(this.editList);
  }

  editList: Array<boolean[]> = []; // 编辑映射
  singleCourse = false; // 显示模式
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
