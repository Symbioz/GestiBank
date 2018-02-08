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
var forms_1 = require("@angular/forms");
var gestion_agents_routing_module_1 = require("./gestion-agents-routing.module");
var gestion_agents_component_1 = require("./gestion-agents.component");
var tableau_agents_component_1 = require("../components/tableau-agents/tableau-agents.component");
var bouton_creation_agents_component_1 = require("../components/bouton-creation-agents/bouton-creation-agents.component");
var chercher_component_1 = require("../components/chercher/chercher.component");
var bouton_suppression_agents_component_1 = require("../components/bouton-suppression-agents/bouton-suppression-agents.component");
var boutton_edition_agents_component_1 = require("../components/boutton-edition-agents/boutton-edition-agents.component");
var GestionAgentsModule = /** @class */ (function () {
    function GestionAgentsModule() {
    }
    GestionAgentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                gestion_agents_routing_module_1.GestionAgentsRoutingModule,
                core_2.TranslateModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            declarations: [gestion_agents_component_1.GestionAgentsComponent, tableau_agents_component_1.TableauAgentsComponent, bouton_creation_agents_component_1.BoutonCreationAgentsComponent, chercher_component_1.ChercherComponent, bouton_suppression_agents_component_1.BoutonSuppressionAgentsComponent, boutton_edition_agents_component_1.BouttonEditionAgentsComponent]
        })
    ], GestionAgentsModule);
    return GestionAgentsModule;
}());
exports.GestionAgentsModule = GestionAgentsModule;
//# sourceMappingURL=gestion-agents.module.js.map