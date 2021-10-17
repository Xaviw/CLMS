import { FormBuilder, Validators } from '@angular/forms';
import { LabStatus } from '@app/shared/enum/enum';
import { LabInfo } from '@app/shared/types/commonTypes';
import { LabManageService } from './../lab-manage/lab-manage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { validateForm } from '@app/shared/utils/utils';
import * as dayjs from 'dayjs';

@Component({
  selector: 'lab-detail',
  templateUrl: './lab-detail.component.html',
  styleUrls: ['./lab-detail.component.scss'],
  providers: [LabManageService],
})
export class LabDetailComponent implements OnInit {
  labInfo!: LabInfo; // 机房基础信息
  labStatus = LabStatus; // 机房状态枚举
  courseScheduleParam!: { labId: string; weekTime: number }; // 课程表参数
  freeTime?: string; // 空闲时段
  // 编辑机房抽屉
  labDrawer = {
    visible: false,
    formGroup: this.fb.group({
      name: [null, [Validators.required]],
      description: [null],
    }),
    cancel() {
      this.formGroup.reset();
      this.visible = false;
    },
    handleOk: () => {
      console.log(this.labDrawer.formGroup.getRawValue());
      validateForm(this.labDrawer.formGroup.controls);
      if (this.labDrawer.formGroup.valid) {
        this.service.addLab(this.labDrawer.formGroup.getRawValue()).subscribe((res) => {
          // this.getLabList();
        });
      }
    },
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: LabManageService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      // 从路径获取课程id
      this.getLabInfo(res.id);
    });
  }

  // 获取机房基础信息
  getLabInfo(id?: string) {
    this.service.getLabInfo(id ?? this.labInfo.id).subscribe((res) => {
      this.labInfo = res as LabInfo;
      if ((res as LabInfo).startFreeTime && (res as LabInfo).endFreeTime) {
        this.freeTime =
          dayjs((res as LabInfo).startFreeTime).format('DD日hh:mm') +
          ' - ' +
          dayjs((res as LabInfo).endFreeTime).format('DD日hh:mm');
      } else {
        this.freeTime = undefined;
      }
      this.courseScheduleParam = {
        weekTime: 1,
        labId: (res as LabInfo).id,
      };
    });
  }

  // 删除机房
  deleteLab() {
    this.service.deleteLab(this.labInfo.id).subscribe((res) => {
      this.router.navigateByUrl('/lab-manage');
    });
  }

  // 切换单双周
  weekTimeChange(e: number) {
    this.courseScheduleParam = {
      labId: this.courseScheduleParam.labId,
      weekTime: e,
    };
  }
}
