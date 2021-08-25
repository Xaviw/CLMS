import { InfoCardComponent } from './infoCard/infoCard.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [{ path: '', component: IndexComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [IndexComponent, InfoCardComponent],
})
export class IndexModule {}
