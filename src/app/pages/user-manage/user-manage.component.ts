import { UserManageService } from './user-manage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
  providers: [UserManageService],
})
export class UserManageComponent implements OnInit {
  userData: any[] = [];

  constructor(private service: UserManageService) {}

  ngOnInit() {}

  // 查询用户
  queryUser(param: any) {
    this.service.queryUser(param).subscribe((res: any) => {
      this.userData = res.data as any[];
    });
  }
}
