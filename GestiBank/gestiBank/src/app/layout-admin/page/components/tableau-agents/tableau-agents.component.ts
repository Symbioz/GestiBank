import { Component, OnInit,Input } from '@angular/core';
import {Agents} from '../../../page/gestion-agents/agents';

@Component({
  selector: 'app-tableau-agents',
  templateUrl: './tableau-agents.component.html',
  styleUrls: ['./tableau-agents.component.scss']
})
export class TableauAgentsComponent implements OnInit {
  
  
  @Input() ListeAgents:Agents[];
   
 
  constructor() { }

  ngOnInit() {
  }

}
