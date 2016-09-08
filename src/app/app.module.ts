import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from "@angular/http";

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumsModule } from './albums/albums.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    routing,
    SharedModule.forRoot(),
    HeaderModule, 
    ArtistModule, 
    AlbumsModule],
  declarations: [ AppComponent ],
  providers: [HTTP_PROVIDERS],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }