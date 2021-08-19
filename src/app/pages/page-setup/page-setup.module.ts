import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSetupComponent } from './page-setup.component';

const route: Routes = [{ path: '', component: PageSetupComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [PageSetupComponent],
})
export class PageSetupModule {}
