import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseAddInfo } from '@app/shared/types/commonTypes';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class CourseManageService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  // 获取年级下课程
  getCoursesByGrade(grade: string) {
    const url = '/course/getCourseByYear';
    return this.http.post(url, { grade });
  }

  // 获取我的课程
  getMyCourse() {
    const url = '/course/getCourseByTeacher';
    return this.http.get(url);
  }

  // 级联参数查询课程卡片
  getCourseCardByCascade(param: { code: string; grade: string }) {
    const url = '/course/getCourseByCode';
    return this.http.post(url, param);
  }

  // 我的课程获取课程卡片
  getCourseCardByMine(param: { code: string }) {
    const url = '/course/getCourseByNameUser';
    return this.http.post(url, param);
  }

  // 教师搜索获取课程卡片
  getCourseCardBySearchTeacher(param: { keyword: string }) {
    const url = '/course/searchTeacher';
    return this.http.post(url, param);
  }

  // 课程搜索获取课程卡片
  getCourseCardBySearchCourse(param: { keyword: string }) {
    const url = '/course/getCourseByName';
    return this.http.post(url, param);
  }

  // 添加课程
  addCourse(param: CourseAddInfo) {
    const url = '/course/addCourse';
    return this.http.post(url, param);
  }

  // 删除课程
  deleteCourse(param: { courseId: string }) {
    const url = '/course/deleteCourse';
    return this.http.post(url, param);
  }

  // 获取课程信息
  getCourseDetail(id: string) {
    const url = `/course/getCourseById`;
    return this.http.post(url, { courseId: id });
  }

  // 修改课程基础信息
  modifyCourseInfo(
    param: {
      courseId: string;
    } & CourseAddInfo,
  ) {
    const url = '/course/updateCourse';
    return this.http.post(url, param);
  }

  // 获取课程学生
  getCourseStudent(id: string) {
    const url = `/course/getStudentById`;
    return this.http.post(url, { courseId: id });
  }

  // 课程添加学生
  addCourseStudent(param: { course_id: string; user_id: string[] }) {
    const url = '/course/addStuInCourse';
    return this.http.post(url, param);
  }

  // 删除课程学生
  deleteCourseStudent(param: { course_id: string; user_id: string[] }) {
    const url = '/course/deleteStuInCourse';
    return this.http.post(url, param);
  }

  // 查询教师
  queryTeacherList(param: string) {
    const url = '/user/findTeacher';
    return this.http.post(url, { keyword: param });
  }
}
