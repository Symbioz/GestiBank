import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPublicRoutingModule } from './layout-public-routing.module';
import { LayoutPublicComponent } from './layout-public.component';

@NgModule({
  	imports: [CommonModule, LayoutPublicRoutingModule],
  	declarations: [LayoutPublicComponent]
})
export class LayoutPublicModule { }
