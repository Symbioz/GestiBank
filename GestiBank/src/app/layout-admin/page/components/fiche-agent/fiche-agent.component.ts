import { Component, OnInit,Input } from '@angular/core';
import {Agent} from '../../../../../models/agent';

@Component({
  selector: 'app-fiche-agent',
  templateUrl: './fiche-agent.component.html',
  styleUrls: ['./fiche-agent.component.scss']
})
export class FicheAgentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() ListeAgents:Agent[];

}
