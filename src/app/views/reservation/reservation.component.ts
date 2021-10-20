import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  nom = '';
  prenom = '';
  email = '';
  constructor(private session: SessionStorageService) { }

  ngOnInit(): void {
   this.nom = this.session.retrieve("nom");
   this.prenom = this.session.retrieve("prenom");
   this.email = this.session.retrieve("email");
  }
}
