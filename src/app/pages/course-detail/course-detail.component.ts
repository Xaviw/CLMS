import { UserManageComponent } from './../user-manage/user-manage.component';
import { AddCourseComponent } from './../../shared/components/add-course/add-course.component';
import { CourseManageService } from './../course-manage/course-manage.service';
import { CourseDetailInfo, User } from '@app/shared/types/commonTypes';
import { Component, OnInit, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  providers: [CourseManageService],
})
export class CourseDetailComponent implements OnInit {
  @ViewChild('addCourseEl') addCourseEl!: AddCourseComponent;
  studentList: User[] = [];
  checked: boolean = false;
  indeterminate: boolean = false;
  setOfCheckedId = new Set<string>(); // 已选中集合
  // 课表参数
  params = {
    courseId: '',
    week: 0, // 单双周
  };
  editable = false; // 启用编辑
  detailInfo!: CourseDetailInfo; // 课程信息
  // 添加学生Modal
  addStudent = {
    visible: false,
    open: () => {
      const modal = this.modal.create({
        nzTitle: '选择学生',
        nzWidth: '70%',
        nzBodyStyle: {
          height: window.innerHeight * 0.6 + 'px',
          overflow: 'auto',
        },
        nzContent: UserManageComponent,
        nzViewContainerRef: this.viewContainerRef,
        nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
        nzFooter: [
          {
            label: 'change component title from outside',
            onClick: (componentInstance) => {
              // componentInstance!.title = 'title in inner component is changed';
            },
          },
        ],
      });
      const instance = modal.getContentComponent();
      modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
      // Return a result when closed
      modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));

      // delay until modal instance created
      // setTimeout(() => {
      //   instance.subtitle = 'sub title is changed';
      // }, 2000);
    },
    cancel: () => {
      this.addStudent.visible = false;
    },
    handleOk: () => {},
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CourseManageService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      this.params.courseId = res.id;
      this.service.getCourseDetail().subscribe((res) => {
        this.detailInfo = res as CourseDetailInfo;
      });
    });
  }

  editCourse(e: Event) {
    console.log(e);
  }

  switchWeek() {
    this.params = { ...this.params };
  }

  onAllChecked(checked: boolean): void {
    this.studentList.forEach(({ account }) => this.updateCheckedSet(account, checked));
    this.refreshCheckedStatus();
  }

  // 添加/删除选中
  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  // 刷新全/半选状态
  refreshCheckedStatus(): void {
    this.checked = this.studentList.every(({ account }) => this.setOfCheckedId.has(account));
    this.indeterminate = this.studentList.some(({ account }) => this.setOfCheckedId.has(account)) && !this.checked;
  }

  // 选中时更新集合刷新全半选状态
  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  // 删除课程
  deleteCourse() {
    this.service.deleteCourse({ courseId: this.params.courseId }).subscribe((res) => {
      this.router.navigateByUrl('/course-manage');
    });
  }
}
