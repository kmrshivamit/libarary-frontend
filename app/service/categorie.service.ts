import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseURL="http://localhost:8080/categorie";
  createCategorie(categorie: Categorie):Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseURL}`,categorie);
  }
  constructor(private httpClient:HttpClient) {
   }

   getCategories():Observable<Categorie[]>{

    return this.httpClient.get<Categorie[]>(`${this.baseURL}`)
    

  }

}
