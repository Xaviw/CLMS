import { _local, _session } from '@app/shared/utils/Storage';
import { FormControls } from '@app/shared/types/commonTypes';
import * as base64 from 'js-base64';
import _ from 'lodash';

// 校验表单
export function validateForm(form: FormControls): void {
  for (const i in form) {
    if (form.hasOwnProperty(i)) {
      form[i].markAsDirty();
      form[i].updateValueAndValidity();
    }
  }
}

// 获取类型
export function getType(v: any) {
  const type = Object.prototype.toString.call(v);
  return type.slice(8, -1);
}

// Base64字符串过滤
export function base64Filter(str: any) {
  return base64
    .encodeURI(JSON.stringify(str))
    .replace(/\+/g, '%2B')
    .replace(/\=/g, '&3D')
    .replace(/\&/g, '%26')
    .replace(/\//g, '%2F')
    .replace(/\#/g, '%%23')
    .replace(/\?/g, '%3F')
    .replace(/\s/g, '%20')
    .replace(/\%/g, '%25');
}

// 对比数据是否相等
export function isEqual(a: any, descA: string[], b: any, descB: string[]): boolean {
  if (descA.length !== descB.length) {
    return false;
  }
  for (let i = 0; i < descA.length; i++) {
    if (!_.isEqual(a[descA[i]], b[descB[i]])) return false;
  }
  return true;
}
