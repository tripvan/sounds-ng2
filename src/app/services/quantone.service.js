"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/concatAll");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/from");
var QuantoneService = (function () {
    function QuantoneService(http) {
        this.http = http;
    }
    QuantoneService.prototype.getArtist = function (artistId) {
        return this.http.get("http://qt-api.tristanchanning.com:8070/api/artist/" + artistId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuantoneService.prototype.getArtists = function (artistIds) {
        var _this = this;
        // console.log(artistIds);
        // let obs = Observable.from(artistIds);
        // console.log(obs);
        return Observable_1.Observable.from(artistIds)
            .map(function (artistId) {
            return _this.http.get("http://qt-api.tristanchanning.com:8070/api/artist/" + artistId)
                .map(_this.extractData)
                .catch(_this.handleError);
        }).concatAll();
    };
    QuantoneService.prototype.getAlbum = function (id) {
        return this.http.get("http://qt-api.tristanchanning.com:8070/api/albumbyid/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuantoneService.prototype.extractData = function (response) {
        var body = response.json();
        return body.Data || {};
    };
    QuantoneService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - $(error.statusText)" : "Server error";
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    QuantoneService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuantoneService);
    return QuantoneService;
}());
exports.QuantoneService = QuantoneService;
//# sourceMappingURL=quantone.service.js.map