import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPetComponent } from './newpet.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PetService } from '../services/petService';
import { Router } from '@angular/router';

describe("New Pet Component", () => {
    let Component: ComponentFixture<NewPetComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, CommonModule, NewPetComponent],
            providers: [{ provide: PetService, useValue: "" },
                { provide: FormBuilder, usevalue: new FormBuilder() },
                { provide: Router, useValue: ""}
            ]
        }).compileComponents();

        Component = TestBed.createComponent(NewPetComponent);
    });

    it("should create the component without any errors", () => {
        expect(Component).toBeTruthy();
    });
});