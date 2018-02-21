import { Operation } from './operation';
import { Compte } from './compte';

export class CompteCourant extends Compte {
	
	static tauxAgios: number;
	decouvertAutorise: number;
	agios: number;
	
	constructor(IBAN: string, 
				idClient: number, 
				solde:number, 
				dateCreation: Date, 
				operations: Operation[], 
				decouvertAutorise: number, 
				agios: number){
		
		super(IBAN, idClient, solde, dateCreation, operations);
		this.decouvertAutorise = decouvertAutorise;
		this.agios = agios;
	}
}