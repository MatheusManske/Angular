"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilmesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var filmes_routing_module_1 = require("./filmes-routing.module");
var app_material_module_1 = require("../shared/app-material/app-material.module");
var form_filme_component_1 = require("./form-filme/form-filme.component");
var ator_component_1 = require("./ator/ator.component");
var form_ator_component_1 = require("./form-ator/form-ator.component");
var classe_component_1 = require("./classe/classe.component");
var form_classe_component_1 = require("./form-classe/form-classe.component");
var diretor_component_1 = require("./diretor/diretor.component");
var form_diretor_component_1 = require("./form-diretor/form-diretor.component");
var FilmesModule = /** @class */ (function () {
    function FilmesModule() {
    }
    FilmesModule = __decorate([
        core_1.NgModule({
            declarations: [
                form_filme_component_1.FormFilmeComponent,
                ator_component_1.AtorComponent,
                form_ator_component_1.FormAtorComponent,
                classe_component_1.ClasseComponent,
                diretor_component_1.DiretorComponent,
                form_diretor_component_1.FormDiretorComponent,
                form_classe_component_1.FormClasseComponent
            ],
            imports: [
                common_1.CommonModule,
                filmes_routing_module_1.FilmesRoutingModule,
                app_material_module_1.AppMaterialModule,
                forms_1.ReactiveFormsModule
            ]
        })
    ], FilmesModule);
    return FilmesModule;
}());
exports.FilmesModule = FilmesModule;
