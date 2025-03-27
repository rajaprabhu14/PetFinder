import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Pet } from '../../models/petDetails';
import { PetService } from '../../services/petService';
import { Image, PetImage } from '../../models/image';

@Component({
  selector: 'add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  providers: [PetService],
  templateUrl: './add.component.html',
})
export class AddPetComponent implements OnInit {
  @ViewChild('file') fileInput: any;

  addPetForm!: FormGroup;
  file!: File;
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
      request.filePath = this.petImage.id;
      this.petService.addPet(request).subscribe((response) => {
        this.router.navigate(['./pets']);
        console.log(response);
      });
    }
  }

  onSaveImage(): void {
    this.formSubmitted = true;
    this.addPetForm.get('filePath')?.clearValidators();
    this.addPetForm.updateValueAndValidity();
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
