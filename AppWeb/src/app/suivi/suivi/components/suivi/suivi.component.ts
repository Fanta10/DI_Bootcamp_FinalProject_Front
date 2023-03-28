import { Component, OnInit } from '@angular/core';
import { FonctionaffectationService } from 'src/app/affectation/affectation/services/fonctionaffectation.service';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit{
  suivi : any ;

  constructor(private affectationService : FonctionaffectationService){}

  ngOnInit(){

    this.affectationService.gethistoriqueMateriel().subscribe((donnees : any)=> {
      this.suivi = donnees;


      console.log(donnees)
    })


  }

}
