import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonService } from '@app/core/services/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LabStatus } from '@app/shared/enum/enum';
import { LabInfo } from '@app/shared/types/commonTypes';
import { LabManageService } from './../lab-manage/lab-manage.service';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { validateForm } from '@app/shared/utils/utils';
import { fromEvent } from 'rxjs';
import * as dayjs from 'dayjs';

@Component({
  selector: 'lab-detail',
  templateUrl: './lab-detail.component.html',
  styleUrls: ['./lab-detail.component.scss'],
  providers: [LabManageService],
})
export class LabDetailComponent implements OnInit, AfterViewInit {
  labInfo!: LabInfo; // 机房基础信息
  labStatus = LabStatus; // 机房状态枚举
  courseScheduleParam!: { labId: string; weekTime: number }; // 课程表参数
  freeTime?: string; // 空闲时段
  // 编辑机房抽屉
  labDrawer = {
    visible: false,
    status: -1,
    formGroup: this.fb.group({
      name: [null, [Validators.required]],
      description: [null],
    }),
    open: () => {
      this.labDrawer.status = this.labInfo.status;
      this.labDrawer.formGroup.patchValue({
        name: this.labInfo.name,
        description: this.labInfo.description,
      });
      this.labDrawer.visible = true;
    },
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: LabManageService,
    private common: CommonService,
    private router: Router,
    private fb: FormBuilder,
    private message: NzMessageService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      // 从路径获取课程id
      this.getLabInfo(res.id);
    });
  }

  ngAfterViewInit() {
    // 监听照片列表滚动，添加上传按钮阴影
    fromEvent(document.querySelector('.image-group')!, 'scroll').subscribe((e: Event) => {
      if ((e.target! as any).scrollLeft > 0) {
        document.getElementsByClassName('ant-upload-picture-card-wrapper')[0].classList.add('shadow');
      } else {
        document.getElementsByClassName('ant-upload-picture-card-wrapper')[0].classList.remove('shadow');
      }
    });
  }

  // 获取机房基础信息
  getLabInfo(id?: string) {
    this.service.getLabInfo(id ?? this.labInfo.id).subscribe((res) => {
      this.labInfo = res as LabInfo;
      this.labDrawer.status = this.labInfo.status;
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

  // 修改机房状态
  setLabStatus() {
    if (this.labDrawer.status !== this.labInfo.status) {
      this.common.setLabStatus({ labIds: [this.labInfo?.id], status: this.labDrawer.status }).subscribe((res) => {
        this.labInfo.status = this.labDrawer.status;
      });
    } else {
      this.message.warning('状态未发生变动！');
    }
  }

  // 修改机房信息
  setLabInfo() {
    validateForm(this.labDrawer.formGroup.controls);
    if (
      this.labDrawer.formGroup.valid &&
      this.labInfo.name !== this.labDrawer.formGroup.get('name')?.value &&
      this.labInfo.description !== this.labDrawer.formGroup.get('description')?.value
    ) {
      this.service
        .setLabInfo({ labId: this.labInfo.id, ...this.labDrawer.formGroup.getRawValue() })
        .subscribe((res) => {
          this.getLabInfo();
        });
    } else if (this.labInfo.name === this.labDrawer.formGroup.get('name')?.value) {
      this.message.warning('机房名未发生变动！');
    } else if (this.labInfo.description === this.labDrawer.formGroup.get('description')?.value) {
      this.message.warning('机房描述未发生变动！');
    }
  }

  // 删除照片
  deletePicture(img: string) {
    this.service.deletePicture(img).subscribe((res) => {
      if (this.labInfo.image instanceof Array) {
        const index = this.labInfo.image.findIndex((item) => item === img);
        this.labInfo.image.splice(index, 1);
      }
    });
  }
}
