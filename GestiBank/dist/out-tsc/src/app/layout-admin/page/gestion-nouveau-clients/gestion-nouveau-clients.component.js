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
var forms_1 = require("@angular/forms");
var agent_service_1 = require("../../../../services/agent.service");
var demande_service_1 = require("../../../../services/demande.service");
var inscription_service_1 = require("../../../../services/inscription.service");
var GestionNouveauClientsComponent = /** @class */ (function () {
    function GestionNouveauClientsComponent(formBuilder, agentService, DemandeService, inscriptionService) {
        this.formBuilder = formBuilder;
        this.agentService = agentService;
        this.DemandeService = DemandeService;
        this.inscriptionService = inscriptionService;
        // condition = "*ngIf='inscription.status==1'";
        this.model = 1;
    }
    GestionNouveauClientsComponent.prototype.ngOnInit = function () {
        this.radioGroupForm = this.formBuilder.group({
            model: 'middle'
        });
        this.agents = this.agentService.getAgents();
        this.demande = this.DemandeService.getDemandes();
        this.inscription = this.inscriptionService.getInscriptions();
        //this.inscription = this.inscriptionService.getInscriptionEnCours();
    };
    GestionNouveauClientsComponent = __decorate([
        core_1.Component({
            selector: 'app-gestion-nouveau-clients',
            templateUrl: './gestion-nouveau-clients.component.html',
            styleUrls: ['./gestion-nouveau-clients.component.scss'],
            providers: [agent_service_1.AgentService, demande_service_1.DemandeService, inscription_service_1.InscriptionService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, agent_service_1.AgentService, demande_service_1.DemandeService, inscription_service_1.InscriptionService])
    ], GestionNouveauClientsComponent);
    return GestionNouveauClientsComponent;
}());
exports.GestionNouveauClientsComponent = GestionNouveauClientsComponent;
//# sourceMappingURL=gestion-nouveau-clients.component.js.map