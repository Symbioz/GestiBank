import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Demande } from '../../../../models';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.scss'],
  animations: [routerTransition()]
})
export class ListDemandesComponent implements OnInit {

	private demandesAgent : Demandes[];


	constructor(private router: Router, private clientService: ClientService) { }

  	ngOnInit() { //when component loading get all clients and set the clients[]
  		this.getAllDemandes();
  	}

	getAllDemandes() {
		this.clientService.getAllDemandes().subscribe(
			demandes => {
				this.demandesAgent = demandes;
			},
			err => {
				console.log(err);
			}
		);
	}
 

}
