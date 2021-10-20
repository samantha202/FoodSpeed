import { Component, OnInit } from '@angular/core';
import {FoodListService} from 'src/app/service/food-list.service';
import {Food} from 'src/app/models/food'
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  food!: Food[];
  f!: Food;
  count:number;
  constructor(private foodList:FoodListService) { 
    this.food = new Array();
    //this variable will be incremented each time an item is added to the cart
    this.count = 0;
  }
  ngOnInit() {
  }
   //this function allows us to add each article in the article list
  addList(nom:string,categorie:string,montant:number)
  {
    this.foodList.add(nom,categorie,montant);
    this.count++;
  }
}
