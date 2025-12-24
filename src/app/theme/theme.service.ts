import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

import { ThemeConfig } from './theme-config';
import { ED_THEME_CONFIG } from './theme.tokens';
import { hexToRgbTriplet } from './theme.utils';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly initialConfig = inject(ED_THEME_CONFIG);

  applyTheme(config: ThemeConfig = this.initialConfig): void {
    const root = this.doc.documentElement;

    // Colors
    this.setVar(root, '--ed-bg', config.colors.bg);
    this.setVar(root, '--ed-bg-rgb', hexToRgbTriplet(config.colors.bg));

    this.setVar(root, '--ed-surface', config.colors.surface);
    this.setVar(root, '--ed-surface-rgb', hexToRgbTriplet(config.colors.surface));

    this.setVar(root, '--ed-text', config.colors.text);
    this.setVar(root, '--ed-text-rgb', hexToRgbTriplet(config.colors.text));

    this.setVar(root, '--ed-text-muted', config.colors.textMuted);

    this.setVar(root, '--ed-border-rgb', hexToRgbTriplet(config.colors.border));

    this.setVar(root, '--ed-accent', config.colors.accent);
    this.setVar(root, '--ed-accent-rgb', hexToRgbTriplet(config.colors.accent));

    this.setVar(root, '--ed-danger', config.colors.danger);
    this.setVar(root, '--ed-danger-rgb', hexToRgbTriplet(config.colors.danger));

    // Layout / sizing / typography
    this.setVar(root, '--ed-radius-sm', config.layout.radiusSm);
    this.setVar(root, '--ed-radius-md', config.layout.radiusMd);
    this.setVar(root, '--ed-radius-lg', config.layout.radiusLg);
    this.setVar(root, '--ed-panel-border-width', config.layout.panelBorderWidth);
    this.setVar(root, '--ed-font-ui', config.layout.fontUi);
  }

  private setVar(root: HTMLElement, name: string, value: string): void {
    root.style.setProperty(name, value);
  }
}


