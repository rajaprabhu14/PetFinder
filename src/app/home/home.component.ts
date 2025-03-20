import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { PetService } from '../services/petService';
import { CommonModule } from '@angular/common';
import { Pet } from '../models/petDetails';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  providers: [PetService],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  petDetails!: Pet[];
  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.getPetDetails().subscribe((response) => {
      this.petDetails = response;
    });
  }

  createImgPath(path: string): string{
    const res = `https://localhost:7198/Resources/${path}`;
    return res;
  }
}
