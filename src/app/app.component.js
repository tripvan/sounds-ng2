"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/filter");
var appComponentCss = require("./app.component.css");
var AppComponent = (function () {
    function AppComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searchQueryStream = new Subject_1.Subject();
        this.query = this.searchQueryStream
            .filter(function (term) { return !!term && term.length > 2; })
            .debounceTime(300)
            .distinctUntilChanged();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentQuery = this.activatedRoute.snapshot.params["query"];
        if (!!currentQuery && currentQuery.length > 2) {
            this.navigateToAlbums(currentQuery);
        }
        this.query.subscribe(function (query) {
            _this.navigateToAlbums(query);
        });
    };
    AppComponent.prototype.navigateToAlbums = function (query) {
        this.router.navigate(["albums"], { queryParams: { query: "" + query } });
    };
    AppComponent.prototype.search = function (query) {
        this.searchQueryStream.next(query);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<div class=\"layout-container-dark\">\n              <ul class=\"layout-constrained\">\n                <li class=\"headeritem headeritem-light\">\n                  <label class=\"glyphicon glyphicon-search\" for=\"query\"></label>\n                  <input id=\"query\" #term (keyup)=\"search(term.value)\" placeholder=\"Enter Album...\"/>\n                </li>\n              </ul>\n            </div>\n            <div class=\"layout-container\">\n              <router-outlet></router-outlet>\n            </div>\n            ",
            styles: [appComponentCss],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// getArtist() {
//   this.quantoneService.getArtist("1BlBZ9jQGOjmj6Zykgg43L")
//     .subscribe(
//       artists => this.artists = artists,
//       error => this.errorMessage = <any>error
//     );
// }
// getArtists() {
//   this.spotifyService.getArtists("bonobo")
//   .subscribe(
//     artists => {
//         this.quantoneService.getArtists(artists.map(artist => artist.id)) // ["1BlBZ9jQGOjmj6Zykgg43L", "3s9dByBqCrJP6KNZBSw2R0"]
//         .subscribe(
//           artists => {
//             console.log(artists[0]);
//             if (artists.length > 0) {
//               this.artists.push(artists[0]);
//             }
//           },
//           error => this.errorMessage = <any>error
//         );
//     }
//   );
// } 
//# sourceMappingURL=app.component.js.map