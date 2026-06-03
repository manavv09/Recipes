import { describe, it, expect, beforeEach, vi } from 'vitest';
import { applyAccentTheme } from '../theme';

// ─── applyAccentTheme ─────────────────────────────────────────────────────────

describe('applyAccentTheme', () => {
  let setPropertyMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    setPropertyMock = vi.fn();
    // jsdom does not implement setProperty on CSSStyleDeclaration, so we replace it directly
    Object.defineProperty(document.documentElement.style, 'setProperty', {
      value: setPropertyMock,
      writable: true,
      configurable: true
    });
  });

  it('sets --primary for teal theme', () => {
    applyAccentTheme('teal');
    expect(setPropertyMock).toHaveBeenCalledWith('--primary', 'oklch(0.72 0.14 180)');
  });

  it('sets --primary for amber theme', () => {
    applyAccentTheme('amber');
    expect(setPropertyMock).toHaveBeenCalledWith('--primary', 'oklch(0.769 0.188 70.08)');
  });

  it('sets --primary for rose theme', () => {
    applyAccentTheme('rose');
    expect(setPropertyMock).toHaveBeenCalledWith('--primary', 'oklch(0.704 0.191 22.216)');
  });

  it('sets --primary for indigo theme', () => {
    applyAccentTheme('indigo');
    expect(setPropertyMock).toHaveBeenCalledWith('--primary', 'oklch(0.585 0.233 277.117)');
  });

  it('sets --primary-foreground on each call', () => {
    applyAccentTheme('teal');
    expect(setPropertyMock).toHaveBeenCalledWith('--primary-foreground', 'oklch(0.13 0.02 180)');
  });

  it('sets --ring to the same value as --primary', () => {
    applyAccentTheme('rose');
    const primaryCall = setPropertyMock.mock.calls.find(([prop]) => prop === '--primary');
    const ringCall = setPropertyMock.mock.calls.find(([prop]) => prop === '--ring');
    expect(primaryCall?.[1]).toBe(ringCall?.[1]);
  });

  it('sets --sidebar-primary on each call', () => {
    applyAccentTheme('indigo');
    expect(setPropertyMock).toHaveBeenCalledWith('--sidebar-primary', expect.any(String));
  });

  it('calls setProperty exactly 6 times per theme application', () => {
    applyAccentTheme('teal');
    expect(setPropertyMock).toHaveBeenCalledTimes(6);
  });
});
