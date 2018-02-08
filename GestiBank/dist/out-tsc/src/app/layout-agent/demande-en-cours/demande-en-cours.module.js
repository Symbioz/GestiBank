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
var demande_en_cours_routing_module_1 = require("./demande-en-cours-routing.module");
var demande_en_cours_component_1 = require("./demande-en-cours.component");
var etiquette_component_1 = require("./etiquette/etiquette.component");
var shared_1 = require("../../shared");
var DemandeEnCoursModule = /** @class */ (function () {
    function DemandeEnCoursModule() {
    }
    DemandeEnCoursModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                demande_en_cours_routing_module_1.DemandeEnCoursRoutingModule,
                shared_1.StatModule
            ],
            declarations: [demande_en_cours_component_1.DemandeEnCoursComponent, etiquette_component_1.EtiquetteComponent]
        })
    ], DemandeEnCoursModule);
    return DemandeEnCoursModule;
}());
exports.DemandeEnCoursModule = DemandeEnCoursModule;
//# sourceMappingURL=demande-en-cours.module.js.map