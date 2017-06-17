import { Component, Input, OnInit, OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/observable/timer';

import { SearchQuery } from '../services/model/searchQuery';
import { SpotifyAlbum } from '../services/model/spotifyAlbum';
import { QuantoneService } from '../services/quantone.service';
import { SpotifyService } from '../services/spotify.service';

@Component({
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
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
    private titleService: Title,
    private spotifyService: SpotifyService,
    private quantoneService: QuantoneService) {}

    private sub: any;
    private errorMessage;
    private searchQueryStream: BehaviorSubject<SearchQuery>;
    private noResultsTimer = Observable.timer(3000);
    private noResultsSubscription: Subscription;

    public query: SearchQuery;
    public albums: Observable<SpotifyAlbum[]>;
    public state: string = 'inactive';
    public noResultsState: string = 'inactive';
    public isLoading: boolean = false;
    public sortOrderText: string = 'Popularity';
    public sortOrder: number = 1;
    public sortDirectionText: string = 'Desc';
    public sortDirection: number = 1;
    
  ngOnInit() {
      this.sub = this.router.routerState.root.queryParams
      .subscribe(params => {
        this.state = 'inactive';
        this.noResultsState = 'inactive';
        this.noResultsSubscription && this.noResultsSubscription.unsubscribe();
        this.query = this._getSearchQueryFromParams(params);

        if (this._noSearchQueryStream()) {
          this._initSearchQueryStream();
        } else {
          this.searchQueryStream.next(this.query);
        }
      },
      error => console.log(error));
  }

  _getSearchQueryFromParams(params: Params){
    return new SearchQuery(this._getParam(params['query']), this._getParam(params['label']), this._getParam(params['year']), 0, this._getParam(params['sortOrder']), this._getParam(params['sortDirection']));
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
        .concatMap<SearchQuery, SpotifyAlbum[]>((query: SearchQuery) => {
            if (this.query.scrolling === false) {
                this.state = 'inactive';
            }
            this.isLoading = true;

            return this.spotifyService.getAlbums(query)
                .map((albums: SpotifyAlbum[]) => {
                    this.state = 'active';
                    this.isLoading = false;
                    this.query.scrolling = false;
                    if (albums.length === 0) {
                        this.noResultsSubscription = this.noResultsTimer.subscribe(() => {
                          this.noResultsState = 'active'
                        });
                    }
                    this.setTitle();
                    return albums;
                });
        });
  }

  private setTitle() {
    this.titleService.setTitle(`${this.query.query.trim().length > 0 ? this.query.query : ""} ${this.query.query.trim().length > 0 && this.query.label.trim().length > 0 ? " on" : ""} ${this.query.label.trim().length > 0 ? this.query.label : ""} ${this.query.year.trim().length > 0 ? this.query.year : ""}`);
  }

  onScroll() {
    this.query.offset += this.spotifyService.perPage;
    console.log('offset and total', this.query.offset, this.spotifyService.getTotal());
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

  public canSort() {
    return this.spotifyService.canSort();
  }
  
  public toggleSortOrder() {
    if (this.sortOrder === 1) {
      this.sortOrderText = 'Date';
      this.sortOrder = 2
    } else {
      this.sortOrderText = 'Popularity';
      this.sortOrder = 1
    }
    this.router.navigate(["/search"], { queryParams: { query: this.query.query, label: this.query.label, year: this.query.year, sortOrder: this.sortOrder, sortDirection: this.sortDirection } });
  }

  public toggleSortDirection() {
    if (this.sortDirection === 1) {
      this.sortDirectionText = 'Asc';
      this.sortDirection = 2
    } else {
      this.sortDirectionText = 'Desc';
      this.sortDirection = 1
    }
    this.router.navigate(["/search"], { queryParams: { query: this.query.query, label: this.query.label, year: this.query.year, sortOrder: this.sortOrder, sortDirection: this.sortDirection } });
  }
}