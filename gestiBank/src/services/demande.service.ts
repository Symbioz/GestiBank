import { Injectable } from '@angular/core';
import { Demande} from '../models/demande';
import { Client}  from '../models/client';
import { Adresse} from '../models/adresse';


@Injectable()
export class DemandeService {

  demande = [ new Demande(1, "10/12/2015", true ,new Client("2","nom","prenom","login","mdp","email", 222, 11, "s", 11)), 
              

              new Demande(3, "10:01/2017", false, new Client("2","nom","prenom","login","mdp","email", 222, 11, "s", 11)),

               new Demande(3, "10:01/2017", false,new Client("2","nom","prenom","login","mdp","email", 222, 11, "s", 11) )
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
