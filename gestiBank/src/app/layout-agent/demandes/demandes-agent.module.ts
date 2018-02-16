import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DemandesAgentRoutingModule } from './demandes-agent-routing.module';
import { DemandeModalComponent } from './demande-modal/demande-modal.component';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  	TranslateModule,
    ReactiveFormsModule,
    NgbDropdownModule.forRoot(),
    NgbModule.forRoot(),
    DemandesAgentRoutingModule
  ],
  declarations: [DemandeModalComponent, ListDemandesComponent]
})
export class DemandesAgentModule { }



