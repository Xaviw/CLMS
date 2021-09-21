import { CourseManageService } from './../course-manage.service';
import { Component, Input, OnInit } from '@angular/core';
import { CourseCard } from '@app/shared/types/commonTypes';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  providers: [CourseManageService],
})
export class CourseCardComponent implements OnInit {
  // 卡片信息
  @Input() data!: CourseCard;

  constructor(private service: CourseManageService) {}

  ngOnInit() {}

  deleteCourse() {
    this.service.deleteCourse({ courseId: this.data.courseId }).subscribe();
  }
}
