import { FromNowPipe } from './pipes/from-now.pipe';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { EmptyComponent } from './components/empty/empty.component';
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { IconsProviderModule } from './icons-provider.module';

const COMPONENTS: Array<Type<any>> = [EmptyComponent, ScheduleComponent];
const DIRECTIVES: Array<Type<any>> = [];
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
