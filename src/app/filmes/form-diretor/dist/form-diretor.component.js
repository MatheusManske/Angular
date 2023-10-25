"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormDiretorComponent = void 0;
var core_1 = require("@angular/core");
var FormDiretorComponent = /** @class */ (function () {
    function FormDiretorComponent(formBuilder, service, _snackBar, location, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this._snackBar = _snackBar;
        this.location = location;
        this.router = router;
        this.form = this.formBuilder.group({
            _id: [null],
            nome: [null]
        });
    }
    FormDiretorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            var diretor = _this.service.chamarID(id);
            diretor.subscribe(function (item) {
                _this.updateForm(item);
            });
        });
    };
    FormDiretorComponent.prototype.updateForm = function (item) {
        this.form.patchValue({
            _id: item._id,
            nome: item.nome
        });
    };
    FormDiretorComponent.prototype.Enviar = function () {
        var _this = this;
        this.service.save(this.form.value).subscribe({
            next: function (result) {
                _this._snackBar.open('✔️ Diretor Salvo com Sucesso', '', {
                    duration: 4000
                });
            },
            error: function (error) {
                _this._snackBar.open('❌ Erro ao Salvar Diretor', '', {
                    duration: 4000
                });
            }
        });
        this.location.back();
    };
    FormDiretorComponent.prototype.Cancelar = function () {
        this.location.back();
    };
    FormDiretorComponent = __decorate([
        core_1.Component({
            selector: 'app-form-diretor',
            templateUrl: './form-diretor.component.html',
            styleUrls: ['./form-diretor.component.scss']
        })
    ], FormDiretorComponent);
    return FormDiretorComponent;
}());
exports.FormDiretorComponent = FormDiretorComponent;
