import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdMenuModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
