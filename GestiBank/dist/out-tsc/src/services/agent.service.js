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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var observable_1 = require("rxjs/observable");
var agent_1 = require("../models/agent");
var adresse_1 = require("../models/adresse");
var AgentService = /** @class */ (function () {
    function AgentService(http) {
        this.http = http;
        this.agents = [new agent_1.Agent(1337, "date", "jennifer", "Vincent", "vincentjenni@gmail.com", "0265989855", "test", new adresse_1.Adresse("rue de lille", 59200, "lille")),
            new agent_1.Agent(576, "dare", "jess", "vinc", "jess@fre.fr", "0154521545", "test1", new adresse_1.Adresse("rue de lille", 59200, "lille")),
        ];
        this.apiUrl = 'http://localhost:8080/GestiBankBack/agent';
    }
    // Fonction de recupération des agents
    AgentService.prototype.getAgents = function () {
        return this.agents;
    };
    //Fonction qui recupère un agent avec son id (pour le moment avec son matricule car oublier de mettre un
    //id pour l'uilitsateur)
    AgentService.prototype.getAgent = function (id) {
        for (var _i = 0, _a = this.agents; _i < _a.length; _i++) {
            var agent = _a[_i];
            if (agent.matricule === id) {
                return agent;
            }
        }
    };
    AgentService.prototype.findAll = function () {
        return this.http.get(this.apiUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return observable_1.Observable.throw(error.json || 'server error'); });
    };
    /*saveAgent(agent : Agent): Observable<Agent> {
        console.log("service");
        return this.http.post(this.apiUrl, agent)
        .catch((error:any) => Observable.throw(error.json().error || 'server error'));
        
  
    }*/
    AgentService.prototype.saveAgent = function (agent) {
        this.agents.push(agent);
        console.log(('service save'));
        console.log(this.agents);
    };
    AgentService.prototype.deleteAgentById = function (agent, id) {
        console.log("delete" + id);
        // A modifier trouver l id de l agent
        this.agents.splice(1, 1);
    };
    AgentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AgentService);
    return AgentService;
}());
exports.AgentService = AgentService;
//# sourceMappingURL=agent.service.js.map