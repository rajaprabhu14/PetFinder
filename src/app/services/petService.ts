import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Pet } from '../models/petDetails';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private url = 'https://localhost:7198/api/Pet';
  private pet!: Pet;
  private aiResponseSubject: BehaviorSubject<Pet> = new BehaviorSubject<Pet>({
    id: 0,
    name: '',
    contactAddress: '',
    lostCity: '',
    filePath: '',
    isFound: false,
  });

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getPetDetails(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  addPet(petdetails: Pet): Observable<any> {
    return this.httpClient
      .post(this.url, petdetails)
      .pipe(map((response) => {}));
  }

  uploadImage(file: File): Observable<Image> {
    let formData: FormData = new FormData();
    formData.append('formFile', file, file.name);
    return this.httpClient
      .post<Image>('https://localhost:7198/api/Image/uploadImage', formData)
      .pipe(
        map((response: Image) => {
          return response;
        })
      );
  }

  updatePet(petItemValue: Pet): Observable<any> {
    const request = petItemValue.id;
    return this.httpClient
      .put(this.url, request, this.httpOptions)
      .pipe(map((response) => {}));
  }
}
