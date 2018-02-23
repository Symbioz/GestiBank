import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: 'template', loadChildren: './layout/layout.module#LayoutModule'},
    //{ path: '', loadChildren: './layout-public/layout-public.module#LayoutPublicModule'},
    { path: '', loadChildren: './login/login.module#LoginModule'},
    { path: 'client', loadChildren: './layout-client/layout-client.module#LayoutClientModule', canActivate: [AuthGuard]},
    { path: 'agent', loadChildren: './layout-agent/layout-agent.module#LayoutAgentModule', canActivate: [AuthGuard]},
    { path: 'admin', loadChildren: './layout-admin/layout-admin.module#LayoutAdminModule', canActivate: [AuthGuard]},
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
