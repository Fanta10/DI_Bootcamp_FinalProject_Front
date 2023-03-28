import { Component, OnInit } from '@angular/core';
import { Employe } from '../../models/employe';
import { FonctionemployeService } from '../../services/fonctionemploye.service';

@Component({
  selector: 'app-listeemploye',
  templateUrl: './listeemploye.component.html',
  styleUrls: ['./listeemploye.component.css']
})
export class ListeemployeComponent implements OnInit{
  employes : Employe[] = [];

  constructor(private functuinService : FonctionemployeService){}

  ngOnInit(): void {
    this.functuinService.getEmployes().subscribe((response : any) => {
      this.employes = response;
      console.log(this.employes)
  }); }

  delete(id : number){
    this.functuinService.deleteEmploye(id).subscribe((response : any) => {
      console.log(response)
    });
    window.location.reload();

  }

}
