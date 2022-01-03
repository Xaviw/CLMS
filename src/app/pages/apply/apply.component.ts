import { CommonService } from '@app/core/services/common.service';
import { ApplicationType, ApplicationStatus } from '@app/shared/enum/enum';
import { validateForm } from '@shared/utils/utils';
import { CacheService } from '@app/core/services/cache.service';
import { LabInfo, ApplicationInfo, ApplicationHistory, apply } from '@app/shared/types/commonTypes';
import { LabManageService } from './../lab-manage/lab-manage.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ApplicationListService } from './../application-list/application-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as base64 from 'js-base64';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
  providers: [ApplicationListService, LabManageService],
})
export class ApplyComponent implements OnInit {
  form!: FormGroup;
  applicationInfo?: ApplicationInfo;
  type = ApplicationType;
  status = ApplicationStatus;
  labList: LabInfo[] = [];
  disabled: boolean = false;
  paramsId?: string;
  paramsType!: number;
  history: ApplicationHistory[] = [];
  examine = {
    visible: false,
    examineForm: this.fb.group({
      status: [null, Validators.required],
      remark: [null],
    }),
    open: () => {
      this.examine.visible = true;
    },
    close: () => {
      this.examine.visible = false;
    },
    submit: () => {
      validateForm(this.examine.examineForm.controls);
      if (this.examine.examineForm.invalid) {
        return;
      }
      let params = this.examine.examineForm.getRawValue();
      params.id = this.paramsId;
      params.type = this.paramsType;
      this.service.examine(params).subscribe(() => {
        this.router.navigateByUrl('/application-list');
      });
    },
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ApplicationListService,
    private common: CommonService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    public cache: CacheService,
  ) {}

  ngOnInit() {
    this.getLabList();
    // 初始化表单
    this.form = this.fb.group({
      user: [{ value: null, disabled: true }, Validators.required],
    });
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.param) {
        let data = JSON.parse(base64.decode(params.param));
        if (data.type !== undefined) {
          this.paramsType = Number(data.type);
          // 类型错误，返回列表
          if (![0, 1, 2].includes(data.type)) {
            this.message.error('错误的申请类型！');
            this.router.navigateByUrl('/application-list');
          }
        }
        if (data.id) {
          this.paramsId = data.id;
          this.getHistory();
          this.service
            .getApplicationInfo({
              type: this.paramsType,
              id: data.id,
            })
            .subscribe((res) => {
              this.applicationInfo = res as ApplicationInfo;
              this.paramsType = (res as ApplicationInfo).type;
              // 判断是否是本人，决定表单是否禁用
              this.disabled = (res as ApplicationInfo).user_id === this.cache.userInfo.account ? false : true;
              // 构建表单，有值
              this.buildForm(res as ApplicationInfo);
              this.patch(res);
              this.form.patchValue({
                user: this.applicationInfo.user_id + '-' + this.applicationInfo.user_name,
              });
            });
        } else {
          this.form.patchValue({
            user: this.cache.userInfo.account + '-' + this.cache.userInfo.name,
          });
          // 构建表单，无值
          this.buildForm(data);
          this.patch(data);
        }
      }
    });
  }

  patch(data: any) {
    // 维修申请且带有参数
    if (data.type === 2 && data.labId && data.seat_row && data.seat_column) {
      this.form.patchValue({
        lab_id: data.labId,
        seat_row: data.seat_row,
        seat_column: data.seat_column,
      });
    }
    // 机房申请且带有参数
    if (data.type === 0 && data.labId && data.apply_all !== undefined) {
      if (data.apply_all) {
        this.applyAllChange(true);
        this.form.patchValue({
          apply_all: true,
          lab_id: data.labId,
          date: data.time,
        });
      } else {
        this.form.patchValue({
          apply_all: false,
          lab_id: data.labId,
          course: data.course,
          seat_row: data.seat_row,
          seat_column: data.seat_column,
          date: data.time,
        });
      }
    }
  }

  // 获取机房列表
  getLabList() {
    this.common.getLabList().subscribe((res) => {
      this.labList = res as LabInfo[];
    });
  }

  // 获取申请历史
  getHistory() {
    if (this.paramsId) {
      this.service
        .getApplicationHistory({
          type: this.paramsType,
          id: this.paramsId,
        })
        .subscribe((res) => {
          this.history = res as ApplicationHistory[];
        });
    }
  }

  // 取消申请
  cancelApply() {
    if (this.paramsId) {
      const param = {
        type: this.paramsType,
        id: this.paramsId,
      };
      this.service.cancelApply(param).subscribe(() => {
        this.router.navigateByUrl('/application-list');
      });
    } else {
      this.router.navigateByUrl('/application-list');
    }
  }

  // 提交申请
  apply() {
    validateForm(this.form.controls);
    if (this.form.invalid) {
      return;
    }
    let params: any = this.form.getRawValue();
    params.type = this.paramsType;
    if (this.paramsId) {
      params.id = this.paramsId;
    }
    this.service.apply(params).subscribe(() => {
      this.router.navigateByUrl('/application-list');
    });
  }

  // 维修完成
  repairFinish() {
    if (this.paramsId) {
      this.service.repairFinish(this.paramsId).subscribe(() => {
        this.router.navigateByUrl('/application-list');
      });
    }
  }

  applyAllChange(e: boolean) {
    if (e) {
      this.form.removeControl('seat_row');
      this.form.removeControl('seat_column');
    } else {
      this.form.addControl('seat_row', new FormControl({ value: null, disabled: false }, Validators.required));
      this.form.addControl('seat_column', new FormControl({ value: null, disabled: false }, Validators.required));
    }
  }

  // 构建表单
  buildForm(data?: ApplicationInfo) {
    this.form.addControl('remark', new FormControl({ value: null, disabled: this.disabled }));
    if (data && data.user_id && data.user_name && data.remark) {
      this.form.setValue({
        user: data.user_id + '-' + data.user_name,
        remark: data.remark,
      });
    }
    if (this.paramsType === 0) {
      this.form.addControl(
        'date',
        new FormControl({ value: data?.time ?? null, disabled: this.disabled }, Validators.required),
      );
      this.form.addControl(
        'course',
        new FormControl({ value: data?.course ?? null, disabled: this.disabled }, Validators.required),
      );
      if (this.cache.functionPermissions('applyFullLab')) {
        this.form.addControl(
          'apply_all',
          new FormControl({ value: data?.apply_all ?? false, disabled: this.disabled }, Validators.required),
        );
      }
    }
    if (this.paramsType === 0 || this.paramsType === 2) {
      this.form.addControl(
        'lab_id',
        new FormControl({ value: data?.lab_id ?? null, disabled: this.disabled }, Validators.required),
      );
    }
    if ((this.paramsType === 0 && !data?.apply_all) || this.paramsType === 2) {
      this.form.addControl(
        'seat_row',
        new FormControl({ value: data?.seat_row ?? null, disabled: this.disabled }, Validators.required),
      );
      this.form.addControl(
        'seat_column',
        new FormControl({ value: data?.seat_column ?? null, disabled: this.disabled }, Validators.required),
      );
    }
    if (this.paramsType === 1) {
      this.form.addControl(
        'list',
        new FormControl({ value: data?.list ?? null, disabled: this.disabled }, Validators.required),
      );
    }
  }
}
