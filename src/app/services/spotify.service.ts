import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from "@angular/http";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from "rxjs/Observable";

import { Artist } from "./model/artist";
import { Album } from "./model/album";
import { SpotifyArtist } from "./model/spotifyArtist";
import { SpotifyAlbum } from "./model/spotifyAlbum";
import { SpotifyAlbums } from "./model/spotifyAlbums";
import { Track } from "./model/track";
import { SearchQuery } from "./model/searchQuery";
import { ArtistSearchQuery } from "./model/artistSearchQuery";

@Injectable()
export class SpotifyService {
    constructor(private http: Http, private sanitiser: DomSanitizer) {}
    private spotifyUrl = "http://sounds-api.azurewebsites.net/api/spotify/"; //http://qt-api.tristanchanning.com:8070
    private spotifyAlbums: SpotifyAlbums = new SpotifyAlbums(0, []);
    public perPage: number = 20;

    getTotal() {
        return this.spotifyAlbums.total;
    }

    getAlbums(query: SearchQuery): Observable<SpotifyAlbum[]> {
        if (query.offset === 0) {
             this.spotifyAlbums = new SpotifyAlbums(0, []);
        }
        return this.getAlbumIds(query)
            .map(albumIds => {
                this.spotifyAlbums.total = albumIds.total;
                if (albumIds.total === 0) {
                    return Observable.of(new Array<SpotifyAlbum>());
                }
            return this.getAlbumsByIds(albumIds.albums.map(album => album.id))
                .map(
                    albums => {
                        if (albums.length > 0) {
                            albums.forEach(album => {
                                let tracks: Track[] = [];
                                album.tracks.items.forEach(track => {
                                    tracks.push(new Track(track.id, track.name, this.getUnsanitisedUrl(track.uri), "", "", "", "", ""));
                                });
                                this.spotifyAlbums.albums.push(new SpotifyAlbum(album.id, album.name, tracks, album.artists, album.release_date, album.images, album.copyrights, album.popularity, this.getUnsanitisedUrl(album.uri)));
                            });
                            return this.spotifyAlbums.albums;
                            // .sort((a, b) => {
                            //     return +b.popularity - +a.popularity;
                            // });
                        }
                    }
                );
            })
            .concatAll();
    }

    getAlbumIds(query: SearchQuery): Observable<SpotifyAlbums> {
        let label = query.label;
        if (!!label && label.length > 2) {
            label = " label:\"" + label + "\"";
        } else {
            label = "";
        }
        let year = query.year;
        if (!!year && year.length > 2) {
            year = " year:" + year;
        } else {
            year = "";
        }
        let fullQuery: string = query.query + label + year;

        return this.http.get(this.spotifyUrl + "search/" + fullQuery + "/" + query.offset + "/" + this.perPage)
            .map<Response, SpotifyAlbums | any>(this.extractAlbumIdData)
            .catch<any, SpotifyAlbums>(this.handleError);
    }
    getArtistAlbumIds(query: ArtistSearchQuery): Observable<SpotifyAlbums> {
        return this.http.get(this.spotifyUrl + "artistalbums/" + query.id + '/' + query.offset + '/' + this.perPage)
            .map<Response, SpotifyAlbums>(this.extractArtistAlbumIdData)
            .catch<any, SpotifyAlbums>(this.handleError);
    }
    private extractArtistAlbumIdData(response: Response): SpotifyAlbum | any {
        let body = response.json();
        return new SpotifyAlbums(body.total, body.items) || {};
    }
    private handleAlbumIdError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - $(error.statusText)` : "Server error";
        return Observable.throw(errMsg);
    }

    private extractAlbumIdData(response: Response): SpotifyAlbums | {} {
        let body = response.json();
        return new SpotifyAlbums(body.albums.total, body.albums.items) || {};
    }

    getAlbumsByIds(albumIds: Array<string>): Observable<SpotifyAlbum[]> {
        let params = new URLSearchParams();
        params.set("albumIds", albumIds.join(","));

        return this.http.get(this.spotifyUrl + "albums/", { search: params })
            .map<Response, SpotifyAlbum[]>(this.extractAlbumData)
            .catch<any, SpotifyAlbum[]>(this.handleError);
    }

    private extractAlbumData(response: Response) {
        let body = response.json();
        return body.albums || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - $(error.statusText)` : "Server error";
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
    
    getArtistAlbums(query: ArtistSearchQuery): Observable<SpotifyAlbum[]> {
        if (query.offset === 0) {
             this.spotifyAlbums = new SpotifyAlbums(0, []);
        }
        return this.getArtistAlbumIds(query)
            .map(albumIds => {
                this.spotifyAlbums.total = albumIds.total;
                if (albumIds.total === 0) {
                    return Observable.of(new Array<SpotifyAlbum>());
                }
                return this.getAlbumsByIds(albumIds.albums.map(album => album.id))
                .map(
                    albums => {
                        if (albums.length > 0) {
                            albums.forEach(album => {
                                let tracks: Track[] = [];
                                album.tracks.items.forEach(track => {
                                    tracks.push(new Track(track.id, track.name, track.uri, "", "", "", "", ""));
                                });
                                this.spotifyAlbums.albums.push(new SpotifyAlbum(album.id, album.name, tracks, album.artists, album.release_date, album.images, album.copyrights, album.popularity, this.getUnsanitisedUrl(album.uri)));
                            });
                            return this.spotifyAlbums.albums;
                        }
                    }
                );
            })
            .concatAll();
    }
    updateAlbum(spotifyAlbum: SpotifyAlbum, albumResult: Album[]){
        spotifyAlbum.tracksLoaded = true;
        if (albumResult && albumResult.length > 0) {
            let tracks = albumResult[0].Tracks;
            spotifyAlbum.recordings.forEach(spotifyTrack => {
                tracks.forEach(track => {
                    if (track.SpotifyId === spotifyTrack.Id || track.Title.toLowerCase() === spotifyTrack.Title.toLowerCase()) {
                    spotifyTrack.Bpm = track.Bpm;
                    spotifyTrack.Duration = track.Duration;
                    }
                });
            });
        }
    }

    getArtist(id: string): Observable<Artist> {
        return this.http.get(this.spotifyUrl + "artist/" + id)
            .map<Response, Artist | any>(this.extractArtistData)
            .catch<any, Artist>(this.handleError);
    }

    private extractArtistData(response: Response): Artist | any {
        let artist = response.json();
        if (!!artist) {
            let newArtist = new Artist(artist.id, artist.name, '', artist.images);
            return newArtist;
        }

        return {};
    }

    private getUnsanitisedUrl(url: string): SafeUrl {
        return this.sanitiser.bypassSecurityTrustUrl(url);
    }
}