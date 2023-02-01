import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  technicians:any;
  filtertechnicians:any;
  category:any;
 constructor(private http: HttpClient, private router: Router, private articleService: ArticleService, private fb: FormBuilder) {

 }

  showTechnicians() {
    this.technicians = this.articleService
      .listTechnicians()
      .subscribe((technician: any[]) => {
        this.technicians= technician;
      });
  }
  // showFilteredTech(){
  //   for (let i =0; i<this.technicians.length;i++){
  //     if (this.filtertechnicians.category == "Water Technician"){
  //       console.log(this.filtertechnicians);
  //     }
  //   }
  //   // if (this.category =="Water Technician"){
  //   //   this.technicians = this.technicians.filter( (rs: { category: string; }) => {
  //   //     return rs.category.match(this.category);
  //   //   })
  //   // }

  // }
  ngOnInit(){
    this.showTechnicians();
    // this.showFilteredTech();

  }
}
