import { LayoutCustomerComponent } from './../../layout/layout-customer/layout-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutCustomerComponent,
    children : [
      {
        path : 'budget',
        component : BudgetComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
