import { CommonService } from '@app/core/services/common.service';
import { CourseDetailInfo } from '@app/shared/types/commonTypes';
import { CourseManageService } from './../course-manage/course-manage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-schedule',
  templateUrl: './course-schedule.component.html',
  styleUrls: ['./course-schedule.component.scss'],
  providers: [CourseManageService],
})
export class CourseScheduleComponent implements OnInit {
  weekTime = 0;
  param?: any;

  constructor(private courseService: CourseManageService, private common: CommonService) {}

  ngOnInit() {}

  getConditions(e: any) {
    if (e.code === 'class') {
      this.param = { classId: e.data.class.id, type: 1 };
      this.weekTime = 1;
    } else if (e.code === 'chargeClass') {
      this.param = { classId: e.data.chargeClass.id, type: 1 };
      this.weekTime = 1;
    } else if (e.code === 'myCourse') {
      this.courseService.getCourseDetail(e.data.myCourse.id).subscribe((res) => {
        this.param = { courseId: e.data.myCourse.id, type: (res as CourseDetailInfo).weekTime };
        this.weekTime = (res as CourseDetailInfo).weekTime;
      });
    } else if (e.code === 'courseSearch') {
      this.courseService.getCourseDetail(e.data.courseSearch.id).subscribe((res) => {
        this.param = { courseId: e.data.courseSearch.id, type: (res as CourseDetailInfo).weekTime };
        this.weekTime = (res as CourseDetailInfo).weekTime;
      });
    } else if (e.code === 'userSearch') {
      this.param = { userId: e.data.userSearch, type: 1 };
      this.weekTime = 1;
    }
  }

  weekTimeChange(e: number) {
    this.weekTime = e;
    this.param = { ...this.param, type: e };
  }

  output() {
    this.common.download('', this.param);
  }
}
