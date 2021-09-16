import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.scss'],
})
export class CourseManageComponent implements OnInit {
  param: any;
  constructor() {}

  ngOnInit() {}

  // 接收参数
  getConditions(param: any) {
    this.param = param;
  }
}
