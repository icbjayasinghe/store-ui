import { Injectable } from '@angular/core';
import { StoreConf } from '../models/store-conf.model';

@Injectable({
  providedIn: 'root'
})
export class StoreConfigService {

  constructor() { }

  getStoreConfigFromLs(): StoreConf{
    const storeConfig: StoreConf= JSON.parse(localStorage.getItem('storeConfig')!);
    return storeConfig;
  }
}
