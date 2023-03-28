import { Injectable, OnInit } from '@angular/core';
import { HttpService } from './../../../materiel/materiel/services/http.service';
import { Affectation } from './../models/affectation';

@Injectable({
  providedIn: 'root'
})
export class FonctionaffectationService implements OnInit{


  constructor(private httpservice : HttpService) { }
  ngOnInit(): void {

  }

  setHistoriqueMateriel(historiquemateriel : any) {
    return this.httpservice.post({endpoint : 'v1/historiqueMateriel',data : historiquemateriel});
   }

   updatehistoriqueMateriel(historiquemateriel : Affectation) {
     return this.httpservice.put({endpoint : 'v1/historiqueMateriel',data : historiquemateriel});
   }

   gethistoriqueMateriel() {
    return this.httpservice.get("v1/historiqueMateriel");
   }

   deletehistoriqueMateriel(id : number) {
     return this.httpservice.delete(`v1/historiqueMateriel/${id}`);
   }
}
