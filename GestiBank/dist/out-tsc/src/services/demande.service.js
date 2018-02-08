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
var demande_1 = require("../models/demande");
var client_1 = require("../models/client");
var adresse_1 = require("../models/adresse");
var DemandeService = /** @class */ (function () {
    function DemandeService() {
        this.demande = [new demande_1.Demande(1, "10/12/2015", true, new client_1.Client("sdjkhqdklfugh", "Guilaume", "blabla@gmail.com", "0606060606", "test", new adresse_1.Adresse("rue de lille", 59200, "lille"), 1, 2, "celib", 1337)),
            new demande_1.Demande(3, "10:01/2017", false, new client_1.Client("Le Gaulois", "Provençal", "Kaamelott@gmail", "060000000", "test", new adresse_1.Adresse("rue de lille", 59200, "lille"), 2, 0, "couple", 573)),
            new demande_1.Demande(3, "10:01/2017", false, new client_1.Client("Le Gaulois", "Provençal", "Kaamelott@gmail", "060000000", "test", new adresse_1.Adresse("rue de lille", 59200, "lille"), 2, 0, "couple", null))
        ];
        this.nbDemande = 0;
    }
    DemandeService.prototype.getDemandes = function () {
        return this.demande;
    };
    DemandeService.prototype.getDemandesEncours = function () {
        for (var i = 0; i < this.demande.length; i++) {
            this.nbDemande = this.demande.length;
        }
        return this.nbDemande;
    };
    DemandeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DemandeService);
    return DemandeService;
}());
exports.DemandeService = DemandeService;
//# sourceMappingURL=demande.service.js.map