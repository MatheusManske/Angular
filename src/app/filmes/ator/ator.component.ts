
import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { Ator } from '../model/ator';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AtorService } from '../services/ator.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewChild } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'component-app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.scss']
})
export class AtorComponent implements OnInit {
  listaAtor: Observable<Ator[]>;
  displayedColumns = ['nome', 'cpf', 'actions'];
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteAtor', { static: false }) deleteAtor: any;
  
  atorSelecionado : Ator = {} as Ator;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AtorService,
    private modalService: BsModalService,
    private _snackBar: MatSnackBar,
  ) {

    this.listaAtor = this.service.list().pipe(
      catchError(error => {
        console.error('Ocorreu um erro ao buscar a lista de classe:', error);
        return of([]);
      })
    );
  }

  ngOnInit() {

  }

  AddAtor() {
    this.router.navigate(['novoator'], { relativeTo: this.route });
    console.log("ola");
  } 

  delAtor(ator: Ator) {
   this.atorSelecionado = ator;
   this.deleteModalRef = this.modalService.show(this.deleteAtor, { class: 'modal-sm' });
  }
  
  confirmDelAtor() {
    this.service.remove(this.atorSelecionado._id)
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

  
  cancelDelAtor() {
    this.deleteModalRef?.hide();
  }

  editAtor(ator: Ator) {
    this.router.navigate(['editarA', ator._id], { relativeTo: this.route });
  }


}
