import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoAgentsComponent } from './info-agents.component';

const routes: Routes = [
       {
		path: '',
        component: InfoAgentsComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoAgentsRoutingModule { }
