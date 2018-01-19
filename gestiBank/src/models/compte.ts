import { Operation } from './operation';

export class Compte {
	rib: number;
	solde: number;
	dateCreation: String;
	agios: number;
	decouvert: number;
	historique: Operation[];

	constructor(rib: number, solde:number, dateCreation: String, agios: number, decouvert: number, historique: Operation[]){
		this.rib = rib;
		this.solde = solde;
		this.dateCreation = dateCreation;
		this.agios = agios;
		this.decouvert = decouvert;
		this.historique = historique;
	}
}