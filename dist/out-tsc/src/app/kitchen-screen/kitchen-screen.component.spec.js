import { async, TestBed } from '@angular/core/testing';
import { KitchenScreenComponent } from './kitchen-screen.component';
describe('KitchenScreenComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [KitchenScreenComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(KitchenScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=kitchen-screen.component.spec.js.map