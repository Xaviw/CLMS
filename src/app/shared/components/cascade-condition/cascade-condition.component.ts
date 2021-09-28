import { CourseManageService } from './../../../pages/course-manage/course-manage.service';
import { UserManageService } from '@pages/user-manage/user-manage.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as dayjs from 'dayjs';

interface filterType {
  id: string;
  name: string;
}

interface condition {
  value: string | null | filterType; // 选中值
  text: string;
  data?: any[]; // 所有值
  show: boolean; // 是否显示
  next?: any; // 级联下级
  previous?: any; // 级联上级
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
  fields: string[] = [];
  // 当前条件
  conditions: any[] = [];
  // 教师还是学生
  @Input() isStudent = true;
  // 单双周
  week: condition = {
    value: null,
    text: '周次',
    data: [
      {
        id: 'single',
        name: '单周',
      },
      {
        id: 'double',
        name: '双周',
      },
    ],
    show: false,
  };
  // 年级
  grade: condition = {
    value: null,
    text: '年级',
    data: [],
    show: false,
    next: null,
    hasAll: true,
    getData: (cascade = false) => {
      if (this.grade.hasAll && cascade) {
        this.grade.value = '0';
      }
      let maxGrade = dayjs().month() > 8 ? dayjs().year() : dayjs().year() - 1;
      const data = [];
      for (let i = 3; i >= 0; i--) {
        data.push({ id: String(maxGrade - i), name: maxGrade - i });
      }
      this.grade.data = data;
    },
  };
  // 学院
  college: condition = {
    value: null,
    text: '学院',
    data: [],
    show: false,
    next: null,
    previous: null,
    hasAll: true,
    getData: (cascade = false) => {
      if (this.college.hasAll && cascade) {
        this.college.value = '0';
      }
      this.userService.getCollege().subscribe((res) => {
        this.college.data = res as filterType[];
      });
    },
  };
  // 专业
  major: condition = {
    value: null,
    text: '专业',
    data: [],
    show: false,
    next: null,
    previous: null,
    hasAll: true,
    getData: (cascade = false) => {
      if (this.major.hasAll && cascade) {
        this.major.value = '0';
      }
      this.userService
        .getMajor({ grade: this.grade.value as string, college_id: this.college.value as string })
        .subscribe((res) => {
          this.major.data = res as filterType[];
        });
    },
  };
  // 班级
  class: condition = {
    value: null,
    text: '班级',
    data: [],
    show: false,
    hasAll: true,
    previous: null,
    getData: (cascade = false) => {
      if (this.class.hasAll && cascade) {
        this.class.value = '0';
      }
      this.userService
        .getClass({
          grade: this.grade.value as string,
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
    text: '我的班级',
    data: [],
    show: false,
    hasAll: true,
    getData: (cascade = false) => {
      if (this.chargeClass.hasAll && cascade) {
        this.chargeClass.value = '0';
      }
      this.userService.getChargeClass().subscribe((res) => {
        this.chargeClass.data = res as filterType[];
      });
    },
  };
  // 课程
  course: condition = {
    value: null,
    text: '课程',
    data: [],
    show: false,
    hasAll: true,
    previous: null,
    getData: (cascade = false) => {
      if (this.course.hasAll && cascade) {
        this.course.value = '0';
      }
      this.courseService.getCoursesByGrade(this.grade.value as string).subscribe((res) => {
        this.course.data = res as filterType[];
      });
    },
  };
  // 教师关联课程
  myCourse: condition = {
    value: null,
    text: '我的课程',
    data: [],
    show: false,
    hasAll: true,
    getData: (cascade = false) => {
      if (this.myCourse.hasAll && cascade) {
        this.myCourse.value = '0';
      }
      this.courseService.getMyCourse().subscribe((res) => {
        this.myCourse.data = res as filterType[];
      });
    },
  };
  // 用户管理搜索用户
  userSearch: condition = {
    value: null,
    text: '用户',
    show: false,
  };
  // 课程管理搜索教师
  courseUserSearch: condition = {
    value: null,
    text: '教师',
    show: false,
  };
  // 课程管理搜索课程
  courseSearch: condition = {
    value: null,
    text: '课程',
    show: false,
  };
  // 添加/修改用户抽屉
  infoDrawer = {};

  constructor(private userService: UserManageService, private courseService: CourseManageService) {}

  ngOnInit() {
    // 初始化
    this.grade.next = [this.college, this.course];
    this.course.previous = [this.grade];
    this.college.previous = [this.grade];
    this.college.next = [this.major];
    this.major.previous = [this.college];
    this.major.next = [this.class];
    this.class.previous = [this.major];
    // 获取初始信息
    if (this.grade.show) this.grade.getData!();
    if (this.chargeClass.show) this.chargeClass.getData!();
    if (this.myCourse.show) this.myCourse.getData!();
    // 重设是否有全部选项
    for (const item of this.fields) {
      const field = (this as any)[item];
      if (field?.hasAll) {
        field.hasAll = this.hasAll;
      }
    }
  }

  emitCascade(code: string) {
    this.getCascadeData((this as any)[code]);
    const param: any = {
      code,
      data: {},
    };
    for (const item of this.fields) {
      const field = (this as any)[item];
      if (field.show) {
        param.data[item] = field.value;
      }
    }
    this.cascadeEmitter.emit(param);
  }

  // 递推获取级联数据
  getCascadeData(item: condition) {
    this.conditions = [];
    this.recursionPrevious(item);
    this.recursionNext(item);
  }
  // next层递归，处理重新获取下层数据以及重新选中
  recursionNext(item: condition) {
    if (item.show)
      this.conditions.push({
        text: item.text,
        value: item.value === '0' ? '全部' : (item?.value as filterType)?.name ?? item?.value,
      });
    if (item.next?.length && item.show) {
      // 有级联条件->递推获取数据
      for (const iterator of item.next) {
        if (item.value && item.value !== '0') {
          // 有选中值，获取下层数据
          iterator.getData(true);
        } else {
          // 无选中值，重设下层数据
          iterator.data = [];
          iterator.value = iterator.hasAll ? '0' : null;
        }
        this.recursionNext(iterator);
      }
    }
  }
  // previous层递归，处理未选中任何值时直接点击中层条件
  recursionPrevious(item: condition) {
    // 直接点击下层 全部 选项，如果上层未选中值->设为全部
    if (item.previous?.length && item.show) {
      for (const iterator of item?.previous) {
        if (item.previous?.length && item.value === '0' && !iterator.value) {
          iterator.value = '0';
        }
        this.conditions.unshift({
          text: iterator.text,
          value: iterator.value === '0' ? '全部' : (iterator?.value as filterType)?.name,
        });
        this.recursionPrevious(iterator);
      }
    }
  }
}
