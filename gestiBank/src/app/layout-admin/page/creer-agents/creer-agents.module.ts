import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CreerAgentsRoutingModule } from './creer-agents-routing.module';
import { CreerAgentsComponent } from './creer-agents.component';

@NgModule({
  imports: [
    CommonModule,
    CreerAgentsRoutingModule,
    TranslateModule
  ],
  declarations: [CreerAgentsComponent]
})
export class CreerAgentsModule { }
