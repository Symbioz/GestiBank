import {Utilisateur} from './utilisateur';
import {Client} from './client';

export class Agent extends Utilisateur {

	 matricule: string;
	 dateDebutContrat: Date;
	 clients: Client[];
	
     constructor(
		id: number, 
		nom: string, 
		prenom: string,
		mdp: string,  
		email: string, 
		adresse: string, 
		identifiant : string,
		numTel: string,
		matricule: string,
		dateDebutContrat:Date,
		clients: Client[]
		) {

		super(
			id, 
			nom, 
			prenom, 
			mdp,  
			email, 
			adresse, 
			identifiant,
			numTel);

		this.matricule = matricule;
		this.dateDebutContrat = dateDebutContrat;
		this.clients =clients;
	}

	
}


 







                        