import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoAgentsRoutingModule } from './info-agents-routing.module';
import { FormsModule } from '@angular/forms';
import { InfoAgentsComponent } from './info-agents.component';
import { TableauClientsAgentComponent}  from '../components/tableau-clients-agent/tableau-clients-agent.component';

@NgModule({
  imports: [
    CommonModule,
    InfoAgentsRoutingModule,
    TranslateModule,
    FormsModule,
    NgbModule.forRoot(),

  ],
  declarations: [InfoAgentsComponent,TableauClientsAgentComponent]
})
export class InfoAgentsModule { }
