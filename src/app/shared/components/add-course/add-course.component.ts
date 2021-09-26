import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CacheService } from '@app/core/services/cache.service';
import { NzSelectComponent } from 'ng-zorro-antd/select';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  // 抽屉确认
  @Input() operationText = '添加';
  @Output() operation: EventEmitter<any> = new EventEmitter();
  // 教师搜索框
  @ViewChild('teacherSearchEl') teacherSearchEl!: NzSelectComponent;
  // 班级列表
  class = {
    visible: false,
    list: <{ id: string; name: string }[]>[],
    handleOk: () => {},
    cancel: () => {
      this.class.visible = false;
      this.class.list = [];
    },
    getConditions: (e: Event) => {
      console.log(e);
    },
    tagClose: (id: string) => {
      const index = this.class.list.findIndex((item) => item.id === id);
      this.class.list.splice(index, 1);
    },
  };

  flag = true;
  visible = false;
  searchSubject = new Subject<string>();
  keyWord = null;
  teacherList = <{ value: string; label: string }[]>[];
  validateForm = this.fb.group({
    name: [null, [Validators.required]],
    teacher: [null, [Validators.required]],
    isRequired: [true, [Validators.required]],
    class: [null, [Validators.required]],
    weekRange: [null, [Validators.required]],
    description: [null, []],
  });
  handleOk() {
    const value = this.validateForm.getRawValue();
    this.operation.emit(value);
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
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder, public cache: CacheService) {}

  ngOnInit() {
    // 默认选中自己
    const user = this.cache.userInfo;
    this.teacherList = [{ value: user.account, label: user.name + '-' + user.account }];
    this.validateForm.get('teacher')?.patchValue(user.account);
    // 添加课程--搜索教师触发
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((keyword) => {
      console.log('keyword: ', keyword);
      // const data = {};
      // this.service.queryPersonList(data).subscribe((result) => {
      //   this.list = result;
      // });
    });
  }
}
