import {Demande} from './demande';

export class DemandeChequier extends Demande {

	private iban : string;
	 
   
     constructor(idDemande:number,  idClient:number,date:Date, status:Boolean, iban: string ){
          super(idDemande,idClient,date, status);
          this.iban=iban;
        
     }
}