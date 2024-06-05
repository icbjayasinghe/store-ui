import { Address } from './address.model';

export class Branch {
    branchId!: number;
    storeId!: number;
    branchName!: string;
    address!: Address;
    photoUrl!: string;
    status!: string;
    constructor() {}
}
