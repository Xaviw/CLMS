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
    let code;
    if (param.code === 'class') code = param.data.class.id;
    else if (param.code === 'chargeClass') code = param.data.chargeClass.id;
    this.service.getCourseCardByCascade({ code }).subscribe((res) => {
      this.courseCardData = res as CourseCard[];
    });
  }

  addCourse(e: Event) {
    console.log(e);
  }

  // 搜索教师所教课程
  queryCourseByTeacher(e: Event) {}

  // 搜索教师所教课程
  queryCourse(e: Event) {}

  // 定位自己的课程
  locationCourse(e: Event) {}
}
