import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbTokenStorage } from '@nebular/auth';
import { InventoryGrpItem } from '../models/inventory-grp-item.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private http: HttpClient,
    private nbTokenStorage: NbTokenStorage
  ) { }

  private inventoryUrl = 'api/v3/inventoryItem';  // URL to web api

  getInventoryGroupItems(branchId: number, status: string): Observable<InventoryGrpItem[]> | any{
    const url = `${environment.baseUrl}/${this.inventoryUrl}/findByBranch/GroupByProduct?branchId=${branchId}&status=${status}`;

    const token = 'Bearer ' + this.nbTokenStorage.get().getValue();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: token
      })
    };

    return this.http.get<InventoryGrpItem[]>(url, httpOptions);
  }
}
