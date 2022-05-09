import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonService } from '@app/core/services/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LabStatus } from '@app/shared/enum/enum';
import { LabInfo } from '@app/shared/types/commonTypes';
import { LabManageService } from './../lab-manage/lab-manage.service';
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { validateForm } from '@app/shared/utils/utils';
import { fromEvent, Subject } from 'rxjs';
import * as dayjs from 'dayjs';
import { CacheService } from '@app/core/services/cache.service';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NzSelectComponent } from 'ng-zorro-antd/select';
import { CourseManageService } from '../course-manage/course-manage.service';

@Component({
  selector: 'lab-detail',
  templateUrl: './lab-detail.component.html',
  styleUrls: ['./lab-detail.component.scss'],
  providers: [LabManageService, CourseManageService],
})
export class LabDetailComponent implements OnInit, AfterViewInit {
  [x: string]: any;
  labInfo!: LabInfo; // 机房基础信息
  labStatus = LabStatus; // 机房状态枚举
  courseScheduleParam!: { labId: string; weekTime: number }; // 课程表参数
  freeTime?: string; // 空闲时段
  labId!: string;
  // 编辑机房抽屉
  labDrawer = {
    visible: false,
    status: -1,
    formGroup: this.fb.group({
      name: [null, [Validators.required]],
      description: [null],
      adminId: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    }),
    open: () => {
      this.labDrawer.status = this.labInfo.status;
      this.labDrawer.formGroup.patchValue({
        name: this.labInfo.name,
        description: this.labInfo.description,
        phone: this.labInfo.phone,
      });
      this.labDrawer.visible = true;
    },
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseManageService,
    private service: LabManageService,
    private common: CommonService,
    private router: Router,
    private fb: FormBuilder,
    private message: NzMessageService,
    public cache: CacheService,
  ) {}

  searchSubject = new Subject<string>();
  keyWord = null;
  // 教师搜索框
  @ViewChild('teacherSearchEl') teacherSearchEl!: NzSelectComponent;
  flag = true;
  teacherList = <{ value: string; label: string }[]>[];

  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      // 从路径获取机房id
      this.labId = res.id;
      this.getLabInfo(res.id);
    });
    // 添加课程--搜索教师触发
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((keyword) => {
      this.courseService.queryTeacherList(keyword).subscribe((result) => {
        this.teacherList = result as { value: string; label: string }[];
      });
    });
  }

  selectSearch(e: KeyboardEvent) {
    if (this.flag && e.key !== 'process') {
      const keyWord = this.teacherSearchEl.originElement.nativeElement.children[0]
        .getAttribute('ng-reflect-value')
        .trim();
      if (keyWord.trim()) {
        this.searchSubject.next(keyWord);
      }
    }
  }
  selectOpen(e: boolean) {
    if (e) this.keyWord = null;
  }

  exportUseInfo() {
    this.common.download('/lab/exportLabApplyInfo');
    // this.service.exportUseList().subscribe();
  }

  ngAfterViewInit() {
    // 监听照片列表滚动，添加上传按钮阴影
    if (this.cache.functionPermissions('uploadLabPicture')) {
      fromEvent(document.querySelector('.image-group')!, 'scroll').subscribe((e: Event) => {
        if ((e.target! as any).scrollLeft > 0) {
          document.getElementsByClassName('ant-upload-picture-card-wrapper')[0].classList.add('shadow');
        } else {
          document.getElementsByClassName('ant-upload-picture-card-wrapper')[0].classList.remove('shadow');
        }
      });
    }
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
        this.labDrawer.visible = false;
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
      (this.labInfo.name !== this.labDrawer.formGroup.get('name')?.value ||
        this.labInfo.description !== this.labDrawer.formGroup.get('description')?.value)
    ) {
      this.service
        .setLabInfo({ labId: this.labInfo.id, ...this.labDrawer.formGroup.getRawValue() })
        .subscribe((res) => {
          this.labDrawer.visible = false;
          this.getLabInfo();
        });
    }
  }

  // 删除照片
  deletePicture(img: string) {
    const param = {
      labId: this.labId,
      image: img,
    };
    this.service.deletePicture(param).subscribe((res) => {
      if (this.labInfo.image instanceof Array) {
        const index = this.labInfo.image.findIndex((item) => item === img);
        this.labInfo.image.splice(index, 1);
      }
    });
  }

  handleUpload(e: NzUploadChangeParam) {
    if (e.file.status === 'done') {
      const param = {
        labId: this.labId,
        names: [e.file.response[0]],
      };
      this.service.uploadPicture(param).subscribe((res) => {
        this.getLabInfo(this.labId);
      });
    }
  }
}
