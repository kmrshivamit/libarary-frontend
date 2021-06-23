import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AppComponent } from './app.component';
import { ShowBooksComponent } from './show-books/show-books.component';

const routes: Routes = [
  {
    path:"add-categorie", component:AddCategorieComponent
  },
  {
    path:"app-component",component:AppComponent
  },
  {
    path:"show-books", component:ShowBooksComponent
  }
  , 
  {
    path:"add-book",component:AddBookComponent
  }
  
  // {
  //   path:"*", component:ShowBooksComponent
  // }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
