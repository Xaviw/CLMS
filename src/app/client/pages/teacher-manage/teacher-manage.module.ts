import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherManageComponent } from './teacher-manage.component';

const route: Routes = [{path: '', component: TeacherManageComponent}]

@NgModule({
  declarations: [
    TeacherManageComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(route)
  ]
})
export class TeacherManageModule { }
