import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userRole = localStorage.getItem('role'); // Simplified for example
    const requiredRole = route.data['role'];

    if (userRole === requiredRole) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
