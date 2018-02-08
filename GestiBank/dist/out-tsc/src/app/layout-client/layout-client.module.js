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
var layout_client_routing_module_1 = require("./layout-client-routing.module");
var layout_client_component_1 = require("./layout-client.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var header_component_1 = require("./components/header/header.component");
var LayoutClientModule = /** @class */ (function () {
    function LayoutClientModule() {
    }
    LayoutClientModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                layout_client_routing_module_1.LayoutClientRoutingModule,
                core_2.TranslateModule,
                ng_bootstrap_1.NgbDropdownModule.forRoot()
            ],
            declarations: [layout_client_component_1.LayoutClientComponent, sidebar_component_1.SidebarComponent, header_component_1.HeaderComponent]
        })
    ], LayoutClientModule);
    return LayoutClientModule;
}());
exports.LayoutClientModule = LayoutClientModule;
//# sourceMappingURL=layout-client.module.js.map