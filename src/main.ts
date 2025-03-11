/*!

=========================================================
* IRA Angular - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/ira-angular
* Copyright 2021 Syntax N (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/ira-angular/blob/master/LICENSE.md)

* Coded by Syntax N

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/iraurls';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
