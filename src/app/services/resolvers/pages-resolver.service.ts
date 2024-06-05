import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StoreConf } from 'src/app/models/store-conf.model';
import { Observable } from 'rxjs';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root'
})
export class PagesResolverService implements Resolve<StoreConf>{

  constructor(private storeService: StoreService) { }

  resolve(
    route: import("@angular/router").ActivatedRouteSnapshot, 
    state: import("@angular/router").RouterStateSnapshot) : Observable<StoreConf>|Promise<StoreConf>|StoreConf|any{
      const storeConf:StoreConf = this.storeService.getStoreConfiguration()
      .subscribe((store: StoreConf) => {
        console.log('check this icb '+JSON.stringify(store));
        localStorage.setItem('storeConfig', JSON.stringify(store));
        localStorage.setItem('storeId', store.store.storeId.toString());
      return storeConf;

      });
  }

}
