import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { RolesFlags } from './roles-flags.enum';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkUser(route, state);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }

  private checkUser(route: any, state: RouterStateSnapshot): boolean {
    const expectedRoles: Array<RolesFlags> = route.data.expectedRoles;
    const user = this.authService.getUser();
    if (expectedRoles && user) {
      if (this.authService.isInRole(expectedRoles)) {
        return true;
      } else {
        this.router.navigate(['/error/unauthorized']);
        return false;
      }
    }
    if (state) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
