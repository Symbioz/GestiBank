import { Component, OnInit,Input } from '@angular/core';
import {Client} from '../../../../../models/client';
import {Agents} from '../../../../../models/agents';

@Component({
  selector: 'app-tableau-clients-agent',
  templateUrl: './tableau-clients-agent.component.html',
  styleUrls: ['./tableau-clients-agent.component.scss']
})
export class TableauClientsAgentComponent implements OnInit {

   @Input() ListeClients:Client[];
   @Input() ListeAgents:Agents[];
  constructor() { }

  ngOnInit() {
  }

}
