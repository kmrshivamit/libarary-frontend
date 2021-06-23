import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

  books!:Book[];
  constructor(private service:BookService,private router:Router) { }

  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks()
  {
    this.service.getBooks().subscribe(data=>{
      this.books=data;
      console.log(data);
  });
  }

  deleteBook(id:number)
  {
    this.service.deleteBook(id).subscribe(data=>{
      console.log(data);
     this.getBooks();
    })
  }

}
