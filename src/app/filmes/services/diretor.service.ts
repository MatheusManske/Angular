import { Injectable } from '@angular/core';
import { Diretor } from '../model/diretor';
import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  private readonly API = '/api/diretor';

  constructor(private httpClient: HttpClient) { }

  list() { 
    return this.httpClient.get<Diretor[]>(this.API);
  }

  save(record: Partial <Diretor>){
    if (record._id){
      return this.saveUpdate(record);
    }
    else{
      return this.saveCreate(record);
    }
  }

  private saveCreate(record: Partial <Diretor>) {  
    return this.httpClient.post<Diretor>(this.API, record).pipe(first());
  }

  private saveUpdate(record: Partial <Diretor>){
    return this.httpClient.put<Diretor>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  chamarID(id: string){
    return this.httpClient.get<Diretor>(`${this.API}/${id}`).pipe(first());
  }

  
  

}
