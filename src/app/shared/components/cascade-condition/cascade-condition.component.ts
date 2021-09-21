import { CourseManageService } from './../../../pages/course-manage/course-manage.service';
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
  isQuery?: boolean;
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
  // 搜索用户事件
  @Output() searchUser: EventEmitter<any> = new EventEmitter();
  // 搜索授课教师事件
  @Output() searchCourseTeacher: EventEmitter<any> = new EventEmitter();
  // 搜索课程事件
  @Output() searchCourse: EventEmitter<any> = new EventEmitter();
  // 定位自己班级事件
  @Output() locationClass: EventEmitter<any> = new EventEmitter();
  // 定位自己课程事件
  @Output() locationCourse: EventEmitter<any> = new EventEmitter();
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
    value: 0,
    data: [],
    show: false,
  };
  // 学院
  college: condition = {
    value: '0',
    data: [],
    show: false,
  };
  // 专业
  major: condition = {
    value: '0',
    data: [],
    show: false,
  };
  // 班级
  class: condition = {
    value: '0',
    data: [],
    show: false,
  };
  // 教师关联班级
  chargeClass: condition = {
    value: null,
    data: [],
    show: false,
    isQuery: true,
  };
  // 课程
  course: condition = {
    value: '0',
    data: [],
    show: false,
  };
  // 我的课程
  myCourse: condition = {
    value: '0',
    data: [],
    show: false,
    isQuery: true,
  };
  // 用户管理搜索用户
  userSearch: condition = {
    value: null,
    data: [],
    show: false,
    isQuery: true,
  };
  // 课程管理搜索教师
  courseUserSearch: condition = {
    value: null,
    data: [],
    show: false,
    isQuery: true,
  };
  // 课程管理搜索课程
  courseSearch: condition = {
    value: null,
    data: [],
    show: false,
    isQuery: true,
  };
  // 添加/修改用户抽屉
  infoDrawer = {};

  constructor(private userService: UserManageService, private courseService: CourseManageService) {}

  ngOnInit() {
    // 初始化当前四个年级
    let maxGrade = dayjs().month() > 8 ? dayjs().year() : dayjs().year() - 1;
    for (let i = 3; i >= 0; i--) {
      this.grade.data!.push(maxGrade - i);
    }
    // 获取初始信息
    if (this.college.show) this.getCollege();
    if (this.chargeClass.show) this.getChargeClass();
    if (this.myCourse.show) this.getMyCourse();
  }

  onSearchUser() {
    this.searchUser.emit(this.userSearch.value);
  }
  onSearchCourseTeacher() {
    this.searchCourseTeacher.emit(this.courseUserSearch.value);
  }
  onSearchCourse() {
    this.searchCourse.emit(this.courseSearch.value);
  }
  onLocationClass() {
    this.locationClass.emit(this.chargeClass.value);
  }
  onLocationCourse() {
    this.locationCourse.emit(this.myCourse.value);
  }

  // 切换年级加载课程信息
  switchGrade() {
    if (this.course.show) this.getCourse();
    this.emitCascade();
  }

  // 获取课程信息
  getCourse() {
    if (this.grade.value === 0) {
      this.course.data = [];
      this.course.value = 0;
    } else {
      this.courseService.getCoursesByGrade(this.grade.value as number).subscribe((res) => {
        this.course.data = res as any[];
      });
    }
  }

  // 获取我的课程
  getMyCourse() {
    this.courseService.getMyCourse().subscribe((res) => {
      this.myCourse.data = res as any[];
    });
  }

  // 获取学院信息
  getCollege() {
    this.userService.getCollege().subscribe((res) => {
      this.college.data = res as any[];
    });
  }

  // 获取专业信息
  getMajor(id: string) {
    if (id !== '0') {
      this.userService.getMajor({ grade: this.grade.value as number, college_id: id }).subscribe((res) => {
        this.major.data = res as filterType[];
      });
    } else {
      this.major.data = [];
      this.major.value = '0';
      if (this.class.show) this.getClass(id);
    }
    this.emitCascade();
  }

  // 获取班级信息
  getClass(id: string) {
    if (id !== '0') {
      this.userService
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
    this.userService.getChargeClass().subscribe((res) => {
      this.chargeClass.data = res as filterType[];
    });
  }

  emitCascade() {
    const param: any = {};
    // 遍历显示字段
    this.fields.forEach((field: string) => {
      let condition = (this as any)[field];
      // 发出非查询字段
      if (!condition?.isQuery) {
        param[field] = condition.value;
      }
    });
    this.cascadeEmitter.emit(param);
  }
}
