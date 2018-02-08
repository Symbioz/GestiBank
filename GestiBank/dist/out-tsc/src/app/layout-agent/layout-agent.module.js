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
var layout_agent_routing_module_1 = require("./layout-agent-routing.module");
var layout_agent_component_1 = require("./layout-agent.component");
var header_component_1 = require("./components/header/header.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var modal_component_1 = require("./components/modal/modal.component");
var LayoutAgentModule = /** @class */ (function () {
    function LayoutAgentModule() {
    }
    LayoutAgentModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, layout_agent_routing_module_1.LayoutAgentRoutingModule, core_2.TranslateModule,
                ng_bootstrap_1.NgbDropdownModule.forRoot()],
            declarations: [layout_agent_component_1.LayoutAgentComponent, header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent, modal_component_1.ModalComponent]
        })
    ], LayoutAgentModule);
    return LayoutAgentModule;
}());
exports.LayoutAgentModule = LayoutAgentModule;
//# sourceMappingURL=layout-agent.module.js.map