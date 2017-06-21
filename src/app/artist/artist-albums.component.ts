import { Component, Input, OnInit, OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ArtistSearchQuery } from '../services/model/artistSearchQuery';
import { SpotifyAlbum } from '../services/model/spotifyAlbum';
import { QuantoneService } from '../services/quantone.service';
import { SpotifyService } from '../services/spotify.service';

@Component({
    selector: 'tc-artist-albums',
    templateUrl: './artist-albums.component.html',
    styleUrls: ['./artist-albums.component.css'],
    animations: [
        trigger('albumState', [
            state('inactive', style({
                opacity: 0
            })),
            state('active',   style({
                opacity: 1
            })),
            transition('inactive => active', animate('100ms 100ms ease-in'))
        ]),
        trigger('noResultsState', [
        state('inactive', style({
            opacity: 0
        })),
        state('active',   style({
            opacity: 1
        })),
        transition('inactive => active', animate('500ms ease-in')),
        transition('active => inactive', animate(10))
        ])
    ]
})
export class ArtistAlbumsComponent implements OnInit, OnDestroy {
  constructor(private router: Router,
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
    private quantoneService: QuantoneService) {}

  private sub: any;
  private errorMessage;
  private searchQueryStream: BehaviorSubject<ArtistSearchQuery>;
  private albumsLoaded: boolean = false;
  private canShowAlbums: boolean = false;

  public query: ArtistSearchQuery;
  public albums: Observable<SpotifyAlbum[]>;
  public state: string = 'inactive';
  public noResultsState: string = 'active';
  public isLoading: boolean = false;
  public sortOrderText: string = 'Popularity';
  public sortOrder: number = 1;
  public sortDirectionText: string = 'Desc';
  public sortDirection: number = 1;

  ngOnInit() {
      this.sub = this.router.routerState.root.queryParams
        .subscribe(params => {
            let query = new ArtistSearchQuery(this._getParam(params['id']), 0, this._getParam(params['sortOrder']), this._getParam(params['sortDirection']));
            this.query = query;
            if (!!this.searchQueryStream === false) {
                this.searchQueryStream = new BehaviorSubject<ArtistSearchQuery>(this.query);
                this.albums = this.searchQueryStream
                .concatMap<ArtistSearchQuery, SpotifyAlbum[]>((query: ArtistSearchQuery) => {
                    if (this.query.scrolling === false) {
                        this.state = 'inactive';
                    }
                    this.isLoading = true;

                    return this.spotifyService.getArtistAlbums(query)
                        .map((albums: SpotifyAlbum[]) => {
                            this.albumsLoaded = true;
                            this.isLoading = false;

                            if (this.canShowAlbums) {
                                this.showAlbums();
                            }
                            this.query.scrolling = false;
                            return albums;
                        });
                });
            } else {
                this.searchQueryStream.next(this.query);
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
  showAlbums() {
      this.canShowAlbums = true;
      if (this.albumsLoaded) {
          this.state = 'active';
      }
  }
  onScroll() {
    this.query.offset += this.spotifyService.perPage;
    if (this.query.offset >= this.spotifyService.getTotal()) {
        console.log('no more results');
        return;
    }
    this.query.scrolling = true;
    this.searchQueryStream.next(this.query);
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  showTracks(album: SpotifyAlbum) {
      album.showTracks = !album.showTracks;
  }

  showChevron(album: SpotifyAlbum) {
      album.showUpChevron = album.showTracks;
      album.showDownChevron = !album.showTracks;
      album.isCopyrightHidden = true;
  }

  recordsHaveEnded() {
      return this.spotifyService.getTotal() < this.query.offset;
  }

  public canSort() {
    return this.spotifyService.canSort();
  }

  public toggleSortOrder() {
    if (this.sortOrder === 1) {
      this.sortOrderText = 'Date';
      this.sortOrder = 2;
    } else {
      this.sortOrderText = 'Popularity';
      this.sortOrder = 1;
    }
    this.router.navigate(['/artist/'], { queryParams: { id: this.query.id, sortOrder: this.sortOrder, sortDirection: this.sortDirection } });
  }

  public toggleSortDirection() {
    if (this.sortDirection === 1) {
      this.sortDirectionText = 'Asc';
      this.sortDirection = 2;
    } else {
      this.sortDirectionText = 'Desc';
      this.sortDirection = 1;
    }
    this.router.navigate(['/artist/'], { queryParams: { id: this.query.id, sortOrder: this.sortOrder, sortDirection: this.sortDirection } });
  }
}