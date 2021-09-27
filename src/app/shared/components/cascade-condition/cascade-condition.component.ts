import { CourseManageService } from './../../../pages/course-manage/course-manage.service';
import { UserManageService } from '@pages/user-manage/user-manage.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as dayjs from 'dayjs';

interface filterType {
  id: string;
  name: string;
}

interface condition {
  value: string | number | null; // 选中值
  data?: any[]; // 所有值
  show: boolean; // 是否显示
  next?: any; // 级联下级
  hasAll?: boolean; // 是否有全部选项
  getData?: Function; // 取值方法
}

@Component({
  selector: 'cascade-condition',
  templateUrl: './cascade-condition.component.html',
  styleUrls: ['./cascade-condition.component.scss'],
  providers: [UserManageService, CourseManageService],
})
export class CascadeConditionComponent implements OnInit {
  // 级联参数发射器
  @Output() cascadeEmitter: EventEmitter<any> = new EventEmitter();
  // 是否显示全部
  @Input() hasAll = true;
  // 显示字段筛选
  @Input()
  set showFilter(arr: string[]) {
    this.fields = arr;
    arr.forEach((field: string) => {
      (this as any)[field].show = true;
    });
  }
  // 所有字段
  fields: any[] = [];
  // 教师还是学生
  @Input() isStudent = true;
  // 单双周
  week: condition = {
    value: 'single',
    show: false,
  };
  // 年级
  grade: condition = {
    value: null,
    data: [],
    show: false,
    hasAll: true,
    getData: () => {
      let maxGrade = dayjs().month() > 8 ? dayjs().year() : dayjs().year() - 1;
      const data = [];
      for (let i = 3; i >= 0; i--) {
        data.push(maxGrade - i);
      }
      this.grade.data = data;
    },
  };
  // 学院
  college: condition = {
    value: null,
    data: [],
    show: false,
    next: null,
    hasAll: true,
    getData: () => {
      this.userService.getCollege().subscribe((res) => {
        this.college.data = res as any[];
      });
    },
  };
  // 专业
  major: condition = {
    value: null,
    data: [],
    show: false,
    next: null,
    hasAll: true,
    getData: () => {
      this.userService
        .getMajor({ grade: this.grade.value as number, college_id: this.college.value as string })
        .subscribe((res) => {
          this.major.data = res as filterType[];
        });
    },
  };
  // 班级
  class: condition = {
    value: null,
    data: [],
    show: false,
    hasAll: true,
    getData: () => {
      this.userService
        .getClass({
          grade: this.grade.value as number,
          college_id: this.college.value as string,
          major_id: this.major.value as string,
        })
        .subscribe((res) => {
          this.class.data = res as filterType[];
        });
    },
  };
  // 教师关联班级
  chargeClass: condition = {
    value: null,
    data: [],
    show: false,
    hasAll: true,
    getData: () => {
      this.userService.getChargeClass().subscribe((res) => {
        this.chargeClass.data = res as filterType[];
      });
    },
  };
  // 课程
  course: condition = {
    value: null,
    data: [],
    show: false,
    hasAll: true,
    getData: () => {
      this.courseService.getCoursesByGrade(this.grade.value as number).subscribe((res) => {
        this.course.data = res as any[];
      });
    },
  };
  // 教师关联课程
  myCourse: condition = {
    value: null,
    data: [],
    show: false,
    hasAll: true,
    getData: () => {
      this.courseService.getMyCourse().subscribe((res) => {
        this.myCourse.data = res as any[];
      });
    },
  };
  // 用户管理搜索用户
  userSearch: condition = {
    value: null,
    data: [],
    show: false,
  };
  // 课程管理搜索教师
  courseUserSearch: condition = {
    value: null,
    data: [],
    show: false,
  };
  // 课程管理搜索课程
  courseSearch: condition = {
    value: null,
    data: [],
    show: false,
  };
  // 添加/修改用户抽屉
  infoDrawer = {};

  constructor(private userService: UserManageService, private courseService: CourseManageService) {}

  ngOnInit() {
    // 初始化
    this.grade.next = [this.course];
    this.college.next = [this.major];
    this.major.next = [this.class];
    // 获取初始信息
    if (this.grade.show) this.grade.getData!();
    if (this.college.show) this.college.getData!();
    if (this.chargeClass.show) this.chargeClass.getData!();
    if (this.myCourse.show) this.myCourse.getData!();
  }

  emitCascade(code: string, e?: Event) {
    console.log(code, e, (this as any)[code].data);
    this.getCascadeData((this as any)[code]);
  }

  // 递推获取级联数据
  getCascadeData(item: condition) {
    if (item.next.length) {
      for (const iterator of item.next) {
        iterator.getData();
        this.getCascadeData(iterator);
      }
    }
  }
}
