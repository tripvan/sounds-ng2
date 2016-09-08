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
var quantone_service_1 = require("../services/quantone.service");
var spotify_service_1 = require("../services/spotify.service");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/filter");
var albumsComponentHtml = require("./albums.component.html");
var AlbumsComponent = (function () {
    function AlbumsComponent(router, spotifyService, quantoneService) {
        this.router = router;
        this.spotifyService = spotifyService;
        this.quantoneService = quantoneService;
        this.searchQueryStream = new Subject_1.Subject();
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.albums = this.searchQueryStream
            .switchMap(function (query) {
            return _this.spotifyService.getAlbums(query);
        });
        this.sub = this.router.routerState
            .queryParams
            .subscribe(function (params) {
            _this.searchQueryStream.next(params["query"]);
        });
    };
    AlbumsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AlbumsComponent.prototype.getAlbum = function (album) {
        var _this = this;
        if (!album.showTracks) {
            this.quantoneService.getAlbum(album.id)
                .subscribe(function (albumResult) {
                if (albumResult && albumResult.length > 0) {
                    album.recordings.forEach(function (recording) {
                        var recordings = albumResult[0].Recordings;
                        recordings.forEach(function (quantoneRecording) {
                            if (quantoneRecording.SpotifyId === recording.id || quantoneRecording.Title.toLowerCase() === recording.name.toLowerCase()) {
                                recording.Bpm = quantoneRecording.Bpm;
                                recording.Duration = quantoneRecording.Duration;
                            }
                        });
                    });
                }
            }, function (error) { return _this.errorMessage = error; });
            album.showTracks = true;
        }
    };
    AlbumsComponent = __decorate([
        core_1.Component({
            selector: "qt-albums",
            template: albumsComponentHtml,
            styles: [require("./albums.component.css")],
            providers: [quantone_service_1.QuantoneService, spotify_service_1.SpotifyService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, spotify_service_1.SpotifyService, quantone_service_1.QuantoneService])
    ], AlbumsComponent);
    return AlbumsComponent;
}());
exports.AlbumsComponent = AlbumsComponent;
//# sourceMappingURL=albums.component.js.map