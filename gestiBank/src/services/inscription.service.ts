import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/observable'

import { Demande} from '../models/demande';
import { Client}  from '../models/client';
import { Inscription} from '../models/inscription';


@Injectable()
export class InscriptionService {

  nbInscription= 0;	
  
  
  inscriptions = [];
  
  inscriptionEnCours : any[ ] = [ ];
  inscriptionTermine : any[ ] = [ ];
  inscriptionAffecte : any[ ] = [ ];
  inscriptionNonAffecte : any[ ] = [ ];
  
  
  private apiUrl ='http://localhost:8080/GestiBankBackEnd/inscriptions';

  constructor(private http: Http) {}

 
  findAll(): Observable<Inscription[]>{
    return this.http.get(this.apiUrl)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw (error.json || 'server error'));
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
