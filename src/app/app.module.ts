import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagnoexisteComponent } from './setting/pagnoexiste/pagnoexiste.component';
import { HomeComponent } from './setting/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PagnoexisteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
