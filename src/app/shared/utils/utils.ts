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
