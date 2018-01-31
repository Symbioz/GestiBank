import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Client} from '../../../../models/client';
import {Demande} from '../../../../models/demande';
import {Agent} from '../../../../models/agent';
import {Adresse} from '../../../../models/adresse';
@Component({
  selector: 'app-gestion-nouveau-clients',
  templateUrl: './gestion-nouveau-clients.component.html',
  styleUrls: ['./gestion-nouveau-clients.component.scss']
})
export class GestionNouveauClientsComponent implements OnInit {
    agents = [new Agent(1337,"jennifer","Vincent", "vincentjenni@gmail.com", "0265989855", "test", new Adresse("rue de lille",59200,"lille")),
            new Agent(576,"jess", "vinc", "jess@fre.fr", "0154521545","test1",new Adresse("rue de lille",59200,"lille"))
  ];

     demande = [ new Demande(1, "10/12/2015", "traite",new Client(1,"sdjkhqdklfugh","Guilaume","blabla@gmail.com","1rue machin Lille","0606060606",0,"celibataire",573)), 
                 new Demande(3, "10:01/2017", "En cours", new Client(2, "Le Gaulois","Provençal","Kaamelott@gmail","1 rue C'est pas faux 59000 Sloubi324","060000000",0,"On en a gros", 1337))
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
