import { Injectable } from '@angular/core';
import { Filmes } from '../model/filmes';
import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly API = '/api/movies';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Filmes[]>(this.API);
  }

  save(record: Partial<Filmes>) {
    if (record._id) {
      return this.saveUpdate(record);
    }
    else {
      return this.saveCreate(record);
    }
  }

  private saveCreate(record: Partial<Filmes>) {
    return this.httpClient.post<Filmes>(this.API, record).pipe(first());
  }

  private saveUpdate(record: Partial<Filmes>) {
    return this.httpClient.put<Filmes>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  chamarID(id: string) {
    return this.httpClient.get<Filmes>(`${this.API}/${id}`).pipe(first());
  }



}
