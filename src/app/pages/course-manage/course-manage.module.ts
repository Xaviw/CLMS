import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CourseManageComponent } from './course-manage.component';

const route: Routes = [{ path: '', component: CourseManageComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [CourseManageComponent],
})
export class CourseManageModule {}
