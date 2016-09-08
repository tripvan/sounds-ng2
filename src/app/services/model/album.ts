import { Track } from "./track";
// todo create from spotifyAlbum
// play urls? e.g. youtube, tidal, etc. maybe just ids
// and helpers to resolve url from id

export class Album {
    constructor(public SpotifyId: string,
    public Name: string,
    public ReleaseDate: Date,
    public ImageUrl: string,
    public IsLive: boolean,
    public Copyright: string,
    public Tracks: Track[]) {}

    public IsCopyrightHidden: boolean;
    public IsChevronHidden: boolean;
    public ShowTracks: boolean;
}


/*

Album

SpotifyId

Popularity
Name
ReleaseDate
Image.url

Artists
name

Tracks?
name
Bpm
duration

isCopyrightHidden
isChevronHidden
showTracks

*/