import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { 
   // this.listaFilmes = [];
  }

  title = 'locadora';

  crudAtor(){
    this.router.navigate(['filmes/ator'], );
  }

  crudFilme(){
    this.router.navigate(['filmes']);
  }

  crudClasse(){
    this.router.navigate(['filmes/classe']);
  }
  
  crudDiretor(){
    this.router.navigate(['filmes/diretor']);
  }
}
