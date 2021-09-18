import { CommonService } from './../../../core/services/common.service';
import { Component, OnInit } from '@angular/core';
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
export class UserModifyDrawerComponent implements OnInit {
  visible = false;
  isAdd = false;
  formGroup = this.fb.group({
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

  constructor(private fb: FormBuilder, private service: UserManageService, private commonService: CommonService) {}

  ngOnInit() {
    // 初始化当前四个年级
    let maxGrade = dayjs().month() > 8 ? dayjs().year() : dayjs().year() - 1;
    for (let i = 3; i >= 0; i--) {
      this.grade.push(maxGrade - i);
    }

    this.getCollege();
    this.getRoles();
  }

  // 获取学院信息
  getCollege() {
    this.service.getCollege().subscribe((res) => {
      this.college = res as any[];
    });
  }

  // 获取专业信息
  getMajor(id: string) {
    this.service.getMajor({ grade: this.formGroup.controls.grade.value as number, college_id: id }).subscribe((res) => {
      this.major = res as any[];
    });
  }

  // 获取班级信息
  getClass(id: string) {
    this.service
      .getClass({
        grade: this.formGroup.controls.grade.value as number,
        college_id: this.formGroup.controls.college.value as string,
        major_id: id,
      })
      .subscribe((res) => {
        this.class = res as any[];
      });
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

  update = () => {};

  add = () => {};
}
