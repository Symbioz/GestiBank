"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utilisateur_1 = require("./utilisateur");
var Agent = /** @class */ (function (_super) {
    __extends(Agent, _super);
    function Agent(matricule, dateDebutContrat, nom, prenom, email, numTel, motDePasse, adresse) {
        var _this = _super.call(this, nom, prenom, email, numTel, motDePasse, adresse) || this;
        _this.matricule = matricule;
        _this.dateDebutContrat = dateDebutContrat;
        return _this;
    }
    return Agent;
}(utilisateur_1.Utilisateur));
exports.Agent = Agent;
//# sourceMappingURL=agent.js.map