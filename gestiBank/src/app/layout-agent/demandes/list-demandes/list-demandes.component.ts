import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Demande } from '../../../../models';
import { DemandeService } from '../../../../service/demandeService';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.scss'],
  animations: [routerTransition()], 
  providers: [DemandeService]
})
export class ListDemandesComponent implements OnInit {

	private demandesAgent : Demande[];
	private demandes: Demande[];


	constructor(private router: Router, private demandeService: DemandeService) { }

  	ngOnInit() { //when component loading get all clients and set the clients[]
  		this.getAllDemandes();
  	}

	getAllDemandes() {
		this.demandeService.getAllDemandes().subscribe(
			demandes => {
				this.demandes = demandes;
			},
			err => {
				console.log(err);
			}
		);
		let demande: Demande;
		for (demande of this.demandes) 
			if (demande.status===true){
				this.demandesAgent.push(demande) 
			}
	}
}
