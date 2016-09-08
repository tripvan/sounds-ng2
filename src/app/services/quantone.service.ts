import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/concatAll";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/from";

import { Artist } from "./model/artist";
import { Album } from "./model/album";

@Injectable()
export class QuantoneService {
    constructor(private http: Http) {}

    getArtist(artistId): Observable<Artist[]>  {
        return this.http.get("http://qt-api.tristanchanning.com:8070/api/artist/" + artistId)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
    getArtists(artistIds: Array<string>): Observable<Artist[]>  {
        return Observable.from(artistIds)
            .map(artistId => {
            return this.http.get("http://qt-api.tristanchanning.com:8070/api/artist/" + artistId)
                    .map(this.extractData)
                    .catch(this.handleError);
        }).concatAll();
    }

    getAlbum(id: string): Observable<Album[]>  {
        return this.http.get("http://qt-api.tristanchanning.com:8070/api/albumbyid/" + id)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.Data || {};
    }



    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - $(error.statusText)` : "Server error";
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}