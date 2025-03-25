import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { PetService } from '../services/petService';
import { CommonModule } from '@angular/common';
import { PetDetails } from '../models/petDetails';
import { Envoirnment } from '../config/config';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  petDetails!: PetDetails[];
  showError = false;
  constructor(private petService: PetService) {}

  get hasPet(): boolean {
    return this.petDetails && this.petDetails.length > 0;
  }

  ngOnInit(): void {
    this.petService.getPetDetails().subscribe({
      next: (details) => this.petDetails = details,
      error: (error) => console.log(error)
    });
  }

  createResourcePath(path: string): string {
    return Envoirnment.resource_url + `${path}`;
  }
}
