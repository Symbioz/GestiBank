import { NgModule } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Compte, CompteCourant, Operation, TypeOp } from '../../../../models';
import { CompteService, OperationService } from "../../../../services"; 
import { ActivatedRoute, Router } from  '@angular/router';

@Component({
  selector: 'app-tabset-comptes',
  templateUrl: './tabset-comptes.component.html',
  styleUrls: ['./tabset-comptes.component.scss'],
  providers: [CompteService, OperationService]
})


export class TabsetComptesComponent implements OnInit {

    //Gestion du select compte
  	//@Input() comptes: Compte[];
    selectedCompte: Compte;
    public isCompteCourant: boolean = false;

  	//Génération de la date du jour
    today: Date = new Date();

    //Gestion de la zone 'collapse'
    public isCollapsed = true;	

    //Liste des comptes
    comptes: Compte[]=[];
    //Liste des operations
    operations: Operation[]=[];

    idClient: number;
    private sub: any;

    //Constructeur
    constructor(private route: ActivatedRoute,
                private router: Router,
                private compteService: CompteService,
                private operationService: OperationService) { }

    //Init
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
          //this.id = params['id'];
          this.idClient = 1;
        })

        this.getClientComptes();
    }

    getClientComptes() {
        this.compteService.findClientComptes(this.idClient).subscribe(
        comptes => {
          this.comptes = comptes
        },
        err => {
          console.log(err);
        }
      );
    }

    selectCompte(cpt: Compte):void {
      this.selectedCompte = cpt;
      if (cpt instanceof Compte) {
        this.isCompteCourant = true;
      }
      //console.log("compte "+ this.selectedCompte.IBAN + " sélectionné");
      this.getOperationsByIBAN(this.selectedCompte.IBAN);
    }

    getOperationsByIBAN(iBAN: string) {
        this.operationService.findClientOperations(iBAN).subscribe(
        operations => {
          console.log("récupération des operations : findClientOperations() done !");
          this.operations  = operations
        },
        err => {
          console.log(err);
        }
        )


    }
    

    ngOnDestroy(): void { //suppression de l'écouteur lors du déchargement du composant
      this.sub.unsubscribe();
    }
}
