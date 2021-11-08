import { AuthGuard } from './../core/guard/auth.guard';
import { SharedModule } from './../shared/shared.module';
import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBasicComponent } from '../layout/basic/basic.component';
import { LayoutBlankComponent } from '../layout/blank/blank.component';

const COMPONENTS: Array<Type<null>> = [];

const routes: Routes = [
  // Basic Layout 基础布局
  {
    path: '',
    component: LayoutBasicComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      {
        path: 'index',
        loadChildren: () => import('./index/index.module').then((m) => m.IndexModule),
        data: {
          title: '首页', // 页面标题，默认系统名字
          key: 'index',
        },
      },
      {
        path: 'page-setup',
        loadChildren: () => import('./page-setup/page-setup.module').then((m) => m.PageSetupModule),
        data: {
          title: '页面设置',
          key: 'pageSetup',
        },
      },
      {
        path: 'permission-setup',
        loadChildren: () => import('./permission-setup/permission-setup.module').then((m) => m.PermissionSetupModule),
        data: {
          title: '权限设置',
          key: 'permissionSetup',
        },
      },
      {
        path: 'teacher-manage',
        loadChildren: () => import('./user-manage/user-manage.module').then((m) => m.UserManageModule),
        data: {
          title: '教师管理',
          key: 'teacherManage',
        },
      },
      {
        path: 'student-manage',
        loadChildren: () => import('./user-manage/user-manage.module').then((m) => m.UserManageModule),
        data: {
          title: '学生管理',
          key: 'studentManage',
        },
      },
      {
        path: 'course-manage',
        loadChildren: () => import('./course-manage/course-manage.module').then((m) => m.CourseManageModule),
        data: {
          title: '课程管理',
          key: 'courseManage',
        },
      },
      {
        path: 'course-manage/:id',
        loadChildren: () => import('./course-detail/course-detail.module').then((m) => m.CourseDetailModule),
        data: {
          title: '课程详细',
          key: 'courseDetail',
        },
      },
      {
        path: 'course-schedule',
        loadChildren: () => import('./course-schedule/course-schedule.module').then((m) => m.CourseScheduleModule),
        data: {
          title: '课程表',
          key: 'courseSchedule',
        },
      },
      {
        path: 'lab-manage',
        loadChildren: () => import('./lab-manage/lab-manage.module').then((m) => m.LabManageModule),
        data: {
          title: '机房列表',
          key: 'labManage',
        },
      },
      {
        path: 'lab-manage/:id',
        loadChildren: () => import('./lab-detail/lab-detail.module').then((m) => m.LabDetailModule),
        data: {
          title: '机房详细',
          key: 'labDetail',
        },
      },
      {
        path: 'application-list',
        loadChildren: () => import('./application-list/application-list.module').then((m) => m.ApplicationListModule),
        data: {
          title: '申请列表',
          key: 'applicationList',
        },
      },
      {
        path: 'apply',
        loadChildren: () => import('./apply/apply.module').then((m) => m.ApplyModule),
        data: {
          title: '申请详细',
          key: 'apply',
        },
      },
      {
        path: 'bulletin',
        loadChildren: () => import('./bulletin-list/bulletin-list.module').then((m) => m.BulletinListModule),
        data: {
          skipAuth: true,
        },
      },
    ],
  },
  // Blank Layout 空白布局../shared/components/modify-profile/modify-profile.module
  {
    path: 'blank',
    component: LayoutBlankComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: '/index', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: () => import('@pages/login/login.module').then((m) => m.LoginModule),
        data: {
          title: '登录',
          noLoginRequired: true,
        },
      },
    ],
  },
  // { path: '**', redirectTo: '/index' },
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  declarations: [...COMPONENTS],
})
export class PagesModule {}
