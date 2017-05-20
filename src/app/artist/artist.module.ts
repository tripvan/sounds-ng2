import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ArtistComponent } from './artist.component';
import { ArtistAlbumsComponent } from './artist-albums.component';

import { SpotifyService } from '../services/spotify.service';
import { QuantoneService } from '../services/quantone.service';
import { routing } from './artist.routing';

@NgModule({
    imports: [CommonModule, SharedModule, routing],
    declarations: [ArtistComponent, ArtistAlbumsComponent],
    providers: [SpotifyService, QuantoneService]
})
export class ArtistModule {}