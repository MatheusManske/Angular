import { Component, OnInit } from '@angular/core';
import { Diretor } from '../model/diretor';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DiretorService } from '../services/diretor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, catchError, of } from 'rxjs';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.scss']
})
export class DiretorComponent {
  listaDiretor: Observable<Diretor[]>;
  displayedColumns = ['nome','actions'];
  deleteModalRef: BsModalRef | undefined;
  @ViewChild('deleteDiretor', { static: false }) deleteDiretor: any;
  
  diretorSelecionado : Diretor = {} as Diretor;

  constructor(
    private service: DiretorService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
  ) {
    this.listaDiretor = this.service.list().pipe(
      catchError(error => {
        console.error('Ocorreu um erro ao buscar a lista de classe:', error);
        return of([]);
      })
    );
  }

  ngOnInit() {

  }

  AddDiretor() {
    this.router.navigate(['novodiretor'], { relativeTo: this.route });
    console.log("ola");
  }

  delDiretor(diretor: Diretor) {
    this.diretorSelecionado = diretor;
    this.deleteModalRef = this.modalService.show(this.deleteDiretor, { class: 'modal-sm' });
  }

  ConfirmDelDiretor() {
    this.service.remove(this.diretorSelecionado._id)
      .subscribe({
        next: (result) => {
          this._snackBar.open('✔️ Ator Excluído com Sucesso', '', {
            duration: 4000,
          });
          window.location.reload();
          this.deleteModalRef?.hide();
        },
        error: (error) => {
          this._snackBar.open('❌ Erro ao Excluir Ator', '', {
            duration: 4000,
          });
        },
      });
  }

  cancelDelDiretor() {
    this.deleteModalRef?.hide();
  }

  editDiretor(diretor: Diretor) {
    this.router.navigate(['editarD', diretor._id], { relativeTo: this.route });
  }
  

}


