import {Utilisateur} from './utilisateur';


export class Agent extends Utilisateur {

	 matricule: number;
	 dateDebutContrat: Date;
	 dateFinContrat: Date
   
     constructor(id: number, nom:String, prenom: String, identifiant:String, mdp:String, email:String, adresse : String, matricule: number,dateDebutContrat:Date , dateFinContrat:Date){
          super(id, nom, prenom, identifiant, mdp,email,  adresse);
          this.matricule = matricule;
          this.dateDebutContrat = dateDebutContrat;
          this.dateFinContrat = dateFinContrat;
     }



 
}






                        