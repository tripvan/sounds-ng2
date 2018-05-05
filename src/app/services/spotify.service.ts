import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Artist } from './model/artist';
import { Album } from './model/album';
import { SpotifyArtist } from './model/spotifyArtist';
import { SpotifyAlbum } from './model/spotifyAlbum';
import { SpotifyAlbums } from './model/spotifyAlbums';
import { Track } from './model/track';
import { SearchQuery } from './model/searchQuery';
import { ArtistSearchQuery } from './model/artistSearchQuery';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class SpotifyService {
    constructor(private http: HttpClient, private sanitiser: DomSanitizer) {}
    private spotifyUrl = `${environment.apiUrl}spotify/`;
    private spotifyAlbums: SpotifyAlbums = new SpotifyAlbums(0, []);
    private query: SearchQuery;
    private artistQuery: ArtistSearchQuery;
    private sortThreshold: number = 50;
    public perPage: number = 50;

    getTotal() {
      return this.spotifyAlbums.total;
    }

    public canSort() {
      return this.getTotal() > 0 && this.getTotal() <= this.sortThreshold;
    }

    getAlbums(query: SearchQuery): Observable<SpotifyAlbum[]> {
      if (this.canSort() && this._areSameQuery(query, this.query)) {
        return of(this._sortAlbums(+query.sortOrder, +query.sortDirection));
      }

      if (query.offset === 0) {
        this.spotifyAlbums = new SpotifyAlbums(0, []);
      }

      this.query = query;
      const url = this._getSearchUrl(query);

      return this._getAlbums(url)
                  .pipe(
                    map(
                      response => {
                        this.spotifyAlbums.total = response.total;

                        if (response.total === 0) {
                            return new Array<SpotifyAlbum>();
                        }

                        if (response.albums.length > 0) {
                          response.albums.forEach(album => {
                            let tracks: Track[] = [];
                            album.tracks.items.forEach(track => {
                              tracks.push(new Track(track.id, track.name, this.getUnsanitisedUrl(track.uri), '', '', '', '', ''));
                            });
                            this.spotifyAlbums.albums.push(new SpotifyAlbum(album.id, album.name, tracks, album.artists, album.releaseDate, album.images, album.copyrights, album.popularity, this.getUnsanitisedUrl(album.uri)));
                          });
                          return this._getSortedAlbums(+query.sortOrder, +query.sortDirection);
                        }
                      }
                    )
                  );
    }

    getArtistAlbums(query: ArtistSearchQuery): Observable<SpotifyAlbum[]> {
      if (this.canSort() && this._areSameArtistQuery(query, this.artistQuery)) {
        return of(this._sortAlbums(+query.sortOrder, +query.sortDirection));
      }

      if (query.offset === 0) {
        this.spotifyAlbums = new SpotifyAlbums(0, []);
      }

      this.artistQuery = query;
      const url = this._getArtistAlbumsUrl(query);
      return this._getAlbums(url)
                  .pipe(
                    map(
                      response => {
                        this.spotifyAlbums.total = response.total;

                        if (response.total === 0) {
                            return new Array<SpotifyAlbum>();
                        }

                        if (response.albums.length > 0) {
                            response.albums.forEach(album => {
                                let tracks: Track[] = [];
                                album.tracks.items.forEach(track => {
                                    tracks.push(new Track(track.id, track.name, this.getUnsanitisedUrl(track.uri), '', '', '', '', ''));
                                });
                                this.spotifyAlbums.albums.push(new SpotifyAlbum(album.id, album.name, tracks, album.artists, album.releaseDate, album.images, album.copyrights, album.popularity, this.getUnsanitisedUrl(album.uri)));
                            });
                            return this.spotifyAlbums.albums;
                        }
                      }
                    )
                  );
    }

    getArtistAlbumIds(query: ArtistSearchQuery): Observable<SpotifyAlbums> {
        return this.http.get(`${this.spotifyUrl}artistalbums?artistId=${query.id}&offset=${query.offset}&limit=${this.perPage}`)
                        .pipe(
                          catchError<any, SpotifyAlbums>(this.handleError)
                        );
    }

    getArtist(id: string): Observable<Artist> {
        return this.http.get(this.spotifyUrl + 'artist?artistId=' + id)
            .pipe(
              map(this.extractArtistData),
              catchError<any, Artist>(this.handleError)
            );
    }

    private _areSameQuery(current: SearchQuery, previous: SearchQuery) {
      return !!previous && previous.label === current.label &&
                          previous.offset === current.offset &&
                          previous.query === current.query &&
                          previous.year === current.year;
    }

    private _areSameArtistQuery(current: ArtistSearchQuery, previous: ArtistSearchQuery) {
      return !!previous && previous.id === current.id &&
                          previous.offset === current.offset;
    }
    private _getSearchUrl(query: SearchQuery): string {
      let term = query.query;
      if (!term || term.length < 2) {
        term = '';
      }
      let label = query.label;
      if (!label || label.length < 2) {
        label = '';
      }
      let year = query.year;
      if (!year || year.length < 2) {
        year = '';
      }
      return `${this.spotifyUrl}search?query=${term}&label=${label}&year=${year}&offset=${query.offset}&limit=${this.perPage}`;
    }

    private _getArtistAlbumsUrl(query: ArtistSearchQuery): string {
      return `${this.spotifyUrl}artistalbums?artistId=${query.id}&offset=${query.offset}&limit=${this.perPage}`;
    }

    private _getAlbums(url: string): Observable<SpotifyAlbums> {
      return this.http.get(url)
                      .pipe(
                        catchError<any, SpotifyAlbums>(this.handleError)
                      );
    }

    private _getSortedAlbums (sortOrder: number, sortDirection: number): SpotifyAlbum[] {
      if (this.canSort()) {
        return this._sortAlbums(sortOrder, sortDirection);
      } else {
        return this.spotifyAlbums.albums;
      }
    }

    private _sortAlbums(sortOrder: number, sortDirection: number): SpotifyAlbum[] {
      if (sortOrder === 1) {
        return this.spotifyAlbums.albums.sort((a, b) => {
          if (sortDirection === 1) {
            return +b.popularity - +a.popularity;
          } else {
            return +a.popularity - +b.popularity;
          }
        });
      } else {
        return this.spotifyAlbums.albums.sort((a, b) => {
          if (sortDirection === 1) {
            return +new Date(b.releaseDate) - +new Date(a.releaseDate);
          } else {
            return +new Date(a.releaseDate) - +new Date(b.releaseDate);
          }
        });
      }
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - $(error.statusText)` : 'Server error';
        console.log(errMsg);
        return throwError(errMsg);
    }

    private extractArtistData(response: any): Artist | any {
        if (!!response) {
            let newArtist = new Artist(response.id, response.name, '', response.images);
            return newArtist;
        }

        return {};
    }

    private getUnsanitisedUrl(url: string): SafeUrl {
        return this.sanitiser.bypassSecurityTrustUrl(url);
    }
}