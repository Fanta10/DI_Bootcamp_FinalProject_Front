import { BudgetModule } from './budget/budget/budget.module';
import { SuiviModule } from './suivi/suivi/suivi.module';
import { AffectationModule } from './affectation/affectation/affectation.module';
import { MaterielModule } from './materiel/materiel/materiel.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/Forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login/login.component';
import { LayoutCustomerComponent } from './layout/layout-customer/layout-customer.component';
import { EmployeModule } from './employe/employe/employe.module';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterielModule,
    FormsModule,
    EmployeModule,
    AffectationModule,
    SuiviModule,
    BudgetModule,
    DashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
