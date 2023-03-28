import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Materiel } from '../models/materiel';

@Injectable({
  providedIn: 'root'
})
export class FonctionmaterielService {

  constructor(private httpservice : HttpService) { }

  setMateriel(materiel : any) {
    return this.httpservice.post({endpoint : 'v1/materiel',data : materiel});
   }

   updateMateriel(materiel : Materiel) {
     return this.httpservice.put({endpoint : 'v1/materiel',data : materiel});
   }

   getMateriels() {
    return this.httpservice.get("v1/materiel");
   }

   deleteMateriel(id : number) {
     return this.httpservice.delete(`v1/materiel/${id}`);
   }
}
