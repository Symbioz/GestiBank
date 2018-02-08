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
var info_agents_routing_module_1 = require("./info-agents-routing.module");
var info_agents_component_1 = require("./info-agents.component");
var tableau_clients_agent_component_1 = require("../components/tableau-clients-agent/tableau-clients-agent.component");
var fiche_agent_component_1 = require("../components/fiche-agent/fiche-agent.component");
//import { BoutonValidationAffectationComponent } from '../components/bouton-validation-affectation/bouton-validation-affectation.component';
var InfoAgentsModule = /** @class */ (function () {
    function InfoAgentsModule() {
    }
    InfoAgentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                info_agents_routing_module_1.InfoAgentsRoutingModule,
                core_2.TranslateModule,
                ng_bootstrap_1.NgbModule.forRoot(),
            ],
            declarations: [info_agents_component_1.InfoAgentsComponent, tableau_clients_agent_component_1.TableauClientsAgentComponent, fiche_agent_component_1.FicheAgentComponent]
        })
    ], InfoAgentsModule);
    return InfoAgentsModule;
}());
exports.InfoAgentsModule = InfoAgentsModule;
//# sourceMappingURL=info-agents.module.js.map