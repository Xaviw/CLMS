import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class LayoutBasicComponent implements OnInit {
  menus = [
    {
      name: '首页',
      link: '/client/index',
      icon: 'home',
    },
    {
      name: '系统管理',
      icon: 'user',
      children: [
        {
          name: '教师管理',
          link: '/client/teacher-manage',
        },
        {
          name: '学生管理',
          link: '/client/student-manage',
        },
        {
          name: '权限管理',
          link: '/client/permission-manage',
        },
      ],
    },
    {
      name: '课程表',
      link: '/client/class-schedule',
      icon: 'calendar',
    },
    {
      name: '机房信息',
      link: '/client/computer-lab',
      icon: 'database',
    },
    {
      name: '机房申请',
      link: '/client/lab-apply',
      icon: 'appstore-add',
    },
    {
      name: '采购申请',
      link: '/client/shop-apply',
      icon: 'shopping-cart',
    },
    {
      name: '设备报修',
      link: '/client/repair-apply',
      icon: 'tool',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
