import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserManageComponent } from './user-manage.component';

const route: Routes = [{ path: '', component: UserManageComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [UserManageComponent],
})
export class UserManageModule {}
