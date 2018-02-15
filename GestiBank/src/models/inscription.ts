import {Demande} from './demande';

export class Inscription extends Demande {

	 dateAffectation: Date;
	 
   
     constructor(idDemande:number,dateDemande:Date, status:Boolean,  idclient:number, dateAffectation : Date ){
          super(idDemande,dateDemande, status, idclient);
          this.dateAffectation = dateAffectation;
        
     }

 
}
