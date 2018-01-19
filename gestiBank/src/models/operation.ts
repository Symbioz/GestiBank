export class Operation {
	ref: number
	date: String;
	libelle: String;
	montant: number;
	
	constructor(ref: number, date:String, libelle: String, montant: number){
		this.ref = ref;
		this.date = date;
		this.libelle = libelle;
		this.montant = montant;
	}
}