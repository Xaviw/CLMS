import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as echarts from 'echarts';

interface setting {
  text: string;
  func: Function;
}

interface series {
  name: string;
  data: number;
  color: string;
}

@Component({
  selector: 'app-infoCard',
  templateUrl: './infoCard.component.html',
  styleUrls: ['./infoCard.component.scss'],
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
  @Input() chart: series[] | undefined;
  get series() {
    return this.chart?.map((item) => {
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
        data: [item.data],
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

    setTimeout(() => {
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
