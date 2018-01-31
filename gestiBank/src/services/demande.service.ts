import { Injectable } from '@angular/core';
import { Demande} from '../models/demande';
import { Client}  from '../models/client';

@Injectable()
export class DemandeService {

  //demande: any[];
  demande = [ new Demande(1, "10/12/2015", true ,new Client(1,"sdjkhqdklfugh","Guilaume","blabla@gmail.com","1rue machin Lille","0606060606",0,"celibataire",573)), 
                 new Demande(3, "10:01/2017", false, new Client(2, "Le Gaulois","Provençal","Kaamelott@gmail","1 rue C'est pas faux 59000 Sloubi324","060000000",0,"On en a gros", 1337))
     ];
  
  nbDemande= 0;

  constructor() { }

   getDemandes(){
     return this.demande;
    }

    getDemandesEncours(){

    	for (var i = 0; i < this.demande.length; i++) {
	             this.nbDemande= this.demande.length;
            }
        
         return this.nbDemande;
    	

    }

}
