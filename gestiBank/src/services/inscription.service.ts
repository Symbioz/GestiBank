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
   				   new Inscription (3, "10:01/2017", false, new Client("Le Gaulois","Provençal","Kaamelott@gmail","060000000","test",new Adresse("rue de lille",59200,"lille"), 2, 0, "couple", 573 ), "22/11/2015"),
              new Demande(3, "10:01/2017", false, new Client("Le Gaulois","Provençal","Kaamelott@gmail","060000000","test",new Adresse("rue de lille",59200,"lille"), 2, 0, "couple", null)),
               new Demande(3, "10:01/2017", true, new Client("Le Gaulois","Provençal","Kaamelott@gmail","060000000","test",new Adresse("rue de lille",59200,"lille"), 2, 0, "couple", 565))
   				   ];
  

  inscriptionEnCours : any[ ] = [ ];
  inscriptionTermine : any[ ] = [ ];
  inscriptionAffecte : any[ ] = [ ];
  inscriptionNonAffecte : any[ ] = [ ];
  
  constructor() { }
   
   //recupérer la liste de toute les Inscritions
   getInscriptions(){
     return this.inscriptions;
   }
  
   // Recupérer le nomre d'inscription à affecter et en cours ? (2 fonction ?, pour le dashboard (pas demandé))
  
     getNbInscriptionsNonAffecte(){
    
      for(let i of this.inscriptions){
          if(i.client.idAgent == null){
             this.nbInscription= this.nbInscription+1;
                    }
                                  }
    return this.nbInscription;

     }


   // Recupère la liste des inscrition en cours (A factoriser ??)
     getInscriptionEnCours() {
    for(let i of this.inscriptions){
      if(i.status == false){
         this.inscriptionEnCours.push(i);
         console.log(i);         
      }
    }
     return this.inscriptionEnCours;

   }

   // Recupère la liste des inscrition Terminé
     getInscriptionTermine() {
    for(let i of this.inscriptions){
      if(i.status == true){
         this.inscriptionTermine.push(i);
         console.log(i);         
      }
    }
     return this.inscriptionTermine;

   }

   // Recupère la liste des inscrition Affecté
     getInscriptionAffecte() {
    for(let i of this.inscriptions){
      if(i.client.idAgent !== null){
         this.inscriptionAffecte.push(i);
         console.log(i);         
      }
    }
     return this.inscriptionAffecte;

   }

   // Recupère la liste des inscrition en cours (A factoriser ??)
     getInscriptionNonAffecte() {
    for(let i of this.inscriptions){
      if(i.client.idAgent == null){
         this.inscriptionNonAffecte.push(i);
         console.log(i);         
      }
    }
     return this.inscriptionNonAffecte;

   }

}
