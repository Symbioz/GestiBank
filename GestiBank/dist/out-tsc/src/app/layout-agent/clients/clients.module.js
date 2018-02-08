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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_2 = require("@ngx-translate/core");
var clients_routing_module_1 = require("./clients-routing.module");
var clients_component_1 = require("./clients.component");
var tableau_clients_component_1 = require("./tableau-clients/tableau-clients.component");
var modal_component_1 = require("./modal/modal.component");
var ClientsModule = /** @class */ (function () {
    function ClientsModule() {
    }
    ClientsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                clients_routing_module_1.ClientsRoutingModule,
                core_2.TranslateModule.forChild(),
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            declarations: [clients_component_1.ClientsComponent, tableau_clients_component_1.TableauClientsComponent, modal_component_1.ModalComponent]
        })
    ], ClientsModule);
    return ClientsModule;
}());
exports.ClientsModule = ClientsModule;
//# sourceMappingURL=clients.module.js.map