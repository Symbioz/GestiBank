"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var layout_admin_routing_module_1 = require("./layout-admin-routing.module");
var layout_admin_component_1 = require("./layout-admin.component");
var header_component_1 = require("./components/header/header.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var forms_1 = require("@angular/forms");
var gestion_agents_module_1 = require("./page/gestion-agents/gestion-agents.module");
//import { TableauAgentsComponent}  from './page/components/tableau-agents/tableau-agents.component';
//import { BoutonCreationAgentsComponent} from './page/components/bouton-creation-agents/bouton-creation-agents.component';
//import { ChercherComponent} from './page/components/chercher/chercher.component';
//import { BoutonSuppressionAgentsComponent } from './page/components/bouton-suppression-agents/bouton-suppression-agents.component';
//import { BouttonEditionAgentsComponent } from './page/components/boutton-edition-agents/boutton-edition-agents.component';
var LayoutAdminModule = /** @class */ (function () {
    function LayoutAdminModule() {
    }
    LayoutAdminModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, layout_admin_routing_module_1.LayoutAdminRoutingModule, core_2.TranslateModule, ng_bootstrap_1.NgbDropdownModule.forRoot(), forms_1.ReactiveFormsModule, forms_1.FormsModule, gestion_agents_module_1.GestionAgentsModule],
            declarations: [layout_admin_component_1.LayoutAdminComponent, header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent]
        })
    ], LayoutAdminModule);
    return LayoutAdminModule;
}());
exports.LayoutAdminModule = LayoutAdminModule;
//# sourceMappingURL=layout-admin.module.js.map