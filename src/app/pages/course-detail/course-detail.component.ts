import { ScheduleComponent } from './../../shared/components/schedule/schedule.component';
import { UserManageComponent } from './../user-manage/user-manage.component';
import { AddCourseComponent } from './../../shared/components/add-course/add-course.component';
import { CourseManageService } from './../course-manage/course-manage.service';
import { CourseDetailInfo, User, CourseAddInfo } from '@app/shared/types/commonTypes';
import { Component, OnInit, EventEmitter, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UploadDrawerComponent } from '@app/shared/components/upload-drawer/upload-drawer.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  providers: [CourseManageService],
})
export class CourseDetailComponent implements OnInit {
  @ViewChild('addCourseEl') addCourseEl!: AddCourseComponent;
  @ViewChild('scheduleEl') scheduleEl!: ScheduleComponent;
  @ViewChild('uploadDrawerEl') uploadDrawerEl!: UploadDrawerComponent;
  studentList: User[] = [];
  checked: boolean = false;
  indeterminate: boolean = false;
  setOfCheckedId = new Set<string>(); // 已选中集合
  // 课表参数
  params!: { courseId: string; weekTime: number };
  editable = false; // 启用编辑
  detailInfo!: CourseDetailInfo; // 课程信息
  // 添加学生Modal
  addStudent = {
    instance: <any>null,
    create: (tplFooter: TemplateRef<{}>) => {
      const modal = this.modal.create({
        nzTitle: '选择学生',
        nzWidth: '90%',
        nzBodyStyle: {
          height: window.innerHeight * 0.7 + 'px',
          overflow: 'auto',
        },
        nzContent: UserManageComponent,
        nzComponentParams: {
          checkMode: true,
          defaultChecked: this.studentList.map((item) => item.account),
        },
        nzMaskClosable: false,
        nzViewContainerRef: this.viewContainerRef,
        nzFooter: tplFooter,
      });
      const instance = modal.getContentComponent();
      this.addStudent.instance = instance;
    },
    handleOk: () => {
      console.log(this.addStudent.instance);
      console.log((this.addStudent.instance as UserManageComponent).setOfCheckedId);
      // this.service.addCourseStudent().subscribe(res => {
      //   this.getCourseDetail();
      // })
    },
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
      // 从路径获取课程id
      this.getCourseDetail(res.id);
    });
  }

  // 获取课程基础信息
  getCourseDetail(id?: string) {
    this.service.getCourseDetail(id ?? this.params.courseId).subscribe((res) => {
      this.detailInfo = res as CourseDetailInfo;
      this.params = {
        courseId: id ?? this.params.courseId,
        weekTime: this.detailInfo.weekTime,
      };
      this.getCourseStudent();
    });
  }

  // 获取课程学生信息
  getCourseStudent() {
    this.service.getCourseStudent(this.params.courseId).subscribe((res) => {
      this.studentList = res as User[];
    });
  }

  // 修改课程基础信息
  editCourse(e: CourseAddInfo) {
    this.service.modifyCourseInfo({ ...e, courseId: this.params.courseId }).subscribe((res) => {
      this.getCourseDetail();
    });
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

  // 删除学生
  deleteStudent() {
    this.service
      .deleteCourseStudent({ course_id: this.params.courseId, user_id: Array.from(this.setOfCheckedId) })
      .subscribe((res) => {
        this.getCourseStudent();
      });
  }

  edit() {
    if (this.editable) {
      this.scheduleEl.saveEdit();
    } else {
      this.editable = true;
    }
  }

  cancelEdit() {
    this.editable = false;
  }

  // 切换单双周
  weekTimeChange(e: number) {
    this.params = {
      courseId: this.params.courseId,
      weekTime: e,
    };
  }
}
