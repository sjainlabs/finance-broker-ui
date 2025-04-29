import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { LoanSeekerComponent } from './dashboards/loan-seeker/loan-seeker.component';
import { InvestorComponent } from './dashboards/investor/investor.component';
import { BrokerComponent } from './dashboards/broker/broker.component';
import { AdminComponent } from './dashboards/admin/admin.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InvestmentPortfolioComponent } from './dashboards/investment-portfolio/investment-portfolio.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { InvestorFundComponent } from './dashboards/investor-fund/investor-fund.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function translateInitializer(translate: TranslateService) {
  return () => translate.use('hin'); // Set Hindi as the default language
}



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    LoanSeekerComponent,
    InvestorComponent,
    BrokerComponent,
    AdminComponent,
    InvestmentPortfolioComponent,
    RegisterPageComponent,
    InvestorFundComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
