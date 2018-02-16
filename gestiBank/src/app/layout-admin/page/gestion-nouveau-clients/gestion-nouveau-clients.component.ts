import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Client} from '../../../../models/client';
import {Demande} from '../../../../models/demande';
import {Agent} from '../../../../models/agent';
import {Inscription} from '../../../../models/inscription';

import { InscriptionService} from '../../../../services/inscription.service';
import { AgentService} from '../../../../services/agent.service';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-gestion-nouveau-clients',
  templateUrl: './gestion-nouveau-clients.component.html',
  styleUrls: ['./gestion-nouveau-clients.component.scss'],
  providers: [ InscriptionService, AgentService]
})
export class GestionNouveauClientsComponent implements OnInit {
    
   // inscription:Inscription[];
   // inscriptionEnCours : Inscription[ ] ;
   // inscriptionTermine : Inscription[ ] ;
   // inscriptionAffecte : Inscription[ ] ;
   //inscriptionNonAffecte : Inscription[ ] ;
   
    model: any = 1;
    public radioGroupForm: FormGroup;
    
    private inscription : Inscription[];
    private agents: Agent[];

    constructor(private formBuilder: FormBuilder,  private inscriptionService : InscriptionService, private agentService : AgentService) {}

    ngOnInit() {
        this.radioGroupForm = this.formBuilder.group({
            model: 'middle'
        });

        //this.inscription = this.inscriptionService.getInscriptions();
        //this.inscriptionEnCours = this.inscriptionService.getInscriptionEnCours();
        //this.inscriptionTermine = this.inscriptionService.getInscriptionTermine();
        //this.inscriptionAffecte = this.inscriptionService.getInscriptionAffecte();
        //this.inscriptionNonAffecte = this.inscriptionService.getInscriptionNonAffecte();
        this.getAllInscriptions();
        this.getAllAgents();




    }

    getAllInscriptions(){
      this.inscriptionService.findAll().subscribe(
         inscriptions => {
           this.inscription = inscriptions;
           console.log(inscriptions[1].date);
           
         },
         err => {
           console.log(err);
         }

      );
   }

    getAllAgents(){
      this.agentService.getAllAgents().subscribe(
         agents => {
           this.agents = agents;
           console.log(agents);
           
         },
         err => {
           console.log(err);
         }

      );
   }





 
}
