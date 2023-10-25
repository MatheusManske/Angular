import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from '../model/classe';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClasseService } from '../services/classe.service';
import { catchError, of } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'component-app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})

export class ClasseComponent {
  arrayClasse: Classe[] = [];

  listaClasse: Observable<Classe[]>;
  displayedColumns = ['nome', 'valor', 'prazo', 'actions'];
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteClasse', { static: false }) deleteClasse: any;
  
  classeSelecionada : Classe = {} as Classe;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ClasseService,
    private modalService: BsModalService,
    private _snackBar: MatSnackBar,
  ) {

    this.listaClasse = this.service.list().pipe(
      catchError(error => {
        console.error('Ocorreu um erro ao buscar a lista de classe:', error);
        return of([]);
      })
    );
  }

  AddClasse() {
    this.router.navigate(['novaclasse'], { relativeTo: this.route });
    console.log("ola");
  } 

  delClasse(classe: Classe) {
    this.classeSelecionada = classe;
    console.log(this.classeSelecionada._id);
    this.deleteModalRef = this.modalService.show(this.deleteClasse, { class: 'modal-sm' });
  }
  
  ConfirmdelClasse() {
    this.service.remove(this.classeSelecionada._id)
      .subscribe({
        next: (result) => {
          this._snackBar.open('✔️ Classe Excluída com Sucesso', '', {
            duration: 4000,
          });
          window.location.reload();
          this.deleteModalRef?.hide();
        },
        error: (error) => {
          this._snackBar.open('❌ Erro ao Excluir Classe', '', {
            duration: 4000,
          });
        },
      });
  }

  
  cancelDelClasse() {
    this.deleteModalRef?.hide();
  }

  editClasse(classe: Classe) {
    this.router.navigate(['editarC', classe._id], { relativeTo: this.route });
  }

}

