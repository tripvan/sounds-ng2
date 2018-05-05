import { NgModule }      from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    routing,
    SharedModule.forRoot(),
    HeaderModule,
    ],
  declarations: [ AppComponent ],
  providers: [ Title ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }