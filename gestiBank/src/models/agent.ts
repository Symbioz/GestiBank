import {Utilisateur} from './utilisateur';

export class Agent extends Utilisateur {

	 matricule: number;
	 dateDebutContrat: Date;
	
   
     constructor(id: number, nom:String, prenom: String, identifiant:String, mdp:String, email:String, adresse : String, numTel:String, matricule: number,dateDebutContrat:Date ){
          super(id, nom, prenom, identifiant, mdp,email,  adresse, numTel);
          this.matricule = matricule;
          this.dateDebutContrat = dateDebutContrat;
         
     }
 
}






                        