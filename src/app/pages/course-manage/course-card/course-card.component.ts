import { CourseManageService } from './../course-manage.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseCard } from '@app/shared/types/commonTypes';
import { CacheService } from '@app/core/services/cache.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  providers: [CourseManageService],
})
export class CourseCardComponent implements OnInit {
  // 卡片信息
  @Input() data!: CourseCard;
  // 删除后刷新
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(private service: CourseManageService, public cache: CacheService) {}

  ngOnInit() {}

  deleteCourse() {
    this.service.deleteCourse({ courseId: this.data.courseId }).subscribe((res) => {
      this.delete.emit();
    });
  }
}
