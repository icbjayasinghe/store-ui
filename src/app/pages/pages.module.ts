import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbMenuModule } from '@nebular/theme';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
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
