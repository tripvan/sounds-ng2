import { Component, Input, OnInit, OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SearchQuery } from '../services/model/searchQuery';
import { SpotifyAlbum } from '../services/model/spotifyAlbum';
import { QuantoneService } from '../services/quantone.service';
import { SpotifyService } from '../services/spotify.service';

@Component({
  template: require('./albums.component.html'),
  animations: [
      trigger('albumState', [
      state('inactive', style({
        opacity: 0
      })),
      state('active',   style({
        opacity: 1
      })),
      transition('inactive => active', animate('20ms ease-in')),
      transition('active => inactive', animate(10))
    ]),
    trigger('noResultsState', [
      state('inactive', style({
        opacity: 0
      })),
      state('active',   style({
        opacity: 1
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate(0))
    ])
  ]
})
export class AlbumsComponent implements OnInit, OnDestroy {
    constructor(private router: Router,
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
    private quantoneService: QuantoneService) {}
    
    private sub: any;
    private errorMessage;
    private query: SearchQuery;
    private searchQueryStream: BehaviorSubject<SearchQuery>;

    public albums: Observable<SpotifyAlbum[]>;
    public state: string = 'inactive';
    public noResultsState: string = 'inactive';

  ngOnInit() {
      this.sub = this
        .router
        .routerState
        .queryParams
        .subscribe(params => {
            this.state = 'inactive';
            this.noResultsState = 'inactive';
            this.query = this._getSearchQueryFromParams(params);
            if(!this.query.isValid()) {
                return;
            }
            if (this._noSearchQueryStream()) {
                this._initSearchQueryStream();
            } else {
                this.searchQueryStream.next(this.query);
            }
        },
        error => console.log(error));
  }

  _getSearchQueryFromParams(params: Params){
      return new SearchQuery(this._getParam(params['query']), this._getParam(params['label']), this._getParam(params['year']), 0);
  }
  _getParam(param: any) {
      if (!!param && param !== 'true') {
          return param;
      }
      return ' ';
  }
  _noSearchQueryStream(){
      return !!this.searchQueryStream === false;
  }
  _initSearchQueryStream(){
    this.searchQueryStream = new BehaviorSubject<SearchQuery>(this.query);
    this.albums = this.searchQueryStream
        .filter(search => !!search && (search.query.length > 2 || search.label.length > 2))
        .concatMap((query: SearchQuery) => {
            if (this.query.scrolling === false) {
                this.state = 'inactive';
            }
            return this.spotifyService.getAlbums(query)
                .map((albums: SpotifyAlbum[]) => {
                    this.state = 'active';
                    this.query.scrolling = false;
                    if(albums.length === 0) {
                        let timer = Observable.timer(3000);
                        timer.subscribe(() => this.noResultsState = 'active');
                    }
                    return albums;
                });
        });
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

  recordsHaveEnded() {
      return this.spotifyService.getTotal() < this.query.offset;
  }
}