import { Component, OnInit,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { SearchQuery } from "../services/model/searchQuery";
import { YearsService } from "../services/years.service";

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
    private yearsService: YearsService) {}

  private errorMessage: string;
  private searchQueryStream = new Subject<SearchQuery>();
  private showYears: boolean = false;
  private sub: any;

  public years: any[];
  public yearsRange: any[];
  public year: string = "";
  public query: string;
  public label: string;
  public debounceTime: number = 800;
  public sliderItemsState: string = '';
  
  searchQuery: Observable<SearchQuery> = this.searchQueryStream
    .debounceTime(this.debounceTime)
    .distinctUntilChanged();

  ngOnInit() {
    this.searchQuery.subscribe(query => {
      this._navigateToAlbums(query);
    });
    this.years = this.yearsService.getYears();
    this.yearsRange = this.yearsService.getYearsRange();
    this.sub = this.router
      .routerState
      .queryParams
      .subscribe(params => {
        this.label = this._getParam(params["label"]);
        this.query = this._getParam(params["query"]);
        this.year = this._getParam(params["year"]);
    })
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
  private _navigateToAlbums(search: SearchQuery) {
      this.router.navigate(["/search"], { queryParams: { query: search.query, label: search.label, year: search.year } });
  }
  
  public search() {
    this.searchQueryStream.next(new SearchQuery(this.query, this.label, this.year, 0));
  }
  
  public searchByTerm(term: string) {
    this.query = term;
    this.search();
  }
  
  public searchByLabel(label: string) {
    this.label = label;
    this.search();
  }
  
  public searchByYear(year: string) {
    if (this.year === year) year = ""; // deselect when selected
    this.year = year;
    this.search();
  }

  public toggleYears() {
    this.showYears = !this.showYears;
  }

  public moveSliderLeft(sliderItems) {
    this.moveSlider(true, sliderItems);
  }

  public moveSliderRight(sliderItems) {
    this.moveSlider(false, sliderItems);
  }

  private moveSlider(left: boolean, sliderItems) {
    console.log(left);
    console.log(sliderItems);
  }
}