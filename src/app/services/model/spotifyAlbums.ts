import { SpotifyAlbum } from "./spotifyAlbum";

export class SpotifyAlbums {
    constructor(public total: number, public albums: SpotifyAlbum[]) {}
}