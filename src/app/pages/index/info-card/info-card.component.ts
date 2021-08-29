import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as echarts from 'echarts';
import { IndexService } from '../index.service';

interface setting {
  text: string;
  func: Function;
}

interface series {
  name: string;
  value: number;
  color: string;
}

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss', '../index.component.scss'],
  providers: [IndexService],
})
export class InfoCardComponent implements OnInit {
  // 卡片标题
  @Input() title: string = '';
  // 数量
  @Input() quantity: number = 0;
  // 数量单位
  @Input() unit: string = '';
  // 其他信息
  @Input() info: string = '';
  // 设置相关
  @Input() settings: setting[] | undefined;
  // 图表相关
  @Input() chartData: series[] | undefined;
  get series() {
    return this.chartData?.map((item) => {
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

  ngOnInit() {
    console.log(this.chartData);
  }

  ngAfterViewInit() {
    fromEvent(window, 'resize')
      .pipe(debounceTime(300))
      .subscribe((event) => {
        this.Chart.resize();
      });

    setTimeout(() => {
      // console.log(this.chartData);
      this.init();
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
        right: -70,
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
