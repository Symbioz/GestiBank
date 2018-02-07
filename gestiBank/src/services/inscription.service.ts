import { Injectable } from '@angular/core';
import { Demande} from '../models/demande';
import { Client}  from '../models/client';
import { Adresse} from '../models/adresse';
import { Inscription} from '../models/inscription';


@Injectable()
export class InscriptionService {

  nbInscription= 0;	
  

  // Tableau d'inscription en dur
  inscriptions = [ new Inscription (1, "10/12/2015", true ,new Client("sdjkhqdklfugh","Guilaume","blabla@gmail.com","0606060606","test",new Adresse("rue de lille",59200,"lille"), 1, 2, "celib", 1337), "21/10/2020" ),
   				   new Inscription (3, "10:01/2017", false, new Client("Le Gaulois","Provençal","Kaamelott@gmail","060000000","test",new Adresse("rue de lille",59200,"lille"), 2, 0, "couple", 573 ), "22/11/2015")
   				   ];

  constructor() { }
   
   //recupérer la liste de toute les Inscritions
   getInscriptions(){
     return this.inscriptions;
   }
   

   // Recupérer le nomre d'inscription à affecter et en cours ? (2 fonction ?, pour le dashboard (pas demandé))
   getNbInscriptionsEncours(){

    	for (var i = 0; i < this.inscriptions.length; i++) {
	             this.nbInscription= this.inscriptions.length;
            }
        
         return this.nbInscription;
    	

    }

    getDemandeOuverture() {
    for(let inscriptionEnCours of this.inscriptions){
      if(inscriptionEnCours.status ===false){
        return inscriptionEnCours;
      }
    }
  }


}
