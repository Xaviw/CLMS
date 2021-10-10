import { UserManageModule } from './../user-manage/user-manage.module';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CourseDetailComponent } from './course-detail.component';

const route: Routes = [{ path: '', component: CourseDetailComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(route)],
  declarations: [CourseDetailComponent],
})
export class CourseDetailModule {}
