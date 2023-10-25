import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmesRoutingModule } from './filmes-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FormFilmeComponent } from './form-filme/form-filme.component';
import { AtorComponent } from './ator/ator.component';
import { FormAtorComponent } from './form-ator/form-ator.component';
import { ClasseComponent } from './classe/classe.component';
import { FormClasseComponent } from './form-classe/form-classe.component';
import { DiretorComponent } from './diretor/diretor.component';
import { FormDiretorComponent } from './form-diretor/form-diretor.component';


@NgModule({
  declarations: [
    FormFilmeComponent,
    AtorComponent,
    FormAtorComponent,
    ClasseComponent,
    DiretorComponent,
    FormDiretorComponent,
    FormClasseComponent
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule, 
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class FilmesModule { }
