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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/concatAll");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/from");
var spotifyAlbum_1 = require("./model/spotifyAlbum");
var recording_1 = require("./model/recording");
var SpotifyService = (function () {
    function SpotifyService(http) {
        this.http = http;
        this.spotifyUrl = "https://api.spotify.com/v1/";
    }
    SpotifyService.prototype.getAlbums = function (query) {
        var _this = this;
        return this.getAlbumIds(query)
            .map(function (albumIds) {
            return _this.getAlbumsByIds(albumIds.map(function (album) { return album.id; }))
                .map(function (albums) {
                console.log("Albums from spotify");
                console.log(albums);
                if (albums.length > 0) {
                    var spotifyAlbums_1 = [];
                    albums.forEach(function (album) {
                        var tracks = [];
                        album.tracks.items.forEach(function (track) {
                            tracks.push(new recording_1.Recording(track.id, track.name, track.uri, track.popularity, "", "", "", ""));
                        });
                        // let artists: SpotifyArtist[] = [];
                        // album.artists.forEach(track => {
                        //     tracks.push(new Recording(track.id, track.name, track.uri, track.popularity, "", "", "", ""));
                        // });
                        spotifyAlbums_1.push(new spotifyAlbum_1.SpotifyAlbum(album.id, album.name, tracks, album.artists, album.release_date, album.images, album.copyrights, album.popularity));
                    });
                    return spotifyAlbums_1;
                }
            });
        })
            .concatAll();
    };
    SpotifyService.prototype.getAlbumIds = function (query) {
        var params = new http_1.URLSearchParams();
        params.set("q", query);
        params.set("type", "album");
        params.set("offset", "0");
        params.set("limit", "10");
        params.set("market", "GB");
        return this.http.get(this.spotifyUrl + "search", { search: params })
            .map(this.extractAlbumIdData)
            .catch(this.handleError);
    };
    SpotifyService.prototype.extractAlbumIdData = function (response) {
        var body = response.json();
        var artists = body.albums.items;
        console.log(body.albums.items);
        return body.albums.items || {};
    };
    SpotifyService.prototype.getAlbumsByIds = function (albumIds) {
        var params = new http_1.URLSearchParams();
        params.set("ids", albumIds.join(","));
        return this.http.get(this.spotifyUrl + "albums", { search: params })
            .map(this.extractAlbumData)
            .catch(this.handleError);
    };
    SpotifyService.prototype.extractAlbumData = function (response) {
        var body = response.json();
        console.log("Album Data");
        console.log(body.albums);
        return body.albums || {};
    };
    SpotifyService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - $(error.statusText)" : "Server error";
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    SpotifyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map