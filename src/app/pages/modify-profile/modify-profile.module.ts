import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModifyProfileComponent } from './modify-profile.component';

const route: Routes = [{ path: '', component: ModifyProfileComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [ModifyProfileComponent],
})
export class ModifyProfileModule {}
