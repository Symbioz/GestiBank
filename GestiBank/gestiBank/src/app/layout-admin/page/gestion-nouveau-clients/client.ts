export class Client {
		id: number;
		nom: String;
		prenom: String;
		couriel:String;
		adresse:String;
		numTel:String;
		nbEnfants:number;
		situation:String;
		idAgent: number;


	constructor(id:number, nom:String,prenom:String,couriel:String,adresse:String,numTel:String,nbEnfants:number,situation:String, idAgent:number) {
			this.id = id;
			this.nom=nom;
			this.prenom=prenom;
			this.couriel=couriel;
			this.adresse=adresse;
			this.numTel=numTel;
			this.nbEnfants=nbEnfants;
			this.situation=situation;
			this.idAgent = idAgent;
	}
}