import { LabManageService } from './../../lab-manage/lab-manage.service';
import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

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
  selectedTime: number = -1; // 选中的时间段
  originalChart: Array<Array<number>> = []; // 原始座位表
  seatingChart: Array<Array<number>> = []; // 座位表，包含预约信息
  chartCopy: Array<Array<number>> = []; // 修改座位表
  color = [null, 'rgba(24,144,255,0.8)', 'rgba(128,128,128,0.8)', 'rgba(255,77,79,0.8)']; // 座位对应颜色
  date = new Date(); // 空闲时段日期，默认今天

  // 设置座位表
  settingChart = {
    visible: false,
    title: '',
    row: 1,
    column: 1,
    open: (title: string) => {
      if (this.originalChart?.length) {
        this.settingChart.row = this.originalChart?.length;
        this.settingChart.column = this.originalChart?.[0]?.length;
        this.chartCopy = _.cloneDeep(this.originalChart);
      } else {
        this.settingChart.row = 1;
        this.settingChart.column = 1;
        this.chartCopy = [[1]];
      }
      this.settingChart.title = title;
      this.settingChart.visible = true;
    },
    chartChange: (flag: boolean) => {
      console.log(this.chartCopy);
      const row = this.settingChart.row,
        column = this.settingChart.column;
      const row2 = this.chartCopy.length,
        column2 = this.chartCopy[0].length;
      if (flag) {
        // 行变动
        let diff = row - row2;
        if (diff > 0) {
          while (diff--) {
            this.chartCopy.push(Array(column).fill(1));
          }
        } else {
          for (let i = diff; i < 0; i++) {
            this.chartCopy.pop();
          }
        }
      } else {
        // 列变动
        let diff = column - column2;
        if (diff > 0) {
          this.chartCopy = this.chartCopy.map((item) => {
            return [...item, ...Array(diff).fill(1)];
          });
        } else {
          this.chartCopy = this.chartCopy.map((item) => item.slice(0, column2 + diff));
        }
      }
    },
    handleOk: () => {},
    cancel: () => {
      this.settingChart.visible = false;
    },
  };

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
        this.originalChart = res as Array<Array<number>>;
      });
    }
  }

  // 选中时间段
  checkTime(value: number, index: number) {
    if (this.selectedTime === index) {
      this.selectedTime = -1;
      this.seatingChart = this.originalChart;
    } else {
      this.selectedTime = index;
      const param = {
        labId: this.labId!,
        time: value,
      };
      this.service.getFreeTimeChart(param).subscribe((res) => {
        this.seatingChart = res as Array<Array<number>>;
      });
    }
  }
}
