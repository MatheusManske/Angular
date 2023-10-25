"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClasseComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var core_2 = require("@angular/core");
var ClasseComponent = /** @class */ (function () {
    function ClasseComponent(router, route, service, modalService, _snackBar) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.modalService = modalService;
        this._snackBar = _snackBar;
        this.arrayClasse = [];
        this.displayedColumns = ['nome', 'valor', 'prazo', 'actions'];
        this.classeSelecionada = {};
        this.listaClasse = this.service.list().pipe(rxjs_1.catchError(function (error) {
            console.error('Ocorreu um erro ao buscar a lista de classe:', error);
            return rxjs_1.of([]);
        }));
    }
    ClasseComponent.prototype.AddClasse = function () {
        this.router.navigate(['novaclasse'], { relativeTo: this.route });
        console.log("ola");
    };
    ClasseComponent.prototype.delClasse = function (classe) {
        this.classeSelecionada = classe;
        console.log(this.classeSelecionada._id);
        this.deleteModalRef = this.modalService.show(this.deleteClasse, { "class": 'modal-sm' });
    };
    ClasseComponent.prototype.ConfirmdelClasse = function () {
        var _this = this;
        this.service.remove(this.classeSelecionada._id)
            .subscribe({
            next: function (result) {
                var _a;
                _this._snackBar.open('✔️ Classe Excluída com Sucesso', '', {
                    duration: 4000
                });
                window.location.reload();
                (_a = _this.deleteModalRef) === null || _a === void 0 ? void 0 : _a.hide();
            },
            error: function (error) {
                _this._snackBar.open('❌ Erro ao Excluir Classe', '', {
                    duration: 4000
                });
            }
        });
    };
    ClasseComponent.prototype.cancelDelClasse = function () {
        var _a;
        (_a = this.deleteModalRef) === null || _a === void 0 ? void 0 : _a.hide();
    };
    ClasseComponent.prototype.editClasse = function (classe) {
        this.router.navigate(['editarC', classe._id], { relativeTo: this.route });
    };
    __decorate([
        core_2.ViewChild('deleteClasse', { static: false })
    ], ClasseComponent.prototype, "deleteClasse");
    ClasseComponent = __decorate([
        core_1.Component({
            selector: 'component-app-classe',
            templateUrl: './classe.component.html',
            styleUrls: ['./classe.component.scss']
        })
    ], ClasseComponent);
    return ClasseComponent;
}());
exports.ClasseComponent = ClasseComponent;
