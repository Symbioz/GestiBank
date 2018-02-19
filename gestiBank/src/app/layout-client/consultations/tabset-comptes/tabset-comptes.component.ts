import { NgModule } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Compte, Operation, TypeOp } from '../../../../models';

@Component({
  selector: 'app-tabset-comptes',
  templateUrl: './tabset-comptes.component.html',
  styleUrls: ['./tabset-comptes.component.scss']
})


export class TabsetComptesComponent implements OnInit {

    //Gestion du select compte
  	@Input() comptes: Compte[];
    selectedCompte: Compte;

  	selectCompte(cpt: Compte):void {
  		this.selectedCompte = cpt;
      /*console.log("Selected RIB = " + cpt.rib);*/
  	}

    //Génération de la date du jour

    today: Date = new Date();

    //Gestion de la zone 'collapse'
    public isCollapsed = true;	

    //Constructeurs
  	constructor() { }

    //Init
  	ngOnInit() {
  	}

}
