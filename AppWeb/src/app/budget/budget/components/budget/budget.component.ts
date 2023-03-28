import { Component, OnInit } from '@angular/core';
import { FonctionaffectationService } from 'src/app/affectation/affectation/services/fonctionaffectation.service';
import { Affectation } from './../../../../affectation/affectation/models/affectation';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit{


  budget : any = []; // je definis un tableau de n'importe quoi : any
  montant! : number;
  r : number = 0;
  tab! : any;


  constructor(private affectationService : FonctionaffectationService ){}


  ngOnInit(): void {

    
    this.affectationService.gethistoriqueMateriel().subscribe((donnee : any)=> {
      // this.budget = donnee.map((item:any)=>{
      //     if (item.duree_restante == 0){
      //       return item;
      //     }
      //   })
        // return item.duree_restante == 0 ? item : null}

        // this.budget = donnee
      // for(let k in donnee){

      //   if(donnee[k].duree_restante == 0){
      //     // this.budget = donnee; // la tu mettais tous les elements dans la variable budget
      //     this.budget.push(donnee[k]) // j'ajoute avec push dans le tableau budget l'element qui est a la position k du tableau vu que le motant est = 0
      //   }

      //  }
      for(let k in donnee){

        if(donnee[k].duree_restante == 0){
          this.budget.push(donnee[k]);
        }

       }

      // console.log(donnee) // Tu es sur que c'est la sommes des 3e et non des 4 oui tu as verifié? oui j'au calcul" mais ce n'est pas ce code qui fait
      // this.montant = donnee.reduce((total:any,item:any ) =>{
      //   return total + item.montant
      // });
      // donnee.map((item:any)=>{ return item.duree_restante == 0})
      // console.log(this.montant)
      // console.log('dsfjksd')


      for (let i in donnee){
        if(donnee[i].duree_restante === 0){

          this.r +=  donnee[i].montant;
        }

      }

       console.log(this.r)
     console.log(`montant : `, this.r);


    })

    // this.budget.forEach((item:any) => {
    //   console.log(item);
    // });
    // this.montant = this.budget.montant;
  }






}
