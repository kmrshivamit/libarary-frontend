import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
   private baseURL="http://localhost:8080/book";

  deleteBook(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
 

  getBooks() :Observable<Book[]> {
  return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }
createBook(book: Book) {
  return this.httpClient.post<any>(`${this.baseURL}`,book);

  }

  constructor(private httpClient:HttpClient) { }
}
