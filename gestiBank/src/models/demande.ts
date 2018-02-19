
export class Demande {
	idDemande: number;
     idClient:    number;
     dateDemande :  Date;
     status:    Boolean;
    
     
     constructor(idDemande:number,idclient:number ,dateDemande:Date, status:Boolean, ){
     	this.idDemande = idDemande;
          this.idClient = idclient;
          this.dateDemande = dateDemande;
          this.status = status;
 
     	
     }


}
