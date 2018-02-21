import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DemandeService } from '../../../services';
import { Demande } from '../../../models';


@Component({
  selector: 'app-dashboard-agent',
  templateUrl: './dashboard-agent.component.html',

  styleUrls: ['./dashboard-agent.component.scss'],
  animations: [routerTransition()],
  providers: [DemandeService]
})
export class DashboardAgentComponent implements OnInit {

 	nbDemande = 0;
	private demandesAgent : Demande[]=[];
	private demandes: Demande[]=[];


	constructor(private demandeService: DemandeService) { }

  	ngOnInit() { //when component loading get all clients and set the clients[]
  		this.getAllDemandes();
  	}

	getAllDemandes() {
		this.demandeService.getAllDemandes().subscribe(
			demandes => {
				this.demandes = demandes;
				for (let d of demandes) 
				if (d.status==true){
				this.demandesAgent.push(d) 
				}
				this.nbDemande=this.demandesAgent.length;
			},
			err => {
				console.log(err);
			}
		);
	}
}
