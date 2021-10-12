import { NzMessageService } from 'ng-zorro-antd/message';
import { deepClone } from '@app/shared/utils/utils';
import { FilterType } from '@app/shared/types/commonTypes';
import { CommonService } from './../../../core/services/common.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

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
export class ScheduleComponent implements OnInit, OnChanges {
  // 课程表参数
  _param: any;
  @Input()
  get param() {
    return this._param;
  }
  set param(v) {
    console.log('v: ', v);
    if (v.weekTime === 0) {
      delete v.weekTime;
    }
    this._param = v;
    this.singleCourse = v?.courseId ? true : false;
    this.getCourseSchedule();
  }

  // 机房列表
  labList: FilterType[] = [];

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
      this.labEditList = [];
      for (let i = 0; i < this.schedule.length; i++) {
        const father = this.schedule[i];
        if (!Array.isArray(this.editList[i])) {
          this.editList[i] = [];
          this.labEditList[i] = [];
        }
        for (let j = 0; j < father.length; j++) {
          const child = father[j];
          this.editList[i].push(child ? true : false);
          this.labEditList[i].push(child?.labId ?? null);
        }
      }
    }
  }

  // 保存编辑
  saveEdit() {
    const data = deepClone(this.labEditList);
    for (let i = 0; i < this.editList.length; i++) {
      const father = this.editList[i];
      for (let j = 0; j < father.length; j++) {
        const child = father[j];
        if (child) {
          if (!data[i][j]) {
            this.message.warning('请选择上课地点！');
            return;
          } else {
            data[i][j] = { labId: data[i][j] };
          }
        } else {
          data[i][j] = null;
        }
      }
    }
    const param = {
      ...this.param,
      data,
    };
    this.common.modifyCourseSchedule(param).subscribe((res) => {
      this.getCourseSchedule();
    });
  }

  labEditList: Array<Array<string | null>> = []; // 课程表机房映射
  editList: Array<boolean[]> = []; // 编辑映射
  singleCourse = false; // 显示模式
  schedule: Array<schedule[]> = []; // 课程表

  constructor(private common: CommonService, private message: NzMessageService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.param) {
      console.log(changes.param);
    }
  }

  ngOnInit() {
    this.getLabList();
  }

  // 获取课表
  getCourseSchedule() {
    console.log(this.param);
    return this.common.getCourseSchedule(this.param).subscribe((res) => {
      this.schedule = res as Array<schedule[]>;
    });
  }

  // 获取机房列表
  getLabList() {
    this.common.getLabList().subscribe((res) => {
      this.labList = res as FilterType[];
    });
  }
}
