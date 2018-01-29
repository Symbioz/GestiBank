import { Operation } from './operation';

export class Compte {
	type: String;
	rib: number;
	solde: number;
	dateCreation: String;
	agios: number;
	decouvert: number;
	historique: Operation[];

	constructor(type: String, rib: number, solde:number, dateCreation: String, agios: number, decouvert: number, historique: Operation[]){
		this.type = type;
		this.rib = rib;
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.agios = agios;
		this.decouvert = decouvert;
		this.historique = historique;
	}
}