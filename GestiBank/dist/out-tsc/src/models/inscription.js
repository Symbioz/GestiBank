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
var demande_1 = require("./demande");
var Inscription = /** @class */ (function (_super) {
    __extends(Inscription, _super);
    function Inscription(idDemande, dateDemande, status, client, dateAffectation) {
        var _this = _super.call(this, idDemande, dateDemande, status, client) || this;
        _this.dateAffectation = dateAffectation;
        return _this;
    }
    return Inscription;
}(demande_1.Demande));
exports.Inscription = Inscription;
//# sourceMappingURL=inscription.js.map