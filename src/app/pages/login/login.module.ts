import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [LoginComponent],
})
export class LoginModule {}
