import { Injectable } from '@angular/core';

/**
 * Simple access_token source.
 * Default behavior: read from localStorage key `access_token`.
 *
 * Swap this implementation later if you move tokens into NgRx, cookies, etc.
 */
@Injectable({ providedIn: 'root' })
export class AccessTokenService {
  getAccessToken(): string | null {
    try {
      return localStorage.getItem('access_token');
    } catch {
      return null;
    }
  }
}


