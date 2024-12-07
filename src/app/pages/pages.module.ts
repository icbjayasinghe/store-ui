import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbMenuModule, NbActionsModule, NbIconModule, NbCardModule, NbUserModule, NbTreeGridModule, NbDialogModule, NbStepperModule } from '@nebular/theme';
import { HeaderComponent } from '../common/component/header/header.component';
import { CheckInventoryComponent } from './inventory-control/check-inventory/check-inventory.component';
import { InboundProductComponent } from './inventory-control/inbound-product/inbound-product.component';
import { InventoryItemsDialogComponent } from './dialogs/inventory-items-dialog/inventory-items-dialog.component';
import { AddItemStepperDialogComponent } from './dialogs/add-item-stepper-dialog/add-item-stepper-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxLoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    HeaderComponent,
    CheckInventoryComponent,
    InboundProductComponent,
    InventoryItemsDialogComponent,
    AddItemStepperDialogComponent,
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
    NbTreeGridModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbStepperModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
