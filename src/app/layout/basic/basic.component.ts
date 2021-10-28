import { CacheService } from './../../core/services/cache.service';
import { ModifyProfileComponent } from './../../shared/components/modify-profile/modify-profile.component';
import { Router } from '@angular/router';
import { clearCache } from '@app/shared/utils/utils';
import * as base64 from 'js-base64';
import { base64Filter } from '@app/shared/utils/utils';
import { LayoutService } from './../layout.service';
import { environment } from './../../../environments/environment.mock';
import { CommonService } from '../../core/services/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageRoute, User } from '@app/shared/types/commonTypes';
import { _session } from '@app/shared/utils/Storage';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  providers: [LayoutService],
})
export class LayoutBasicComponent implements OnInit {
  @ViewChild('ProfileEl') ProfileEl!: ModifyProfileComponent;
  avatarPath = environment.avatarPath;
  menus: PageRoute[] = [];
  userInfo: User | undefined;

  checkInModal = {
    visible: false,
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    viewApplication: () => {
      if (this.cache.checkIn?.id) {
        this.checkInModal.close();
        const param = base64Filter(base64.encodeURI(JSON.stringify({ id: this.cache.checkIn.id })));
        this.router.navigate(['/apply'], { queryParams: { param } });
      } else {
        this.message.warning('签到时间已过，请在申请列表中查看');
        this.checkInModal.close();
      }
    },
    checkIn: () => {
      if (this.cache.checkIn?.id) {
        this.commonService.checkIn(this.cache.checkIn.id);
      } else {
        this.message.warning('签到时间已过，请在申请列表中查看');
        this.checkInModal.close();
      }
    },
  };

  constructor(
    public commonService: CommonService,
    private service: LayoutService,
    private router: Router,
    public cache: CacheService,
    private message: NzMessageService,
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
      this.cache.stopCheckInInterval();
      this.router.navigate(['/blank/login']);
    });
  }

  menuClick(e: any) {}
}
