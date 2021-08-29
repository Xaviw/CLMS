import { IndexService } from './index.service';
import { Component, OnInit } from '@angular/core';
import { _session } from '@app/shared/utils/Storage';

interface statistic {
  name: string;
  value: number;
  color: string;
}

interface labStatistic {
  total: number;
  free: number;
  data: statistic[];
}

interface equipmentStatistic {
  total: number;
  data: statistic[];
}

interface user extends statistic {
  men: number;
  women: number;
}

interface userStatistic {
  total: number;
  online: number;
  data: user[];
}

interface apply {
  name: string;
  value: number;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [IndexService],
})
export class IndexComponent implements OnInit {
  // 机房统计信息
  labStatistic: labStatistic | undefined;
  // 机房统计信息对应颜色
  labStatisticColors = ['#95a5a6', '#e74c3c', '#2ecc71'];
  // 机房快捷设置
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
  // 设备统计信息
  equipmentStatistic: equipmentStatistic | undefined;
  // 设备统计信息对应颜色
  equipmentStatisticColors = ['#95a5a6', '#e74c3c', '#3498db', '#2ecc71'];
  // 用户统计数据
  userStatistic: userStatistic | undefined;
  // 用户统计数据对应颜色
  userStatisticColors = ['#ffa502', '#1e90ff'];
  // 机房申请统计数据
  labApplyData: apply[] = [];
  // 采购申请统计数据
  shopApplyData: apply[] = [];
  // 报修申请统计数据
  repairApplyData: apply[] = [];

  constructor(private service: IndexService) {}

  ngOnInit() {
    this.getLabStatistic();
    this.getEquipmentStatistic();
    this.getUserStatistic();
  }

  // 获取机房统计数据
  getLabStatistic() {
    this.service.getLabStatistic().subscribe((res) => {
      (res as labStatistic).data.forEach((item) => {
        item.color = this.labStatisticColors.pop()!;
      });
      this.labStatistic = res as labStatistic;
      console.log('this.labStatistic: ', this.labStatistic);
    });
  }

  // 获取设备统计数据
  getEquipmentStatistic() {
    this.service.getEquipmentStatistic().subscribe((res) => {
      (res as equipmentStatistic).data.forEach((item) => {
        item.color = this.equipmentStatisticColors.pop()!;
      });
      this.equipmentStatistic = res as equipmentStatistic;
      console.log('this.equipmentStatistic: ', this.equipmentStatistic);
    });
  }

  // 获取用户统计信息
  getUserStatistic() {
    this.service.getUserStatistic().subscribe((res) => {
      (res as userStatistic).data.forEach((item) => {
        item.color = this.userStatisticColors.pop()!;
      });
      this.userStatistic = res as userStatistic;
      console.log('this.userStatistic: ', this.userStatistic);
    });
  }

  // 获取机房申请数据
  getLabApplyStatistic() {
    this.service.getLabApplyStatistic().subscribe((res) => {
      this.labApplyData = res as apply[];
    });
  }
  // 获取采购申请数据
  getShopApplyStatistic() {
    this.service.getShopApplyStatistic().subscribe((res) => {
      this.shopApplyData = res as apply[];
    });
  }
  // 获取报修申请数据
  getRepairApplyStatistic() {
    this.service.getRepairApplyStatistic().subscribe((res) => {
      this.repairApplyData = res as apply[];
    });
  }

  // 开放全部机房
  openAllLab() {}

  // 关闭全部机房
  closeAllLab() {}

  // 全部维修完成
  allRepairSuccessful() {}
}
