import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    if (localStorage.getItem('status') === 'true' && localStorage.getItem('userName') != null && localStorage.getItem('password') != null) {
        return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor (private router: Router) {}
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean  {
    if (localStorage.getItem('status') === 'true' && localStorage.getItem('userName') != null && localStorage.getItem('password') != null) {
      this.router.navigate(['/auth/dashboard'])
      return false;
    } else {
      return true;
    }
  }
}
