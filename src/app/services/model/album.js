"use strict";
var Album = (function () {
    function Album(SpotifyId, Title, IsLive, Recordings) {
        this.SpotifyId = SpotifyId;
        this.Title = Title;
        this.Recordings = Recordings;
    }
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=album.js.map