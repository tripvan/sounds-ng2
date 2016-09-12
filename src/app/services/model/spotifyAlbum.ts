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
        public release_date: string,
        public images: SpotifyImage[],
        public copyrights: SpotifyCopyright[],
        public popularity: string,
        public trustedUri: SafeUrl) {
            this.popularity = String((+this.popularity / 10));
            this.image = images[images.length - 1];
            this.copyright = copyrights && copyrights.length > 0 ? copyrights[0] : null;
        }
}