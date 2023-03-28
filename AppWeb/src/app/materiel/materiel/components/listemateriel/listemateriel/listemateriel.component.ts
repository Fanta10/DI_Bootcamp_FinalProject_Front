import { FonctionmaterielService } from './../../../services/fonctionmateriel.service';
import { Component, OnInit } from '@angular/core';
import { Materiel } from '../../../models/materiel';

@Component({
  selector: 'app-listemateriel',
  templateUrl: './listemateriel.component.html',
  styleUrls: ['./listemateriel.component.css']
})
export class ListematerielComponent implements OnInit{
  materiels: Materiel[] = [];

  constructor(private functionService : FonctionmaterielService){}

  ngOnInit(): void {
    //getAllMateriel(){
      this.allMateriel()
  //}



  }

  allMateriel(){
    this.functionService.getMateriels().subscribe((response : any) => {
      this.materiels = response;
      console.log(this.materiels);

  });
  }
   delete(id : number){
    this.functionService.deleteMateriel(id).subscribe({
      next : data => {
        console.log(data);
        //alert("succes")
      },
      error : error => {
        console.log(error)
        alert("error")
      }
    });

  }

  // delete(id:number){
  //   this.functionService.deleteMateriel(id).subscribe(data =>{
  //       console.log(data);
  //       this.allMateriel();
  //   });
  // }

  edit(materiel: Materiel){
    this.functionService.updateMateriel(materiel).subscribe({
      next : data => {
        console.log(data);
        alert("succes")
      },
      error : error => {
        console.log(error)
        alert("error")
      }
    });

  }


}
