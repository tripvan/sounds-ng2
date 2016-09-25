import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumsModule } from './albums/albums.module';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule, 
    routing,
    SharedModule.forRoot(),
    HeaderModule, 
    ArtistModule, 
    AlbumsModule],
  declarations: [ AppComponent ],
  providers: [ Title ],
  // providers: [HTTP_PROVIDERS],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }