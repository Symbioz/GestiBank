import { Component, OnInit,Input } from '@angular/core';
import {Agent} from '../../../../../models/agent';
import { HttpModule } from '@angular/http';

import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tableau-agents',
  templateUrl: './tableau-agents.component.html',
  styleUrls: ['./tableau-agents.component.scss'],
  
})
export class TableauAgentsComponent implements OnInit {
  
  constructor(private router: Router,) {}
  
  @Input() ListeAgents:Agent[];

  //agent : Agent[];
  
  ngOnInit() {
  }

  voirFicheAgent(id){
  	this.router.navigate(['/admin/gestionAgents/infoAgents', id]);
  }

   

}
