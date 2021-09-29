import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  //Rest API link that listens on port 8000
  private utilisateursUrl = 'http://localhost:8080/api/utilisateurs';  
  private userUrl = "http://localhost:8080/api/utilisateurs/email_paswword";
  
  constructor( private http: HttpClient) 
  {}
  //this function returns the list of users who are in the database
  getUtilisateurs (): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.utilisateursUrl);
  }
  //this fonction add a user in database
  addUtilisateurs (utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.utilisateursUrl, utilisateur, httpOptions);
  }
  //this returns the user whose credentials are mentioned
  getUserPL(login: String, password: String): Observable<Utilisateur> {
    const cdl = new Utilisateur("","",login,password);
    return this.http.post<Utilisateur>(this.userUrl,cdl,httpOptions);
  }
}
