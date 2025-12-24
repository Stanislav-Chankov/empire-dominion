import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AccessTokenService } from '../api/access-token.service';

/**
 * Route guards built on the existing AccessTokenService (localStorage['access_token']).
 *
 * - authRequiredGuard: allow navigation only if token exists; otherwise redirect to /auth/login
 * - guestOnlyGuard: allow navigation only if NOT authenticated; otherwise redirect to /
 */

export const authRequiredGuard: CanMatchFn = () => {
  const token = inject(AccessTokenService).getAccessToken();
  const router = inject(Router);
  return token ? true : router.parseUrl('/auth/login');
};

export const guestOnlyGuard: CanMatchFn = () => {
  const token = inject(AccessTokenService).getAccessToken();
  const router = inject(Router);
  return token ? router.parseUrl('/') : true;
};


