
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
