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
  id?: string;
  title: string;
  key: string;
  leaf: boolean;
  icon?: string;
  children?: PageRoute[];
  level: number;
}

// 用户
declare interface User {
  account: string;
  userId: string;
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
  pageIndex: number;
  pageSize: number;
}

// 课程卡片
declare interface CourseCard {
  courseId: string;
  courseName: string;
  teacherId: string;
  teacherName: string;
  isCompulsory?: string;
  classes?: string;
  description?: string;
  count: number;
  startWeek?: number;
  endWeek?: number;
}

declare interface FilterType {
  id: string;
  name: string;
}

declare interface Condition {
  value: FilterType | null; // 选中值
  text: string;
  data?: FilterType[]; // 所有值
  show: boolean; // 是否显示
  next?: any; // 级联下级
  previous?: any; // 级联上级
  hasAll?: boolean; // 是否有全部选项
  getData?: Function; // 取值方法
  [propName: string]: any;
}

// 课程添加基础信息
declare interface CourseAddInfo {
  name: string;
  teacher: string;
  isCompulsory: boolean;
  class?: string[];
  startWeek: number;
  endWeek: number;
  weekTime: number;
  description?: string;
}
// 课程信息
declare interface CourseDetailInfo {
  courseName: string;
  courseId: string;
  teacherName: string;
  teacherId: string;
  isCompulsory: string;
  class?: Array<{ id: string; name: string }>;
  description?: string;
  count?: number;
  startWeek: number;
  endWeek: number;
  weekTime: number;
  studentCount?: number;
}

// 机房列表信息
declare interface LabInfo {
  id: string;
  name: string;
  description?: string;
  capacity?: number;
  status: number;
  image?: string[];
  isFree?: boolean;
  startFreeTime?: string;
  endFreeTime?: string;
  phone?: string;
  admin?: string;
}

// 申请列表请求参数
interface ApplicationParam {
  pageIndex: number;
  pageSize: number;
  sort: Array<{ key?: string; value?: number }>;
  filter: Array<{ key?: string; value?: number[] }>;
}

// 申请信息
declare interface ApplicationInfo {
  id: string;
  type: number;
  time: string;
  date: string;
  remark: string;
  user_id: string;
  user_name: string;
  status: number;
  lab_id?: string;
  apply_all: boolean;
  seat_row?: number;
  seat_column?: number;
  course?: number[];
  list?: string;
}

// 申请历史
declare interface ApplicationHistory {
  time: string;
  status: number;
  remark?: string;
  user_id: string;
  user_name: string;
}

// 签到信息
declare interface CheckInInfo {
  id: string;
  lab_name: string;
  seat_row: number;
  seat_column: number;
}

// 公告信息
declare interface BulletinInfo {
  id: string;
  title: string;
  content?: string;
  createTime: string;
  publisher_name?: string;
  views: number;
}
