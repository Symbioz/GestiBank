"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var inscription_service_1 = require("./inscription.service");
describe('InscriptionService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [inscription_service_1.InscriptionService]
        });
    });
    it('should be created', testing_1.inject([inscription_service_1.InscriptionService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=inscription.service.spec.js.map