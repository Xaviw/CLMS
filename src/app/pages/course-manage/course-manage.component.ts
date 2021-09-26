import { CacheService } from './../../core/services/cache.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CourseManageService } from './course-manage.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CourseCard } from '@app/shared/types/commonTypes';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NzSelectComponent } from 'ng-zorro-antd/select';

@Component({
  selector: 'course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.scss'],
  providers: [CourseManageService],
})
export class CourseManageComponent implements OnInit {
  // 课程卡片信息
  courseCardData: CourseCard[] = [];
  //
  @ViewChild('teacherSearchEl') teacherSearchEl!: NzSelectComponent;
  // 添加课程抽屉
  addCourseDrawer = {
    flag: true,
    visible: false,
    searchSubject: new Subject<string>(),
    keyWord: null,
    teacherList: <{ value: string; label: string }[]>[],
    validateForm: this.fb.group({
      name: [null, [Validators.required]],
      teacher: [null, [Validators.required]],
      isRequired: [true, [Validators.required]],
      class: [null, [Validators.required]],
      weekRange: [null, [Validators.required]],
      description: [null, []],
    }),
    requiredChange: (e: Event) => {
      if (e) {
        this.addCourseDrawer.validateForm.addControl('class', new FormControl(null, Validators.required));
      } else {
        this.addCourseDrawer.validateForm.removeControl('class');
      }
    },
    keyUp: (e: Event) => {
      if (this.addCourseDrawer.flag) {
        // this.addCourseDrawer.searchSubject.next();
        this.teacherSearchEl.nzOnSearch.emit();
      }
      // if (keyword.trim())
    },
    selectOpen: (e: boolean) => {
      if (e) this.addCourseDrawer.keyWord = null;
    },
    selectSearch: (keyWord: string) => {
      console.log('keyWord: ', keyWord);
    },
    selectChange: (value: null | string) => {
      if (value === null) return;
      // const data = {};
      // this.service.queryPersonRowNumber(data).subscribe(num = >{
      // 	table.pageIndex = parseInt(num / table.pageSize + '') + 1;
      // 	table.selectedRowIndex = num % table.pageSize;
      // 	table.evtPageChange(false, true);
      // });
    },
    open: () => {
      this.addCourseDrawer.visible = true;
    },
    close: () => {
      this.addCourseDrawer.visible = false;
    },
  };

  constructor(private service: CourseManageService, private fb: FormBuilder, public cache: CacheService) {}

  ngOnInit() {
    // 默认选中自己
    const user = this.cache.userInfo;
    this.addCourseDrawer.teacherList = [{ value: user.account, label: user.name + '-' + user.account }];
    this.addCourseDrawer.validateForm.get('teacher')?.patchValue(user.account);
    // 添加课程--搜索教师触发
    this.addCourseDrawer.searchSubject.pipe(debounceTime(500), distinctUntilChanged()).subscribe((keyword) => {
      console.log('keyword: ', keyword);
      // const data = {};
      // this.service.queryPersonList(data).subscribe((result) => {
      //   this.list = result;
      // });
    });
  }

  // 接收级联参数
  getConditions(param: any) {
    console.log('param: ', param);
    this.service.getCourseCardByCascade(param).subscribe((res) => {
      console.log('res: ', res);
      this.courseCardData = res as CourseCard[];
    });
  }

  // 搜索教师所教课程
  queryCourseByTeacher(e: Event) {
    console.log(e);
  }

  // 搜索教师所教课程
  queryCourse(e: Event) {
    console.log(e);
  }

  // 定位自己的课程
  locationCourse(e: Event) {
    console.log(e);
  }
}
