import {Utilisateur} from './utilisateur';
import {Compte} from './compte';
import {Notification} from './notification';

export class Client extends Utilisateur {

	
	nbEnfants: number;
	situation : string;
	comptes: Compte[];
	documents : File[];
	notifications: Notification[];
	matriculeAgent: number;

	constructor(
		id: number, 
		nom: string, 
		prenom: string,
		mdp: string,  
		email: string, 
		adresse: string, 
		identifiant : string,
		numTel: string,
		nbEnfants: number,
		situation: string,
		comptes: Compte[],
		documents : File[],
		notifications : Notification[],
		matriculeAgent:number) {

		super(
			id, 
			nom, 
			prenom, 
			mdp,  
			email, 
			adresse, 
			identifiant,
			numTel);

		
		this.nbEnfants = nbEnfants;
		this.situation = situation;
		this.comptes= comptes;
		this.documents = documents;
		this.notifications = notifications;
		this.matriculeAgent=matriculeAgent;
	}
}