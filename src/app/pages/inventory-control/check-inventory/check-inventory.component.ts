import { Component, OnInit } from '@angular/core';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbGetters, NbSortDirection, NbSortRequest, NbDialogService } from '@nebular/theme';
import { InventoryGrpItem } from 'src/app/models/inventory-grp-item.model';
import { InventoryService } from 'src/app/services/inventory.service';
import { async } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { InventoryItemsDialogComponent } from '../../dialogs/inventory-items-dialog/inventory-items-dialog.component';
import { InventoryItem } from 'src/app/models/inventory-item.model';


@Component({
  selector: 'app-check-inventory',
  templateUrl: './check-inventory.component.html',
  styleUrls: ['./check-inventory.component.scss']
})
export class CheckInventoryComponent implements OnInit{

  customColumn = 'product';
  defaultColumns = [ 'category', 'brand','stockQuantity', 'lastInboundDate' ];
  allColumns = [ this.customColumn, ...this.defaultColumns, 'batch' ];


  dataSource!: NbTreeGridDataSource<InventoryGrpItem>;

  sortColumn!: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  inventoryGroupItems: any = [];

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<InventoryGrpItem>,
              private inventoryService: InventoryService,
              private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    this.getInventoryGroupItemList();
  }
  

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  
  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  getInventoryGroupItemList(): InventoryGrpItem[]{
    this.inventoryService.getInventoryGroupItems(1,"ACTIVE")
                                                  .subscribe({next: (inventoryItems: InventoryGrpItem[]) => {
                                                    this.inventoryGroupItems = inventoryItems;
                                                    console.log('check this icb heyß',this.inventoryGroupItems);
                                                    // this.dataSource = this.dataSourceBuilder.create<InventoryGrpItem>(inventoryItems);
                                                    // console.log('this.dataSource ',this.dataSource);
                                                  },
                                                error: (error:HttpErrorResponse)=>{
                                                  alert(error.message)
                                                }});
      console.log('icb undef '+this.inventoryGroupItems)
   
      return this.inventoryGroupItems;
  }

  openInventoryItemDialog(inventoryItems: InventoryGrpItem) {
    this.dialogService.open(InventoryItemsDialogComponent, {
      context: {
        title: inventoryItems.category+" - "+ inventoryItems.brand +" - "+ inventoryItems.product,
        inventoryItems: inventoryItems.inventoryItems
      },
    });
  }
}
