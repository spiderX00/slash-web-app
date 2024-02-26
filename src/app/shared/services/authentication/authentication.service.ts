import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly token: string = 'Hide-me';

  constructor() { }

  getLoggedUser() {
    return {
      token: this.token
    }
  }
}
