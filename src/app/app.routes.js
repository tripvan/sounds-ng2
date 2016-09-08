"use strict";
var router_1 = require("@angular/router");
var albums_component_1 = require("./albums/albums.component");
exports.routes = [
    { path: "albums", component: albums_component_1.AlbumsComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map