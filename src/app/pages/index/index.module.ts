import { RankListComponent } from './rank-list/rank-list.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { AcAreaComponent } from './ac-area/ac-area.component';
import { ApplyChartComponent } from './apply-chart/apply-chart.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { Routes, RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BulletinComponent } from './bulletin/bulletin.component';

const route: Routes = [{ path: '', component: IndexComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route), ScrollingModule],
  declarations: [
    IndexComponent,
    InfoCardComponent,
    ApplyChartComponent,
    BulletinComponent,
    AcAreaComponent,
    ClassScheduleComponent,
    LineChartComponent,
    RankListComponent,
  ],
})
export class IndexModule {}
