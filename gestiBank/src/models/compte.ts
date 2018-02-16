import { Operation } from './operation';

export class Compte {
	IBAN: number;
	solde: number;
	dateCreation: Date;
	operations: Operation[];

	constructor(IBAN: number, solde:number, dateCreation: Date, operations: Operation[]){
		this.IBAN = IBAN;
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.operations = operations;
	}
}