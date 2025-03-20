import { Component } from '@angular/core';
import { PetService } from '../services/petService';
import { CommonModule } from '@angular/common';
import { Pet } from '../models/petDetails';

@Component({
  selector: 'viewpet',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './viewpet.component.html',
})
export class ViewPetComponent {
  petDetails!: Pet[];

  constructor(private petService: PetService) { }
  
  buttonTitile(item: any): string {
    return item.isFound ? "Already Found" : "Found";
  }

  ngOnInit(): void {
    this.petService.getPetDetails().subscribe((response) => {
      this.petDetails = response;
    });
  }

  found(item: Pet): void {
    this.petService.updatePet(item).subscribe((response) => {
      this.petDetails = response;
    });
  }

  createImgPath(path: string): string{
    const res = `https://localhost:7198/Resources/${path}`;
    return res;
  }
}
