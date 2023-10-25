import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { FormFilmeComponent } from './form-filme/form-filme.component';
import { AtorComponent } from './ator/ator.component';
import { FormAtorComponent } from './form-ator/form-ator.component';
import { ClasseComponent } from './classe/classe.component';
import { DiretorComponent } from './diretor/diretor.component';
import { FormClasseComponent } from './form-classe/form-classe.component';
import { FormDiretorComponent } from './form-diretor/form-diretor.component';

const routes: Routes = [
  { path: '', component: FilmesComponent},
  { path: "new", component: FormFilmeComponent},
  { path: "ator", component: AtorComponent},
  { path: "ator/novoator", component: FormAtorComponent},
  { path: "classe", component: ClasseComponent},
  { path: "classe/novaclasse", component: FormClasseComponent},
  { path: "diretor", component: DiretorComponent},
  { path: "diretor/novodiretor", component: FormDiretorComponent},
  { path: "editarF/:id" , component: FormFilmeComponent},
  { path: "classe/editarC/:id" , component: FormClasseComponent},
  { path: "ator/editarA/:id" , component: FormAtorComponent},
  { path: "diretor/editarD/:id", component: FormDiretorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmesRoutingModule { }
