"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var agent_service_1 = require("./agent.service");
describe('AgentService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [agent_service_1.AgentService]
        });
    });
    it('should be created', testing_1.inject([agent_service_1.AgentService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=agent.service.spec.js.map