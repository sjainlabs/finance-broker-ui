/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Inject, PLATFORM_ID } from '@angular/core';


platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,


})
  .catch(err => console.error(err));
