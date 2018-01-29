import { Component, OnInit,Input } from '@angular/core';
import {Demande} from '../../../page/gestion-nouveau-clients/demande';
import {Agents} from '../../../page/gestion-agents/agents';

@Component({
  selector: 'app-tableau-demande-compte',
  templateUrl: './tableau-demande-compte.component.html',
  styleUrls: ['./tableau-demande-compte.component.scss']
})
export class TableauDemandeCompteComponent implements OnInit {
  
@Input() ListeDemande:Demande[];
@Input() ListeAgents:Agents[];

  constructor() { }

  ngOnInit() {
  }

}
