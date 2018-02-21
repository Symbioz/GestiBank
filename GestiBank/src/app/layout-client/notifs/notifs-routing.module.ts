import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotifsListComponent } from './notifs-list/notifs-list.component';

const routes: Routes = [
	{path: '', component: NotifsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifsRoutingModule { }
