import { Injectable } from '@angular/core';
import { Client} from '../models/client';
import { Adresse} from '../models/adresse';

@Injectable()
export class ClientService {

 clients =[  new Client("Le Gaulois","Provençal","Kaamelott@gmail","060000000","test",
 	         new Adresse("rue de lille",59200,"lille"), 2, 0, "couple", 573),

             new Client("Le Gaulois","Provençal","Kaamelott@gmail","060000000","test",
             new Adresse("rue de lille",59200,"lille"), 2, 0, "couple", 573)
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
