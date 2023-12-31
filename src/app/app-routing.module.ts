import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes/filmes.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'filmes'},
  {
    path: 'filmes',
    loadChildren: () => import('./filmes/filmes.module').then(m => m.FilmesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
