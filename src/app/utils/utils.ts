import { formControls } from '@app/types/commonTypes';

export function validateForm(form: formControls): void {
  for (const i in form) {
    if (form.hasOwnProperty(i)) {
      form[i].markAsDirty();
      form[i].updateValueAndValidity();
    }
  }
}
