import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from '../services/filmes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Filmes } from '../model/filmes';
import { Classe } from '../model/classe';
import { ClasseService } from '../services/classe.service';

@Component({
  selector: 'app-form-filme',
  templateUrl: './form-filme.component.html',
  styleUrls: ['./form-filme.component.scss'],
})

export class FormFilmeComponent implements OnInit {
  form: FormGroup;
  arrayClasse: Classe[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: FilmesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private router: ActivatedRoute,
    private classService: ClasseService

  ) {
    this.form = this.formBuilder.group({
      _id: [null],
      nome: [null],
      classe: [null],
      categoria: [null],
      ano: [null],
      sinopse: [null]
    });
  }

  ngOnInit(): void {
    this.classService.list().subscribe((arrayClasse: Classe[]) => {
      this.arrayClasse = arrayClasse;
    });
    this.router.params.subscribe(
      (params: any) =>{
        const id = params['id'];
        const filmes = this.service.chamarID(id);
        filmes.subscribe(item => {
          this.updateForm(item);
        });
      }
    )
  }

  updateForm(item: Filmes){
    this.form.patchValue({
      _id: item._id,
      nome: item.nome,
      classe: item.classe,
      categoria: item.categoria,
      ano: item.ano,
      sinopse: item.sinopse
    })
  }

  Enviar() {
    this.service.save(this.form.value).subscribe({
      next: (result) => {
        this._snackBar.open('✔️ Filme Salvo com Sucesso', '', {
          duration: 4000,
        });
      },
      error: (error) => {
        this._snackBar.open('❌ Erro ao Salvar Filme', '', {
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
