import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import { LayoutAdminComponent } from './layout-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  	imports: [CommonModule, LayoutAdminRoutingModule, TranslateModule,NgbDropdownModule.forRoot()],
  	declarations: [LayoutAdminComponent, HeaderComponent, SidebarComponent]
})
export class LayoutAdminModule { }
