import { Component, OnInit,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";

import { SearchQuery } from "../services/model/searchQuery";
import { YearsService } from "../services/years.service";
import { LabelService } from '../services/label.service';
import { Label } from '../services/model/label';

@Component({
    selector: 'tc-header',
    template: require('./header.component.html'),
    styles: [require('./header.component.css')],
    animations: [
        trigger('sliderItemsState', [
        state('inactive', style({
          opacity: 0
        })),
        state('active',   style({
          opacity: 1
        })),
        transition('inactive => active', animate('20ms ease-in')),
        transition('active => inactive', animate(10))
      ])
    ]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private yearsService: YearsService,
    private labelService: LabelService) {}

  private errorMessage: string;
  private searchQueryStream = new Subject<SearchQuery>();
  private showYears: boolean = false;
  private showLabels: boolean = false;
  private queryParamsSubscription: Subscription;

  public years: any[];
  public yearsRange: any[];
  public year: string = "";
  public query: string;
  public labels: Label[];
  public label: string;
  public debounceTime: number = 800;
  public sliderItemsState: string = '';
  
  searchQuery: Observable<SearchQuery> = this.searchQueryStream
    .debounceTime(this.debounceTime)
    .distinctUntilChanged();

  ngOnInit() {
    this._subscribeToSearchQuery();
    this._initSearchLists();
    this._subscribeToQueryParams();
  }

  private _subscribeToSearchQuery() {
    this.searchQuery.subscribe(query => {
      this._navigateToAlbums(query);
    });
  }

  private _navigateToAlbums(search: SearchQuery) {
      this.router.navigate(["/search"], { queryParams: { query: search.query, label: search.label, year: search.year } });
  }
  
  private _initSearchLists() {
    this.years = this.yearsService.getYears();
    this.yearsRange = this.yearsService.getYearsRange();
    this.labels = this.labelService.getLabels();
  }
  private _subscribeToQueryParams() {
    this.queryParamsSubscription = this.router
      .routerState
      .root
      .queryParams
      .subscribe(params => {
        this.label = this._getParam(params["label"]);
        this.query = this._getParam(params["query"]);
        this.year = this._getParam(params["year"]);
    });
  }

  private _getParam(param: any) {
    if(param === undefined){
      return '';
    }

    let result: string = param;
    if(result != "true") {
      return decodeURI(result);
    }
    
    return '';
  }

  public search() {
    this.searchQueryStream.next(new SearchQuery(this.query, this.label, this.year, 0));
  }
  
  public searchByTerm(term: string) {
    this.query = term;
    this.search();
  }
  
  public searchByLabel(label: string) {
    if (this.label === label.toString()) label = ""; // deselect when selected. even though string type comes in as number...
    this.label = label;
    this.search();
  }
  
  public searchByYear(year: string) {
    if (this.year === year.toString()) year = ""; // deselect when selected. even though string type comes in as number...
    this.year = year;
    this.search();
  }

  public toggleYears() {
    this.showYears = !this.showYears;
    this.showLabels = false;
  }

  public toggleLabels() {
    this.showLabels = !this.showLabels;
    this.showYears = false;
  }
}