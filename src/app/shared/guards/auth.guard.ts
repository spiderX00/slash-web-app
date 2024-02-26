import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

// Sample authentication guard service
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.getLoggedUser(); 
    const expectedRole = route.data['expectedRole'];
    if (currentUser.token === expectedRole) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}