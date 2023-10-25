"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DiretorComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var core_2 = require("@angular/core");
var DiretorComponent = /** @class */ (function () {
    function DiretorComponent(service, _snackBar, route, router, modalService) {
        this.service = service;
        this._snackBar = _snackBar;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.displayedColumns = ['nome', 'actions'];
        this.diretorSelecionado = {};
        this.listaDiretor = this.service.list().pipe(rxjs_1.catchError(function (error) {
            console.error('Ocorreu um erro ao buscar a lista de classe:', error);
            return rxjs_1.of([]);
        }));
    }
    DiretorComponent.prototype.ngOnInit = function () {
    };
    DiretorComponent.prototype.AddDiretor = function () {
        this.router.navigate(['novodiretor'], { relativeTo: this.route });
        console.log("ola");
    };
    DiretorComponent.prototype.delDiretor = function (diretor) {
        this.diretorSelecionado = diretor;
        this.deleteModalRef = this.modalService.show(this.deleteDiretor, { "class": 'modal-sm' });
    };
    DiretorComponent.prototype.ConfirmDelDiretor = function () {
        var _this = this;
        this.service.remove(this.diretorSelecionado._id)
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
    DiretorComponent.prototype.cancelDelDiretor = function () {
        var _a;
        (_a = this.deleteModalRef) === null || _a === void 0 ? void 0 : _a.hide();
    };
    DiretorComponent.prototype.editDiretor = function (diretor) {
        this.router.navigate(['editarD', diretor._id], { relativeTo: this.route });
    };
    __decorate([
        core_2.ViewChild('deleteDiretor', { static: false })
    ], DiretorComponent.prototype, "deleteDiretor");
    DiretorComponent = __decorate([
        core_1.Component({
            selector: 'app-diretor',
            templateUrl: './diretor.component.html',
            styleUrls: ['./diretor.component.scss']
        })
    ], DiretorComponent);
    return DiretorComponent;
}());
exports.DiretorComponent = DiretorComponent;
