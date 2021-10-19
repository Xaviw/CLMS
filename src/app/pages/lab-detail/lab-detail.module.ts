import { SeatingChartComponent } from './seating-chart/seating-chart.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { LabDetailComponent } from './lab-detail.component';

const route: Routes = [{ path: '', component: LabDetailComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [LabDetailComponent, SeatingChartComponent],
})
export class LabDetailModule {}
