import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class CourseManageService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取年级下课程
  getCoursesByGrade(grade: number) {
    const url = '/grade/course';
    return this.http.post(url, { grade });
  }
}
