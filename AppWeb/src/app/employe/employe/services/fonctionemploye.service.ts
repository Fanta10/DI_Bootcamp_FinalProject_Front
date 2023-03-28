import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/materiel/materiel/services/http.service';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class FonctionemployeService {

  constructor(private httpservice : HttpService) { }

  setEmploye(employe : any) {
    return this.httpservice.post({endpoint : 'v1/employe',data : employe});
   }

   updateEmploye(employe : Employe) {
     return this.httpservice.put({endpoint : 'v1/employe',data : employe});
   }

   getEmployes() {
    return this.httpservice.get("v1/employe");
   }

   deleteEmploye(id : number) {
     return this.httpservice.delete(`v1/employe/${id}`);
   }
}
