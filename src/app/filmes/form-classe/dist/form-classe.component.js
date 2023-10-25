"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormClasseComponent = void 0;
var core_1 = require("@angular/core");
var FormClasseComponent = /** @class */ (function () {
    function FormClasseComponent(formBuilder, service, _snackBar, location, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this._snackBar = _snackBar;
        this.location = location;
        this.router = router;
        this.displayedColumns = ['nome', 'valor', 'prazo', 'actions'];
        this.formC = this.formBuilder.group({
            _id: [null],
            nome: [null],
            valor: [null],
            prazo: [null]
        });
    }
    FormClasseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            var classe = _this.service.chamarID(id);
            classe.subscribe(function (item) {
                _this.updateFormClasse(item);
            });
        });
    };
    FormClasseComponent.prototype.updateFormClasse = function (item) {
        this.formC.patchValue({
            _id: item._id,
            nome: item.nome,
            valor: item.valor,
            prazo: item.prazo
        });
    };
    FormClasseComponent.prototype.EnviarClasse = function () {
        var _this = this;
        this.service.save(this.formC.value).subscribe({
            next: function (result) {
                _this._snackBar.open('✔️ Classe Salva com Sucesso', '', {
                    duration: 4000
                });
            },
            error: function (error) {
                _this._snackBar.open('❌ Erro ao Salvar Classe', '', {
                    duration: 4000
                });
            }
        });
        this.location.back();
    };
    FormClasseComponent.prototype.Cancelar = function () {
        this.location.back();
    };
    FormClasseComponent = __decorate([
        core_1.Component({
            selector: 'component-app-classe',
            templateUrl: './form-classe.component.html',
            styleUrls: ['./form-classe.component.scss']
        })
    ], FormClasseComponent);
    return FormClasseComponent;
}());
exports.FormClasseComponent = FormClasseComponent;
