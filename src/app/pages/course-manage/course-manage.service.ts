import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class CourseManageService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取年级下课程
  getCoursesByGrade(grade: string) {
    const url = '/grade/course';
    return this.http.post(url, { grade });
  }

  // 获取我的课程
  getMyCourse() {
    const url = '/user/getClassByUser';
    return this.http.get(url);
  }

  // 级联参数查询课程卡片
  getCourseCardByCascade(param: { code: string }) {
    const url = '/course';
    return this.http.post(url, param);
  }

  // 删除课程
  deleteCourse(param: { courseId: string }) {
    const url = '';
    return this.http.post(url, param);
  }

  // 获取课程信息
  // getCourseDetail(id: string) {
  //   const url = `/course/${id}`;
  //   return this.http.get(url);
  // }
  getCourseDetail() {
    const url = `/course/info`;
    return this.http.get(url);
  }
}
