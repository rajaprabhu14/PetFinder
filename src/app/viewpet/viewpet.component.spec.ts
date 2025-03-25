import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ViewPetComponent } from './viewpet.component';
import { PetService } from '../services/petService';
import { CommonModule } from "@angular/common";
import { of } from "rxjs";
import { PetDetails } from "../models/petDetails";

describe("View Pet Component", () => {
    let component: ComponentFixture<ViewPetComponent>;
    let mockPetService: PetService;

    const petDetails = new PetDetails(1, "testPet", "testAddress", "testCity", "", false);

    beforeEach(() => {
        mockPetService = jasmine.createSpyObj("PetService", ["getPetDetails"]);
        (mockPetService.getPetDetails as jasmine.Spy).and.returnValue(of([petDetails]));

        TestBed.configureTestingModule({
            providers: [
                {provide: PetService, useValue: mockPetService }
            ],
            imports: [ CommonModule, ViewPetComponent]
        }).compileComponents();

        component = TestBed.createComponent(ViewPetComponent);
        component.detectChanges();
    })

    it("shoudld create the component without errors", () => {
        expect(component).toBeTruthy();
    });

    it("should call the getDetails method", () => {
        expect(mockPetService.getPetDetails).toHaveBeenCalled();
    });
});