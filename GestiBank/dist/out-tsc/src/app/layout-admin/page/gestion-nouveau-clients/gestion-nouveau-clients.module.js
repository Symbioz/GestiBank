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
var gestion_nouveau_clients_routing_module_1 = require("./gestion-nouveau-clients-routing.module");
var gestion_nouveau_clients_component_1 = require("./gestion-nouveau-clients.component");
var tableau_demande_compte_component_1 = require("../components/tableau-demande-compte/tableau-demande-compte.component");
var bouton_validation_affectation_component_1 = require("../components/bouton-validation-affectation/bouton-validation-affectation.component");
var GestionNouveauClientsModule = /** @class */ (function () {
    function GestionNouveauClientsModule() {
    }
    GestionNouveauClientsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                gestion_nouveau_clients_routing_module_1.GestionNouveauClientsRoutingModule,
                core_2.TranslateModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            declarations: [gestion_nouveau_clients_component_1.GestionNouveauClientsComponent, tableau_demande_compte_component_1.TableauDemandeCompteComponent, bouton_validation_affectation_component_1.BoutonValidationAffectationComponent]
        })
    ], GestionNouveauClientsModule);
    return GestionNouveauClientsModule;
}());
exports.GestionNouveauClientsModule = GestionNouveauClientsModule;
//# sourceMappingURL=gestion-nouveau-clients.module.js.map