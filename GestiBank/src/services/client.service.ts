import { Injectable } from '@angular/core';
import { Client} from '../models/client';


@Injectable()
export class ClientService {

 clients =[  new Client("2","nom","prenom","login","mdp","email", 222, 11, "s", 11), 
             ];
 
 nbClients = 0

  constructor() { }

   getClients(){
      
     return this.clients;
    }


   checkExistingClient(clients: Client, idAgent){
     for(let client of this.clients){
      if(client.idAgent === idAgent){
      	this.nbClients =this.nbClients+1;
      }
    }
    return this.nbClients;

   }

}
