import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FuFormModule } from './fu-form/fu-form.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, FuFormModule],
})
export class AppModule {
  ngDoBootstrap() { }
}
