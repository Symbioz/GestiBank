import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgModule } from '@angular/core';

import { InscriptionService} from '../../../services/inscription.service';



@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss'],
  providers: [InscriptionService]
})
export class DashboardAdminComponent implements OnInit {

   demande:any[];
   nbDemande = 0;

   constructor( private InscriptionService: InscriptionService) {
        
    }

  ngOnInit() {
    this.nbDemande = this.InscriptionService.getNbInscriptionsEncours();
    
  }


}
