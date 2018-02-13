
export class Utilisateur {
     id  :       number;
     nom :       String;
     prenom:     String;
     identifiant:String;
     mdp:        String;
     email:      String;
     adresse:    String;
     
     constructor(id:number, nom:String, prenom: String, identifiant:String, mdp:String, email:String,  adresse : String ){
     	this.id  = id;
          this.nom =  nom;
     	this.prenom= prenom;
          this.identifiant= identifiant;
          this.mdp = mdp;
          this.email= email;
          this.adresse = adresse;
     }
     
      
}


