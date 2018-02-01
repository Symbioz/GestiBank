import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardClientRoutingModule } from './dashboard-client-routing.module';
import { DashboardClientComponent } from './dashboard-client.component';
import { ApercuComptesComponent } from './apercu-comptes/apercu-comptes.component';

@NgModule({
  	imports: [
    	CommonModule,
    	DashboardClientRoutingModule,
        TranslateModule,
        NgbModule.forRoot(),
        FormsModule
  	],
  	declarations: [DashboardClientComponent, ApercuComptesComponent]
})
export class DashboardClientModule { }
