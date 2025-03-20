import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { PetService } from '../services/petService';
import { RouterLink, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('Home Component', () => {
  let Component: ComponentFixture<HomeComponent>;
  let mockPetService: PetService;

  beforeEach(() => {
    mockPetService = jasmine.createSpyObj('PetService', ['getPetDetails']);
    (mockPetService.getPetDetails as jasmine.Spy).and.returnValue(of());

    TestBed.configureTestingModule({
      imports: [RouterLink, RouterModule, CommonModule, HomeComponent, HttpClientModule],
      providers: [{ provide: PetService, useValue: mockPetService }],
    }).compileComponents();

    Component = TestBed.createComponent(HomeComponent);
  });

  it('should create the component without any errors', () => {
    expect(Component).toBeTruthy();
  });
});
