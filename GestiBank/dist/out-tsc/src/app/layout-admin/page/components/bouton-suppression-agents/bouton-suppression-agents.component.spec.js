"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var bouton_suppression_agents_component_1 = require("./bouton-suppression-agents.component");
describe('BoutonSuppressionAgentsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [bouton_suppression_agents_component_1.BoutonSuppressionAgentsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(bouton_suppression_agents_component_1.BoutonSuppressionAgentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bouton-suppression-agents.component.spec.js.map