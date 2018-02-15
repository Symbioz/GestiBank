import { Component, OnInit,Input } from '@angular/core';
import { Client } from '../../../../models';
import { ClientService } from '../../../../service/clientService';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss'],
  providers: [ClientService]
})
export class ListeClientsComponent implements OnInit {

	private clients: Client[];

  	constructor(private router: Router, private clientService: ClientService) { }

  	ngOnInit() { //when component loading get all clients and set the clients[]
  		this.getAllClients();
  	}

	getAllClients() {
		this.clientService.getAllClient().subscribe(
			clients => {
				this.clients = clients;
			},
			err => {
				console.log(err);
			}
		);
	}
	
    redirectNewClientPage() {
		this.router.navigate(['/client/create']);
	}

	editClientPage(client: Client) {
		if (client) {
			this.router.navigate(['/client/edit', client.id]);
		}
	}

	deleteClient(client: Client) {
		this.clientService.deleteClientById(client.id).subscribe(
			res => {
				this.getAllClients();
				this.router.navigate(['/client']);
				console.log('client supprimé')
			}
		);
	}

	/*ngAfterViewChecked(){
		console.log(">>>>>>>>>>>>>>>>>>>>>>>> ngAfterViewChecked");
	}*/
}
