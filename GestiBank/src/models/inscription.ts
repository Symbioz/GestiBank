import {Demande} from './demande';

export class Inscription extends Demande {

	 dateAffectation: Date;
	 
   
     constructor(idDemande:number,  idClient:number,date:Date, status:Boolean, dateAffectation : Date ){
          super(idDemande,idClient,date, status);
          this.dateAffectation = dateAffectation;
        
     }

 
}
