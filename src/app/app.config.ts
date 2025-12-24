import { ApplicationConfig, importProvidersFrom, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { apiReducer } from './api/api.reducer';
import { ApiIntegrationModule } from './api/api-integration.module';
import { uiReducer } from './state/ui.reducer';
import { ThemeModule } from './theme/theme.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(ApiIntegrationModule.forRoot()),
    importProvidersFrom(
      ThemeModule.forRoot({
        // Override theme tokens here if desired. DEFAULT_THEME lives in `src/app/theme/default-theme.ts`.
        // colors: { accent: '#ff00ff' }
      })
    ),
    provideStore({ ui: uiReducer, api: apiReducer }),
    provideStoreDevtools({
      maxAge: 50,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false
    })
  ]
};
