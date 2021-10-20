import { LabManageService } from './../../lab-manage/lab-manage.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'seating-chart',
  templateUrl: './seating-chart.component.html',
  styleUrls: ['./seating-chart.component.scss'],
})
export class SeatingChartComponent implements OnInit {
  // 机房id
  _labId?: string;
  @Input()
  set labId(v: string | undefined) {
    if (v) {
      this._labId = v;
      this.getSeatingChart();
      this.dateChange(new Date());
    }
  }
  get labId() {
    return this._labId;
  }

  freeTimeRange: number[] = []; // 空闲时间段
  seatingChart: Array<Array<number>> = []; // 机房座位表
  color = [null, 'rgba(24,144,255,0.8)', 'rgba(128,128,128,0.8)', 'rgba(255,77,79,0.8)']; // 座位对应颜色
  date = new Date(); // 空闲时段日期，默认今天

  constructor(private service: LabManageService) {}

  ngOnInit() {}

  // 切换日期
  dateChange(e: Date) {
    if (this.labId) {
      const param = {
        labId: this.labId,
        date: e,
      };
      this.service.getFreeTimeRange(param).subscribe((res) => {
        this.freeTimeRange = res as number[];
      });
    }
  }

  // 获取机房座位表
  getSeatingChart() {
    if (this.labId) {
      this.service.getSeatingChart(this.labId).subscribe((res) => {
        this.seatingChart = res as Array<Array<number>>;
      });
    }
  }
}
