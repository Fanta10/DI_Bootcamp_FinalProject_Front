import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCustomerComponent } from 'src/app/layout/layout-customer/layout-customer.component';
import { CreateemployeComponent } from './components/createemploye/createemploye.component';

const routes: Routes = [
  {
    path:'',

    component: LayoutCustomerComponent,
    children : [
      {
        path : 'employe',
        component : CreateemployeComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
