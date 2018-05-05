import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/animations';
import { SpotifyService } from '../../services/spotify.service';
import { QuantoneService } from '../../services/quantone.service';
import { SpotifyAlbum } from '../../services/model/spotifyAlbum';

@Component({
  selector: 'tc-album',
  templateUrl: 'album.component.html',
  styleUrls: ['./album.component.css'],
  animations: [
    trigger('tracksState', [
      state('false', style({
        opacity: 0
      })),
      state('true', style({
        opacity: 1
      }))
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
  }

  showChevron(album: SpotifyAlbum) {
    album.showUpChevron = !album.showTracks;
    album.showDownChevron = album.showTracks;
  }
}