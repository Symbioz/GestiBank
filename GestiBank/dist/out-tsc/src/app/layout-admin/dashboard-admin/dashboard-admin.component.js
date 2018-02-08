"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var inscription_service_1 = require("../../../services/inscription.service");
var DashboardAdminComponent = /** @class */ (function () {
    function DashboardAdminComponent(InscriptionService) {
        this.InscriptionService = InscriptionService;
        this.nbDemande = 0;
    }
    DashboardAdminComponent.prototype.ngOnInit = function () {
        this.nbDemande = this.InscriptionService.getNbInscriptionsEncours();
    };
    DashboardAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard-admin',
            templateUrl: './dashboard-admin.component.html',
            styleUrls: ['./dashboard-admin.component.scss'],
            providers: [inscription_service_1.InscriptionService]
        }),
        __metadata("design:paramtypes", [inscription_service_1.InscriptionService])
    ], DashboardAdminComponent);
    return DashboardAdminComponent;
}());
exports.DashboardAdminComponent = DashboardAdminComponent;
//# sourceMappingURL=dashboard-admin.component.js.map