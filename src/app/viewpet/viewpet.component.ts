import { Component, OnDestroy, OnInit } from '@angular/core';
import { PetService } from '../services/petService';
import { CommonModule } from '@angular/common';
import { Pet, PetDetails } from '../models/petDetails';
import { Envoirnment } from '../config/config';

@Component({
  selector: 'viewpet',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './viewpet.component.html',
})
export class ViewPetComponent implements OnInit {
  petDetails!: PetDetails[];

  constructor(private petService: PetService){ }

  buttonTitile(petDetails: PetDetails): string {
    return petDetails.isFound ? 'Already Found' : 'Found';
  }

  ngOnInit(): void {
    this.petService.getPetDetails().subscribe(response => {
      this.petDetails = response;
    });
  }

  update(item: Pet): void {
    this.petService.updatePet(item).subscribe((response) => {
      this.petDetails = response;
    });
  }

  createResourcePath(path: string): string {
    return Envoirnment.resource_url + `${path}`;
  }
}
