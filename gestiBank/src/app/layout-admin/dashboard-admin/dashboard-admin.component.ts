import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

import { DemandeService} from '../../../services/demande.service';



@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss'],
  providers: [DemandeService]
})
export class DashboardAdminComponent implements OnInit {

   demande:any[];
   nbDemande = 0;

   constructor( private DemandeService: DemandeService) {
        
    }

  ngOnInit() {
  	//this.demande = this.DemandeService.getDemandes();
    //this.nbDemande = this.demande.length;
    this.nbDemande = this.DemandeService.getDemandesEncours();
    
  }


}
