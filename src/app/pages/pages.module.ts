import { AuthGuard } from './../core/guard/auth.guard';
import { LoginComponent } from './login/login.component';
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
          needLogin: true, // 访问是否需要登录，true才设置
          skipPermission: true, // 访问是否无需鉴权，true才设置
        },
      },
      {
        path: 'page-setup',
        loadChildren: () => import('./page-setup/page-setup.module').then((m) => m.PageSetupModule),
        data: {
          needLogin: true,
        },
      },
    ],
  },
  // Blank Layout 空白布局
  {
    path: 'blank',
    component: LayoutBlankComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: '/index', pathMatch: 'full' },
      { path: 'login', loadChildren: () => import('@pages/login/login.module').then((m) => m.LoginModule) },
    ],
  },
  { path: '**', redirectTo: '/index' },
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  declarations: [...COMPONENTS],
})
export class PagesModule {}
