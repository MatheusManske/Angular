"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilmesRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var filmes_component_1 = require("./filmes/filmes.component");
var form_filme_component_1 = require("./form-filme/form-filme.component");
var ator_component_1 = require("./ator/ator.component");
var form_ator_component_1 = require("./form-ator/form-ator.component");
var classe_component_1 = require("./classe/classe.component");
var diretor_component_1 = require("./diretor/diretor.component");
var form_classe_component_1 = require("./form-classe/form-classe.component");
var form_diretor_component_1 = require("./form-diretor/form-diretor.component");
var routes = [
    { path: '', component: filmes_component_1.FilmesComponent },
    { path: "new", component: form_filme_component_1.FormFilmeComponent },
    { path: "ator", component: ator_component_1.AtorComponent },
    { path: "ator/novoator", component: form_ator_component_1.FormAtorComponent },
    { path: "classe", component: classe_component_1.ClasseComponent },
    { path: "classe/novaclasse", component: form_classe_component_1.FormClasseComponent },
    { path: "diretor", component: diretor_component_1.DiretorComponent },
    { path: "diretor/novodiretor", component: form_diretor_component_1.FormDiretorComponent },
    { path: "editarF/:id", component: form_filme_component_1.FormFilmeComponent },
    { path: "classe/editarC/:id", component: form_classe_component_1.FormClasseComponent },
    { path: "ator/editarA/:id", component: form_ator_component_1.FormAtorComponent },
    { path: "diretor/editarD/:id", component: form_diretor_component_1.FormDiretorComponent },
];
var FilmesRoutingModule = /** @class */ (function () {
    function FilmesRoutingModule() {
    }
    FilmesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], FilmesRoutingModule);
    return FilmesRoutingModule;
}());
exports.FilmesRoutingModule = FilmesRoutingModule;
