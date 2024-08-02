import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './component/header/app-header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { CompanyComponent } from './component/company/company.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { ReportsComponent } from './component/reports/reports.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCompanyComponent } from './component/add-company/add-company.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { AddreportsComponent } from './component/addreports/addreports.component';
import { UserService } from './service/user.service';
import { AuthGurd } from './AuthGurd/auth.gurd';
import { CompanyService } from './service/company.service.model';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthTocken } from './authtocken/auth.tocken';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FooterComponent,
    SidebarComponent,
    SigninComponent,
    SignupComponent,
    CompanyComponent,
    EmployeesComponent,
    ReportsComponent,
    HomeComponent,
    AddCompanyComponent,
    AddEmployeeComponent,
    AddreportsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService,AuthGurd,CompanyService,provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthTocken, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
