import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Demande } from '../../../../models';
import { DemandeService } from '../../../../services';
import { Router } from  '@angular/router';
import { ClientService } from '../../../../services';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.scss'],
  animations: [routerTransition()], 
  providers: [DemandeService,ClientService]
})
export class ListDemandesComponent implements OnInit {

	private demandesAgent : Demande[]=[];
	private demandes: Demande[]=[];


	constructor(private router: Router, private demandeService: DemandeService) { }

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
			},
			err => {
				console.log(err);
			}
		);
	}
}
 
