import { CacheService } from './../../core/services/cache.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class LayoutBasicComponent implements OnInit {
  menus: any;
  constructor() {}

  ngOnInit() {}
}
