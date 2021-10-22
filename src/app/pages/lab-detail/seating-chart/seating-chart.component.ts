import { NzMessageService } from 'ng-zorro-antd/message';
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
  courseTimes: number[] = []; // 选中的节次
  selectedSeat: number[] = [];
  originalChart: Array<Array<number>> = []; // 原始座位表
  seatingChart: Array<Array<number>> = []; // 座位表，包含预约信息
  chartCopy: Array<Array<number>> = []; // 修改座位表
  color = [
    null,
    'rgba(24,144,255,0.8)',
    'rgba(128,128,128,0.8)',
    'rgba(255,77,79,0.8)',
    'rgba(252,135,5,0.8)',
    'rgba(46,204,113,0.8)',
  ]; // 座位对应颜色
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
      const row = this.settingChart.row,
        column = this.settingChart.column;
      if (!row || !column) return;
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
    handleOk: () => {
      if (this.labId) {
        const flag = this.validateChart(this.originalChart, this.chartCopy);
        if (flag) {
          this.service.editSeatingChart({ labId: this.labId, chart: flag }).subscribe((res) => {
            this.settingChart.cancel();
            this.getSeatingChart();
          });
        } else {
          this.message.warning('未修改座位表！');
        }
      }
    },
    cancel: () => {
      this.settingChart.visible = false;
    },
  };

  constructor(private service: LabManageService, private message: NzMessageService) {}

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
        this.selectedTime = -1;
        this.seatingChart = this.originalChart;
        this.selectedSeat = [];
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
      this.courseTimes = [value];
      const param = {
        labId: this.labId!,
        time: value,
      };
      this.service.getFreeTimeChart(param).subscribe((res) => {
        this.seatingChart = res as Array<Array<number>>;
        if (this.selectedSeat.length) {
          this.selectedSeat[0] = (res as Array<Array<number>>)[this.selectedSeat[1] - 1][this.selectedSeat[2] - 1];
        }
      });
    }
  }

  // 点击座位
  clickSeat(status: number, isEdit: boolean, isSeat: boolean, data: any, row?: number, column?: number) {
    if (isEdit && data && row !== undefined && column !== undefined) {
      isSeat ? (data[row][column] = 0) : (data[row][column] = 1);
    } else {
      if (isSeat) this.selectedSeat = [status, ...data];
    }
  }

  // 校验座位表
  validateChart(old: Array<Array<number>>, now: Array<Array<number>>): Array<Array<number>> | false {
    // 旧座位表不存在，直接校验通过
    if (!old) return now;
    // 通过新旧课表交集，进行最小比较
    const row = Math.min(old.length, now.length);
    const col = Math.min(old[0].length, now[0].length);
    let isNew = false;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        // 原状态是2现状态是1的，恢复至2
        if (old[i][j] === 2 && now[i][j] === 1) now[i][j] = 2;
        // 状态值复原后，交集中任存在不一致，判断是新座位表
        if (old[i][j] !== now[i][j]) isNew = true;
      }
    }
    // 新旧座位表有超出交集部分，判断是新座位表
    if (old.length !== row || now.length !== row || old[0].length !== col || now[0].length !== col) {
      isNew = true;
    }
    return isNew ? now : false;
  }
}
