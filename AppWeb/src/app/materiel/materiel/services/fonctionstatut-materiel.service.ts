import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FonctionstatutMaterielService {

  constructor(private httpService : HttpService) { }

  getStautMateriel() {
    return this.httpService.get("v1/statutMateriel");
   }

}
