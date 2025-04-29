import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { LoanSeekerComponent } from './dashboards/loan-seeker/loan-seeker.component';
import { InvestorComponent } from './dashboards/investor/investor.component';
import { BrokerComponent } from './dashboards/broker/broker.component';
import { AdminComponent } from './dashboards/admin/admin.component';
import {AuthGuard} from './guards/auth.guard';
import {RegisterPageComponent} from './pages/register-page/register-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent,data: { prerender: false } },
  { path: 'login', component: LoginComponent ,data: { prerender: false } },
  { path: 'register', component: RegisterPageComponent ,data: { prerender: false }},
  { path: 'loan-seeker', component: LoanSeekerComponent, canActivate: [AuthGuard], data: { role: 'loan_seeker',prerender: false }  },
  { path: 'investor', component: InvestorComponent, canActivate: [AuthGuard], data: { role: 'investor' ,prerender: false}  },
  { path: 'broker', component: BrokerComponent, canActivate: [AuthGuard], data: { role: 'broker' ,prerender: false}  },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: 'admin',prerender: false }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
