import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { PetService } from './petService';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(PetService);
  const router = inject(Router);

  if (authService.loggedInUserId) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};