import { UserManageService } from '@pages/user-manage/user-manage.service';
import { Component, OnInit, Output } from '@angular/core';
import * as dayjs from 'dayjs';

interface filterType {
  id: string;
  name: string;
}

interface condition {
  value: string | number;
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
  @Output() getConditions!: any;
  week: condition = {
    value: 'single',
    show: true,
  };
  grade: condition = {
    value: 0,
    data: [],
    show: true,
  };
  college: condition = {
    value: '0',
    data: [],
    show: true,
  };
  major: condition = {
    value: '0',
    data: [],
    show: true,
  };
  class: condition = {
    value: '0',
    data: [],
    show: true,
  };
  constructor(private service: UserManageService) {}

  ngOnInit() {
    // 初始化当前四个年级
    let maxGrade = dayjs().month() > 8 ? dayjs().year() : dayjs().year() - 1;
    for (let i = 3; i >= 0; i--) {
      this.grade.data!.push(maxGrade - i);
    }
    // 获取学院
    this.getCollege();
  }

  // 获取学院信息
  getCollege() {
    this.service.getCollege().subscribe((res) => {
      this.college.data = res as filterType[];
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
  }

  emitConditions(isSearch = false) {
    if (isSearch) {
    } else {
      const param = {
        week: this.week.value,
        grade: this.grade.value,
        college: this.college.value,
        major: this.major.value,
        class: this.class.value,
      };
    }
  }
}
