import { Component, OnInit,Input } from '@angular/core';
import {Client} from '../../../../../models/client';
import {Agent} from '../../../../../models/agent';

@Component({
  selector: 'app-tableau-clients-agent',
  templateUrl: './tableau-clients-agent.component.html',
  styleUrls: ['./tableau-clients-agent.component.scss']
})
export class TableauClientsAgentComponent implements OnInit {

   @Input() ListeClients:Client[];
   @Input() ListeAgents:Agent[];
  constructor() { }

  ngOnInit() {
  }

}
