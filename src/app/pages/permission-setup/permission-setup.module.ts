import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PermissionSetupComponent } from './permission-setup.component';

const route: Routes = [{ path: '', component: PermissionSetupComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [PermissionSetupComponent],
})
export class PermissionSetupModule {}
