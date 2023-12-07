import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbMenuModule } from '@nebular/theme';
// import { NgxLoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    // NgxLoginComponent
  ],
  imports: [
    CommonModule,
    NbSidebarModule,
    NbLayoutModule,
    PagesRoutingModule,
    NbMenuModule
  ]
})
export class PagesModule { }
