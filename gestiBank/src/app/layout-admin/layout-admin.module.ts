import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import { LayoutAdminComponent } from './layout-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule, FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


import { GestionAgentsModule} from './page/gestion-agents/gestion-agents.module'
import { GestionAgentsComponent}  from './page/gestion-agents/gestion-agents.component';
import { DashboardAdminComponent}  from './dashboard-admin/dashboard-admin.component';
import { BoutonValidationAffectationComponent } from './page/components/bouton-validation-affectation/bouton-validation-affectation.component';


@NgModule({
  	imports: [CommonModule, LayoutAdminRoutingModule, TranslateModule,NgbDropdownModule.forRoot(),ReactiveFormsModule,FormsModule,GestionAgentsModule],
  	declarations: [LayoutAdminComponent, HeaderComponent, SidebarComponent,DashboardAdminComponent,BoutonValidationAffectationComponent]
})
export class LayoutAdminModule { }