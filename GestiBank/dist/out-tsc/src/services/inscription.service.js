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
var inscription_1 = require("../models/inscription");
var InscriptionService = /** @class */ (function () {
    function InscriptionService() {
        this.nbInscription = 0;
        // Tableau d'inscription en dur
        this.inscriptions = [new inscription_1.Inscription(1, "10/12/2015", true, new client_1.Client("sdjkhqdklfugh", "Guilaume", "blabla@gmail.com", "0606060606", "test", new adresse_1.Adresse("rue de lille", 59200, "lille"), 1, 2, "celib", 1337), "21/10/2020"),
            new inscription_1.Inscription(3, "10:01/2017", false, new client_1.Client("Le Gaulois", "Provençal", "Kaamelott@gmail", "060000000", "test", new adresse_1.Adresse("rue de lille", 59200, "lille"), 2, 0, "couple", 573), "22/11/2015"),
            new demande_1.Demande(3, "10:01/2017", false, new client_1.Client("Le Gaulois", "Provençal", "Kaamelott@gmail", "060000000", "test", new adresse_1.Adresse("rue de lille", 59200, "lille"), 2, 0, "couple", null)),
            new demande_1.Demande(3, "10:01/2017", false, new client_1.Client("Le Gaulois", "Provençal", "Kaamelott@gmail", "060000000", "test", new adresse_1.Adresse("rue de lille", 59200, "lille"), 2, 0, "couple", 565))
        ];
    }
    //recupérer la liste de toute les Inscritions
    InscriptionService.prototype.getInscriptions = function () {
        return this.inscriptions;
    };
    // Recupérer le nomre d'inscription à affecter et en cours ? (2 fonction ?, pour le dashboard (pas demandé))
    InscriptionService.prototype.getNbInscriptionsEncours1 = function () {
        for (var i = 0; i < this.inscriptions.length; i++) {
            this.nbInscription = this.inscriptions.length;
        }
        return this.nbInscription;
    };
    InscriptionService.prototype.getNbInscriptionsEncours = function () {
        for (var _i = 0, _a = this.inscriptions; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.client.idAgent !== null) {
                this.nbInscription = this.nbInscription + 1;
            }
        }
        return this.nbInscription;
    };
    InscriptionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], InscriptionService);
    return InscriptionService;
}());
exports.InscriptionService = InscriptionService;
//# sourceMappingURL=inscription.service.js.map