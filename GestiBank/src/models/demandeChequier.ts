import {Demande} from './demande';

export class DemandeChequier extends Demande {

	private  matricAgent: string;
	private iban : string;
	 
   
     constructor(idDemande:number,  idClient:number,date:Date, status:Boolean, matricAgent: string, iban: string ){
          super(idDemande,idClient,date, status);
          this.matricAgent=matricAgent;
          this.iban=iban;
        
     }
}