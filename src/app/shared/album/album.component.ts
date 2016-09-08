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
      if(!album.showTracks && !album.tracksLoaded) {
        this.quantoneService.getAlbum(album.id)
        .subscribe(
            albumResult => this.spotifyService.updateAlbum(album, albumResult),
            error => console.log(<any>error)
        );
      }
      album.showTracks = !album.showTracks;
  }

  showChevron(album: SpotifyAlbum) {
      album.isUpChevronHidden = !album.showTracks;
      album.isDownChevronHidden = album.showTracks;
      album.isCopyrightHidden = true;
  }

  showCopyright(album: SpotifyAlbum) {
      album.isUpChevronHidden = true;
      album.isDownChevronHidden = true;
      album.isCopyrightHidden = false;
  }

}