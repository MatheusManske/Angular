"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormAtorComponent = void 0;
var core_1 = require("@angular/core");
var FormAtorComponent = /** @class */ (function () {
    function FormAtorComponent(formBuilder, service, _snackBar, location, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this._snackBar = _snackBar;
        this.location = location;
        this.router = router;
        this.form = this.formBuilder.group({
            _id: [null],
            nome: [null],
            cpf: [null]
        });
    }
    FormAtorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            var filmes = _this.service.chamarID(id);
            filmes.subscribe(function (item) {
                _this.updateForm(item);
            });
        });
    };
    FormAtorComponent.prototype.updateForm = function (item) {
        this.form.patchValue({
            _id: item._id,
            nome: item.nome,
            cpf: item.cpf
        });
    };
    FormAtorComponent.prototype.Enviar = function () {
        var _this = this;
        this.service.save(this.form.value).subscribe({
            next: function (result) {
                _this._snackBar.open('✔️ Ator Salvo com Sucesso', '', {
                    duration: 4000
                });
            },
            error: function (error) {
                _this._snackBar.open('❌ Erro ao Salvar Ator', '', {
                    duration: 4000
                });
            }
        });
        this.location.back();
    };
    FormAtorComponent.prototype.Cancelar = function () {
        this.location.back();
    };
    FormAtorComponent = __decorate([
        core_1.Component({
            selector: 'app-form-ator',
            templateUrl: './form-ator.component.html',
            styleUrls: ['./form-ator.component.scss']
        })
    ], FormAtorComponent);
    return FormAtorComponent;
}());
exports.FormAtorComponent = FormAtorComponent;
