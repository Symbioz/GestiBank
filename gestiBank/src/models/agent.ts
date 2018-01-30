import {Utilisateur} from './utilisateur';
import {Adresse} from './adresse';

export class Agent extends Utilisateur {

	matricule: number;
   
     constructor(matricule: number,nom:String, prenom: String, email:String, telephone: String, motDePasse : String, adresse : Adresse){
          super(nom, prenom, email, telephone, motDePasse , adresse);
          this.matricule = matricule;
     }

 
}






                        