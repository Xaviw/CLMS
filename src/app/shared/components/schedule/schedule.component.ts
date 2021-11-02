import { NzMessageService } from 'ng-zorro-antd/message';
import { FilterType, LabInfo } from '@app/shared/types/commonTypes';
import { CommonService } from './../../../core/services/common.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

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
  @Output() cancelEdit: EventEmitter<any> = new EventEmitter(); // 取消编辑
  labList: FilterType[] = []; // 机房列表
  labEditList: Array<Array<string | null>> = []; // 课程表机房映射
  editList: Array<boolean[]> = []; // 编辑映射
  singleCourse = false; // 显示模式
  schedule: Array<schedule[]> = []; // 课程表

  // 课程表参数
  _param: any;
  @Input()
  get param() {
    return this._param;
  }
  set param(v) {
    if (v) {
      this._param = v;
      this.singleCourse = v?.courseId ? true : false;
      this.getCourseSchedule();
    }
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

  constructor(private common: CommonService, private message: NzMessageService) {}

  ngOnInit() {
    this.getLabList();
  }

  // 保存编辑
  saveEdit() {
    // 同时遍历editList和labEditList，获取所需格式参数
    const data: any = _.cloneDeep(this.labEditList);
    for (let i = 0; i < this.editList.length; i++) {
      const father = this.editList[i];
      for (let j = 0; j < father.length; j++) {
        const child = father[j];
        if (child) {
          if (!data[i][j]) {
            // 有选中节次未选择机房，取消保存
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
    // 从源数据构建所需格式参数
    const originData = this.schedule.map((item) => {
      if (Array.isArray(item)) {
        return item.map((value) => {
          if (value !== null) {
            return { labId: value.labId };
          } else {
            return value;
          }
        });
      } else {
        return item;
      }
    });
    // 对比源数据与现数据，无变动取消修改
    if (_.isEqual(data, originData)) {
      this.message.warning('未更改任何信息！');
      this.cancelEdit.emit();
    }
    // 判断通过，构建参数发送请求并重新获取课表数据
    const param = {
      ...this.param,
      data,
    };
    this.common.modifyCourseSchedule(param).subscribe((res) => {
      this.cancelEdit.emit();
      this.getCourseSchedule();
    });
  }

  // 获取课表
  getCourseSchedule() {
    this.common.getCourseSchedule(this.param).subscribe((res) => {
      this.schedule = res as Array<schedule[]>;
    });
  }

  // 获取机房列表
  getLabList() {
    this.common.getLabList().subscribe((res) => {
      this.labList = res as LabInfo[];
    });
  }

  // 修改节次选中
  checkChange(i: number, j: number) {
    this.editList[i][j] = !this.editList[i][j];
  }
}
