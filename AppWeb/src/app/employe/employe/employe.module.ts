import { ReactiveFormsModule } from '@angular/Forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { CreateemployeComponent } from './components/createemploye/createemploye.component';
import { ListeemployeComponent } from './components/listeemploye/listeemploye.component';


@NgModule({
  declarations: [
    CreateemployeComponent,
    ListeemployeComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeModule { }
