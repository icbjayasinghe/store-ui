import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckInventoryComponent } from './inventory-control/check-inventory/check-inventory.component';
import { InboundProductComponent } from './inventory-control/inbound-product/inbound-product.component';

const routes: Routes = [
  {
     path: '',
     component: PagesComponent,
     children: [
       {
         path: 'dashboard',
         component: DashboardComponent
       },
       {
         path: 'inventory/check-inventory',
         component: CheckInventoryComponent
       },
       {
        path: 'inventory/inbound-product',
        component: InboundProductComponent
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
