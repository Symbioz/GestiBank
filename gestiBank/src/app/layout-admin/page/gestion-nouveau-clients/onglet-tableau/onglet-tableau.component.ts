import { Component, OnInit,Input } from '@angular/core';
import {Demande} from '../../../../../models/demande';
import {Agent} from '../../../../../models/agent';
import {Inscription} from '../../../../../models/inscription';

@Component({
  selector: 'app-onglet-tableau',
  templateUrl: './onglet-tableau.component.html',
  styleUrls: ['./onglet-tableau.component.scss']
})
export class OngletTableauComponent implements OnInit {
  
  constructor() { }
   
  @Input() ListeDemande:Demande[];
  @Input() ListeInscription: Inscription[]
  @Input() ListeAgents:Agent[];


  ngOnInit() {
  }

}


;




