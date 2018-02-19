<<<<<<< HEAD
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
=======

export class Demande {
	identifiant: number;
     date :  Date;
     status:    Boolean;
     idClient:    number;
     
     constructor(idDemande:number,date:Date, status:Boolean, idclient:number ){
     	this.identifiant = idDemande;
          this.date = date;
          this.status = status;
          this.idClient = idclient;
     	
     }


}
>>>>>>> master
