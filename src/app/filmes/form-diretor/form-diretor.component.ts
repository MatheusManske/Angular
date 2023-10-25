import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Diretor } from '../model/diretor';
import { DiretorService } from '../services/diretor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-diretor',
  templateUrl: './form-diretor.component.html',
  styleUrls: ['./form-diretor.component.scss']
})
export class FormDiretorComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: DiretorService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private router: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
     _id: [null],
     nome: [null]
    });
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const diretor = this.service.chamarID(id);
        diretor.subscribe(item => {
          this.updateForm(item);
        });
      }
    )
  }

  updateForm(item: Diretor) {
    this.form.patchValue({
      _id: item._id,
      nome: item.nome
    })
  }

  Enviar() {
    this.service.save(this.form.value).subscribe({
      next: (result) => {
        this._snackBar.open('✔️ Diretor Salvo com Sucesso', '', {
          duration: 4000,
        });
      },
      error: (error) => {
        this._snackBar.open('❌ Erro ao Salvar Diretor', '', {
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
