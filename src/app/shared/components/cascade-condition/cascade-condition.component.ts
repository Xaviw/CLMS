import { UserManageService } from '@pages/user-manage/user-manage.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as dayjs from 'dayjs';

interface filterType {
  id: string;
  name: string;
}

interface condition {
  value: string | number | null;
  data?: any[];
  show: boolean;
}

@Component({
  selector: 'cascade-condition',
  templateUrl: './cascade-condition.component.html',
  styleUrls: ['./cascade-condition.component.scss'],
  providers: [UserManageService],
})
export class CascadeConditionComponent implements OnInit {
  // 参数发射器
  @Output() paramsEmitter: EventEmitter<any> = new EventEmitter();
  // 显示字段筛选
  @Input() showFilter: string[] = [];
  // 单双周
  week: condition = {
    value: 'single',
    show: !this.showFilter.includes('week'),
  };
  // 年级
  grade: condition = {
    value: 0,
    data: [],
    show: !this.showFilter.includes('grade'),
  };
  // 学院
  college: condition = {
    value: '0',
    data: [],
    show: !this.showFilter.includes('college'),
  };
  // 专业
  major: condition = {
    value: '0',
    data: [],
    show: !this.showFilter.includes('major'),
  };
  // 班级
  class: condition = {
    value: '0',
    data: [],
    show: !this.showFilter.includes('class'),
  };
  // 教师关联班级
  chargeClass: condition = {
    value: null,
    data: [],
    show: !this.showFilter.includes('chargeClass'),
  };

  constructor(private service: UserManageService) {}

  ngOnInit() {
    // 初始化当前四个年级
    let maxGrade = dayjs().month() > 8 ? dayjs().year() : dayjs().year() - 1;
    for (let i = 3; i >= 0; i--) {
      this.grade.data!.push(maxGrade - i);
    }

    this.getCollege();
    this.getChargeClass();
  }

  // 获取学院信息
  getCollege() {
    this.service.getCollege().subscribe((res) => {
      this.college.data = res as any[];
    });
  }

  // 获取专业信息
  getMajor(id: string) {
    if (id !== '0') {
      this.service.getMajor({ grade: this.grade.value as number, college_id: id }).subscribe((res) => {
        this.major.data = res as filterType[];
      });
    } else {
      this.major.data = [];
      this.major.value = '0';
      this.getClass(id);
    }
    this.emitCascade();
  }

  // 获取班级信息
  getClass(id: string) {
    if (id !== '0') {
      this.service
        .getClass({ grade: this.grade.value as number, college_id: this.college.value as string, major_id: id })
        .subscribe((res) => {
          this.class.data = res as filterType[];
        });
    } else {
      this.class.data = [];
      this.class.value = '0';
    }
    this.emitCascade();
  }

  // 获取教师关联班级
  getChargeClass() {
    this.service.getChargeClass().subscribe((res) => {
      this.chargeClass.data = res as filterType[];
    });
  }

  emitCascade() {
    this.paramsEmitter.emit({
      week: this.week.value,
      grade: this.grade.value,
      college: this.college.value,
      major: this.major.value,
      class: this.class.value,
    });
  }
}
