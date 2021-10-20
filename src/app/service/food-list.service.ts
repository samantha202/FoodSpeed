import { Injectable } from '@angular/core';
import {Food} from 'src/app/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  food! : Food[];
  f!: Food;
  constructor() 
  {
    this.food = new Array();
  }
  public add(name:string,categories:string,montant:number)
  {
    this.f = new Food(name,categories,montant);
    this.food.push(this.f);
  }
}
