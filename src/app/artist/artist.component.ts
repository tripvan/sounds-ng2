import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { SpotifyService } from '../services/spotify.service';
import { QuantoneService } from '../services/quantone.service';
import { Artist } from '../services/model/artist';

import { ArtistAlbumsComponent } from './artist-albums.component';

@Component({
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  animations: [
    trigger('artistState', [
      state('inactive', style({
        opacity: 0
      })),
      state('active',   style({
        opacity: 1
      })),
      transition('inactive => active', [
        animate('200ms ease-out')
      ])
    ]),
    trigger('bioFullState', [
      state('inactive', style({
        height: '116px',
      })),
      state('active',   style({
        height: '*'
      })),
      transition('inactive <=> active', [
        animate('150ms ease-out')
      ])
    ])
  ]
})
export class ArtistComponent implements OnInit {
  constructor(private router: Router,
      private route: ActivatedRoute,
      private titleService: Title,
      private spotifyService: SpotifyService,
      private quantoneService: QuantoneService) {}

  private sub: any;
  private searchQueryStream: BehaviorSubject<string>;
  private artistId: string;
  private previousArtistId: string;
  @ViewChild(ArtistAlbumsComponent)
  private artistAlbumsComponent: ArtistAlbumsComponent;

  public hasBio: boolean = false;
  public canShowAlbums: boolean = false;
  public artist: Artist;
  public bioState: string = 'inactive';
  public imageState: string = 'inactive';
  public showFullBio: boolean = false;

  ngOnInit() {
      let self = this;
      this.sub = this.router.routerState.root.queryParams
          .subscribe(params => {
              self.artistId = params['id'];
              if (self.previousArtistId !== self.artistId) {
                if (!!self.searchQueryStream === false) {
                    self.searchQueryStream = new BehaviorSubject<string>(self.artistId);
                    self.searchQueryStream
                    .pipe(
                      concatMap<string, Artist>((id: string) => {
                        return self.spotifyService.getArtist(id)
                                .pipe(
                                  concatMap(artist => {
                                    self.artist = artist;
                                    this.titleService.setTitle(artist.Name);
                                    this.imageState = 'active';
                                    this.artistAlbumsComponent.showAlbums();
                                    return this.quantoneService
                                          .getArtist(artist.Id)
                                          .pipe(
                                            map(quantoneArtist => {
                                              if (!!quantoneArtist && quantoneArtist.length > 0) {
                                                  this.hasBio = !!quantoneArtist[0].bio;
                                                  artist.bio = quantoneArtist[0].bio || `${artist.Name}'s bio is yet to be written.`;

                                                  this.bioState = 'active';
                                              }
                                              self.previousArtistId = self.artistId;
                                              return artist;
                                            })
                                          );
                                  })
                                );
                      })
                    )
                    .subscribe(artist => {
                      self.artist = artist;
                    });
                } else {
                    self.searchQueryStream.next(self.artistId);
                }
              }
          },
          error => console.log(error));
  }

  _getParam(param: any) {
    if (!!param && param !== 'true') {
        return param;
    }
    return ' ';
  }

  toggleBio() {
    this.showFullBio = !this.hasBio || !this.showFullBio;
  }

  showFullBioState() {
    return this.showFullBio ? 'active' : 'inactive';
  }
}
