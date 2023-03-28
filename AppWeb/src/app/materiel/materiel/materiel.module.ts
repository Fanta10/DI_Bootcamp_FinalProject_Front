import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterielRoutingModule } from './materiel-routing.module';
import { CreatematerielComponent } from './components/createmateriel/createmateriel.component';
import { ListematerielComponent } from './components/listemateriel/listemateriel/listemateriel.component';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/Forms';




@NgModule({
  declarations: [
    CreatematerielComponent,
    ListematerielComponent,



  ],
  imports: [
    CommonModule,
    MaterielRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,


  ]

})

export class MaterielModule { }
