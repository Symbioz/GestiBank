"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var boutton_edition_agents_component_1 = require("./boutton-edition-agents.component");
describe('BouttonEditionAgentsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [boutton_edition_agents_component_1.BouttonEditionAgentsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(boutton_edition_agents_component_1.BouttonEditionAgentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=boutton-edition-agents.component.spec.js.map