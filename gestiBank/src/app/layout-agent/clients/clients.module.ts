import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailClientModalComponent } from './detail-client-modal/detail-client-modal.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ClientsRoutingModule } from './clients-routing.module';
import { NouveauClientModalComponent } from './nouveau-client-modal/nouveau-client-modal.component';


@NgModule({
	imports: [
	    CommonModule, 
	    ClientsRoutingModule,
	    FormsModule,
	    TranslateModule,
	    ReactiveFormsModule,
	    NgbDropdownModule.forRoot(),
	    //IMPORTANT POUR LE MODAL :
	    NgbModule.forRoot(),],

	declarations: [
  	    DetailClientModalComponent,
        ListeClientsComponent,
        NouveauClientModalComponent
	]
})
export class ClientsModule { }
