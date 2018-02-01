import {Utilisateur} from './utilisateur';
import {Adresse} from './adresse';


export class Client extends Utilisateur {
		id: number;
		nbEnfants:number;
		situation:String;
		idAgent: number;


	constructor(nom:String, prenom: String, email:String, numTel: String, motDePasse : String , adresse : Adresse, id:number,nbEnfants:number,situation:String, idAgent:number) {
	        super(nom, prenom, email, numTel, motDePasse ,  adresse);
			this.id = id;
			this.nbEnfants=nbEnfants;
			this.situation=situation;
			this.idAgent = idAgent;
	}
}