import { Component, OnInit, ViewChild } from '@angular/core';
import { Filmes } from '../model/filmes';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../services/filmes.service';
import { Observable, catchError, of } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Classe } from '../model/classe';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'component-app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent implements OnInit {
  listaFilmes: Observable<Filmes[]>;
  displayedColumns = ['nome', 'classe', 'categoria', 'ano', 'sinopse', 'actions'];
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteMovie', { static: false }) deleteMovie: any;

  filmeSelecionado: Filmes = {} as Filmes;
  arrayClasse: Classe[] = [];

  constructor(
    private filmesService: FilmesService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private _snackBar: MatSnackBar,
    private classService: ClasseService
  ) {

    this.listaFilmes = this.filmesService.list().pipe(
      catchError(error => {
        console.error('Ocorreu um erro ao buscar a lista de filmes:', error);
        return of([]);
      })
    );
  }

  ngOnInit(): void{
    this.classService.list().subscribe((arrayClasse: Classe[]) => {
      this.arrayClasse = arrayClasse;
    });
  }


  updateFORM(filme: Filmes) {

  }

  AddFilme() {
    this.router.navigate(['new'], { relativeTo: this.route });
    console.log('ola');
  }

  delFilme(filme: Filmes) {
    this.filmeSelecionado = filme;
    console.log(this.filmeSelecionado._id);
    this.deleteModalRef = this.modalService.show(this.deleteMovie, { class: 'modal-sm' });
  }

  confirmDelFime() {
    this.filmesService.remove(this.filmeSelecionado._id)
      .subscribe({
        next: (result) => {
          this._snackBar.open('✔️ Filme Excluído com Sucesso', '', {
            duration: 4000,
          });
          window.location.reload();
          this.deleteModalRef?.hide();
        },
        error: (error) => {
          this._snackBar.open('❌ Erro ao Excluir Filme', '', {
            duration: 4000,
          });
        },
      });
  }

  cancelDelFime() {
    this.deleteModalRef?.hide();
  }

  editFilme(filme: Filmes) {
    this.router.navigate(['editarF', filme._id], { relativeTo: this.route });
  }

}
