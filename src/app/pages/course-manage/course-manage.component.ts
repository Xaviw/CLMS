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

  constructor(private service: CourseManageService) {}

  ngOnInit() {}

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
