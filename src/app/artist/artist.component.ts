import { Component, OnInit, ViewChild,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

import { SpotifyService } from "../services/spotify.service";
import { QuantoneService } from "../services/quantone.service";
import { Artist } from '../services/model/artist';

import { ArtistAlbumsComponent } from './artist-albums.component';

@Component({
    template: require('./artist.component.html'),
    styles: [require('./artist.component.css')],
    animations: [
        trigger('artistState', [
            state('inactive', style({
                opacity: 0
            })),
            state('active',   style({
                opacity: 1
            })),
            transition('inactive => active', [
                style({ height: 0}),
                animate('100ms ease-out', style({ height: '*'}))
            ])
        ])
    ]
})
export class ArtistComponent implements OnInit {
    constructor(private route: ActivatedRoute,
        private titleService: Title,
        private spotifyService: SpotifyService,
        private quantoneService: QuantoneService) {}

    private sub: any;
    private searchQueryStream: BehaviorSubject<string>;
    private artistId: string;
    @ViewChild(ArtistAlbumsComponent)
    private artistAlbumsComponent: ArtistAlbumsComponent;

    public canShowAlbums: boolean = false;
    public artist: Artist;
    public bioState: string = 'inactive';
    public imageState: string = 'inactive';

    ngOnInit() {
        let self = this;
        this.sub = this
            .route
            .params
            .subscribe(params => {
                let paramId = params['id'];
                self.artistId = paramId;
                if (!!self.searchQueryStream === false) {
                    self.searchQueryStream = new BehaviorSubject<string>(self.artistId);
                    self.searchQueryStream
                    .concatMap((id: string) => {
                        return self.spotifyService.getArtist(id)
                                .concatMap(artist => {
                                    self.artist = artist;
                                    this.titleService.setTitle(artist.Name);
                                    this.imageState = 'active';
                                    return this.quantoneService
                                            .getArtist(artist.Id)
                                            .map(quantoneArtist => {
                                                if(!!quantoneArtist && quantoneArtist.length > 0) 
                                                    artist.Bio = quantoneArtist[0].Bio;

                                                this.bioState = 'active';
                                                this.artistAlbumsComponent.showAlbums();
                                                
                                                return artist;
                                            })
                                });
                    })
                    .subscribe(artist => {
                        self.artist = artist;
                    });
                    
                } else {
                    self.searchQueryStream.next(self.artistId);
                }
            },
            error => console.log(error));
    }
    _getParam(param: any) {
      if (!!param && param !== "true") {
          return param;
      }
      return " ";
  }
}
