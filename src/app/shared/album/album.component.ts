import { Component, Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';
import { QuantoneService } from '../../services/quantone.service';
import { SpotifyAlbum } from '../../services/model/spotifyAlbum';

@Component({
    selector: 'tc-album',
    template: require('./album.component.html'),
      styles: [require('./album.component.css')],
      animations: [
        trigger('tracksState', [
            state('false', style({
                opacity: 0
            })),
            state('true',   style({
                opacity: 1
            })),
            // transition('* => true', [ 
            //     style({ opacity: 0 }), 
            //     animate('100ms ease-in')
            // ]),
            // transition('true => *', [
            //     style({opacity: 0}), 
            //     animate(10)
            // ])
        ])
    ]
})
export class AlbumComponent {
    constructor(private spotifyService: SpotifyService,
        private quantoneService: QuantoneService) { }

    @Input() public album: SpotifyAlbum;
    public state: string = 'false';
  showTracks(album: SpotifyAlbum) {
      this.showChevron(album);
      album.showTracks = !album.showTracks;
    //   this.state = album.showTracks ? 'true' : 'false';
  }

  showChevron(album: SpotifyAlbum) {
      album.showUpChevron = !album.showTracks;
      album.showDownChevron = album.showTracks;
  }
}