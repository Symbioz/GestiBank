import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditerAgentsRoutingModule } from './editer-agents-routing.module';
import { EditerAgentsComponent } from './editer-agents.component';

@NgModule({
  imports: [
    CommonModule,
    EditerAgentsRoutingModule,
    TranslateModule
  ],
  declarations: [EditerAgentsComponent]
})
export class EditerAgentsModule { }
