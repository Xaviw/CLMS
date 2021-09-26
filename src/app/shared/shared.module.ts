import { AddCourseComponent } from './components/add-course/add-course.component';
import { ModifyProfileComponent } from '@shared/components/modify-profile/modify-profile.component';
import { UserModifyDrawerComponent } from './components/user-modify-drawer/user-modify-drawer.component';
import { CascadeConditionComponent } from './components/cascade-condition/cascade-condition.component';
import { EmptyDirective } from './directives/empty.directive';
import { FromNowPipe } from './pipes/from-now.pipe';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { IconsProviderModule } from './icons-provider.module';

const COMPONENTS: Array<Type<any>> = [
  ScheduleComponent,
  CascadeConditionComponent,
  UserModifyDrawerComponent,
  ModifyProfileComponent,
  AddCourseComponent,
];
const DIRECTIVES: Array<Type<any>> = [EmptyDirective];
const PIPES: Array<Type<any>> = [FromNowPipe];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...SHARED_ZORRO_MODULES],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IconsProviderModule,
    ...SHARED_ZORRO_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
})
export class SharedModule {}
