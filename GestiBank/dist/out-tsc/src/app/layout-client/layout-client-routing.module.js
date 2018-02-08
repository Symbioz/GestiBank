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
var layout_client_component_1 = require("./layout-client.component");
var routes = [
    {
        path: '',
        component: layout_client_component_1.LayoutClientComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard-client/dashboard-client.module#DashboardClientModule' },
        ]
    }
];
var LayoutClientRoutingModule = /** @class */ (function () {
    function LayoutClientRoutingModule() {
    }
    LayoutClientRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], LayoutClientRoutingModule);
    return LayoutClientRoutingModule;
}());
exports.LayoutClientRoutingModule = LayoutClientRoutingModule;
//# sourceMappingURL=layout-client-routing.module.js.map