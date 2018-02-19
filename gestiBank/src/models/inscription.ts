import {Demande} from './demande';

export class Inscription extends Demande {

	 dateAffectation: Date;
	 
   
     constructor(identifiant:number,date:Date, status:Boolean,  idClient:number, dateAffectation : Date ){
          super(identifiant,date, status, idClient);
          this.dateAffectation = dateAffectation;
        
     }

 
}
