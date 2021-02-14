import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { FuFormComponent } from './fu-form/fu-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FuFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent, FuFormComponent]
  bootstrap: [FuFormComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(FuFormComponent, { injector });
    customElements.define('fu-form', el);
  }
}
