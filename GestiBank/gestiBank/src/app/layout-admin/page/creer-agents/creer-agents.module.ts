import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreerAgentsRoutingModule } from './creer-agents-routing.module';
import { CreerAgentsComponent } from './creer-agents.component';

@NgModule({
  imports: [
    CommonModule,
    CreerAgentsRoutingModule
  ],
  declarations: [CreerAgentsComponent]
})
export class CreerAgentsModule { }
