import { CacheService } from './../../core/services/cache.service';
import { ModifyProfileComponent } from './../../shared/components/modify-profile/modify-profile.component';
import { Router } from '@angular/router';
import { clearCache } from '@app/shared/utils/utils';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LayoutService } from './../layout.service';
import { environment } from './../../../environments/environment.mock';
import { CommonService } from '../../core/services/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { pageRoute, userInfo } from '@app/shared/types/commonTypes';
import { _session } from '@app/shared/utils/Storage';

@Component({
  selector: 'layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  providers: [LayoutService],
})
export class LayoutBasicComponent implements OnInit {
  @ViewChild('ProfileEl') ProfileEl!: ModifyProfileComponent;
  avatarPath = environment.avatarPath;
  menus: pageRoute[] = [];
  userInfo: userInfo | undefined;
  constructor(
    private commonService: CommonService,
    private service: LayoutService,
    private message: NzMessageService,
    private router: Router,
    public cache: CacheService,
  ) {}

  ngOnInit() {
    this.menus = _session.get('routes');
    this.userInfo = this.cache.userInfo;
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
      clearCache();
      this.router.navigate(['/blank/login']);
    });
  }

  menuClick(e: any) {}
}
