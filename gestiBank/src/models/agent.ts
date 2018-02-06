import {Utilisateur} from './utilisateur';
import {Adresse} from './adresse';

export class Agent extends Utilisateur {

	matricule: number;
	dateDebutContrat: String;
	
   
     constructor(matricule: number,dateDebutContrat:String ,nom:String, prenom: String, email:String, numTel: String, motDePasse : String, adresse : Adresse){
          super(nom, prenom, email, numTel, motDePasse ,  adresse);
          this.matricule = matricule;
          this.dateDebutContrat = dateDebutContrat;
     }



 
}






                        