import { NgModule } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Compte } from '../../../../models';

@Component({
  selector: 'app-tabset-comptes',
  templateUrl: './tabset-comptes.component.html',
  styleUrls: ['./tabset-comptes.component.scss']
})


export class TabsetComptesComponent implements OnInit {

	@Input() comptes: Compte[];
  selectedCompte: Compte;
	

	selectCompte(cpt: Compte):void {
		this.selectedCompte = cpt;
    /*console.log("Selected RIB = " + cpt.rib);*/
	}

  	
  	constructor() { }

  	ngOnInit() {
  	}

}
