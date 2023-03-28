import { FonctionmaterielService  } from './../../services/fonctionmateriel.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/Forms'
import { Materiel } from '../../models/materiel';
import { StatutMateriel } from '../../models/statut-materiel';
import { TypeMateriel } from '../../models/type-materiel';
import { BonLivraison } from '../../models/bon-livraison';
import { FonctionstatutMaterielService } from '../../services/fonctionstatut-materiel.service';
import { FonctiontypeMaterielService } from '../../services/fonctiontype-materiel.service';
import { FonctionbonLivraisonService } from '../../services/fonctionbon-livraison.service';

@Component({
  selector: 'app-createmateriel',
  templateUrl: './createmateriel.component.html',
  styleUrls: ['./createmateriel.component.css']
})
export class CreatematerielComponent implements OnInit{
  myForm! : FormGroup;
  materiels: Materiel[] = [];
  statutMateriels : StatutMateriel[] = [];
  typeMateriels : TypeMateriel[] = [];
  bonLivraison : BonLivraison[] = [];

  loadingData : boolean = false ;

  @ViewChild("closeModal")
  closeModal!:ElementRef<HTMLElement>



  constructor(private fb:FormBuilder,
    private functionService: FonctionmaterielService,
    private statutSercice : FonctionstatutMaterielService,
    private typeService : FonctiontypeMaterielService,
    private bonLivService : FonctionbonLivraisonService
    ){}

  ngOnInit(): void{

    this.myForm = this.fb.group({
      code:['', Validators.required],
      libelle:['', Validators.required],
      num_serie:['', Validators.required],
      marque:['', Validators.required],
      modele:['', Validators.required],
      date_enregistrement:['', Validators.required],
      statut_materiel:['', Validators.required],

      typeMateriel:['', Validators.required],
      date_utilisation:['', Validators.required],
      localmac_address:[''],
      montant:['', Validators.required],
      debut_garantie:['', Validators.required],
      fin_garantie:['', Validators.required],
      duree_utilisation:['', Validators.required],

      bonLivraison:['', Validators.required]


    })
    // get liste(){
    //   return this.myForm.get();

    // }
   // getStatut(){
      this.statutSercice.getStautMateriel().subscribe((response : any) => {
        this.statutMateriels = response;
        console.log(response)

      })

    //}
   // getType(){
      this.typeService.getTypeMateriels().subscribe((data : any) => {
        this.typeMateriels  = data;
        console.log(data)
      });
   // }

    //getBonLivrison(){
      this.bonLivService.getBonLivraison().subscribe((donnees : any) => {
        this.bonLivraison = donnees;
        console.log(donnees)
      })
    //}


  }

  save(){
    if(this.myForm.invalid){
      alert("Veuillez remplir correctement les champs");
    }else{
      let bonLivraison = this.myForm.get('bonLivraison')?.value;
      let code = this.myForm.get('code')?.value;
      let date_enregistrement = this.myForm.get('date_enregistrement')?.value;
      let date_utilisation = this.myForm.get('date_utilisation')?.value;
      let debut_garantie = this.myForm.get('debut_garantie')?.value;
      let duree_utilisation = this.myForm.get('duree_utilisation')?.value;
      let fin_garantie = this.myForm.get('fin_garantie')?.value;
      let libelle = this.myForm.get('libelle')?.value;
      let localmac_address = this.myForm.get('localmac_address')?.value;
      let marque = this.myForm.get('marque')?.value;
      let modele = this.myForm.get('modele')?.value;
      let montant = this.myForm.get('montant')?.value;
      let num_serie = this.myForm.get('num_serie')?.value;
      let statut_materiel = this.myForm.get('statut_materiel')?.value;
      let typeMateriel = this.myForm.get('typeMateriel')?.value;

      this.functionService.setMateriel({bonLivraison : {"id":bonLivraison} , code : code , date_enregistrement : date_enregistrement , date_utilisation : date_utilisation , debut_garantie : debut_garantie ,  duree_utilisation : duree_utilisation , fin_garantie : fin_garantie , libelle : libelle , marque : marque , modele : modele , montant : montant , num_serie : num_serie , statut_materiel :  {"id":statut_materiel} , localmac_address : localmac_address,  typeMateriel : {"id":typeMateriel}}).subscribe({
        next : datas => {
          console.log(datas);
          this.loadingData = true ;
          let e : HTMLElement = this.closeModal.nativeElement
          e.click()
          alert("succes")
        },
        error : error => {
          console.log(error)
          alert("error")
        }
      });
      console.log(this.myForm.value)
      this.loadingData = false ;
    }


  }




}
