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
var agent_1 = require("../../../../../models/agent");
var agent_service_1 = require("../../../../../services/agent.service");
var BoutonSuppressionAgentsComponent = /** @class */ (function () {
    function BoutonSuppressionAgentsComponent(modalService, agentService) {
        this.modalService = modalService;
        this.agentService = agentService;
    }
    BoutonSuppressionAgentsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    BoutonSuppressionAgentsComponent.prototype.getDismissReason = function (reason) {
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
    BoutonSuppressionAgentsComponent.prototype.ngOnInit = function () {
    };
    BoutonSuppressionAgentsComponent.prototype.deleteAgentById = function (id) {
        var agent = this.agentService.getAgent(id);
        this.agentService.deleteAgentById(id, agent);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", agent_1.Agent)
    ], BoutonSuppressionAgentsComponent.prototype, "agentModal", void 0);
    BoutonSuppressionAgentsComponent = __decorate([
        core_1.Component({
            selector: 'app-bouton-suppression-agents',
            templateUrl: './bouton-suppression-agents.component.html',
            styleUrls: ['./bouton-suppression-agents.component.scss']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            agent_service_1.AgentService])
    ], BoutonSuppressionAgentsComponent);
    return BoutonSuppressionAgentsComponent;
}());
exports.BoutonSuppressionAgentsComponent = BoutonSuppressionAgentsComponent;
//# sourceMappingURL=bouton-suppression-agents.component.js.map