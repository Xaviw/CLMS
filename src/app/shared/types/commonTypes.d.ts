import { AbstractControl } from '@angular/forms';

// 响应类型
declare interface Res {
  code: number;
  msg: string;
  data: any;
}

// FormControl
declare interface formControls {
  [propName: string]: AbstractControl;
}

// 路由表类型
declare interface pageRoute {
  link?: string;
  title: string;
  key: string;
  isLeaf: boolean;
  icon?: string;
  function?: string[];
  children?: pageRoute[];
}

// 全局用户信息类型
declare interface userInfo {
  account: string;
  name: string;
  avatar?: string;
}

// 页面功能类型
declare interface pageFunction {
  code: string;
  name: string;
  id: string;
}

// 角色类型
declare interface role {
  title: string;
  key: string;
  isLeaf?: boolean;
  icon?: string;
  permissions?: string[];
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
