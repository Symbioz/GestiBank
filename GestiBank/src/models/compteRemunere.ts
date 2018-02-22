import { Operation } from './operation';
import { Compte } from './compte';

export class CompteRemunere extends Compte {
	
	static taux: number;
	interets: number;
	
	constructor(IBAN: string, idClient: number, solde:number, dateCreation: Date, operations: Operation[], interets: number){
		super(IBAN, idClient, solde, dateCreation, operations);
		this.interets = interets;
	}
}