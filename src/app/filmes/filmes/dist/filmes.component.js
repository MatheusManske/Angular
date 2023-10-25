"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilmesComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var FilmesComponent = /** @class */ (function () {
    function FilmesComponent(filmesService, router, route, modalService, _snackBar, classService) {
        this.filmesService = filmesService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this._snackBar = _snackBar;
        this.classService = classService;
        this.displayedColumns = ['nome', 'classe', 'categoria', 'ano', 'sinopse', 'actions'];
        this.filmeSelecionado = {};
        this.arrayClasse = [];
        this.listaFilmes = this.filmesService.list().pipe(rxjs_1.catchError(function (error) {
            console.error('Ocorreu um erro ao buscar a lista de filmes:', error);
            return rxjs_1.of([]);
        }));
    }
    FilmesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classService.list().subscribe(function (arrayClasse) {
            _this.arrayClasse = arrayClasse;
        });
    };
    FilmesComponent.prototype.updateFORM = function (filme) {
    };
    FilmesComponent.prototype.AddFilme = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
        console.log('ola');
    };
    FilmesComponent.prototype.delFilme = function (filme) {
        this.filmeSelecionado = filme;
        console.log(this.filmeSelecionado._id);
        this.deleteModalRef = this.modalService.show(this.deleteMovie, { "class": 'modal-sm' });
    };
    FilmesComponent.prototype.confirmDelFime = function () {
        var _this = this;
        this.filmesService.remove(this.filmeSelecionado._id)
            .subscribe({
            next: function (result) {
                var _a;
                _this._snackBar.open('✔️ Filme Excluído com Sucesso', '', {
                    duration: 4000
                });
                window.location.reload();
                (_a = _this.deleteModalRef) === null || _a === void 0 ? void 0 : _a.hide();
            },
            error: function (error) {
                _this._snackBar.open('❌ Erro ao Excluir Filme', '', {
                    duration: 4000
                });
            }
        });
    };
    FilmesComponent.prototype.cancelDelFime = function () {
        var _a;
        (_a = this.deleteModalRef) === null || _a === void 0 ? void 0 : _a.hide();
    };
    FilmesComponent.prototype.editFilme = function (filme) {
        this.router.navigate(['editarF', filme._id], { relativeTo: this.route });
    };
    __decorate([
        core_1.ViewChild('deleteMovie', { static: false })
    ], FilmesComponent.prototype, "deleteMovie");
    FilmesComponent = __decorate([
        core_1.Component({
            selector: 'component-app-filmes',
            templateUrl: './filmes.component.html',
            styleUrls: ['./filmes.component.scss']
        })
    ], FilmesComponent);
    return FilmesComponent;
}());
exports.FilmesComponent = FilmesComponent;
