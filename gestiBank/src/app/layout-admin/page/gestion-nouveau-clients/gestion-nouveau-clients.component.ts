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
    
    inscriptionEnCours : Inscription[ ] ;
    inscriptionTermine : Inscription[ ] ;
    inscriptionAffecte : Inscription[ ] ;
    inscriptionNonAffecte : Inscription[ ] ;
   
    model: any = 1;
    public radioGroupForm: FormGroup;
    
    private inscription : Inscription[];
    private agents: Agent[];

    constructor(private formBuilder: FormBuilder,  private inscriptionService : InscriptionService, private agentService : AgentService) {}

    ngOnInit() {
        this.radioGroupForm = this.formBuilder.group({
            model: 'middle'
        });
        this.inscriptionEnCours = this.inscriptionService.getInscriptionEnCours();
        this.inscriptionTermine = this.inscriptionService.getInscriptionTermine();
        this.inscriptionAffecte = this.inscriptionService.getInscriptionAffecte();
        this.inscriptionNonAffecte = this.inscriptionService.getInscriptionNonAffecte();
        this.getAllInscriptions();
        this.getAllAgents();
    }
    
     getAllInscriptions(){
      this.inscriptionService.findAll().subscribe(
         inscriptions => {
          
     for(let i of inscriptions){
      if(i.status == true){
         this.inscriptionEnCours.push(i); 
               
      } if(i.status == false) {
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
