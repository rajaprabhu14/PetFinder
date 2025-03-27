export interface ILogin {
  result: string;
  isLoggedIn: boolean;
}

export class Login implements ILogin {
    result: string;
    isLoggedIn: boolean;

  constructor(token: string, isLoggedIn: boolean) {
    this.result = token;
    this.isLoggedIn = isLoggedIn;
  }
}
