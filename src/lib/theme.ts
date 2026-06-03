export type AccentTheme = 'teal' | 'amber' | 'rose' | 'indigo';

const THEME_LIGHT_PRIMARY: Record<AccentTheme, string> = {
  teal: 'oklch(0.55 0.15 180)',
  amber: 'oklch(0.58 0.16 70)',
  rose: 'oklch(0.58 0.18 22)',
  indigo: 'oklch(0.48 0.20 277)'
};

const THEME_LIGHT_PRIMARY_FG: Record<AccentTheme, string> = {
  teal: 'oklch(0.985 0 0)',
  amber: 'oklch(0.985 0 0)',
  rose: 'oklch(0.985 0 0)',
  indigo: 'oklch(0.985 0 0)'
};

const THEME_DARK_PRIMARY: Record<AccentTheme, string> = {
  teal: 'oklch(0.72 0.14 180)',
  amber: 'oklch(0.769 0.188 70.08)',
  rose: 'oklch(0.704 0.191 22.216)',
  indigo: 'oklch(0.585 0.233 277.117)'
};

const THEME_DARK_PRIMARY_FG: Record<AccentTheme, string> = {
  teal: 'oklch(0.13 0.02 180)',
  amber: 'oklch(0.2 0.05 70)',
  rose: 'oklch(0.2 0.05 22)',
  indigo: 'oklch(0.15 0.05 277)'
};

export function applyAccentTheme(theme: AccentTheme, isDark: boolean = true) {
  const root = document.documentElement;
  const primary = isDark ? THEME_DARK_PRIMARY[theme] : THEME_LIGHT_PRIMARY[theme];
  const primaryFg = isDark ? THEME_DARK_PRIMARY_FG[theme] : THEME_LIGHT_PRIMARY_FG[theme];

  root.style.setProperty('--primary', primary);
  root.style.setProperty('--primary-foreground', primaryFg);
  root.style.setProperty('--ring', primary);
  root.style.setProperty('--sidebar-primary', primary);
  root.style.setProperty('--sidebar-primary-foreground', primaryFg);
  root.style.setProperty('--sidebar-ring', primary);
}

