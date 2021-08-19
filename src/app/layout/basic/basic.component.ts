import { environment } from './../../../environments/environment.mock';
import { CommonService } from '../../core/services/common.service';
import { Component, OnInit } from '@angular/core';
import { pageRoute, userInfo } from '@app/shared/types/commonTypes';
import { _session } from '@app/shared/utils/Storage';

@Component({
  selector: 'layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class LayoutBasicComponent implements OnInit {
  avatarServer = environment.avatarServer;
  menus: pageRoute[] = [];
  userInfo: userInfo | undefined;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.menus = _session.get('routes');
    this.userInfo = _session.get('userInfo');
    if (!this.menus || !this.userInfo) {
      this.commonService.getUserInfo().subscribe((res) => {
        this.menus = res.routes;
        _session.set('userInfo', res.user);
        _session.set('routes', res.routes);
      });
    }
  }
}
