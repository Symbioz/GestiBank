import { NgModule } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from  '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Compte, CompteCourant, CompteRemunere } from '../../../../models';
import { CompteService } from "../../../../services"; 

@Component({
  selector: 'app-apercu-comptes',
  templateUrl: './apercu-comptes.component.html',
  styleUrls: ['./apercu-comptes.component.scss'],
  providers: [CompteService],
  animations: [routerTransition()]
})
export class ApercuComptesComponent implements OnInit {

    //Liste des comptes
  	comptes: Compte[];

    id: number = 1;
    private sub: any;

    //Constructeur
  	constructor(private route: ActivatedRoute,
                private router: Router,
                private compteService: CompteService) { }

    //Init
  	ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
          //this.id = params['id'];
          this.id = 1;
        })

        this.getClientComptes();
  	}

    getClientComptes() {
        this.compteService.findClientComptes(this.id).subscribe(
        comptes => {
          this.comptes = comptes
        },
        err => {
          console.log(err);
        }
      );
    }

    ngOnDestroy(): void { //suppression de l'écouteur lors du déchargement du composant
      this.sub.unsubscribe();
    }

}

