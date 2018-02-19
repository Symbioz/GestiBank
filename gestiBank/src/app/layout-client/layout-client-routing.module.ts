import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutClientComponent } from './layout-client.component';

const routes: Routes = [
    {
		path: '',
        component: LayoutClientComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard-client/dashboard-client.module#DashboardClientModule' },
            { path: 'notifications', loadChildren: './notifs/notifs.module#NotifsModule' },
            //{ path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsModule' },
            { path: 'consultations', loadChildren: './consultations/consultations.module#ConsultationsModule' },
            { path: 'releves', loadChildren: './releves/releves.module#RelevesModule' },
            { path: 'virements', loadChildren: './virements/virements.module#VirementsModule' },
            { path: 'demandes', loadChildren: './demandes/demandes.module#DemandesModule' }       ]
    }
];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
})
export class LayoutClientRoutingModule { }
