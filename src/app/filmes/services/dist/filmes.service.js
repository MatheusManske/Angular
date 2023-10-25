"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilmesService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var FilmesService = /** @class */ (function () {
    function FilmesService(httpClient) {
        this.httpClient = httpClient;
        this.API = '/api/movies';
    }
    FilmesService.prototype.list = function () {
        return this.httpClient.get(this.API);
    };
    FilmesService.prototype.save = function (record) {
        if (record._id) {
            return this.saveUpdate(record);
        }
        else {
            return this.saveCreate(record);
        }
    };
    FilmesService.prototype.saveCreate = function (record) {
        return this.httpClient.post(this.API, record).pipe(rxjs_1.first());
    };
    FilmesService.prototype.saveUpdate = function (record) {
        return this.httpClient.put(this.API + "/" + record._id, record).pipe(rxjs_1.first());
    };
    FilmesService.prototype.remove = function (id) {
        return this.httpClient["delete"](this.API + "/" + id).pipe(rxjs_1.first());
    };
    FilmesService.prototype.chamarID = function (id) {
        return this.httpClient.get(this.API + "/" + id).pipe(rxjs_1.first());
    };
    FilmesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FilmesService);
    return FilmesService;
}());
exports.FilmesService = FilmesService;
