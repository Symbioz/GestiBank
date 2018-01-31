import { Component, OnInit,Input } from '@angular/core';
import {Agent} from '../../../../../models/agent';

@Component({
  selector: 'app-tableau-agents',
  templateUrl: './tableau-agents.component.html',
  styleUrls: ['./tableau-agents.component.scss']
})
export class TableauAgentsComponent implements OnInit {
  
  
  @Input() ListeAgents:Agent[];
  
  ngOnInit() {
  }

}
