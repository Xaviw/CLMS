import { NzMessageService } from 'ng-zorro-antd/message';
import { isEqual, validateForm } from '@shared/utils/utils';
import { CommonService } from './../../../core/services/common.service';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PermissionSetupService } from '@app/pages/permission-setup/permission-setup.service';
import { UserManageService } from '@app/pages/user-manage/user-manage.service';
import { Role } from '@app/shared/types/commonTypes';
import * as dayjs from 'dayjs';

@Component({
  selector: 'user-modify-drawer',
  templateUrl: './user-modify-drawer.component.html',
  styleUrls: ['./user-modify-drawer.component.scss'],
  providers: [UserManageService, PermissionSetupService],
})
export class UserModifyDrawerComponent implements OnInit, OnChanges {
  // 添加时默认参数
  @Input() default: any;
  // 是添加还是修改
  @Input() isAdd: boolean = true;
  // 类型，0学生，1教师
  @Input() type: number = 0;
  // 修改时的原值
  @Input() value: any;
  // 确认
  @Output() handleOk: EventEmitter<any> = new EventEmitter();

  visible = false;

  formGroup = this.fb.group({
    gender: [null, [Validators.required]],
    account: [null, [Validators.required]],
    name: [null, [Validators.required]],
    grade: [null, [Validators.required]],
    college: [null, [Validators.required]],
    major: [null, [Validators.required]],
    class: [null, [Validators.required]],
    role: [null, [Validators.required]],
  });
  // 年级
  grade: any[] = [];
  // 学院
  college: any[] = [];
  // 专业
  major: any[] = [];
  // 班级
  class: any[] = [];
  // 角色
  roles: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: UserManageService,
    private commonService: CommonService,
    private message: NzMessageService,
  ) {}

  ngOnInit() {
    // 初始化当前四个年级
    let maxGrade = dayjs().month() > 8 ? dayjs().year() : dayjs().year() - 1;
    for (let i = 3; i >= 0; i--) {
      this.grade.push(maxGrade - i);
    }

    this.getCollege();
    this.getRoles();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type) {
      if (changes.type.currentValue && this.formGroup.controls?.major) {
        this.formGroup.removeControl('grade');
        this.formGroup.removeControl('major');
        this.formGroup.removeControl('class');
      } else if (!changes.type.currentValue && !this.formGroup.controls?.major) {
        this.formGroup.addControl('grade', this.fb.control(null, [Validators.required]));
        this.formGroup.addControl('major', this.fb.control(null, [Validators.required]));
        this.formGroup.addControl('class', this.fb.control(null, [Validators.required]));
      }
    }
    if (changes.value && !this.isAdd) {
      this.formGroup.patchValue(changes.value.currentValue);
    }
  }

  // 添加用户时打开并添加默认值
  addOpen() {
    this.formGroup.reset();
    if (this.default?.grade && this.default.grade !== '0') {
      this.formGroup.patchValue({ grade: +this.default.grade });
    }
    if (this.default?.college && this.default.college !== '0') {
      this.formGroup.patchValue({ college: this.default.college });
      this.getMajor(this.default.college);
    }
    if (this.default?.major && this.default.major !== '0') {
      this.formGroup.patchValue({ major: this.default.major });
      this.getClass(this.default.major);
    }
    if (this.default?.class && this.default.class !== '0') {
      this.formGroup.patchValue({ class: this.default.class });
    }
    this.open();
  }

  // 修改年级
  resetSub(flag: boolean = true) {
    if (flag && this.formGroup.controls?.major) {
      this.formGroup.controls.major.reset();
      this.major = [];
      this.getMajor(this.formGroup.controls.college.value);
    }
    if (this.formGroup.controls?.class) {
      this.formGroup.controls.class.reset();
      this.class = [];
      this.getClass(this.formGroup.controls.major.value);
    }
  }

  // 修改年级
  gradeChange() {}

  // 修改学院
  collegeChange(id: string) {
    this.resetSub();
    this.getMajor(id);
  }

  // 修改专业
  majorChange(id: string) {
    this.resetSub(false);
    this.getClass(id);
  }

  // 获取学院信息
  getCollege() {
    this.service.getCollege().subscribe((res) => {
      this.college = res as any[];
    });
  }

  // 获取专业信息
  getMajor(id: string) {
    if (this.type === 0 && id) {
      this.service.getMajor({ grade: this.formGroup.controls.grade.value as string, college: id }).subscribe((res) => {
        this.major = res as any[];
      });
    }
  }

  // 获取班级信息
  getClass(id: string) {
    if (this.type === 0 && id) {
      this.service
        .getClass({
          grade: this.formGroup.controls.grade.value as string,
          college: this.formGroup.controls.college.value as string,
          major: id,
        })
        .subscribe((res) => {
          this.class = res as any[];
        });
    }
  }

  // 获取所有角色
  getRoles() {
    this.commonService.getRoles().subscribe((res) => {
      this.roles = res as Role[];
    });
  }

  open = () => {
    this.visible = true;
  };

  close = () => {
    this.visible = false;
  };

  update = () => {
    validateForm(this.formGroup.controls);
    if (!this.formGroup.valid) {
      return;
    }
    const field = this.type
      ? ['gender', 'name', 'college', 'account', 'role']
      : ['gender', 'name', 'account', 'grade', 'college', 'major', 'class', 'role'];
    if (isEqual(this.value, field, this.formGroup.value, field)) {
      this.message.warning('未做任何修改');
      return;
    }
    this.service.updateUser(this.formGroup.value).subscribe((res) => {
      this.visible = false;
      this.handleOk.emit();
    });
  };

  add = () => {
    validateForm(this.formGroup.controls);
    if (!this.formGroup.valid) {
      return;
    }
    this.service.addUser(this.formGroup.value).subscribe((res) => {
      this.visible = false;
      this.handleOk.emit();
    });
  };
}
