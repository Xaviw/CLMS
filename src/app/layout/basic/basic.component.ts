import { Router } from '@angular/router';
import { clearCache } from '@app/shared/utils/utils';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LayoutService } from './../layout.service';
import { environment } from './../../../environments/environment.mock';
import { CommonService } from '../../core/services/common.service';
import { Component, OnInit } from '@angular/core';
import { pageRoute, userInfo } from '@app/shared/types/commonTypes';
import { _session } from '@app/shared/utils/Storage';

@Component({
  selector: 'layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  providers: [LayoutService],
})
export class LayoutBasicComponent implements OnInit {
  avatarPath = environment.avatarPath;
  menus: pageRoute[] = [];
  userInfo: userInfo | undefined;
  constructor(
    private commonService: CommonService,
    private service: LayoutService,
    private message: NzMessageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.menus = _session.get('routes');
    this.userInfo = _session.get('userInfo');
    if (!this.menus || !this.userInfo) {
      this.commonService.getUserInfo().subscribe((res: any) => {
        // 如果有头像，拼接头像完整地址
        if (res.userInfo?.avatar) {
          res.userInfo.avatar = this.avatarPath + res.userInfo.avatar;
        }
        this.menus = res.routes;
        this.userInfo = res.userInfo;
        _session.set('userInfo', res.userInfo);
        _session.set('routes', res.routes);
      });
    }
  }

  logout() {
    this.service.logout().subscribe(() => {
      this.message.success('已退出登录！');
      clearCache();
      this.router.navigate(['/blank/login']);
    });
  }
}
