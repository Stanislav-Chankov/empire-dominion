import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ApiEffects } from './api.effects';
import { ApiAuthInterceptor } from './api-auth.interceptor';

/**
 * Import `ApiIntegrationModule.forRoot()` ONCE (root).
 * Import `ApiIntegrationModule` in feature NgModules that want to "declare" they use API integrations.
 */
@NgModule({})
export class ApiIntegrationModule {
  static forRoot(): ModuleWithProviders<ApiIntegrationRootModule> {
    return {
      ngModule: ApiIntegrationRootModule
    };
  }
}

@NgModule({
  imports: [EffectsModule.forRoot([ApiEffects])],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiAuthInterceptor,
      multi: true
    }
  ]
})
export class ApiIntegrationRootModule {}


