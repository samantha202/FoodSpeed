export class Food {
    nom:string;
    categorie: string;
    montant: number;

    constructor(nom:string, categorie:string,montant:number){
        this.nom = nom;
        this.categorie = categorie;
        this.montant = montant;
    }
    public getNom()
    {
        return this.nom;
    }
    public getCategorie(){
        return this.categorie;
    }
    public getMontant(){
        return this.montant;
    }
}

