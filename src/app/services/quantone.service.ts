import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

import { Artist } from './model/artist';
import { Album } from './model/album';

@Injectable()
export class QuantoneService {
    constructor(private http: Http) {}
    private baseUrl: string = 'http://sounds-api.azurewebsites.net/api/';
    getArtist(artistId): Observable<Artist[]>  {
        return this.http.get(this.baseUrl +  'artist/' + artistId)
                    .map<Response, Artist[]>(this.extractData)
                    .catch<any, Artist[]>(this.handleError);
    }
    getArtists(artistIds: Array<string>): Observable<Artist[]>  {
        return Observable.from(artistIds)
            .map(artistId => {
            return this.http.get(this.baseUrl + 'artist/' + artistId)
                    .map<Response, Artist[]>(this.extractData)
                    .catch<any, Artist[]>(this.handleError);
        }).concatAll();
    }

    getAlbum(id: string): Observable<Album[]>  {
        return this.http.get(this.baseUrl + 'albumbyid/' + id)
                    .map<Response, Album[]>(this.extractData)
                    .catch<any, Album[]>(this.handleError);
    }

    private extractData(response: Response): any {
        let body = response.json();
        return body.Data || {};
    }

    private handleError(error: any): any {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - $(error.statusText)` : 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}