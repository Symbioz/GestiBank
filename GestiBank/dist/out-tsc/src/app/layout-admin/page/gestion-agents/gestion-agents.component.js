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
var agent_service_1 = require("../../../../services/agent.service");
var GestionAgentsComponent = /** @class */ (function () {
    function GestionAgentsComponent(agentService) {
        this.agentService = agentService;
    }
    GestionAgentsComponent.prototype.ngOnInit = function () {
        this.agents = this.agentService.getAgents();
        //this.getAllAgents();
    };
    GestionAgentsComponent.prototype.getAllAgents = function () {
        var _this = this;
        this.agentService.findAll().subscribe(function (agents) {
            _this.agents = agents;
        }, function (err) {
            console.log(err);
        });
    };
    GestionAgentsComponent = __decorate([
        core_1.Component({
            selector: 'app-gestion-agents',
            templateUrl: './gestion-agents.component.html',
            styleUrls: ['./gestion-agents.component.scss'],
            providers: [agent_service_1.AgentService],
        }),
        __metadata("design:paramtypes", [agent_service_1.AgentService])
    ], GestionAgentsComponent);
    return GestionAgentsComponent;
}());
exports.GestionAgentsComponent = GestionAgentsComponent;
//# sourceMappingURL=gestion-agents.component.js.map