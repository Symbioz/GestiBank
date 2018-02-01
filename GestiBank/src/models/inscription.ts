import {Demande} from './demande';
import {Client} from './client';

export class Inscription extends Demande {

	 dateAffectation: String;
	 
   
     constructor(idDemande:number,dateDemande:String, status:Boolean, client:Client, dateAffectation : String ){
          super(idDemande,dateDemande, status, client);
          this.dateAffectation = dateAffectation;
        
     }

 
}
