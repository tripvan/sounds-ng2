"use strict";
var SpotifyAlbum = (function () {
    function SpotifyAlbum(id, name, recordings, artists, release_date, images, copyrights, popularity) {
        this.id = id;
        this.name = name;
        this.recordings = recordings;
        this.artists = artists;
        this.release_date = release_date;
        this.images = images;
        this.copyrights = copyrights;
        this.popularity = popularity;
        this.image = images[images.length - 1];
        this.copyright = copyrights && copyrights.length > 0 ? copyrights[0] : null;
    }
    return SpotifyAlbum;
}());
exports.SpotifyAlbum = SpotifyAlbum;
//# sourceMappingURL=spotifyAlbum.js.map