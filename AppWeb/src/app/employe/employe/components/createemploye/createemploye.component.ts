import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/Forms';
import { Siteemploye } from '../../models/siteemploye';
import { FonctionsiteemployeService } from '../../services/fonctionsiteemploye.service';
import { FonctionemployeService } from './../../services/fonctionemploye.service';

@Component({
  selector: 'app-createemploye',
  templateUrl: './createemploye.component.html',
  styleUrls: ['./createemploye.component.css']
})
export class CreateemployeComponent implements OnInit{


siteEmpl : Siteemploye[] = [];
  myFormempl! : FormGroup;
  constructor( private fb : FormBuilder, private site: FonctionsiteemployeService, private empl : FonctionemployeService){}


  ngOnInit(){

    this.myFormempl = this.fb.group({
      matricule:['', Validators.required],

      nom:['', Validators.required],
      prenom:['', Validators.required],

      email:['', Validators.required],
      siteEmploye:['', Validators.required]


    });
    // get liste(){
    //   return this.myForm.get();

    // }
   //getSite(){
      this.site.getsiteEmployes().subscribe((response : any) => {
        this.siteEmpl = response;
        console.log(response)

      });
   // }

  }

  save(){




    if(this.myFormempl.invalid){
      alert("Veuillez remplir correctement les champs");
    }else{
      let matricule = this.myFormempl.get('matricule')?.value;
    let nom = this.myFormempl.get('nom')?.value;
    let prenom = this.myFormempl.get('prenom')?.value;
    let email = this.myFormempl.get('email')?.value;
    let site_employe = this.myFormempl.get('site_employe')?.value;

      this.empl.setEmploye({ matricule, nom, prenom, email, "site_employe":{"id":site_employe }
      }).subscribe({
        next : data => {
          console.log(data);
          alert("succes")
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


