export interface ThemeColors {
  /** App background (usually pure black for this HUD aesthetic). */
  bg: string; // hex: #rrggbb
  /** Primary surface/background for panels and overlays (base color). */
  surface: string; // hex: #rrggbb
  /** Primary foreground/text. */
  text: string; // hex: #rrggbb
  /** Secondary/muted text. */
  textMuted: string; // any CSS color; commonly rgba(...)
  /** Base border "ink" color (commonly white). */
  border: string; // hex: #rrggbb
  /** Accent color (HUD green by default). */
  accent: string; // hex: #rrggbb
  /** Error/danger color. */
  danger: string; // hex: #rrggbb
}

export interface ThemeLayout {
  radiusSm: string; // e.g. '10px'
  radiusMd: string; // e.g. '14px'
  radiusLg: string; // e.g. '16px'
  panelBorderWidth: string; // e.g. '1px'
  fontUi: string; // CSS font-family
}

export interface ThemeConfig {
  colors: ThemeColors;
  layout: ThemeLayout;
}


