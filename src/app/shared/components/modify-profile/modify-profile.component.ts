import { validateForm } from '@shared/utils/utils';
import { FormBuilder, Validators, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CacheService } from './../../../core/services/cache.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'modify-profile',
  templateUrl: './modify-profile.component.html',
  styleUrls: ['./modify-profile.component.scss'],
})
export class ModifyProfileComponent implements OnInit {
  // 照片上传loading
  avatarLoading = false;
  // 头像url
  avatarUrl?: string;
  // modal显隐控制
  visible = false;
  // 保存修改loading
  isOkLoading = false;
  // 新密码
  PWD: string | undefined;
  // 确认密码
  confirmPWD: string | undefined;
  // 密码修改状态
  _canEdit = false;
  get canEdit() {
    return this._canEdit;
  }
  set canEdit(v) {
    this._canEdit = v;
    if (v) {
      this.pwdForm.get('pwd')?.enable();
      this.pwdForm.patchValue({
        pwd: null,
      });
    } else {
      this.pwdForm.get('pwd')?.disable();
      this.pwdForm.patchValue({
        pwd: '******',
        confirmPwd: null,
      });
    }
  }
  // 密码formGroup
  pwdForm!: FormGroup;

  constructor(private msg: NzMessageService, public cache: CacheService, private fb: FormBuilder) {}

  ngOnInit() {
    this.pwdForm = this.fb.group({
      name: [{ value: null, disabled: true }],
      account: [{ value: null, disabled: true }],
      pwd: [{ value: null, disabled: !this.canEdit }, [Validators.required]],
      confirmPwd: [null, [Validators.required, this.confirmValidator()]],
    });
  }

  // 确认密码验证
  confirmValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === (control as any).parent?.controls.pwd.value ? null : { different: true };
    };
  };

  // 打开Modal
  show(): void {
    this.pwdForm.patchValue({
      name: this.cache.userInfo?.name,
      account: this.cache.userInfo?.account,
      pwd: '******',
    });
    this.visible = true;
  }

  // 保存
  handleOk(): void {
    validateForm(this.pwdForm.controls);
    if (this.pwdForm.valid) {
      this.isOkLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.isOkLoading = false;
      }, 3000);
    }
  }

  // 取消
  handleCancel(): void {
    this.visible = false;
  }

  // 上传前判断头像格式\大小
  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('仅支持jpg与png格式图片！');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('图片大小不能超过2MB！');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  // 得到头像Base64链接
  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  // 上传头像
  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.avatarLoading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.avatarLoading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.avatarLoading = false;
        break;
    }
  }
}
