import { UserManageService } from './user-manage.service';
import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

interface filterType {
  id: string;
  name: string;
}

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
  providers: [UserManageService],
})
export class UserManageComponent implements OnInit {
  maxGrade: number | undefined; // 计算最近一级
  grade = 0; // 年级
  collegeData: filterType[] = []; // 学院数据
  college = 0; // 学院
  constructor(private service: UserManageService) {}

  ngOnInit() {
    this.maxGrade = dayjs().month() > 8 ? dayjs().year() : dayjs().year() - 1;
    this.getCollege();
  }

  // 获取学院信息
  getCollege() {
    this.service.getCollege().subscribe((res) => {
      this.collegeData = res as filterType[];
    });
  }
}
