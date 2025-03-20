export interface Pet {
  id: number;
  name: string;
  contactAddress: string;
  lostCity: string;
  filePath: string;
  isFound: boolean;
}

export class PetDetails implements Pet {
  id: number;
  name: string;
  contactAddress: string;
  lostCity: string;
  filePath: string;
  isFound: boolean;
  constructor(
    id: number,
    name: string,
    contactAddress: string,
    lostCity: string,
    filePath: string,
    isFound: boolean
  ) {
    this.id = id;
    (this.name = name), (this.contactAddress = contactAddress);
    this.lostCity = lostCity;
    this.filePath = filePath;
    this.isFound = isFound;
  }
}
