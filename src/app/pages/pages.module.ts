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
    data: {},
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      // { path: 'index', loadChildren: () => import('').then((m) => m) },
    ],
  },
  // Blank Layout 空白布局
  {
    path: 'blank',
    component: LayoutBlankComponent,
    children: [{ path: 'login', loadChildren: () => import('@pages/login/login.module').then((m) => m.LoginModule) }],
  },
  { path: '**', redirectTo: 'index' },
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes)],
  declarations: [...COMPONENTS],
})
export class PagesModule {}
