import { Component, OnInit,Input } from '@angular/core';
import {Demande} from '../../../../../models/demande';
import {Agent} from '../../../../../models/agent';

@Component({
  selector: 'app-tableau-demande-compte',
  templateUrl: './tableau-demande-compte.component.html',
  styleUrls: ['./tableau-demande-compte.component.scss']
})
export class TableauDemandeCompteComponent implements OnInit {
  
@Input() ListeDemande:Demande[];
@Input() ListeAgents:Agent[];

  constructor() { }

  ngOnInit() {
  }

}
