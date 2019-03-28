import { Injectable } from '@angular/core';
import { AuthUser } from './auth-user.model';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private loggedUserKey = 'loggedUser';

  constructor() {}

  getLoggedUser(): AuthUser {
    const user = JSON.parse(sessionStorage.getItem(this.loggedUserKey));
    return user;
  }

  setLoggedUser(user: AuthUser) {
    sessionStorage.setItem(this.loggedUserKey, JSON.stringify(user));
  }

  removeLoggedUser() {
    sessionStorage.removeItem(this.loggedUserKey);
  }
}
