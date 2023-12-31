"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var toolbar_1 = require("@angular/material/toolbar");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var filmes_component_1 = require("./filmes/filmes/filmes.component");
var app_material_module_1 = require("./shared/app-material/app-material.module");
var http_1 = require("@angular/common/http");
var modal_1 = require("ngx-bootstrap/modal");
var card_1 = require("@angular/material/card");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                filmes_component_1.FilmesComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                toolbar_1.MatToolbarModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                app_material_module_1.AppMaterialModule,
                http_1.HttpClientModule,
                card_1.MatCardModule,
                modal_1.ModalModule.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
