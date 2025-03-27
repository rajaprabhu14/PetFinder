import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PetService } from "../../services/petService";
import { CommonModule } from "@angular/common";
import { of } from "rxjs";
import { UpdateComponent } from './update.component';
import { HttpClientModule } from "@angular/common/http";

describe("Update Pet Component", () => {
    let component: ComponentFixture<UpdateComponent>;
    let mockPetService: PetService;

    beforeEach(() => {
        mockPetService = jasmine.createSpyObj("PetService", ["getPetDetails"]);
        (mockPetService.getPetDetails as jasmine.Spy).and.returnValue(of([]));

        TestBed.configureTestingModule({
            providers: [
                {provide: PetService, useValue: mockPetService }
            ],
            imports: [ CommonModule, UpdateComponent, HttpClientModule]
        }).compileComponents();

        component = TestBed.createComponent(UpdateComponent);
        component.detectChanges();
    })

    it("shoudld create the component without errors", () => {
        expect(component).toBeTruthy();
    });
});