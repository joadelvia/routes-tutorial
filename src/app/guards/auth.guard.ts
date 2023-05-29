import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const isAuthenticated = this.checkAuthentication(); // Replace with your authentication logic

    if (isAuthenticated) {
      return true;
    } else {
      return this.router.parseUrl('/home');
    }
  }

  checkAuthentication(): boolean {
    // Replace with your authentication logic
    // Return true if the user is authenticated, false otherwise
    return true;
  }
}