import { CommonService } from '@app/core/services/common.service';
import { validateForm } from '@shared/utils/utils';
import { FormBuilder, Validators } from '@angular/forms';
import { LabManageService } from './lab-manage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LabInfo } from '@app/shared/types/commonTypes';
import { CacheService } from '@app/core/services/cache.service';
import { NzSelectComponent } from 'ng-zorro-antd/select';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CourseManageService } from '../course-manage/course-manage.service';

@Component({
  selector: 'lab-manage',
  templateUrl: './lab-manage.component.html',
  styleUrls: ['./lab-manage.component.scss'],
  providers: [LabManageService, CourseManageService],
})
export class LabManageComponent implements OnInit {
  labList: LabInfo[] = [];
  // 添加机房抽屉
  addLabDrawer = {
    visible: false,
    formGroup: this.fb.group({
      name: [null, [Validators.required]],
      description: [null],
      adminId: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    }),
    cancel() {
      this.formGroup.reset();
      this.visible = false;
    },
    handleOk: () => {
      validateForm(this.addLabDrawer.formGroup.controls);
      if (this.addLabDrawer.formGroup.valid) {
        this.service.addLab(this.addLabDrawer.formGroup.getRawValue()).subscribe((res) => {
          this.addLabDrawer.cancel();
          this.getLabList();
        });
      }
    },
  };

  constructor(
    private service: LabManageService,
    private courseService: CourseManageService,
    private fb: FormBuilder,
    private common: CommonService,
    public cache: CacheService,
  ) {}

  searchSubject = new Subject<string>();
  keyWord = null;
  // 教师搜索框
  @ViewChild('teacherSearchEl') teacherSearchEl!: NzSelectComponent;
  flag = true;
  teacherList = <{ value: string; label: string }[]>[];

  ngOnInit() {
    this.getLabList();
    // 添加课程--搜索教师触发
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((keyword) => {
      this.courseService.queryTeacherList(keyword).subscribe((result) => {
        this.teacherList = result as { value: string; label: string }[];
      });
    });
  }

  selectSearch(e: string) {
    // if (this.flag && e.key !== 'process') {
    //   const keyWord = this.teacherSearchEl.originElement.nativeElement.children[0]
    //     .getAttribute('ng-reflect-value')
    //     .trim();
    //   if (keyWord.trim()) {
    this.searchSubject.next(e);
    // }
    // }
  }
  selectOpen(e: boolean) {
    if (e) this.keyWord = null;
  }

  // 获取机房列表
  getLabList() {
    this.common.getLabList().subscribe((res) => {
      this.labList = res as LabInfo[];
    });
  }
}
