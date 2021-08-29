import { IndexService } from './../index.service';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as echarts from 'echarts';
import * as dayjs from 'dayjs';

interface applyHistory {
  date: string[];
  total: number[];
  men: number[];
  women: number[];
}

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss', '../index.component.scss'],
  providers: [IndexService],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  // 时间范围
  date: Date[] = [dayjs().subtract(7, 'd').toDate(), dayjs().toDate()];
  // 数据
  data: applyHistory | undefined;
  @ViewChild('chartElement') element!: ElementRef;
  Chart!: echarts.ECharts;

  constructor(private service: IndexService) {}

  ngOnInit() {
    this.getHistoryStatistic();
  }

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

  // 获取自习统计数据
  getHistoryStatistic() {
    const param = {
      startTime: dayjs(this.date[0]).format('yyyy-MM-dd'),
      endTime: dayjs(this.date[1]).format('yyyy-MM-dd'),
    };
    this.service.getHistoryStatistic(param).subscribe((res) => {
      this.data = res as applyHistory;
    });
  }

  dateChange(e: NzFormatEmitEvent) {
    console.log('e: ', e);
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
          data: this.data?.date,
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
          data: this.data?.total,
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
          data: this.data?.women,
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
          data: this.data?.men,
        },
      ],
    };
    this.Chart.setOption(option as echarts.EChartOption);
  }
}
