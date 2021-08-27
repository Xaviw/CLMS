import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as echarts from 'echarts';
import * as dayjs from 'dayjs';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss', '../index.component.scss'],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  date: Date[] = [dayjs().subtract(7, 'd').toDate(), dayjs().toDate()];
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

  dateChange(e: NzFormatEmitEvent) {
    console.log(e);
  }

  init() {
    this.Chart = echarts.init(this.element.nativeElement);
    this.loadChart();
  }

  loadChart() {
    const option = {
      color: ['#86fde8', '#fbc7d4', '#004E8F'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {
        data: ['全部', '女', '男'],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: 0,
        right: 20,
        bottom: 10,
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '全部',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.6,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(172,182,229)',
              },
              {
                offset: 1,
                color: 'rgb(134,253,232)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [90, 80, 100, 130, 30, 50, 50],
        },
        {
          name: '女',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.7,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(151,150,240)',
              },
              {
                offset: 1,
                color: 'rgb(251,199,212)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [50, 30, 40, 60, 20, 30, 20],
        },
        {
          name: '男',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.7,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(114,198,239)',
              },
              {
                offset: 1,
                color: 'rgb(0,78,143)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [40, 50, 60, 70, 10, 20, 30],
        },
      ],
    };
    this.Chart.setOption(option as echarts.EChartOption);
  }
}
