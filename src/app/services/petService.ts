import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { Pet, PetDetails } from '../models/petDetails';
import { Image } from '../models/image';
import { Envoirnment } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {
  }

  getPetDetails(): Observable<PetDetails[]> {
    return this.httpClient.get<PetDetails[]>(Envoirnment.api_url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  addPet(petdetails: Pet): Observable<any> {
    return this.httpClient
      .post(Envoirnment.api_url, petdetails)
      .pipe(map((response) => {}));
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

  updatePet(request: Pet): Observable<PetDetails[]> {
    return this.httpClient
      .put<PetDetails[]>(Envoirnment.api_url, request.id, this.httpOptions)
      .pipe(mergeMap((response) => this.getPetDetails().pipe((res) => {return res})));
  }
}
