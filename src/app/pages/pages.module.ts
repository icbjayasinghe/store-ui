import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbMenuModule, NbActionsModule, NbIconModule, NbCardModule, NbUserModule } from '@nebular/theme';
import { HeaderComponent } from '../common/component/header/header.component';
// import { NgxLoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    HeaderComponent,
    // NgxLoginComponent
  ],
  imports: [
    CommonModule,
    NbSidebarModule,
    NbLayoutModule,
    PagesRoutingModule,
    NbMenuModule,
    NbActionsModule,
    NbIconModule,
    NbCardModule,
    NbUserModule

  ]
})
export class PagesModule { }
