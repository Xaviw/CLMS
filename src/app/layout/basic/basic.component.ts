import { CacheService } from './../../core/services/cache.service';
import { ModifyProfileComponent } from './../../shared/components/modify-profile/modify-profile.component';
import { Router } from '@angular/router';
import { base64Filter } from '@app/shared/utils/utils';
import { environment } from './../../../environments/environment';
import { CommonService } from '../../core/services/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageRoute, User } from '@app/shared/types/commonTypes';
import { _session } from '@app/shared/utils/Storage';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class LayoutBasicComponent implements OnInit {
  @ViewChild('ProfileEl') ProfileEl!: ModifyProfileComponent;
  avatarPath = environment.api;
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
        const param = base64Filter({ id: this.cache.checkIn.id });
        this.router.navigate(['/apply'], { queryParams: { param } });
      } else {
        this.message.warning('签到时间已过，请在申请列表中查看');
        this.checkInModal.close();
      }
    },
    checkIn: () => {
      if (this.cache.checkIn?.id) {
        this.commonService.checkIn(this.cache.checkIn.id).subscribe(() => {
          this.checkInModal.close();
          this.cache.checkIn = null;
        });
      } else {
        this.message.warning('签到时间已过，请在申请列表中查看');
        this.checkInModal.close();
      }
    },
  };

  constructor(
    public commonService: CommonService,
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
        _session.set('pagePermissions', res.pagePermissions);
        _session.set('functionPermissions', res.functionPermissions);
        this.cache.startCheckInInterval();
      });
    }
  }

  logout() {
    this.commonService.logout().subscribe(() => {
      this.cache.clearCache();
      this.router.navigate(['/blank/login']);
    });
  }

  back() {
    history.back();
  }

  menuClick(e: any) {}
}
