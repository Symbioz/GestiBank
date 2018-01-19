import { Component, OnInit,Input } from '@angular/core';
import {Client} from '../../../page/gestion-nouveau-clients/client';
import {Demande} from '../../../page/gestion-nouveau-clients/demande';

@Component({
  selector: 'app-tableau-demande-compte',
  templateUrl: './tableau-demande-compte.component.html',
  styleUrls: ['./tableau-demande-compte.component.scss']
})
export class TableauDemandeCompteComponent implements OnInit {
  
@Input() ListeDemande:Demande[];


  constructor() { }

  ngOnInit() {
  }

}
