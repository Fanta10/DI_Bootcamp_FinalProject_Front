import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FonctionbonLivraisonService {

  constructor(private httpService : HttpService) { }

  getBonLivraison() {
    return this.httpService.get("v1/bonLivraidon");
   }
}
