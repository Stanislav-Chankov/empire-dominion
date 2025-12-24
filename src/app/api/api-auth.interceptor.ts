import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.tokens';
import { AccessTokenService } from './access-token.service';

@Injectable()
export class ApiAuthInterceptor implements HttpInterceptor {
  private readonly baseUrl = inject(API_BASE_URL);
  private readonly token = inject(AccessTokenService);

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.isApiRequest(req.url)) return next.handle(req);
    if (req.headers.has('Authorization')) return next.handle(req);

    const accessToken = this.token.getAccessToken();
    if (!accessToken) return next.handle(req);

    return next.handle(
      req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      })
    );
  }

  private isApiRequest(url: string): boolean {
    const base = normalizeBaseUrl(this.baseUrl);
    if (!base) return false;

    // Relative base: '/api' and request '/api/...'
    if (base.startsWith('/')) return url.startsWith(base);

    // Absolute base: 'https://host/api' and request 'https://host/api/...'
    return url.startsWith(base);
  }
}

function normalizeBaseUrl(value: string): string {
  const trimmed = (value ?? '').trim();
  if (!trimmed) return '';
  // keep leading slash if present; remove trailing slashes
  return trimmed.replace(/\/+$/, '');
}


