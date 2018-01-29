import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditerAgentsComponent } from './editer-agents.component';

const routes: Routes = [
		{
 		 path: '', component: EditerAgentsComponent
		}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditerAgentsRoutingModule { }
