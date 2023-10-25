"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AtorComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AtorComponent = /** @class */ (function () {
    function AtorComponent(router, route, service, modalService, _snackBar) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.modalService = modalService;
        this._snackBar = _snackBar;
        this.displayedColumns = ['nome', 'cpf', 'actions'];
        this.atorSelecionado = {};
        this.listaAtor = this.service.list().pipe(rxjs_1.catchError(function (error) {
            console.error('Ocorreu um erro ao buscar a lista de classe:', error);
            return rxjs_1.of([]);
        }));
    }
    AtorComponent.prototype.ngOnInit = function () {
    };
    AtorComponent.prototype.AddAtor = function () {
        this.router.navigate(['novoator'], { relativeTo: this.route });
        console.log("ola");
    };
    AtorComponent.prototype.delAtor = function (ator) {
        this.atorSelecionado = ator;
        this.deleteModalRef = this.modalService.show(this.deleteAtor, { "class": 'modal-sm' });
    };
    AtorComponent.prototype.confirmDelAtor = function () {
        var _this = this;
        this.service.remove(this.atorSelecionado._id)
            .subscribe({
            next: function (result) {
                var _a;
                _this._snackBar.open('✔️ Ator Excluído com Sucesso', '', {
                    duration: 4000
                });
                window.location.reload();
                (_a = _this.deleteModalRef) === null || _a === void 0 ? void 0 : _a.hide();
            },
            error: function (error) {
                _this._snackBar.open('❌ Erro ao Excluir Ator', '', {
                    duration: 4000
                });
            }
        });
    };
    AtorComponent.prototype.cancelDelAtor = function () {
        var _a;
        (_a = this.deleteModalRef) === null || _a === void 0 ? void 0 : _a.hide();
    };
    AtorComponent.prototype.editAtor = function (ator) {
        this.router.navigate(['editarA', ator._id], { relativeTo: this.route });
    };
    __decorate([
        core_2.ViewChild('deleteAtor', { static: false })
    ], AtorComponent.prototype, "deleteAtor");
    AtorComponent = __decorate([
        core_1.Component({
            selector: 'component-app-ator',
            templateUrl: './ator.component.html',
            styleUrls: ['./ator.component.scss']
        })
    ], AtorComponent);
    return AtorComponent;
}());
exports.AtorComponent = AtorComponent;
