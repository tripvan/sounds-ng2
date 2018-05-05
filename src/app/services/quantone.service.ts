import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError, concatAll, map } from 'rxjs/operators';

import { environment } from './../../environments/environment.prod';
import { Artist } from './model/artist';
import { Album } from './model/album';

@Injectable()
export class QuantoneService {
    constructor(private http: HttpClient) {}
    private baseUrl: string = `${environment.apiUrl}quantone/`;
    getArtist(artistId): Observable<Artist[]>  {
        return this.http.get(this.baseUrl +  'artist/' + artistId)
                    .pipe(
                      map(this.extractData),
                      catchError<any, Artist[]>(this.handleError)
                    );
    }

    getArtists(artistIds: Array<string>): Observable<Artist[]>  {
        return from(artistIds)
                .pipe(
                  map(artistId => {
                    return this.http.get(this.baseUrl + 'artist/' + artistId)
                            .pipe(
                              map(this.extractData),
                              catchError<any, Artist[]>(this.handleError)
                            );
                  }),
                  concatAll()
                );
    }

    getAlbum(id: string): Observable<Album[]>  {
        return this.http.get(this.baseUrl + 'albumbyid/' + id)
                    .pipe(
                      map(this.extractData),
                      catchError<any, Album[]>(this.handleError)
                    );
    }

    private extractData(response: HttpResponse<any>): Album[] {
        return response.body.data || {};
    }

    private handleError(error: any): any {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - $(error.statusText)` : 'Server error';
        console.log(errMsg);
        return throwError(errMsg);
    }
}