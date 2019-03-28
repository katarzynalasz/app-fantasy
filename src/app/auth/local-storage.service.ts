import { Injectable } from '@angular/core';
import { AuthUser } from './auth-user.model';

@Injectable()
export class LocalStorageService {
  private loggedUserKey = 'loggedUser';
  private rememberKey = 'remember';

  constructor() {}

  getLoggedUser(): AuthUser {
    const user = JSON.parse(localStorage.getItem(this.loggedUserKey));
    return user;
  }

  setLoggedUser(user: AuthUser) {
    localStorage.setItem(this.loggedUserKey, JSON.stringify(user));
  }

  removeLoggedUser() {
    localStorage.removeItem(this.loggedUserKey);
  }

  getRemember(): boolean {
    const remember = localStorage.getItem(this.rememberKey);

    return remember === true.toString();
  }

  setRemember(remember: boolean) {
    localStorage.setItem(this.rememberKey, remember.toString());
  }
}
