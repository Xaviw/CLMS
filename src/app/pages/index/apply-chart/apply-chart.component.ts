import { base64Filter } from '@shared/utils/utils';
import { Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as echarts from 'echarts';
import * as base64 from 'js-base64';

interface chart {
  name: string;
  value: number;
}

@Component({
  selector: 'apply-chart',
  templateUrl: './apply-chart.component.html',
  styleUrls: ['./apply-chart.component.scss', '../index.component.scss'],
})
export class ApplyChartComponent implements OnInit, AfterViewInit {
  // 标题
  @Input() title: string = '';
  // 详细地址
  @Input() detailParam: string | undefined;
  // 数据
  _chartData: chart[] | undefined;
  @Input()
  set chartData(v: chart[] | undefined) {
    this._chartData = v;
    if (this.element) {
      this.init();
    }
  }
  get chartData() {
    return this._chartData;
  }

  @ViewChild('chartElement') element!: ElementRef;
  Chart!: echarts.ECharts;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(window, 'resize')
      .pipe(debounceTime(300))
      .subscribe((event) => {
        this.Chart.resize();
      });
  }

  redirectToDetail() {
    let type;
    if (this.title === '机房申请') type = 0;
    else if (this.title === '采购申请') type = 1;
    else if (this.title === '报修申请') type = 2;
    this.router.navigate(['/application-list'], {
      queryParams: { param: base64Filter({ type }) },
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
          data: this.chartData,
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
