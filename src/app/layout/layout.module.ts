import { LayoutBlankComponent } from './blank/blank.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsProviderModule } from '../shared/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LayoutBasicComponent } from './basic/basic.component';

const COMPONENTS = [LayoutBasicComponent, LayoutBlankComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzButtonModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
