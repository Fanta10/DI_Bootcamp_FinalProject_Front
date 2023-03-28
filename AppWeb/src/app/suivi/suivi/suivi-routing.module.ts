import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCustomerComponent } from 'src/app/layout/layout-customer/layout-customer.component';
import { SuiviComponent } from './components/suivi/suivi.component';

const routes: Routes = [
  {
    path:'',

    component: LayoutCustomerComponent,
    children : [
      {
        path : 'suivi',
        component : SuiviComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiviRoutingModule { }
