import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AlbumsComponent } from './albums.component';
import { SpotifyService } from '../services/spotify.service';
import { QuantoneService } from '../services/quantone.service';
import { routing } from './albums.routing';

@NgModule({
    imports: [SharedModule, routing],
    declarations: [AlbumsComponent],
    providers: [QuantoneService, SpotifyService]
})
export class AlbumsModule {}