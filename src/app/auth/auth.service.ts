import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, interval, Subscription } from 'rxjs';
import { AuthUser } from './auth-user.model';
import { Router } from '@angular/router';
// import { RefreshToken } from '../_models/refresh-token.model';
import { SessionStorageService } from './session-storage.service';
import { RolesFlags } from './roles-flags.enum';
import { BaseService } from '../base.service';
import { Login } from './login.model';

@Injectable()
export class AuthService extends BaseService {
  private remember: boolean;
  private tokenRefreshIntervalSeconds = 5 * 60;
  private tokenRefreshSubscription: Subscription;

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService,
    private router: Router
  ) {
    super();
    if (this.getUser()) {
      this.setRefreshTimer();
    }
  }

  login(login: Login): Observable<AuthUser> {
    return this.httpClient.post<AuthUser>(`${this.apiUrl}/auth/login`, login).pipe(catchError(this.handleError));
  }

  forgotPassword(loader: string, email: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}auth/forgot-password?email=${email}`, {}).pipe(catchError(this.handleError));
  }

  refreshToken(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}auth/refresh-token`).pipe(catchError(this.handleError));
  }

  getUser(): AuthUser {
    let loggedUser = this.localStorageService.getLoggedUser();
    if (!loggedUser) {
      const sessionLocalUser = this.sessionStorageService.getLoggedUser();
      if (sessionLocalUser) {
        loggedUser = sessionLocalUser;
      }
    } else {
      this.remember = true;
    }
    if (!loggedUser) {
      this.logoutAndRedirect();
    }
    return loggedUser;
  }

  setUser(authUser: AuthUser, remember: boolean) {
    this.remember = remember;
    if (this.remember) {
      this.localStorageService.setLoggedUser(authUser);
    }
    this.localStorageService.setRemember(remember);

    this.sessionStorageService.setLoggedUser(authUser);

    this.setRefreshTimer();
  }

  isUserRemembered(): boolean {
    return this.remember;
  }

  getAuthorizationToken(): string {
    if (!this.getUser() || !this.getUser().accessToken) {
      return '';
    }
    return this.getUser().accessToken;
  }

  isInRole(roles: Array<RolesFlags>): boolean {
    if (!this.getUser()) {
      return false;
    }
    let isInRole = false;
    isInRole = roles.some(role => {
      if (role & this.getUser().roles) {
        return true;
      }
    });
    return isInRole;
  }

  logout() {
    this.stopRefreshTimer();
    this.localStorageService.removeLoggedUser();
    this.sessionStorageService.removeLoggedUser();
  }

  private setRefreshTimer() {
    this.stopRefreshTimer();
    const refreshTimer = interval(this.tokenRefreshIntervalSeconds * 1000);
    this.tokenRefreshSubscription = refreshTimer.subscribe(_ => {
      this.refreshLocalToken();
    });
  }

  private stopRefreshTimer() {
    if (this.tokenRefreshSubscription) {
      this.tokenRefreshSubscription.unsubscribe();
    }
  }

  private refreshLocalToken() {
    this.refreshToken().subscribe(
      result => {
        const loggedUser = this.getUser();
        loggedUser.accessToken = result.newToken;
        if (this.remember) {
          this.localStorageService.setLoggedUser(loggedUser);
        }
        this.sessionStorageService.setLoggedUser(loggedUser);
      },
      _ => {
        this.logoutAndRedirect();
      }
    );
  }

  private logoutAndRedirect() {
    this.logout();
    this.router.navigate(['/login']);
  }
}
