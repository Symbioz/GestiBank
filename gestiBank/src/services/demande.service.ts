import { Injectable } from '@angular/core';
import { Demande} from '../models/demande';
import { Client}  from '../models/client';
import { Adresse} from '../models/adresse';


@Injectable()
export class DemandeService {

  demande = [ new Demande(1, "10/12/2015", true ,new Client("sdjkhqdklfugh","Guilaume","blabla@gmail.com","0606060606","test",new Adresse("rue de lille",59200,"lille"), 1, 2, "celib", 1337)), 
              

              new Demande(3, "10:01/2017", false, new Client("Le Gaulois","Provençal","Kaamelott@gmail","060000000","test",new Adresse("rue de lille",59200,"lille"), 2, 0, "couple", 573))
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
