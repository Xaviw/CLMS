import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  labInfo = [
    {
      name: '开放中',
      data: 6,
      color: '#2ecc71',
    },
    {
      name: '未开放',
      data: 4,
      color: '#e74c3c',
    },
    {
      name: '维修中',
      data: 2,
      color: '#95a5a6',
    },
  ];
  equipmentInfo = [
    {
      name: '正常',
      data: 321,
      color: '#2ecc71',
    },
    {
      name: '库存',
      data: 78,
      color: '#3498db',
    },
    {
      name: '维修中',
      data: 21,
      color: '#e74c3c',
    },
    {
      name: '已报废',
      data: 34,
      color: '#95a5a6',
    },
  ];
  userInfo = [
    {
      name: '学生',
      data: 8765,
      color: '#1e90ff',
    },
    {
      name: '教师',
      data: 678,
      color: '#ffa502',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
