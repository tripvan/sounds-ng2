import { NgModule }      from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { LabelsModule } from './labels/labels.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    routing,
    SharedModule.forRoot(),
    HeaderModule,
    LabelsModule
    ],
  declarations: [ AppComponent ],
  providers: [ Title ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }