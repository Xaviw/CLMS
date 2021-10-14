import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CourseScheduleComponent } from './course-schedule.component';

const route: Routes = [{ path: '', component: CourseScheduleComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [CourseScheduleComponent],
})
export class CourseScheduleModule {}
