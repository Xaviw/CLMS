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
  labSettings = [
    {
      text: '开放全部机房',
      func: this.openAllLab,
    },
    {
      text: '关闭全部机房',
      func: this.closeAllLab,
    },
    {
      text: '全部维修完成',
      func: this.allRepairSuccessful,
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
  labApplyData = [
    {
      name: '待审核',
      value: 1,
    },
    {
      name: '已通过',
      value: 0,
    },
    {
      name: '未通过',
      value: 0,
    },
    {
      name: '未完成',
      value: 3,
    },
    {
      name: '已完成',
      value: 12,
    },
    {
      name: '取消',
      value: 5,
    },
  ];
  shopApplyData = [
    {
      name: '待审核',
      value: 2,
    },
    {
      name: '已通过',
      value: 24,
    },
    {
      name: '未通过',
      value: 1,
    },
    {
      name: '未完成',
      value: 10,
    },
    {
      name: '已完成',
      value: 14,
    },
    {
      name: '取消',
      value: 5,
    },
  ];
  repairApplyData = [
    {
      name: '已提交',
      value: 2,
    },
    {
      name: '维修中',
      value: 1,
    },
    {
      name: '已完成',
      value: 1,
    },
    {
      name: '已取消',
      value: 0,
    },
  ];
  constructor() {}

  ngOnInit() {}

  // 开放全部机房
  openAllLab() {}

  // 关闭全部机房
  closeAllLab() {}

  // 全部维修完成
  allRepairSuccessful() {}
}
