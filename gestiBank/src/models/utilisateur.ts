import {Adresse} from './adresse';

export class Utilisateur {
     nom :      String;
     prenom:    String;
     email:     String;
     numTel:    String;
     motDePasse:String;
     adresse:   Adresse;

     
     constructor(nom:String, prenom: String, email:String, numTel: String, motDePasse : String , adresse : Adresse ){
     	this.nom =  nom;
     	this.prenom= prenom;
          this.email= email;
     	this.numTel= numTel;
          this.motDePasse = motDePasse;
          this.adresse = adresse;
     }
     
      
}
