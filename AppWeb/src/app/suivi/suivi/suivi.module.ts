import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiviRoutingModule } from './suivi-routing.module';
import { SuiviComponent } from './components/suivi/suivi.component';



@NgModule({
  declarations: [
    SuiviComponent,
    
  ],
  imports: [
    CommonModule,
    SuiviRoutingModule
  ]
})
export class SuiviModule { }
