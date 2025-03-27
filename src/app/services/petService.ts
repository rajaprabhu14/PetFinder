import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { Pet } from '../models/petDetails';
import { Image } from '../models/image';
import { Envoirnment } from '../config/config';

@Injectable({
  providedIn: 'root',
})
  
export class PetService {
  get loggedInUserId(): string {
    return sessionStorage.getItem('loggedInUser') ?? '';
  }

  set loggedInUserId(value: string) {
    sessionStorage.setItem('loggedInUser', value);
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.loggedInUserId}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getPetDetails(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(Envoirnment.api_url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  addPet(petdetails: Pet): Observable<any> {
    return this.httpClient
      .post(Envoirnment.api_url, petdetails, this.httpOptions)
      .pipe(map((response) => {}));
  }

  updatePet(request: Pet): Observable<Pet[]> {
    return this.httpClient
      .put<Pet[]>(Envoirnment.api_url, request, this.httpOptions)
      .pipe(
        mergeMap((response) =>
          this.getPetDetails().pipe((res) => {
            return res;
          })
        )
      );
  }

  uploadImage(file: File): Observable<Image> {
    let formData: FormData = new FormData();
    formData.append('formFile', file, file.name);
    return this.httpClient.post<Image>(Envoirnment.image_url, formData).pipe(
      map((response: Image) => {
        return response;
      })
    );
  }
}
