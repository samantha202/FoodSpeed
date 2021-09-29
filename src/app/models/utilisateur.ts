export class Utilisateur {
    prenom : String;
    nom :String;
    email : String;
    password : String;
    constructor(premon:String,nom:String,email:String,password:String) 
    {
        this.prenom = premon;
        this.nom = nom;
        this.email = email;
        this.password = password;
    }
}
