export class Demande {
	idDemande: number;
     dateDemande :  Date;
     status:    Boolean;
     idClient: number;
     
     constructor(idDemande:number,dateDemande:Date, status:Boolean, idClient:number ){
     	this.idDemande = idDemande;
          this.dateDemande = dateDemande;
          this.status = status;
          this.idClient = idClient;
     	
     }
     

}