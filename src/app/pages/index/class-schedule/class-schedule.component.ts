import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { _session } from '@app/shared/utils/Storage';
import { userInfo } from '@app/shared/types/commonTypes';
import { IndexService } from '../index.service';

enum week {
  'single',
  'double',
}

@Component({
  selector: 'class-schedule',
  templateUrl: './class-schedule.component.html',
  styleUrls: ['./class-schedule.component.scss', '../index.component.scss'],
  providers: [IndexService],
})
export class ClassScheduleComponent implements OnInit {
  user: userInfo = _session.get('userInfo');
  week: week = week.single; // 单双周

  constructor() {}

  ngOnInit() {}
}
