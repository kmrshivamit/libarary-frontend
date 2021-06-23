import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { Categorie } from '../model/categorie';
import { BookService } from '../service/book.service';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book:Book=new Book();
  categories!:Categorie[];

  
  
  constructor(private router:Router, private bookService:BookService,private categorieService:CategorieService) { 

  }

  ngOnInit(): void {
   this.getCategories();
   
  }
  onSubmit():void{
    this.createBook();    
  }

  private createBook():void{
    console.log(this.book);
     this.goToBookList();
    this.bookService.createBook(this.book).subscribe();
   
  }

  goToBookList()
  {
    this.router.navigate(['show-books']);

  }
  

  private getCategories()
  {
    this.categorieService.getCategories().subscribe( data=>{
      this.categories=data;
    });
  }

}
