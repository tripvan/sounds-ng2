import { SafeUrl } from '@angular/platform-browser';

import { Track } from "./track";
import { Tracks } from "./spotifyTracks";
import { SpotifyArtist } from "./spotifyArtist";
import { SpotifyImage } from "./spotifyImage";
import { SpotifyCopyright } from "./spotifyCopyright";

export class SpotifyAlbum {
    public tracks: Tracks;
    public showTracks: boolean;
    public tracksLoaded: boolean;
    public image: SpotifyImage;
    public copyright: SpotifyCopyright;
    public uri: string;
    public isCopyrightHidden: boolean;
    public showDownChevron: boolean = true;
    public showUpChevron: boolean = false;

    constructor (public id: string,
        public name: string,
        public recordings: Track[],
        public artists: SpotifyArtist[],
        public releaseDate: string,
        public images: SpotifyImage[],
        public copyrights: SpotifyCopyright[],
        public popularity: string,
        public trustedUri: SafeUrl) {
            this.popularity = String(this._getPopularity(popularity));
            this.image = images[images.length - 1];
            this.copyright = copyrights && copyrights.length > 0 ? copyrights[0] : null;
        }

        private _getPopularity(popularity: string) {
          let popularityNumber = +popularity / 10;
          // i.e. styling goes mental with these values. 
          if (popularityNumber === 0) {
            return 0.1;
          }
          if (popularityNumber === 0.8) {
            return 0.7;
          }

          return popularityNumber;
        }
}