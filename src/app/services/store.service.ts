import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StoreConf } from '../models/store-conf.model';
import { NbTokenStorage } from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private http: HttpClient,
    private nbTokenStorage: NbTokenStorage
  ) { }

  private storeUrl = '/api/v3/store/configurations';  // URL to web api

  getStoreConfiguration(): Observable<StoreConf> | any{
    const url = `${environment.baseUrl}/api/v3/store/configurations`;
    const token = 'Bearer ' + this.nbTokenStorage.get().getValue();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: token
      })
    };

    return this.http.get<StoreConf>(url, httpOptions);
  }
}
