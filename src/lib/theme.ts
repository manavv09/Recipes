export type AccentTheme = 'teal' | 'amber' | 'rose' | 'indigo';

const THEME_PRIMARY: Record<AccentTheme, string> = {
  teal: 'oklch(0.72 0.14 180)',
  amber: 'oklch(0.769 0.188 70.08)',
  rose: 'oklch(0.704 0.191 22.216)',
  indigo: 'oklch(0.585 0.233 277.117)'
};

const THEME_PRIMARY_FG: Record<AccentTheme, string> = {
  teal: 'oklch(0.13 0.02 180)',
  amber: 'oklch(0.2 0.05 70)',
  rose: 'oklch(0.2 0.05 22)',
  indigo: 'oklch(0.15 0.05 277)'
};

export function applyAccentTheme(theme: AccentTheme) {
  const root = document.documentElement;
  root.style.setProperty('--primary', THEME_PRIMARY[theme]);
  root.style.setProperty('--primary-foreground', THEME_PRIMARY_FG[theme]);
  root.style.setProperty('--ring', THEME_PRIMARY[theme]);
  root.style.setProperty('--sidebar-primary', THEME_PRIMARY[theme]);
  root.style.setProperty('--sidebar-primary-foreground', THEME_PRIMARY_FG[theme]);
  root.style.setProperty('--sidebar-ring', THEME_PRIMARY[theme]);
}
