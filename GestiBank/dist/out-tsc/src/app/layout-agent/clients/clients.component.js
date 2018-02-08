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
var infoClients_1 = require("./infoClients");
var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
        this.clients = [new infoClients_1.InfoClient(1, "sdjkhqdklfugh", "Guilaume", "blabla@gmail.com", "1rue machin Lille", "0606060606", 0, "celibataire"),
            new infoClients_1.InfoClient(2, "Le Gaulois", "Provençal", "Kaamelott@gmail", "1 rue C'est pas faux 59000 Sloubi324", "060000000", 0, "On en a gros")];
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        core_1.Component({
            selector: 'app-clients',
            templateUrl: './clients.component.html',
            styleUrls: ['./clients.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());
exports.ClientsComponent = ClientsComponent;
//# sourceMappingURL=clients.component.js.map