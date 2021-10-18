import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as echarts from 'echarts';
import { IndexService } from '../index.service';
import { statistic } from '@app/shared/types/commonTypes';

interface setting {
  text: string;
  value: number;
}

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss', '../index.component.scss'],
  providers: [IndexService],
})
export class InfoCardComponent implements OnInit, AfterViewInit {
  // 卡片标题
  @Input() title: string = '';
  // 数量单位
  @Input() unit: string = '';
  // 设置相关
  @Input() settings: setting[] | undefined;
  // 设置机房状态
  @Output() setLabStatus: EventEmitter<any> = new EventEmitter();
  // 数据
  _chartData: statistic | undefined;
  @Input()
  set chartData(v: statistic | undefined) {
    this._chartData = v;
    if (this.element) {
      this.init();
    }
  }
  get chartData() {
    return this._chartData;
  }
  get series() {
    return this.chartData?.data.map((item) => {
      return {
        name: item.name,
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        itemStyle: {
          color: item.color,
        },
        tooltip: {
          formatter: '{a}：{c}' + this.unit,
        },
        data: [item.value],
      };
    });
  }

  @ViewChild('cardElement') element!: ElementRef;
  Chart!: echarts.ECharts;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(window, 'resize')
      .pipe(debounceTime(300))
      .subscribe((event) => {
        this.Chart.resize();
      });
  }

  init() {
    this.Chart = echarts.init(this.element.nativeElement);
    this.loadChart();
  }

  loadChart() {
    const option = {
      grid: {
        left: 0,
        right: 0,
        bottom: -100,
        top: -100,
        containLabel: false,
      },
      tooltip: {
        trigger: 'item',
      },
      xAxis: {
        type: 'value',
        show: false,
        max: 'dataMax',
      },
      yAxis: {
        type: 'category',
        data: ['数量'],
        show: false,
      },
      series: this.series,
    };
    this.Chart.setOption(option as echarts.EChartOption);
  }
}
