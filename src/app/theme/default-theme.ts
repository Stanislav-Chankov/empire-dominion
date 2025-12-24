import { ThemeConfig } from './theme-config';

/** Single source of truth for the default game theme.
    Update these values to change the whole app theme. */
export const DEFAULT_THEME: ThemeConfig = {
  colors: {
    bg: '#000000',
    surface: '#000000',
    text: '#e7ecff',
    textMuted: 'rgba(231, 236, 255, 0.65)',
    border: '#ffffff',
    accent: '#00ff00',
    danger: '#ff5050'
  },
  layout: {
    radiusSm: '10px',
    radiusMd: '14px',
    radiusLg: '16px',
    panelBorderWidth: '1px',
    fontUi: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'
  }
};


