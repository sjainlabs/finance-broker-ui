import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finance-broker-ui';

  // // On App Load:
  // const lang = localStorage.getItem('preferredLanguage') || 'hi';
  // this.translate.use(lang);
  role: string ='';

  constructor(private translate: TranslateService) {
    // this.translate.addLangs(['en', 'hin']);
    //
    //
    // const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang?.match(/en|hin/) ? browserLang : 'hin');

    this.translate.setDefaultLang('hin'); // Default language is Hindi
    console.log(this.translate.instant('welcome'));
  }

  switchLanguage(lang: string) {
    localStorage.setItem('preferredLanguage', lang);
    this.translate.use(lang);
  }



}
