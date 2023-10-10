import { Component, OnInit } from '@angular/core';
import { Filmes } from '../model/filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  filmesLista: Filmes[] = [
    { _id: '1', nome: 'Central Brasil', genero:'Drama' }
  ];
  displayedComlumns = ['nome', 'genero'];

  constructor() { 
    //this.filmesLista = [];
  }

  ngOnInit(): void {

  }
}
