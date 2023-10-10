import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesComponent } from './filmes/filmes.component';



@NgModule({
  declarations: [
    FilmesComponent
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule
  ]
})
export class FilmesModule { }
