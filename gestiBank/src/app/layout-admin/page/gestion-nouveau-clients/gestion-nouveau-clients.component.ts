import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Client} from '../../../../models/client';
import {Demande} from '../../../../models/demande';
import {Agent} from '../../../../models/agent';
import {Adresse} from '../../../../models/adresse';
import {Inscription} from '../../../../models/inscription';

import { InscriptionService} from '../../../../services/inscription.service';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-gestion-nouveau-clients',
  templateUrl: './gestion-nouveau-clients.component.html',
  styleUrls: ['./gestion-nouveau-clients.component.scss'],
  providers: [ InscriptionService]
})
export class GestionNouveauClientsComponent implements OnInit {
    
    inscription:any[];
    inscriptionEnCours : any[ ] ;
    inscriptionTermine : any[ ] ;
    inscriptionAffecte : any[ ] ;
    inscriptionNonAffecte : any[ ] ;
   
    

    
   // condition = "*ngIf='inscription.status==1'";

    model: any = 1;
    public radioGroupForm: FormGroup;
   
    constructor(private formBuilder: FormBuilder,  private inscriptionService : InscriptionService) {}

    ngOnInit() {
        this.radioGroupForm = this.formBuilder.group({
            model: 'middle'
        });
       
        this.inscription = this.inscriptionService.getInscriptions();
        this.inscriptionEnCours = this.inscriptionService.getInscriptionEnCours();
        this.inscriptionTermine = this.inscriptionService.getInscriptionTermine();
        this.inscriptionAffecte = this.inscriptionService.getInscriptionAffecte();
        this.inscriptionNonAffecte = this.inscriptionService.getInscriptionNonAffecte();
    
    }

 
}
