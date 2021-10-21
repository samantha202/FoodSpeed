import { Injectable } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {Food} from 'src/app/models/food';
import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';

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
  downloadPDF(f: Food[], mont:number,nom: string,prenom : string, email:string, dates:string,heures:string,table:string,telephone:string ){
    this.dattes =  new Date();
    this.convt = this.dattes.toLocaleDateString();
    const arr1 = new Array(f.length);
     var i: number;
     i = 0;
      f.forEach(element => {
        arr1[i] = new Array(element.getNom(),element.getCategorie(),element.getMontant().toString());
       i++;
      })
    
    const data = arr1;
   // const data = [['2021-24',1, 2, 2,this.convt,this.heure()],]
    const head = [['Name', 'categorie', 'Montant']]
    const doc = new jsPDF();
    var img = new Image();
    img.src = 'assets/images/logo2.PNG';
    doc.addImage(img, 'png', 100, 10, 35, 35);
    doc.setFont("times");
    doc.getStyle("normal");
    doc.setFontSize(15); 
    doc.text("FoodSpeed",10,30);
    doc.text("speed@food.net",10,40);
    doc.text(this.session.retrieve("adresse"),10,50);
    doc.text("P:(+33)491371065",10,60);
    doc.setFontSize(15)
    doc.text(this.session.retrieve("nom")+"  "+this.session.retrieve("prenom"),130,50);
    doc.text(this.session.retrieve("email"),130,60);
    doc.setFontSize(11);
    //doc.text(this.session.retrieve("adresse"),130,70);
    autoTable(doc,{
      columnStyles: {
        0: {}}, 
        tableWidth: 80,
      showHead: false,
      theme: 'striped',
      foot: [['ToTal Montant EUR', mont]],
      startY: 110 + 80,
      body: [
        ['N° of facture', '2021-45'],
        ['Date ',this.dattes],
        ['hour',heures],
        ['Table',table],
      ],
    })

    doc.text(telephone,130,80);
    autoTable(doc, {
      startY: 110,
      head: head,
      body: data,
      didDrawCell: (data) => {
        console.log(data.column.index)
      },
    })
    doc.save('facture.pdf')
    this.router.navigate(['home']);
  }
}
