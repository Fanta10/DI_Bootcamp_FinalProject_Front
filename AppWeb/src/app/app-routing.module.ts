import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';

const routes: Routes = [
//   {path:'dashbord',
//   component: AppComponent

//  },
//  {
//   path: '',
//   redirectTo: '',
//   pathMatch: 'full'
// },
 {path:'',
  component: LoginComponent

 },

 {
  path: 'home',
  loadChildren: () => import('./materiel/materiel/materiel.module').then(m => m.MaterielModule)
 },
//  {path: '**', component:}
{
  path: 'home',
  loadChildren: () => import('./employe/employe/employe.module').then(m => m.EmployeModule)
},
{
  path: 'home',
  loadChildren: () => import('./affectation/affectation/affectation.module').then(m => m.AffectationModule)
},
{
  path: 'home',
  loadChildren: () => import('./suivi/suivi/suivi.module').then(m => m.SuiviModule)
},
{
  path: 'home',
  loadChildren: () => import('./budget/budget/budget.module').then(m => m.BudgetModule)
},
{
  path: 'home',
  loadChildren: () => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)
}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
