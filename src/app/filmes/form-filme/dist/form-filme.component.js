"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormFilmeComponent = void 0;
var core_1 = require("@angular/core");
var FormFilmeComponent = /** @class */ (function () {
    function FormFilmeComponent(formBuilder, service, _snackBar, location, router, classService) {
        this.formBuilder = formBuilder;
        this.service = service;
        this._snackBar = _snackBar;
        this.location = location;
        this.router = router;
        this.classService = classService;
        this.arrayClasse = [];
        this.form = this.formBuilder.group({
            _id: [null],
            nome: [null],
            classe: [null],
            categoria: [null],
            ano: [null],
            sinopse: [null]
        });
    }
    FormFilmeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classService.list().subscribe(function (arrayClasse) {
            _this.arrayClasse = arrayClasse;
        });
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            var filmes = _this.service.chamarID(id);
            filmes.subscribe(function (item) {
                _this.updateForm(item);
            });
        });
    };
    FormFilmeComponent.prototype.updateForm = function (item) {
        this.form.patchValue({
            _id: item._id,
            nome: item.nome,
            classe: item.classe,
            categoria: item.categoria,
            ano: item.ano,
            sinopse: item.sinopse
        });
    };
    FormFilmeComponent.prototype.Enviar = function () {
        var _this = this;
        this.service.save(this.form.value).subscribe({
            next: function (result) {
                _this._snackBar.open('✔️ Filme Salvo com Sucesso', '', {
                    duration: 4000
                });
            },
            error: function (error) {
                _this._snackBar.open('❌ Erro ao Salvar Filme', '', {
                    duration: 4000
                });
            }
        });
        this.location.back();
    };
    FormFilmeComponent.prototype.Cancelar = function () {
        this.location.back();
    };
    FormFilmeComponent = __decorate([
        core_1.Component({
            selector: 'app-form-filme',
            templateUrl: './form-filme.component.html',
            styleUrls: ['./form-filme.component.scss']
        })
    ], FormFilmeComponent);
    return FormFilmeComponent;
}());
exports.FormFilmeComponent = FormFilmeComponent;
