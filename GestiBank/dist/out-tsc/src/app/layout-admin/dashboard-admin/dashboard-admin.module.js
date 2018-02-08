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
var dashboard_admin_routing_module_1 = require("./dashboard-admin-routing.module");
var dashboard_admin_component_1 = require("./dashboard-admin.component");
var DashboardAdminModule = /** @class */ (function () {
    function DashboardAdminModule() {
    }
    DashboardAdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dashboard_admin_routing_module_1.DashboardAdminRoutingModule,
                core_2.TranslateModule,
            ],
            declarations: [dashboard_admin_component_1.DashboardAdminComponent]
        })
    ], DashboardAdminModule);
    return DashboardAdminModule;
}());
exports.DashboardAdminModule = DashboardAdminModule;
//# sourceMappingURL=dashboard-admin.module.js.map