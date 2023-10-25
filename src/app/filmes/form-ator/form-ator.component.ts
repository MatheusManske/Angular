import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { AtorService } from '../services/ator.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Ator } from '../model/ator';

@Component({
  selector: 'app-form-ator',
  templateUrl: './form-ator.component.html',
  styleUrls: ['./form-ator.component.scss'],
})
export class FormAtorComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AtorService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private router: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      _id: [null],
      nome: [null],
      cpf: [null],
    });
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const filmes = this.service.chamarID(id);
        filmes.subscribe(item => {
          this.updateForm(item);
        });
      }
    )
  }

  updateForm(item: Ator) {
    this.form.patchValue({
      _id: item._id,
      nome: item.nome,
      cpf: item.cpf,
    })
  }

  Enviar() {
    this.service.save(this.form.value).subscribe({
      next: (result) => {
        this._snackBar.open('✔️ Ator Salvo com Sucesso', '', {
          duration: 4000,
        });
      },
      error: (error) => {
        this._snackBar.open('❌ Erro ao Salvar Ator', '', {
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
