import { NgModule } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Compte, Operation, TypeOp } from '../../../../models';

@Component({
  selector: 'app-apercu-comptes',
  templateUrl: './apercu-comptes.component.html',
  styleUrls: ['./apercu-comptes.component.scss']
})
export class ApercuComptesComponent implements OnInit {

    //Gestion du select compte
  	@Input() comptes: Compte[];

    //Constructeurs
  	constructor() { }

    //Init
  	ngOnInit() {
  	}

}

