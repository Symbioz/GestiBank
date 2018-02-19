
export class Demande {
	idDemande: number;
     dateDemande :  Date;
     status:    Boolean;
     idClient: number;
     
     constructor(idDemande:number, idClient:number, dateDemande:Date, status:Boolean ){
     	this.idDemande = idDemande;
          this.idClient = idClient;
          this.dateDemande = dateDemande;
          this.status = status;
         
     	
     }
     

}
