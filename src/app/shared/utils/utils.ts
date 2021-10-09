import { _local, _session } from '@app/shared/utils/Storage';
import { FormControls } from '@app/shared/types/commonTypes';

// 校验表单
export function validateForm(form: FormControls): void {
  for (const i in form) {
    if (form.hasOwnProperty(i)) {
      form[i].markAsDirty();
      form[i].updateValueAndValidity();
    }
  }
}

// 清空缓存
export function clearCache() {
  _local.clear();
  _session.clear();
}

// 获取类型
export function getType(v: any) {
  const type = Object.prototype.toString.call(v);
  return type.slice(8, -1);
}

// 深拷贝
export function deepClone(target: any, map = new WeakMap()): any {
  const type = getType(target);
  if (['Object', 'Array', 'Map', 'WeakMap', 'Set', 'WeakSet'].includes(type)) {
    let container = new target.constructor();
    // 防止循环引用
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, container);
    // 克隆set
    if (['Set', 'WeakSet'].includes(type)) {
      target.forEach((value: any) => {
        container.add(deepClone(value, map));
      });
      return container;
    }

    // 克隆map
    if (['Map', 'WeakMap'].includes(type)) {
      target.forEach((value: any, key: any) => {
        container.set(key, deepClone(value, map));
      });
      return container;
    }

    // 克隆对象和数组
    const keys = Object.keys(target);
    let index = -1;
    const length = keys.length;
    while (++index < length) {
      container[keys[index]] = deepClone(target[keys[index]], map);
    }
    return container;
  } else if (type === 'Date') {
    // 克隆日期
    return new target.constructor(target);
  } else if (type === 'RegExp') {
    // 克隆正则
    const reFlags = /\w*$/;
    const result = new target.constructor(target.source, reFlags.exec(target));
    result.lastIndex = target.lastIndex;
    return result;
  } else if (type === 'Symbol') {
    // 克隆Symbol
    return Object(Symbol.prototype.valueOf.call(target));
  } else if (type === 'Function') {
    // 克隆函数
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = target.toString();
    if (target.prototype) {
      const param = paramReg.exec(funcString);
      const body = bodyReg.exec(funcString);
      if (body) {
        if (param) {
          const paramArr = param[0].split(',');
          return new Function(...paramArr, body[0]);
        } else {
          return new Function(body[0]);
        }
      } else {
        return null;
      }
    } else {
      return eval(funcString);
    }
  } else {
    // 其他
    return target;
  }
}
