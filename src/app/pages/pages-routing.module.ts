import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@env/environment';

// layout
import { LayoutBasicComponent } from '../layout/basic/basic.component';
import { LayoutBlankComponent } from '../layout/blank/blank.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
