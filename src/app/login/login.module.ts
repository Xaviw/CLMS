import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { RouterModule, Routes } from "@angular/router";

const route: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(route)],
  declarations: [LoginComponent],
})
export class LoginModule {}
