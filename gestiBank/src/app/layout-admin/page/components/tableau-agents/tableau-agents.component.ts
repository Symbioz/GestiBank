import { Component, OnInit,Input } from '@angular/core';
import {Agent} from '../../../../../models/agent';
import { HttpModule } from '@angular/http';
import { FilterPipe} from './../../../../filter.pipe';

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
