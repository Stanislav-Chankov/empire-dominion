import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { DEFAULT_THEME } from './default-theme';
import { ThemeConfig } from './theme-config';
import { ThemeService } from './theme.service';
import { ED_THEME_CONFIG } from './theme.tokens';

function mergeThemeConfig(base: ThemeConfig, override?: Partial<ThemeConfig>): ThemeConfig {
  if (!override) return base;
  return {
    colors: { ...base.colors, ...(override.colors ?? {}) },
    layout: { ...base.layout, ...(override.layout ?? {}) }
  };
}

function initThemeFactory(theme: ThemeService): () => void {
  return () => theme.applyTheme();
}

@NgModule({})
export class ThemeModule {
  static forRoot(config?: Partial<ThemeConfig>): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        { provide: ED_THEME_CONFIG, useValue: mergeThemeConfig(DEFAULT_THEME, config) },
        { provide: APP_INITIALIZER, useFactory: initThemeFactory, deps: [ThemeService], multi: true }
      ]
    };
  }
}


