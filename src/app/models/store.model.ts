import { Address } from './address.model';

export class Store {
    storeId!: number;
    storeName!: string;
    address!: Address;
    photoUrl!: string;
    status!: string;
    constructor() {}
}
