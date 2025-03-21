import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { PetService } from '../services/petService';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pet, PetDetails } from '../models/petDetails';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Image, PetImage } from '../models/image';
import { Router } from '@angular/router';

@Component({
  selector: 'newpet',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './newpet.component.html',
})
export class NewPetComponent implements OnInit {
  @ViewChild('file') fileInput: any;

  addPetForm!: FormGroup;
  file!: File;
  fileSave = false;
  petDetails!: Pet;
  formSubmitted = false;
  petImage!: Image;

  constructor(
    private petService: PetService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.petImage = new PetImage('', false);
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSave(): void {
    this.formSubmitted = true;

    if (!this.petImage.isImageUploaded) {
      this.addPetForm.get('filePath')?.setErrors({ missingImage: true });
    }

    if (this.addPetForm.valid) {
      const request = this.addPetForm.value;
      const id = this.petImage.id.split('.')[0].slice(2, 12);
      this.petDetails = new PetDetails(
        +id,
        request.name,
        request.contactAddress,
        request.lostCity,
        this.petImage.id,
        false
      );

      this.petService.addPet(this.petDetails).subscribe((response) => {
        this.router.navigate(['./pets']);
        console.log(response);
      });
    }
  }

  onSaveImage(): void {
    this.formSubmitted = true;
    this.addPetForm.get("filePath")?.clearAsyncValidators();
    if (this.addPetForm.valid) {
      this.petService.uploadImage(this.file).subscribe((response) => {
        this.petImage = response;
      });
    }
  }

  onCancel(): void {
    this.formSubmitted = false;
    this.addPetForm.clearValidators();
    this.addPetForm.reset();
  }

  upload(): void {
    this.file = this.fileInput.nativeElement.files[0];
  }

  private initializeForm(): void {
    this.addPetForm = this.formBuilder.group({
      name: ['', Validators.required],
      contactAddress: ['', Validators.required],
      lostCity: ['', Validators.required],
      filePath: ['', Validators.required],
    });
  }
}
