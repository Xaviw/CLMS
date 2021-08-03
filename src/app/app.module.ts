import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { zh_CN } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthInterceptor } from './utils/http-interceptors/auth-interceptor';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from "ng-zorro-antd/notification";

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMessageModule,
    NzNotificationModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
