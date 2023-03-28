import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/materiel/materiel/services/http.service';
import { Siteemploye } from '../models/siteemploye';

@Injectable({
  providedIn: 'root'
})
export class FonctionsiteemployeService {

  constructor(private httpService: HttpService) { }

  setSiteEmploye(siteEmploye : any) {
    return this.httpService.post({endpoint : 'v1/siteEmploye',data : siteEmploye});
   }

   updateEmploye(siteEmploye : Siteemploye) {
     return this.httpService.put({endpoint : 'v1/siteEmploye',data : siteEmploye});
   }

   getsiteEmployes() {
    return this.httpService.get("v1/siteEmploye");
   }

   deleteEmploye(id : string) {
     return this.httpService.delete(`v1/siteEmploye/${id}`);
   }
}
