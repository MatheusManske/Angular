
import { Component, OnInit } from '@angular/core';
import { Classe } from '../model/classe';
import { ActivatedRoute } from '@angular/router';
import { Form, FormBuilder, FormGroup } from '@angular/forms'
import { ClasseService } from '../services/classe.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';


@Component({
  selector: 'component-app-classe',
  templateUrl: './form-classe.component.html',
  styleUrls: ['./form-classe.component.scss']
})
export class FormClasseComponent implements OnInit {
  formC: FormGroup;


  displayedColumns = ['nome', 'valor', 'prazo', 'actions'];

  constructor(
    private formBuilder: FormBuilder,
    private service: ClasseService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private router: ActivatedRoute,
  ) {
    this.formC = this.formBuilder.group({
      _id: [null],
      nome: [null],
      valor: [null],
      prazo: [null]
    });
  }


  ngOnInit(): void {
    this.router.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const classe = this.service.chamarID(id);
        classe.subscribe(item => {
          this.updateFormClasse(item);
        });
      }
    )

  }

  updateFormClasse(item: Classe) {
    this.formC.patchValue({
      _id: item._id,
      nome: item.nome,
      valor: item.valor,
      prazo: item.prazo,
    })
  }

  EnviarClasse() {
    this.service.save(this.formC.value).subscribe({
      next: (result) => {
        this._snackBar.open('✔️ Classe Salva com Sucesso', '', {
          duration: 4000,
        });
      },
      error: (error) => {
        this._snackBar.open('❌ Erro ao Salvar Classe', '', {
          duration: 4000,
        });
      },
    });
    this.location.back();
  }

  Cancelar(): void {
    this.location.back();
  }

}
