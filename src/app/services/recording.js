"use strict";
var Recording = (function () {
    function Recording(id, name, uri, popularity, SpotifyId, Bpm, Duration, Title) {
        this.id = id;
        this.name = name;
        this.uri = uri;
        this.popularity = popularity;
        this.SpotifyId = SpotifyId;
        this.Bpm = Bpm;
        this.Duration = Duration;
        this.Title = Title;
    }
    return Recording;
}());
exports.Recording = Recording;
//# sourceMappingURL=recording.js.map