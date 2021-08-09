import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
