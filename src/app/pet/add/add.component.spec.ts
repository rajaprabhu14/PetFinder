import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPetComponent } from "./add.component"
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PetService } from '../../services/petService';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe("Add Pet Component", () => {
    let Component: ComponentFixture<AddPetComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, CommonModule, AddPetComponent, HttpClientModule],
            providers: [{ provide: PetService, useValue: "" },
                { provide: FormBuilder, usevalue: new FormBuilder() },
                { provide: Router, useValue: ""}
            ]
        }).compileComponents();

        Component = TestBed.createComponent(AddPetComponent);
    });

    it("should create the component without any errors", () => {
        expect(Component).toBeTruthy();
    });
});