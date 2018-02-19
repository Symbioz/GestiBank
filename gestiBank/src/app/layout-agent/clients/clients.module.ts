import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ClientsRoutingModule } from './clients-routing.module';
import {ClientsComponent} from './clients.component';
import { TableauClientsComponent } from './tableau-clients/tableau-clients.component';
import {ModalComponent} from './modal/modal.component';



@NgModule({
  imports: [
    CommonModule, 
    ClientsRoutingModule,
    TranslateModule.forChild(),
     NgbModule.forRoot()
  ],
  declarations: [ClientsComponent,TableauClientsComponent,ModalComponent]
})
export class ClientsModule { }
