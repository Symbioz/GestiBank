import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Client} from '../../../../models/client';
import {Demande} from '../../../../models/demande';
import {Agent} from '../../../../models/agent';
import {Adresse} from '../../../../models/adresse';

import { AgentService} from '../../../../services/agent.service';
import { DemandeService} from '../../../../services/demande.service';


@Component({
  selector: 'app-gestion-nouveau-clients',
  templateUrl: './gestion-nouveau-clients.component.html',
  styleUrls: ['./gestion-nouveau-clients.component.scss'],
  providers: [AgentService,DemandeService]
})
export class GestionNouveauClientsComponent implements OnInit {
    agents: any[];
    demande:any[];

    model: any = 1;
    public radioGroupForm: FormGroup;
   
    constructor(private formBuilder: FormBuilder,private agentService: AgentService, private DemandeService: DemandeService) {}

    ngOnInit() {
        this.radioGroupForm = this.formBuilder.group({
            model: 'middle'
        });

        this.agents = this.agentService.getAgents();
        this.demande = this.DemandeService.getDemandes();
    }

 
}
