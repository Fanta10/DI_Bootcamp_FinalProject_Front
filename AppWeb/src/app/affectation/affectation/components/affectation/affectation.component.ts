import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/Forms';
import { Employe } from './../../../../employe/employe/models/employe';
import { Materiel } from './../../../../materiel/materiel/models/materiel';
import { FonctionaffectationService } from './../../services/fonctionaffectation.service';
import { FonctionemployeService } from './../../../../employe/employe/services/fonctionemploye.service';
import { FonctionmaterielService } from 'src/app/materiel/materiel/services/fonctionmateriel.service';
import { FonctionsiteemployeService } from 'src/app/employe/employe/services/fonctionsiteemploye.service';
import { Affectation } from '../../models/affectation';
import { StatutMateriel } from './../../../../materiel/materiel/models/statut-materiel';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
  affectation! : FormGroup;

  employe : Employe[] = [];

  materiels: Materiel[] = [];

  histomateriel: any = [];

  duree_restante! : number;



  constructor(private histo_materiel_service: FonctionaffectationService, private fb:FormBuilder,
    private empl: FonctionemployeService, private mat: FonctionmaterielService, private affectationService : FonctionaffectationService ){

  }


  ngOnInit(): void {

    this.affectation = this.fb.group({
       longitude: [''],
       latitude: [''],
      // debutperiode_utilisation: ['',Validators.required],
      finperiode_utilisation: [''],
      statut_mat: [''],
      materiel: ['',Validators.required],
      employe: ['',Validators.required]

    });

    this.empl.getEmployes().subscribe((data:any)=>{
      this.employe = data;
    })

    this.mat.getMateriels().subscribe((response:any)=>{
      this.materiels = response;

      // if(this.materiels.statut_materiel.libelle == "en stock"){

      // }
    })

     this.affectationService.gethistoriqueMateriel().subscribe((donnees : any)=> {
      this.histomateriel = donnees;


      console.log(donnees)
    })

    //this.duree_restante = this.histomateriel

  }




  save(){


    if(this.affectation.invalid){
      alert("Veuillez remplir correctement les champs");
    }else{
     let longitude = this.affectation.get('longitude')?.value;
     let latitude = this.affectation.get('latitude')?.value;
     let debutperiode_utilisation = this.affectation.get('debutperiode_utilisation')?.value;
    let finperiode_utilisation = this.affectation.get('finperiode_utilisation')?.value;
     let statut_mat =  0; //this.affectation.get('statut_mat')?.value;
    let materiel = this.affectation.get('materiel')?.value;
    let employe = this.affectation.get('employe')?.value;

      this.affectationService.setHistoriqueMateriel({longitude, latitude, statut_mat, finperiode_utilisation,"employe":{"id":employe },"materiel":{"id":materiel }
      }).subscribe({
        next : data => {
          console.log(data);
          alert("succes")
          statut_mat = 1
          window.location.reload();





        },
        error : error => {
          console.log(error)
          alert("error")
        }
      });

    }

}

}
