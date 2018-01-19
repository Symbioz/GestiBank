export class InfoClient {
		id: number;
		nom: String;
		prenom: String;
		couriel:String;
		adresse:String;
		numTel:String;
		nbEnfants:number;
		situation:String;


	constructor(id:number, nom:String,prenom:String,couriel:String,adresse:String,numTel:String,nbEnfants:number,situation:String) {
	this.id = id;
	this.nom=nom;
	this.prenom=prenom;
	this.couriel=couriel;
	this.adresse=adresse;
	this.numTel=numTel;
	this.nbEnfants=nbEnfants;
	this.situation=situation;
	}
}