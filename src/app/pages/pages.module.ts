import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbMenuModule, NbActionsModule, NbIconModule, NbCardModule, NbUserModule, NbTreeGridModule } from '@nebular/theme';
import { HeaderComponent } from '../common/component/header/header.component';
import { CheckInventoryComponent } from './inventory-control/check-inventory/check-inventory.component';
import { InboundProductComponent } from './inventory-control/inbound-product/inbound-product.component';
// import { NgxLoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    HeaderComponent,
    CheckInventoryComponent,
    InboundProductComponent,
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
    NbUserModule,
    NbTreeGridModule

  ]
})
export class PagesModule { }
