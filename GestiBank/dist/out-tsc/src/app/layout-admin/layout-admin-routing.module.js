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
var layout_admin_component_1 = require("./layout-admin.component");
var http_1 = require("@angular/http");
var routes = [
    {
        path: '',
        component: layout_admin_component_1.LayoutAdminComponent,
        children: [
            //{ path: '', redirectTo: 'dashboardAdmin' },
            { path: 'dashboardAdmin', loadChildren: './dashboard-admin/dashboard-admin.module#DashboardAdminModule' },
            //{ path: 'dashboardAdmin', component: DashboardAdminComponent},
            { path: 'gestionAgents', loadChildren: './page/gestion-agents/gestion-agents.module#GestionAgentsModule' },
            { path: 'gestionNouveauClients', loadChildren: './page/gestion-nouveau-clients/gestion-nouveau-clients.module#GestionNouveauClientsModule' },
            { path: 'gestionAgents/infoAgents', loadChildren: './page/info-agents/info-agents.module#InfoAgentsModule' },
        ]
    }
];
var LayoutAdminRoutingModule = /** @class */ (function () {
    function LayoutAdminRoutingModule() {
    }
    LayoutAdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes), http_1.HttpModule],
            exports: [router_1.RouterModule]
        })
    ], LayoutAdminRoutingModule);
    return LayoutAdminRoutingModule;
}());
exports.LayoutAdminRoutingModule = LayoutAdminRoutingModule;
//# sourceMappingURL=layout-admin-routing.module.js.map