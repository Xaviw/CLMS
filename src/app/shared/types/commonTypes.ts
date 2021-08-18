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
  text: string;
  icon?: string;
  function?: string[];
  children?: pageRoute[];
}
interface userInfo {
  account: number;
  name: string;
  avatar?: string;
}

export { Res, formControls, pageRoute, userInfo };
