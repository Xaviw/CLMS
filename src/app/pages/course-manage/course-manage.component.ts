import { AddCourseComponent } from './../../shared/components/add-course/add-course.component';
import { CourseManageService } from './course-manage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseCard, CourseAddInfo } from '@app/shared/types/commonTypes';
import { CacheService } from '@app/core/services/cache.service';

@Component({
  selector: 'course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.scss'],
  providers: [CourseManageService],
})
export class CourseManageComponent implements OnInit {
  // 课程卡片信息
  courseCardData: CourseCard[] = [];
  // 请求参数缓存
  param?: any;
  // 添加课程抽屉
  @ViewChild('addCourseEl') addCourseEl!: AddCourseComponent;

  constructor(private service: CourseManageService, public cache: CacheService) {}

  ngOnInit() {}

  // 接收级联参数
  getConditions(param: any) {
    this.param = param;
    if (['course', 'grade'].includes(param.code)) {
      this.service
        .getCourseCardByCascade({ code: param.data.course.id, grade: param.data.grade.id })
        .subscribe((res) => {
          console.log('res: ', res);
          this.courseCardData = res as CourseCard[];
        });
    } else if (param.code === 'myCourse') {
      this.service.getCourseCardByMine({ code: param.data.myCourse.id }).subscribe((res) => {
        this.courseCardData = res as CourseCard[];
      });
    } else if (param.code === 'courseUserSearch') {
      this.service.getCourseCardBySearchTeacher({ keyword: param.data.courseUserSearch }).subscribe((res) => {
        this.courseCardData = res as CourseCard[];
      });
    } else if (param.code === 'courseSearch') {
      this.service.getCourseCardBySearchCourse({ keyword: param.data.courseSearch }).subscribe((res) => {
        this.courseCardData = res as CourseCard[];
      });
    }
  }

  // 添加课程
  addCourse(e: CourseAddInfo) {
    this.service.addCourse(e).subscribe((res) => {
      this.addCourseEl.reset();
      this.addCourseEl.close();
      this.refresh();
    });
  }

  // 刷新
  refresh() {
    if (this.param) {
      this.getConditions(this.param);
    }
  }
}
