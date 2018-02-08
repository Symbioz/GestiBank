"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var layout_agent_component_1 = require("./layout-agent.component");
var routes = [
    {
        path: '',
        component: layout_agent_component_1.LayoutAgentComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard-agent/dashboard-agent.module#DashboardAgentModule' },
            { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' },
            { path: 'demande-en-cours', loadChildren: './demande-en-cours/demande-en-cours.module#DemandeEnCoursModule' }
        ]
    }
];
var LayoutAgentRoutingModule = /** @class */ (function () {
    function LayoutAgentRoutingModule() {
    }
    LayoutAgentRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], LayoutAgentRoutingModule);
    return LayoutAgentRoutingModule;
}());
exports.LayoutAgentRoutingModule = LayoutAgentRoutingModule;
//# sourceMappingURL=layout-agent-routing.module.js.map