import { AbstractControl } from '@angular/forms';

// 响应类型
declare interface Res {
  code: number;
  msg: string;
  data: any;
}

// FormControl
declare interface FormControls {
  [propName: string]: AbstractControl;
}

// 路由表类型
declare interface PageRoute {
  link?: string;
  title: string;
  key: string;
  leaf: boolean;
  icon?: string;
  function?: string[];
  children?: PageRoute[];
  level: number;
}

// 用户
declare interface User {
  account: string;
  name: string;
  avatar?: string;
  gender?: string;
  college?: string;
  college_id?: string;
  major?: string;
  major_id?: string;
  class?: string;
  class_id?: string;
  chargeTeacher?: string;
  chargeTeacher_id?: string;
  role?: string;
  role_id?: string;
  status?: string;
}

// 页面功能类型
declare interface PageAction {
  code: string;
  name: string;
  id: string;
  url: string;
}

// 角色类型
declare interface Role {
  title: string;
  key: string;
  isLeaf?: boolean;
  icon?: string;
  pages?: string[];
  actions?: string[];
}

declare interface statistic {
  total: number;
  info?: string;
  data: Array<{
    name: string;
    value: number;
    color: string;
    [propName: string]: any;
  }>;
}

declare interface apply {
  name: string;
  value: number;
}

declare interface pagination {
  start: number;
  count: number;
}

// 课程卡片
declare interface CourseCard {
  courseId: string;
  courseName: string;
  teacherId: string;
  teacherName: string;
  isCompulsory?: boolean;
  classes?: string;
  description?: string;
  count: number;
  startWeek?: number;
  endWeek?: number;
}
