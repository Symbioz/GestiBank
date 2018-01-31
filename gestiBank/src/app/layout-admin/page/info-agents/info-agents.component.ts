import { Component, OnInit } from '@angular/core';
import { Client} from  '../../../../models/client';
import { Agent} from   '../../../../models/agent';
import { Adresse} from '../../../../models/adresse';

@Component({
  selector: 'app-info-agents',
  templateUrl: './info-agents.component.html',
  styleUrls: ['./info-agents.component.scss']
})
export class InfoAgentsComponent implements OnInit {


  client =[  new Client(1,"jkljkjkjk","Guilaume","blabla@gmail.com","1rue machin Lille","0606060606",0,"celibataire",573),
       new Client(2, "Le Gaulois","Provençal","Kaamelott@gmail","1 rue C'est pas faux 59000 Sloubi324","060000000",0,"On en a gros", 1337)];

  agents = [new Agent(1337,"jennifer","Vincent", "vincentjenni@gmail.com", "0265989855", "test", new Adresse("rue de lille",59200,"lille")),
            new Agent(576,"jess", "vinc", "jess@fre.fr", "0154521545","test1",new Adresse("rue de lille",59200,"lille"))
  ];

  constructor() { }

  ngOnInit() {
  }

}
