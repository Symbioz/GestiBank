import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ClientsRoutingModule } from './clients-routing.module';
import {ClientsComponent} from './clients.component';
import { TableauClientsComponent } from './tableau-clients/tableau-clients.component';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ClientsComponent,TableauClientsComponent]
})
export class ClientsModule { }
