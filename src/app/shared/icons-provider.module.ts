import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  HomeOutline,
  CalendarOutline,
  DatabaseOutline,
  ShoppingCartOutline,
  ToolOutline,
  AppstoreAddOutline,
  BellOutline,
  DownOutline,
  UserOutline,
  EyeOutline,
  EyeInvisibleOutline,
  LockOutline,
  SettingOutline,
  AuditOutline,
  QuestionCircleTwoTone,
  InfoCircleTwoTone,
  SnippetsOutline,
  BulbOutline,
  ContainerOutline,
  UpOutline,
  LikeOutline,
  LikeTwoTone,
  NotificationOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  HomeOutline,
  CalendarOutline,
  DatabaseOutline,
  ShoppingCartOutline,
  ToolOutline,
  AppstoreAddOutline,
  BellOutline,
  DownOutline,
  UserOutline,
  EyeOutline,
  EyeInvisibleOutline,
  LockOutline,
  SettingOutline,
  AuditOutline,
  QuestionCircleTwoTone,
  InfoCircleTwoTone,
  SnippetsOutline,
  BulbOutline,
  ContainerOutline,
  UpOutline,
  LikeOutline,
  LikeTwoTone,
  NotificationOutline,
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class IconsProviderModule {}
