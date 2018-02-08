"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var gestion_nouveau_clients_component_1 = require("./gestion-nouveau-clients.component");
describe('GestionNouveauClientsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [gestion_nouveau_clients_component_1.GestionNouveauClientsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(gestion_nouveau_clients_component_1.GestionNouveauClientsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gestion-nouveau-clients.component.spec.js.map