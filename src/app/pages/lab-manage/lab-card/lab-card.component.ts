import { CommonService } from '@app/core/services/common.service';
import { LabManageService } from './../lab-manage.service';
import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { LabInfo } from '@app/shared/types/commonTypes';
import { LabStatus } from '@app/shared/enum/enum';

@Component({
  selector: 'lab-card',
  templateUrl: './lab-card.component.html',
  styleUrls: ['./lab-card.component.scss'],
  providers: [LabManageService],
})
export class LabCardComponent implements OnInit {
  // 卡片封面
  @ViewChild('labCoverEl') labCoverEl!: ElementRef;
  // 数据
  @Input() labInfo!: LabInfo;
  // 刷新
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  // 状态枚举
  labStatus = LabStatus;

  constructor(private service: LabManageService, private common: CommonService) {}

  ngOnInit() {}

  // 删除机房
  deleteLab() {
    this.service.deleteLab(this.labInfo.id).subscribe((res) => {
      this.refresh.emit();
    });
  }

  // 设置机房状态
  setLabStatus(status: LabStatus) {
    this.common.setLabStatus({ labIds: [this.labInfo.id], status }).subscribe((res) => {
      this.refresh.emit();
    });
  }
}
