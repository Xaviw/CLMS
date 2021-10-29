import { BulletinComponent } from './bulletin/bulletin.component';
import { PublishBulletinComponent } from './publish-bulletin/publish-bulletin.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { BulletinListComponent } from './bulletin-list.component';

const route: Routes = [
  {
    path: 'list',
    component: BulletinListComponent,
    data: {
      title: '公告列表',
      needLogin: false,
      skipPermission: true,
    },
  },
  {
    path: 'publish',
    component: PublishBulletinComponent,
    data: {
      title: '发布公告',
      needLogin: true,
      skipPermission: true,
    },
  },
  {
    path: ':id',
    component: BulletinComponent,
    data: {
      title: '公告详情',
      needLogin: true,
      skipPermission: true,
    },
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [BulletinListComponent, PublishBulletinComponent],
})
export class BulletinListModule {}
