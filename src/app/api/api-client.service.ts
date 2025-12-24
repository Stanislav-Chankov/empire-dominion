import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEnvelope, ApiRequest } from './api.models';
import { API_BASE_URL } from './api.tokens';

@Injectable({ providedIn: 'root' })
export class ApiClientService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  request<TData = unknown>(req: ApiRequest): Observable<ApiEnvelope<TData>> {
    const method = req.method ?? 'GET';
    const url = this.buildUrl(req.path ?? '');

    let params = new HttpParams();
    for (const [k, v] of Object.entries(req.query ?? {})) {
      if (v === undefined || v === null) continue;
      params = params.set(k, String(v));
    }

    return this.http.request<ApiEnvelope<TData>>(method, url, {
      body: req.body,
      params
    });
  }

  private buildUrl(path: string): string {
    const base = this.baseUrl.replace(/\/+$/, '');
    const p = path.replace(/^\/+/, '');
    if (!p) return base;
    return `${base}/${p}`;
  }
}


