import { AbstractControl } from '@angular/forms';

interface Res {
  code: number;
  msg: string;
  data: any;
}
interface formControls {
  [propName: string]: AbstractControl;
}
interface pageRoute {
  link?: string;
  title: string;
  key: string;
  isLeaf: boolean;
  icon?: string;
  function?: string[];
  children?: pageRoute[];
}
interface userInfo {
  account: number;
  name: string;
  avatar?: string;
}

interface pageFunction {
  code: string;
  name: string;
  id: string;
}

interface role {
  title: string;
  key: string;
  isLeaf?: boolean;
  icon?: string;
  permissions?: string[];
}

export { Res, formControls, pageRoute, userInfo, pageFunction, role };
