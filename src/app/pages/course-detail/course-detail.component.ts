import { AddCourseComponent } from './../../shared/components/add-course/add-course.component';
import { CourseManageService } from './../course-manage/course-manage.service';
import { CourseDetailInfo, User } from '@app/shared/types/commonTypes';
import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: CourseManageService) {}

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
