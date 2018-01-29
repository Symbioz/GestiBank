import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Agents} from './agents';


@Component({
  selector: 'app-gestion-agents',
  templateUrl: './gestion-agents.component.html',
  styleUrls: ['./gestion-agents.component.scss']
})

export class GestionAgentsComponent implements OnInit {
	agents = [new Agents(573,"jennifer","Vincent", "vincentjenni@gmail.com", "0265989855"),
	          new Agents(1337, "jess", "vinc", "jess@fre.fr", "0154521545")
	];

   constructor() {
       }

  ngOnInit() {
  }

}


