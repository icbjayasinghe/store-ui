import { Store } from './store.model';
import { Branch } from './branch.model';
import { PropertyObject } from './property-object.model';
import { UserConf } from './user-conf.model';

export class StoreConf {
    store!: Store;
    branch!: Branch;
    user!: UserConf;
    additionalConf!: Map<number, PropertyObject[]>;
    constructor() {} 
}
