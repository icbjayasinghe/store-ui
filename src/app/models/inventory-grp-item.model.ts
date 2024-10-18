import { InventoryItem } from './inventory-item.model';

export class InventoryGrpItem {
  category!: string;
  brand!: string;
  product!: string;
  stockQuantity!: number;
  lastInboundDate!: Date;
  inventoryItems!: Array<InventoryItem> ;
}
