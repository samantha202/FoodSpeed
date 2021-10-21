import { Injectable } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {Food} from 'src/app/models/food';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  dattes : any;
  convt : string;
  constructor(private session: SessionStorageService,private router : Router) { }
  //this function returns the time in a nice format
  heure()
  {
    const date = new Date();
    const heure = date.getHours();
    const minutes = date.getMinutes();
    if(minutes < 10)
     return heure + ":" + "0" +minutes;
    else
     return heure + ":" +minutes;
  }
  //this function allows you to retrieve our article list in order to display it in the pdf
  table(f: Food[]){
    const data = new Array(f.forEach(element => {new Array(element.getNom())}))
    return data;
  }
}
