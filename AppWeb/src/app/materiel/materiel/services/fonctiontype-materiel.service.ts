import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FonctiontypeMaterielService {

  constructor(private httpService : HttpService) { }

  getTypeMateriels() {
    return this.httpService.get("v1/typeMateriel");
   }
}
