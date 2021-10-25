import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ApplicationListComponent } from './application-list.component';

const route: Routes = [{ path: '', component: ApplicationListComponent }];

@NgModule({
  imports: [RouterModule.forChild(route), SharedModule],
  declarations: [ApplicationListComponent],
})
export class ApplicationListModule {}
