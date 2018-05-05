// import { Injectable } from '@angular/core';
// import { Http, Response, URLSearchParams } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

// import { Artist } from './model/artist';

// @Injectable()
// export class DiscogsService {
//     constructor(private http: Http) {}
//     private discogsUrl = 'https://api.discogs.com/';
//     // private spotifyAlbums: SpotifyAlbums = new SpotifyAlbums(0, []);

//     search(name: string): Observable<Artist> {
//         let fullQuery = '?query=' + name + '&type=artist';
//         return this.http.get(this.discogsUrl + 'database/search' + fullQuery)
//             .map(this.extractArtistData)
//             .catch(this.handleError);
//     }
//     private extractArtistData(response: Response) {
//         let artist = response.json();
//         console.log(artist);
//         if(!!artist) {
//             let newArtist = new Artist(artist.id, artist.name, '', []);
//             console.log(newArtist); 
//             return newArtist;
//         }

//         return {};
//     }
//     private handleError(error: any) {
//         let errMsg = (error.message) ? error.message :
//             error.status ? `${error.status} - $(error.statusText)` : 'Server error';
//         console.log(errMsg);
//         return Observable.throw(errMsg);
//     }
// }