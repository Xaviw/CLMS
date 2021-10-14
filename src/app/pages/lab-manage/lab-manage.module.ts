import { LabCardComponent } from './lab-card/lab-card.component';
import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LabManageComponent } from './lab-manage.component';

const route: Routes = [{ path: '', component: LabManageComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [LabManageComponent, LabCardComponent],
})
export class LabManageModule {}
