import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Client} from '../../../../models/client';
import {Demande} from '../../../../models/demande';
import {Agent} from '../../../../models/agent';
import {Inscription} from '../../../../models/inscription';

import { InscriptionService} from '../../../../services/inscription.service';
import { AgentService} from '../../../../services/agent.service';
import { ClientService} from '../../../../services/client.service';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-gestion-nouveau-clients',
  templateUrl: './gestion-nouveau-clients.component.html',
  styleUrls: ['./gestion-nouveau-clients.component.scss'],
  providers: [ InscriptionService, AgentService]
})
export class GestionNouveauClientsComponent implements OnInit {
    
    inscriptionEnCours : Inscription[ ] ;
    inscriptionTermine : Inscription[ ] ;
    inscriptionAffecte : Inscription[ ] ;
    inscriptionNonAffecte : Inscription[ ] ;
   
    model: any = 1;
    public radioGroupForm: FormGroup;
    
    private inscription : Inscription[];
    private agents: Agent[];
    private clients: Client[];

    constructor(private formBuilder: FormBuilder,
                private inscriptionService : InscriptionService,
                private agentService : AgentService,
                private clientService: ClientService) {}

    ngOnInit() {
        this.radioGroupForm = this.formBuilder.group({
            model: 'middle'
        });
        this.clients;
        this.inscriptionEnCours    = this.inscriptionService.getInscriptionEnCours();
        this.inscriptionTermine    = this.inscriptionService.getInscriptionTermine();
        this.inscriptionAffecte    = this.inscriptionService.getInscriptionAffecte();
        this.inscriptionNonAffecte = this.inscriptionService.getInscriptionNonAffecte();
        this.getAllInscriptions();
        this.getAllAgents();
    }
    
     getAllInscriptions(){
      this.inscriptionService.findAll().subscribe(
         inscriptions => {
     for(let i of inscriptions){
      if(i.status == false){
         this.inscriptionEnCours.push(i); 
         console.log(this.clientService.getClientById(i.idClient));
         //this.clients.push(this.clientService.getClientById(i.idClient));        
      } if(i.status == true) {
        this.inscriptionTermine.push(i);
      }if(i.dateAffectation){
        this.inscriptionNonAffecte.push(i);
      }if(!i.dateAffectation){
        this.inscriptionAffecte.push(i);
      }
    }
     this.inscription = inscriptions;
  
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
         },
         err => {
           console.log(err);
         }

      );
   }

}
