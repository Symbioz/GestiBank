"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var demande_service_1 = require("./demande.service");
describe('DemandeService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [demande_service_1.DemandeService]
        });
    });
    it('should be created', testing_1.inject([demande_service_1.DemandeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=demande.service.spec.js.map