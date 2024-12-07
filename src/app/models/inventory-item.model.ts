import { Batch } from './batch.model';
import { Sku } from './sku.model';

export class InventoryItem {
    inventoryItemId!: number;
    batchNumber!: string;
    skuName!: string;
    buyingPrice!: number;
    sellingPrice!: number;
    quantity!: number;
    expireDate!: Date;
    manufactureDate!: Date;
    inboundDate!: Date;
    status!: string;
}
