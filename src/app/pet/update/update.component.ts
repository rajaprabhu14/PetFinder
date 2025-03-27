import { Component, OnInit } from '@angular/core';
import { Envoirnment } from '../../config/config';
import { Pet } from '../../models/petDetails';
import { PetService } from '../../services/petService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'update',
  standalone: true,
  imports: [CommonModule],
  providers: [PetService],
  templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {
  petDetails!: Pet[];

  constructor(private petService: PetService) {}

  buttonTitile(petDetails: Pet): string {
    return petDetails.isFound ? 'Already Found' : 'Found';
  }

  ngOnInit(): void {
    this.petService.getPetDetails().subscribe((response) => {
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
