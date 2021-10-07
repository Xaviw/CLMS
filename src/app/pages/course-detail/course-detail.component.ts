import { CourseManageService } from './../course-manage/course-manage.service';
import { User } from '@app/shared/types/commonTypes';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface CourseInfo {
  courseName: string;
  courseId: string;
  teacherName: string;
  teacherId: string;
  isCompulsory: boolean;
  classes?: Array<{ id: string; name: string }>;
  description?: string;
  count?: number;
  startWeek: number;
  endWeek: number;
  studentCount?: number;
}

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  providers: [CourseManageService],
})
export class CourseDetailComponent implements OnInit {
  studentList: User[] = [];
  checked: boolean = false;
  indeterminate: boolean = false;
  setOfCheckedId = new Set<string>(); // 已选中集合
  // 课表参数
  params = {
    courseId: null,
    week: 0, // 单双周
  };
  editable = false; // 启用编辑
  detailInfo?: CourseInfo; // 课程信息
  classText?: string;

  constructor(private activatedRoute: ActivatedRoute, private service: CourseManageService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      this.params.courseId = res.id;
      this.service.getCourseDetail().subscribe((res) => {
        this.detailInfo = res as CourseInfo;
        if ((res as CourseInfo).classes) {
          this.classText = (res as CourseInfo).classes?.map((item) => item.name).join('，');
        }
      });
    });
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
}
