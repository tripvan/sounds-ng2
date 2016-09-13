import { Component, Input } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';
import { QuantoneService } from '../../services/quantone.service';
import { SpotifyAlbum } from '../../services/model/spotifyAlbum';

@Component({
    selector: 'tc-album',
    template: require('./album.component.html'),
      styles: [require('./album.component.css')]
})
export class AlbumComponent {
    constructor(private spotifyService: SpotifyService,
        private quantoneService: QuantoneService) { }

    @Input() public album: SpotifyAlbum;
    
  showTracks(album: SpotifyAlbum) {
    //   if(!album.showTracks && !album.tracksLoaded) {
    //     this.quantoneService.getAlbum(album.id)
    //     .subscribe(
    //         albumResult => this.spotifyService.updateAlbum(album, albumResult),
    //         error => console.log(<any>error)
    //     );
    //   }
      album.showTracks = !album.showTracks;
      this.showChevron(album);
  }

  showChevron(album: SpotifyAlbum) {
      album.showUpChevron = album.showTracks;
      album.showDownChevron = !album.showTracks;
      album.isCopyrightHidden = true;
  }
}