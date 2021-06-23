import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowBooksComponent } from './show-books/show-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { NewComponentComponent } from './new-component/new-component.component'


@NgModule({
  declarations: [
    AppComponent,
    AddCategorieComponent,
    ShowBooksComponent,
    AddBookComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
