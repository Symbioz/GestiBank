import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Client} from './client';
import {Demande} from './demande';

@Component({
  selector: 'app-gestion-nouveau-clients',
  templateUrl: './gestion-nouveau-clients.component.html',
  styleUrls: ['./gestion-nouveau-clients.component.scss']
})
export class GestionNouveauClientsComponent implements OnInit {
    /*
    clients =[  new Client(1,"vin","Guilaume","blabla@gmail.com","1rue machin Lille","0606060606",0,"celibataire",573),
       new Client(2, "Le Gaulois","Provençal","Kaamelott@gmail","1 rue C'est pas faux 59000 Sloubi324","060000000",0,"On en a gros", 1337)];*/
    

     demande = [ new Demande(1, "10/12/2015", "traite",new Client(1,"sdjkhqdklfugh","Guilaume","blabla@gmail.com","1rue machin Lille","0606060606",0,"celibataire",573)), 
                 new Demande(2, "10:01/2017", "En cours", new Client(2, "Le Gaulois","Provençal","Kaamelott@gmail","1 rue C'est pas faux 59000 Sloubi324","060000000",0,"On en a gros", 1337))
     ]

    model: any = 1;
    public radioGroupForm: FormGroup;
   
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.radioGroupForm = this.formBuilder.group({
            model: 'middle'
        });
    }

 
}
