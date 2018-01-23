import { Component, OnInit,Input } from '@angular/core';
import {Client} from '../../../page/gestion-nouveau-clients/client';
import {Agents} from '../../../page/gestion-agents/agents';

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
