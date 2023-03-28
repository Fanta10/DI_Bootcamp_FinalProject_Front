import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/employe/employe/models/employe';
import { User } from './../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


     email : any;
     password: any;

     message: boolean = false;

    //user! : User;


    constructor( private router : Router){

    }

  login(){

    if(this.email == "momo" && this.password == "12345"){
      // alert("ok")
      this.message = false;
       this.router.navigate(['/dashboard']);
    }
    else{
      this.message=true;
     setTimeout((()=>window.location.reload()),1000);

    }

  }

}
