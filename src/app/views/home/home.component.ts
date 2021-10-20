import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService} from 'src/app/service/utilisateur.service';
import {Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  password ='';
  nom = '';
  prenom ='';
  email = '';
  email1 = '';
  password1 = '';
  errors: string[] = [];
  users: undefined|null|Utilisateur|any;
  constructor(
    private router : Router,
    private user :UtilisateurService,
    private session: SessionStorageService,) 
    {
    }

  ngOnInit() {
    this
  }
  //this function allows you to add a new user to the database
  AddUser()
  {
    const users = new Utilisateur(this.nom,this.prenom,this.email,this.password);
    this.user.addUtilisateurs(users)
    .pipe()
    .subscribe(
      data => {
      }
    );
  }
  //this function checks if the user exists or not in the database
  async CheckUser()
  {
    this.users = await this.user.getUserPL(this.email1,this.password1).toPromise();
    try{
      this.errors = [];
    if(this.users[0].password === this.password1 && this.users[0].email === this.email1)
    {
      this.session.store("nom",this.users[0].nom);
      this.session.store("prenom",this.users[0].prenom);
      this.session.store("email",this.users[0].email);
      this.router.navigate(['/search']);
    }
    }catch(err)
    {
      this.errors = ['your login or your password is incorrect'];
      throw err;
      this.errors = [];
   }
   return this.users;
  }
}
