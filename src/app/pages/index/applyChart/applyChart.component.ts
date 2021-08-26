import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as echarts from 'echarts';

interface chart {
  name: string;
  value: number;
}

@Component({
  selector: 'app-applyChart',
  templateUrl: './applyChart.component.html',
  styleUrls: ['./applyChart.component.scss', '../index.component.scss'],
})
export class ApplyChartComponent implements OnInit {
  // 标题
  @Input() title: string = '';
  // 详细地址
  @Input() viewDetail: string | undefined;
  // 数据
  @Input() data: chart[] | undefined;

  @ViewChild('chartElement') element!: ElementRef;
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
        right: 0,
        bottom: 0,
        top: 0,
        containLabel: true,
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        // orient: 'vertical',
        bottom: 'bottom',
      },
      series: [
        {
          name: this.title,
          type: 'pie',
          radius: '70%',
          data: this.data,
          labelLine: {
            length: 5,
          },
          center: ['50%', '45%'],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    this.Chart.setOption(option as echarts.EChartOption);
  }
}
