import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
categorie :Categorie =new Categorie();
  constructor(private service:CategorieService,private router :Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    this.createCaegorie()
    console.log("I am in create categorie")

  }

  createCaegorie()
  {
    this.service.createCategorie(this.categorie).subscribe(data=>{
      console.log(data);
  
    },
    error=>console.log(error));

    this.goToBookList();
  }

  goToBookList()
  {
    this.router.navigate(['show-books']);

  }

}
