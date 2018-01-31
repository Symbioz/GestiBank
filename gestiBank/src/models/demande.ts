import {Client} from './client';

export class Demande {
	idDemande: number;
     dateDemande :  String;
     status:    Boolean;
     client:    Client;
     

     constructor(idDemande:number,dateDemande:String, status:Boolean, client:Client ){
     	this.idDemande = idDemande;
          this.dateDemande = dateDemande;
          this.status = status;
          this.client = client;
     	
     }


}
