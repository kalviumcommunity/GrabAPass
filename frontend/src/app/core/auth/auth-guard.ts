import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['role'];
  const currentUser = authService.currentUserValue;

  if (currentUser) {
    if (expectedRole && currentUser.role !== expectedRole) {
      router.navigate(['/']); // Redirect to home if unauthorized
      return false;
    }
    return true; // Authorized
  }

  // Not logged in
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
