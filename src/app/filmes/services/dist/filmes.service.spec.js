"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var filmes_service_1 = require("./filmes.service");
describe('FilmesService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(filmes_service_1.FilmesService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
