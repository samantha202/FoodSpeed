import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {FoodListService} from 'src/app/service/food-list.service';
import {SessionStorageService} from 'ngx-webstorage';
import {Food} from 'src/app/models/food';
import {StripeService,ElementsOptions,Elements,Element as StripeElement, } from "ngx-stripe";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  nom = '';
  prenom = '';
  email = '';
  elements!: Elements|null|undefined ;
  card!: StripeElement;
  total! : number;
  food! : Food[];
  elementsOptions: ElementsOptions = {
    locale: 'fr'
  };
  constructor(private session: SessionStorageService,
              private foodList:FoodListService,
              private stripeService: StripeService,) { }

  ngOnInit(): void {
   this.nom = this.session.retrieve("nom");
   this.prenom = this.session.retrieve("prenom");
   this.email = this.session.retrieve("email");
  }
  //retrieving the list of articles from the previous view
  all()
  {
    this.foodList.food.forEach(f => this.food.push(f));
    this.food.forEach(f => console.log(f));
  }
  //return the total amount of
  getTotalAmount()
  {
    this.food.forEach(f => this.total += f.getMontant());
  }
  initButtonStripe(){
    const promise = this.stripeService.elements(this.elementsOptions).toPromise();
    promise.then(elements =>{
      this.elements = elements;
      if (!this.card) {
        this.card = this.elements.create('card', {
          style: {
             base: {
             iconColor: '#666EE8',
             color: '#31325F',
             lineHeight: '40px',
             fontWeight: 300,
             fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
             fontSize: '18px',
             '::placeholder': 
              {
                color: '#CFD7E0'
              }
            }
          }
        });
        this.card.mount('#card-element');
      }
    })
  }
}