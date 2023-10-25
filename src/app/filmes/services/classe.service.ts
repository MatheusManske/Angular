import { Injectable } from '@angular/core';
import { Classe } from '../model/classe'; // Troquei Filmes por Classe aqui
import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private readonly API = '/api/nova'; 
  
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Classe[]>(this.API); // Troquei Filmes por Classe aqui
  }

  save(record: Partial<Classe>) {
    if (record._id) {
      return this.saveUpdate(record);
    }
    else {
      return this.saveCreate(record);
    }
  }

  private saveCreate(record: Partial<Classe>) {
    return this.httpClient.post<Classe>(this.API, record).pipe(first()); // Troquei Filmes por Classe aqui
  }

  private saveUpdate(record: Partial<Classe>) {
    return this.httpClient.put<Classe>(`${this.API}/${record._id}`, record).pipe(first()); // Troquei Filmes por Classe aqui
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  chamarID(id: string) {
    return this.httpClient.get<Classe>(`${this.API}/${id}`).pipe(first()); // Troquei Filmes por Classe aqui
  }
}
