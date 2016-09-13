import { SafeUrl } from '@angular/platform-browser';

export class Track {
    constructor (
        public Id: string,
        public Name: string,
        public trustedUri: SafeUrl,
        public Popularity: string,
        public SpotifyId: string,
        public Bpm: string,
        public Duration: string,
        public Title: string) {}
}