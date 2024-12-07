import { Component, Input, Inject } from '@angular/core';
import { InventoryItem } from 'src/app/models/inventory-item.model';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-inventory-items-dialog',
  templateUrl: './inventory-items-dialog.component.html',
  styleUrls: ['./inventory-items-dialog.component.scss']
})
export class InventoryItemsDialogComponent {
  @Input() title: any;
  @Input() inventoryItems: any;

  // childColumns = [ 'inventoryItemId', 'quantity','inboundDate', 'status' ];
  customColumn = 'inventoryItemId';
  defaultColumns = [ 'skuName','quantity', 'expireDate', 'manufactureDate','inboundDate', 'sellingPrice', 'buyingPrice', 'status' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  constructor(private nbDialog: NbDialogRef<any>) {
  }

  closeDialog() {
    this.nbDialog.close();
  }

}
