import {Utilisateur} from './utilisateur';

export class Agent extends Utilisateur {

	 matricule: number;
	 dateDebutContrat: Date;
	
     constructor(
		id: number, 
		nom: string, 
		prenom: string,
		mdp: string,  
		email: string, 
		adresse: string, 
		identifiant : string,
		numTel: string,
		matricule: number,
		dateDebutContrat:Date
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
	}
}


 







                        