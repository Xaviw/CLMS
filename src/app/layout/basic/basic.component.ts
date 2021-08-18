import { CommonRequestService } from './../../core/services/commonRequest.service';
import { CacheService } from './../../core/services/cache.service';
import { Component, OnInit } from '@angular/core';
import { pageRoute } from '@app/shared/types/commonTypes';

@Component({
  selector: 'layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class LayoutBasicComponent implements OnInit {
  menus: pageRoute[] = [];
  constructor(private commonRequest: CommonRequestService, private cacheService: CacheService) {}

  ngOnInit() {
    this.commonRequest.getUserInfo().subscribe((res) => {
      this.menus = res.routes;
      this.cacheService.userInfo = res;
    });
  }
}
