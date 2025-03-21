export interface Image {
  id: string;
  isImageUploaded: boolean;
}

export class PetImage implements Image {
  id: string;
  isImageUploaded: boolean;

  constructor(id: string, isImageUploaded: boolean) {
    this.id = id;
    this.isImageUploaded = isImageUploaded;
  }
}
