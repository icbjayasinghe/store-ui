import { Batch } from './batch.model';

export class InventoryItem {
    inventoryItemId!: number;
    batch!: Batch;
    quantity!: number;
    inboundDate!: Date;
    status!: string;
}
