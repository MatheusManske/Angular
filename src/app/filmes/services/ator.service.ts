import { Injectable } from '@angular/core';
import { Ator } from '../model/ator';
import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  private readonly API = '/api/ator';

  constructor(private httpClient: HttpClient) { }

  list() { 
    return this.httpClient.get<Ator[]>(this.API);
  }

  save(record: Partial <Ator>){
    if (record._id){
      return this.saveUpdate(record);
    }
    else{
      return this.saveCreate(record);
    }
  }

  private saveCreate(record: Partial <Ator>) {  
    return this.httpClient.post<Ator>(this.API, record).pipe(first());
  }

  private saveUpdate(record: Partial <Ator>){
    return this.httpClient.put<Ator>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  chamarID(id: string){
    return this.httpClient.get<Ator>(`${this.API}/${id}`).pipe(first());
  }

  
  

}
