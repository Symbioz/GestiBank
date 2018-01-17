import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutClientRoutingModule } from './layout-client-routing.module';
import { LayoutClientComponent } from './layout-client.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  	imports: [
  		CommonModule, 
  		LayoutClientRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
  	],
  	declarations: [LayoutClientComponent, SidebarComponent, HeaderComponent]
})
export class LayoutClientModule { }
