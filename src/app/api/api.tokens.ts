import { InjectionToken } from '@angular/core';

/**
 * Base URL for backend API calls.
 * Default is `/api` so you can use a dev-proxy or host backend under the same origin.
 */
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL', {
  factory: () => '/api'
});


