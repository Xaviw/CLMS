import { NzSelectComponent } from 'ng-zorro-antd/select';
import { CourseManageService } from './../../../pages/course-manage/course-manage.service';
import { UserManageService } from '@pages/user-manage/user-manage.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as dayjs from 'dayjs';
import * as _ from 'lodash';
import { Condition, FilterType } from '@app/shared/types/commonTypes';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'cascade-condition',
  templateUrl: './cascade-condition.component.html',
  styleUrls: ['./cascade-condition.component.scss'],
  providers: [UserManageService, CourseManageService],
})
export class CascadeConditionComponent implements OnInit {
  @ViewChild('userSearchEl') userSearchEl!: NzSelectComponent;
  @ViewChild('courseSearchEl') courseSearchEl!: NzSelectComponent;
  userSearchSubject = new Subject<string>();
  courseSearchSubject = new Subject<string>();
  // 级联参数发射器
  @Output()
  cascadeEmitter: EventEmitter<any> = new EventEmitter();
  // 是否显示全部
  @Input() hasAll = true;
  // 搜索模式
  @Input() searchMode = false;
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
  isFullCondition: boolean = true;
  // 教师还是学生
  @Input() isStudent = true;
  all = { id: '0', name: '全部' };
  // 年级
  grade: Condition = {
    value: null,
    text: '年级',
    data: [],
    show: false,
    next: null,
    hasAll: true,
    getData: (cascade = false) => {
      if (this.grade.hasAll && cascade) {
        this.grade.value = this.all;
      }
      let maxGrade = dayjs().month() > 8 ? dayjs().year() : dayjs().year() - 1;
      const data: FilterType[] = [];
      for (let i = 3; i >= 0; i--) {
        data.push({ id: String(maxGrade - i), name: String(maxGrade - i) });
      }
      this.grade.data = data;
    },
  };
  // 学院
  college: Condition = {
    value: null,
    text: '学院',
    data: [],
    show: false,
    next: null,
    previous: null,
    hasAll: true,
    getData: (cascade = false) => {
      if (this.college.hasAll && cascade) {
        this.college.value = this.all;
      }
      this.userService.getCollege().subscribe((res) => {
        this.college.data = res as FilterType[];
      });
    },
  };
  // 专业
  major: Condition = {
    value: null,
    text: '专业',
    data: [],
    show: false,
    next: null,
    previous: null,
    hasAll: true,
    getData: (cascade = false) => {
      if (this.major.hasAll && cascade) {
        this.major.value = this.all;
      }
      this.userService
        .getMajor({
          grade: (this.grade.value as FilterType).id,
          college: (this.college.value as FilterType).id,
        })
        .subscribe((res) => {
          this.major.data = res as FilterType[];
        });
    },
  };
  // 班级
  class: Condition = {
    value: null,
    text: '班级',
    data: [],
    show: false,
    hasAll: true,
    previous: null,
    getData: (cascade = false) => {
      if (this.class.hasAll && cascade) {
        this.class.value = this.all;
      }
      this.userService
        .getClass({
          grade: (this.grade.value as FilterType).id,
          college: (this.college.value as FilterType).id,
          major: (this.major.value as FilterType).id,
        })
        .subscribe((res) => {
          this.class.data = res as FilterType[];
        });
    },
  };
  // 教师关联班级
  chargeClass: Condition = {
    value: null,
    text: '我的班级',
    data: [],
    show: false,
    hasAll: true,
    getData: (cascade = false) => {
      if (this.chargeClass.hasAll && cascade) {
        this.chargeClass.value = this.all;
      }
      this.userService.getChargeClass().subscribe((res) => {
        this.chargeClass.data = res as FilterType[];
      });
    },
  };
  // 课程
  course: Condition = {
    value: null,
    text: '课程',
    data: [],
    show: false,
    hasAll: true,
    previous: null,
    getData: (cascade = false) => {
      if (this.course.hasAll && cascade) {
        this.course.value = this.all;
      }
      this.courseService.getCoursesByGrade((this.grade.value as FilterType).id).subscribe((res) => {
        this.course.data = res as FilterType[];
      });
    },
  };
  // 教师关联课程
  myCourse: Condition = {
    value: null,
    text: '我的课程',
    data: [],
    show: false,
    hasAll: true,
    getData: (cascade = false) => {
      if (this.myCourse.hasAll && cascade) {
        this.myCourse.value = this.all;
      }
      this.courseService.getMyCourse().subscribe((res) => {
        this.myCourse.data = res as FilterType[];
      });
    },
  };
  // 用户管理搜索用户
  userSearch: Condition = {
    value: null,
    searchValue: null,
    text: '用户',
    show: false,
    flag: true,
    list: [],
    selectOpen: (e: boolean) => {
      if (e) this.userSearch.searchValue = null;
    },
    selectChange: (e: any) => {
      this.userSearch.value = e;
      this.emitCascade('userSearch');
    },
    selectSearch: (e: KeyboardEvent) => {
      if (this.userSearch.flag && e.key !== 'process') {
        const keyWord = this.userSearchEl.originElement.nativeElement.children[0]
          .getAttribute('ng-reflect-value')
          .trim();
        if (keyWord.trim()) {
          this.userSearchSubject.next(keyWord);
        }
      }
    },
  };
  // 课程管理搜索教师
  courseUserSearch: Condition = {
    value: null,
    text: '教师',
    show: false,
  };
  // 课程管理搜索课程
  courseSearch: Condition = {
    value: null,
    searchValue: null,
    text: '课程',
    show: false,
    flag: true,
    list: [],
    selectOpen: (e: boolean) => {
      if (e) this.courseSearch.searchValue = null;
    },
    selectChange: (e: any) => {
      this.courseSearch.value = e;
      this.emitCascade('courseSearch');
    },
    selectSearch: (e: KeyboardEvent) => {
      if (this.courseSearch.flag && e.key !== 'process') {
        const keyWord = this.courseSearchEl.originElement.nativeElement.children[0]
          .getAttribute('ng-reflect-value')
          .trim();
        if (keyWord.trim()) {
          this.courseSearchSubject.next(keyWord);
        }
      }
    },
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
    if (this.showFilter?.toString() === ['grade', 'college', 'userSearch'].toString()) {
      this.college.getData!();
    }
    // 重设是否有全部选项
    for (const item of this.fields) {
      const field = (this as any)[item];
      if (field?.hasAll) {
        field.hasAll = this.hasAll;
      }
    }
    // Subject
    this.userSearchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((keyword) => {
      this.userService.searchUser({ keyword, type: 2, pageIndex: 1, PageSize: 99999 }).subscribe((result) => {
        this.userSearch.list = (result as any).data;
      });
    });
    this.courseSearchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((keyword) => {
      this.courseService.getCourseCardBySearchCourse({ keyword }).subscribe((result) => {
        this.courseSearch.list = result;
      });
    });
  }

  emitCascade(code: string) {
    const t = (this as any)[code];
    if (
      !t.value ||
      (t.value instanceof String && !t.value.trim) ||
      (typeof t.value === 'object' && _.isEmpty(t.value))
    ) {
      return;
    }
    this.getCascadeData(t);
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
  getCascadeData(item: Condition) {
    this.conditions = [];
    this.recursionPrevious(item);
    this.recursionNext(item);
    this.isFullCondition = !this.conditions.some((item) => !item.value);
  }
  // next层递归，处理重新获取下层数据以及重新选中
  recursionNext(item: Condition) {
    if (item.show) {
      this.conditions.push({
        text: item.text,
        value: (item.value as FilterType)?.name ?? item.value,
      });
      if (item.next?.length) {
        // 有级联条件->递推获取数据
        for (const iterator of item.next) {
          if (item.value && item.value.id !== '0' && iterator.show) {
            // 有选中值，获取下层数据
            iterator.getData(true);
          } else {
            // 无选中值，重设下层数据
            iterator.data = [];
            iterator.value = iterator.hasAll ? this.all : null;
          }
          this.recursionNext(iterator);
        }
      }
    }
  }
  // previous层递归，处理未选中任何值时直接点击中层条件
  recursionPrevious(item: Condition) {
    // 直接点击下层 全部 选项，如果上层未选中值->设为全部
    if (item.previous?.length && item.show) {
      for (const iterator of item?.previous) {
        if (item.previous?.length && (item.value as FilterType).id === '0' && !iterator.value) {
          iterator.value = this.all;
        }
        this.conditions.unshift({
          text: iterator.text,
          value: (iterator.value as FilterType).name,
        });
        this.recursionPrevious(iterator);
      }
    }
  }
}
