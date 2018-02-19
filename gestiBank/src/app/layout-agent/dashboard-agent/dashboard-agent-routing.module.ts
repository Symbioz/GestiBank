import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardAgentComponent} from './dashboard-agent.component'

const routes: Routes = [
    {
        path: '', component: DashboardAgentComponent
    }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAgentRoutingModule { }
