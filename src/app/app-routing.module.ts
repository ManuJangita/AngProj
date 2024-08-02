import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { ReportsComponent } from './component/reports/reports.component';
import { CompanyComponent } from './component/company/company.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGurd } from './AuthGurd/auth.gurd';

const routes: Routes = [

  { path: 'login', component: SigninComponent },
  { path: 'reports', component:ReportsComponent,canActivate:[AuthGurd] },
  { path: 'registration', component:SignupComponent  },
  { path: 'company' , component:CompanyComponent,canActivate:[AuthGurd]},
  { path: 'employee' , component:EmployeesComponent,canActivate:[AuthGurd]},
  { path: 'home' , component:HomeComponent},
  { path: '', component:HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
