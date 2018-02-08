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
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(nom, prenom, email, numTel, motDePasse, adresse, id, nbEnfants, situation, idAgent) {
        var _this = _super.call(this, nom, prenom, email, numTel, motDePasse, adresse) || this;
        _this.id = id;
        _this.nbEnfants = nbEnfants;
        _this.situation = situation;
        _this.idAgent = idAgent;
        return _this;
    }
    return Client;
}(utilisateur_1.Utilisateur));
exports.Client = Client;
//# sourceMappingURL=client.js.map