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
var dashboard_agent_routing_module_1 = require("./dashboard-agent-routing.module");
var dashboard_agent_component_1 = require("./dashboard-agent.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var notifications_component_1 = require("./notifications/notifications.component");
var DashboardAgentModule = /** @class */ (function () {
    function DashboardAgentModule() {
    }
    DashboardAgentModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbCarouselModule.forRoot(),
                dashboard_agent_routing_module_1.DashboardAgentRoutingModule
            ],
            declarations: [dashboard_agent_component_1.DashboardAgentComponent, notifications_component_1.NotificationsComponent]
        })
    ], DashboardAgentModule);
    return DashboardAgentModule;
}());
exports.DashboardAgentModule = DashboardAgentModule;
//# sourceMappingURL=dashboard-agent.module.js.map