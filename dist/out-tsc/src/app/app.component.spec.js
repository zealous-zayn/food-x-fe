import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('AppComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it("should have as title 'foodX-webApp'", function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('foodX-webApp');
    });
    it('should render title in a h1 tag', function () {
        var fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to foodX-webApp!');
    });
});
//# sourceMappingURL=app.component.spec.js.map