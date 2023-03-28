import { LayoutCustomerComponent } from './../../layout/layout-customer/layout-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectationComponent } from './components/affectation/affectation.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutCustomerComponent,
    children : [
      {
        path : 'affectation',
        component : AffectationComponent
      },
      {
        path : 'reclamation',
        component : ReclamationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffectationRoutingModule { }
