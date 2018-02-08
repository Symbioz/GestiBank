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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var agent_1 = require("../../../../../models/agent");
var adresse_1 = require("../../../../../models/adresse");
var agent_service_1 = require("../../../../../services/agent.service");
var BoutonCreationAgentsComponent = /** @class */ (function () {
    function BoutonCreationAgentsComponent(route, router, agentService, modalService) {
        this.route = route;
        this.router = router;
        this.agentService = agentService;
        this.modalService = modalService;
    }
    //Pour la modal 
    BoutonCreationAgentsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    BoutonCreationAgentsComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    BoutonCreationAgentsComponent.prototype.ngOnInit = function () {
        // validation des champs
        this.agentForm = new forms_1.FormGroup({
            matricule: new forms_1.FormControl('', forms_1.Validators.required),
            nom: new forms_1.FormControl('', forms_1.Validators.required),
            prenom: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', forms_1.Validators.required),
            voie: new forms_1.FormControl('', forms_1.Validators.required),
            codePostal: new forms_1.FormControl('', forms_1.Validators.required),
            ville: new forms_1.FormControl('', forms_1.Validators.required),
            telephone: new forms_1.FormControl('', forms_1.Validators.required),
            motDePasse: new forms_1.FormControl('', forms_1.Validators.required),
            dateDebutContrat: new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    BoutonCreationAgentsComponent.prototype.ngOnDestroy = function () {
    };
    BoutonCreationAgentsComponent.prototype.onSubmit = function (addAgentForm) {
        if (this.agentForm.valid) {
            var agent = new agent_1.Agent(this.agentForm.controls['matricule'].value, this.agentForm.controls['nom'].value, this.agentForm.controls['prenom'].value, this.agentForm.controls['email'].value, this.agentForm.controls['telephone'].value, this.agentForm.controls['motDePasse'].value, this.agentForm.controls['dateDebutContrat'].value, new adresse_1.Adresse(this.agentForm.controls['voie'].value, this.agentForm.controls['codePostal'].value, this.agentForm.controls['ville'].value));
            console.log(addAgentForm.value);
            this.agentService.saveAgent(agent);
        }
        //this.agentForm.reset();
        this.router.navigate(['/admin/gestionAgents']);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", agent_1.Agent)
    ], BoutonCreationAgentsComponent.prototype, "agentModal", void 0);
    BoutonCreationAgentsComponent = __decorate([
        core_1.Component({
            selector: 'app-bouton-creation-agents',
            templateUrl: './bouton-creation-agents.component.html',
            styleUrls: ['./bouton-creation-agents.component.scss'],
            providers: [agent_service_1.AgentService],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            agent_service_1.AgentService,
            ng_bootstrap_1.NgbModal])
    ], BoutonCreationAgentsComponent);
    return BoutonCreationAgentsComponent;
}());
exports.BoutonCreationAgentsComponent = BoutonCreationAgentsComponent;
//# sourceMappingURL=bouton-creation-agents.component.js.map