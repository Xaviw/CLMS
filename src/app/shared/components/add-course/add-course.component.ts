import { CourseManageService } from './../../../pages/course-manage/course-manage.service';
import { Component, Input, OnInit, Output, ViewChild, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CacheService } from '@app/core/services/cache.service';
import { validateForm } from '@app/shared/utils/utils';
import { NzSelectComponent } from 'ng-zorro-antd/select';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CourseDetailInfo, FilterType } from '@app/shared/types/commonTypes';
import * as _ from 'lodash';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  // 抽屉确认
  @Input() operationText = '添加';
  _default?: CourseDetailInfo;
  @Input() default?: CourseDetailInfo;
  @Output() operation: EventEmitter<any> = new EventEmitter();
  // 教师搜索框
  @ViewChild('teacherSearchEl') teacherSearchEl!: NzSelectComponent;
  // 班级列表
  class = {
    visible: false,
    list: <{ id: string; name: string }[]>[],
    handleOk: () => {
      this.validateForm.get('class')?.patchValue(this.class.list.map((item) => item.id));
      this.class.visible = false;
    },
    cancel: () => {
      this.class.visible = false;
      this.class.list = _.cloneDeep(this._default?.class) ?? [];
      this.validateForm.get('class')?.patchValue(this._default?.class?.map((item) => item.id) ?? null);
    },
    getConditions: (e: any) => {
      if (e.code === 'class' && !this.class.list.some((item) => item.id === e.data.class.id)) {
        this.class.list.push(e.data.class);
      } else if (e.code === 'chargeClass' && !this.class.list.some((item) => item.id === e.data.chargeClass.id)) {
        this.class.list.push(e.data.chargeClass);
      }
    },
    // 删除组件中tag
    tagClose: (id: string) => {
      const index = this.class.list.findIndex((item) => item.id === id);
      this.class.list.splice(index, 1);
    },
    // 删除表单中班级tag，同步删除组件中tag
    tagChange: (e: string[]) => {
      for (let i = 0; i < this.class.list.length; i++) {
        if (!e.some((item) => item === this.class.list[i].id)) {
          this.class.list.splice(i, 1);
        }
      }
    },
  };

  flag = true; // 标记Input事件结束（跳过拼音录入阶段）
  visible = false;
  searchSubject = new Subject<string>();
  keyWord = null;
  teacherList = <{ value: string; label: string }[]>[];
  validateForm = this.fb.group({
    name: [null, [Validators.required]],
    teacher: [null, [Validators.required]],
    isCompulsory: [true, [Validators.required]],
    class: [null, [Validators.required]],
    startWeek: [null, [Validators.required]],
    endWeek: [null, [Validators.required]],
    weekTime: [false, [Validators.required]],
    description: [null, []],
  });
  handleOk() {
    validateForm(this.validateForm.controls);
    if (this.validateForm.valid) {
      const value = this.validateForm.getRawValue();
      this.operation.emit(value);
    }
  }
  requiredChange(e: Event) {
    if (e) {
      this.validateForm.addControl('class', new FormControl(null, Validators.required));
    } else {
      this.validateForm.removeControl('class');
    }
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
  selectChange(value: null | string) {
    if (value === null) return;
    // const data = {};
    // this.service.queryPersonRowNumber(data).subscribe(num = >{
    // 	table.pageIndex = parseInt(num / table.pageSize + '') + 1;
    // 	table.selectedRowIndex = num % table.pageSize;
    // 	table.evtPageChange(false, true);
    // });
  }
  open() {
    this.visible = true;
  }
  close() {
    this.visible = false;
  }
  cancel() {
    this.visible = false;
    this.reset();
  }
  reset() {
    this.validateForm.reset();
    if (this._default) {
      this.defaultPatch(this._default);
    } else {
      // 默认选中自己
      const user = this.cache.userInfo;
      this.teacherList = [{ value: user.account, label: user.name + '-' + user.account }];
      this.validateForm.get('teacher')?.patchValue(user.account);
    }
  }

  constructor(private fb: FormBuilder, public cache: CacheService, private service: CourseManageService) {}

  ngOnInit() {
    this.reset();
    // 添加课程--搜索教师触发
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((keyword) => {
      this.service.queryTeacherList(keyword).subscribe((result) => {
        this.teacherList = result as { value: string; label: string }[];
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.default?.currentValue && !this._default) {
      this._default = _.cloneDeep(changes.default.currentValue);
      this.defaultPatch(this._default!);
    }
  }

  defaultPatch(v: CourseDetailInfo) {
    this.teacherList = [{ label: v.teacherName + '-' + v.teacherId, value: v.teacherId }];
    this.validateForm.patchValue({
      name: v.courseName,
      teacher: v.teacherId,
      isCompulsory: v.isCompulsory,
      startWeek: v.startWeek,
      endWeek: v.endWeek,
      weekTime: v.weekTime,
      description: v.description,
    });
    if (v.class?.length) {
      this.class.list = [...v.class];
      this.validateForm.get('class')?.patchValue(v.class.map((item: FilterType) => item.id));
    }
  }
}
