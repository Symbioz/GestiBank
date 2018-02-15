export class Demande {
	idDemande: number;
     dateDemande :  String;
     status:    Boolean;
     idClient: number;
     
     constructor(idDemande:number,dateDemande:String, status:Boolean, FKClient:number ){
     	this.idDemande = idDemande;
          this.dateDemande = dateDemande;
          this.status = status;
          this.FKClient = FKClient;
     	
     }


}