import { Operation } from './operation';

export class Compte {
	IBAN: string;
	idClient: number;
	solde: number;
	dateCreation: Date;
	operations: Operation[];

	constructor(idClient: number, solde:number, dateCreation: Date, operations: Operation[]){
		this.idClient = idClient;
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.operations = operations;
	}
}