import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client.component";
import { RouterModule, Routes } from "@angular/router";
import { IconsProviderModule } from "../icons-provider.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "",
        redirectTo: "index",
        pathMatch: "full",
      },
      {
        path: "index",
        loadChildren: () => import("./pages/index/index.module").then((m) => m.IndexModule),
      },
      {
        path: "**",
        redirectTo: "index",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
  ],
  declarations: [ClientComponent],
})
export class ClientModule {}
