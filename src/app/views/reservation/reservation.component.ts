import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {FoodListService} from 'src/app/service/food-list.service';
import {SessionStorageService} from 'ngx-webstorage';
import {Food} from 'src/app/models/food';
import { PdfService} from 'src/app/service/pdf.service';
import {StripeService,ElementsOptions,Elements,Element as StripeElement, } from "ngx-stripe";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  nom = '';
  telephone = '';
  prenom = '';
  email = '';
  elements!: Elements|null|undefined ;
  card!: StripeElement;
  total! : number;
  status! : number;
  food! : Food[];
  table = '';
  dateS = '';
  heure = '';
  elementsOptions: ElementsOptions = {
    locale: 'fr'
  };
  constructor(private session: SessionStorageService,
              private foodList:FoodListService,
              private stripeService: StripeService,
              private http: HttpClient,
              private dml:PdfService,) 
              {
                this.food = Array();
                this.total = 0;
              }

  ngOnInit(): void {
   this.all();
   this.nom = this.session.retrieve("nom");
   this.prenom = this.session.retrieve("prenom");
   this.email = this.session.retrieve("email");
   this.getTotalAmount();
   this.initButtonStripe();
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
  //this function allows me to initialize the stripe button
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
  downloadPdf(){
    this.dml.downloadPDF(this.food,this.total,this.nom, this.prenom,this.email,this.dateS,this.heure,this.table,this.telephone);
  }
  //this function creates a token for the payment
  buy(){
    const promise = this.stripeService.createToken(this.card,{}).toPromise();
    promise.then(obj => {
      if (obj) {
        this.http.post("http://localhost:3000/charge",
        {
        token : obj.token.id,
        email: this.email,
        mont: this.total,
        }).subscribe(
        (res)=>{
        this.status = 1;
        },
        (err)=>{
          console.log(' ',err)
        }) 
      } 
    });
  }
}
