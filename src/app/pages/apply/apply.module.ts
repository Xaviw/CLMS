import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';

const route: Routes = [{ path: '', component: ApplyComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [ApplyComponent],
})
export class ApplyModule {}
