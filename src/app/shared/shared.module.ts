import { EmptyComponent } from './components/empty/empty.component';
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { IconsProviderModule } from './icons-provider.module';

const COMPONENTS: Array<Type<any>> = [EmptyComponent];
const DIRECTIVES: Array<Type<any>> = [];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...SHARED_ZORRO_MODULES],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
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
  ],
})
export class SharedModule {}
