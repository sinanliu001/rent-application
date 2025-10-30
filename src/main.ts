/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';

import { App } from './app/app';

bootstrapApplication(App, {
  providers: [provideProtractorTestingSupport(), provideRouter(routes)],
}).catch((err) => console.error(err));