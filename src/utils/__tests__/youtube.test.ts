import { describe, it, expect } from 'vitest';
import {
  toYouTubeEmbedUrl,
  getYouTubeThumbnailUrl,
  toYouTubeWatchUrl,
  hasRecipeVideo
} from '../youtube';

const VIDEO_ID = 'dQw4w9WgXcQ';
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const SHORT_URL = `https://youtu.be/${VIDEO_ID}`;
const SHORTS_URL = `https://www.youtube.com/shorts/${VIDEO_ID}`;

// ─── toYouTubeEmbedUrl ────────────────────────────────────────────────────────

describe('toYouTubeEmbedUrl', () => {
  it('converts a standard watch URL to embed format', () => {
    expect(toYouTubeEmbedUrl(WATCH_URL)).toBe(EMBED_URL);
  });

  it('converts a youtu.be short URL', () => {
    expect(toYouTubeEmbedUrl(SHORT_URL)).toBe(EMBED_URL);
  });

  it('converts a YouTube Shorts URL', () => {
    expect(toYouTubeEmbedUrl(SHORTS_URL)).toBe(EMBED_URL);
  });

  it('returns already-formatted embed URL unchanged', () => {
    expect(toYouTubeEmbedUrl(EMBED_URL)).toBe(EMBED_URL);
  });

  it('adds https:// to a protocol-less embed URL', () => {
    const withoutProtocol = `www.youtube.com/embed/${VIDEO_ID}`;
    expect(toYouTubeEmbedUrl(withoutProtocol)).toBe(EMBED_URL);
  });

  it('returns the original string when URL is unrecognized', () => {
    const unknown = 'https://example.com/video';
    expect(toYouTubeEmbedUrl(unknown)).toBe(unknown);
  });

  it('handles empty string gracefully', () => {
    expect(toYouTubeEmbedUrl('')).toBe('');
  });

  it('handles watch URL with extra query params', () => {
    const withExtra = `https://www.youtube.com/watch?v=${VIDEO_ID}&t=30`;
    expect(toYouTubeEmbedUrl(withExtra)).toBe(EMBED_URL);
  });

  it('trims whitespace from input', () => {
    expect(toYouTubeEmbedUrl(`  ${WATCH_URL}  `)).toBe(EMBED_URL);
  });
});

// ─── getYouTubeThumbnailUrl ───────────────────────────────────────────────────

describe('getYouTubeThumbnailUrl', () => {
  it('returns hqdefault thumbnail URL from a watch URL', () => {
    const result = getYouTubeThumbnailUrl(WATCH_URL);
    expect(result).toBe(`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`);
  });

  it('returns thumbnail from an embed URL', () => {
    const result = getYouTubeThumbnailUrl(EMBED_URL);
    expect(result).toBe(`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`);
  });

  it('returns null for undefined input', () => {
    expect(getYouTubeThumbnailUrl(undefined)).toBeNull();
  });

  it('returns null for empty string', () => {
    expect(getYouTubeThumbnailUrl('')).toBeNull();
  });

  it('returns null for non-YouTube URL', () => {
    expect(getYouTubeThumbnailUrl('https://vimeo.com/123456')).toBeNull();
  });
});

// ─── toYouTubeWatchUrl ────────────────────────────────────────────────────────

describe('toYouTubeWatchUrl', () => {
  it('converts embed URL to watch URL', () => {
    expect(toYouTubeWatchUrl(EMBED_URL)).toBe(WATCH_URL);
  });

  it('keeps watch URL unchanged', () => {
    expect(toYouTubeWatchUrl(WATCH_URL)).toBe(WATCH_URL);
  });

  it('converts youtu.be URL to watch format', () => {
    expect(toYouTubeWatchUrl(SHORT_URL)).toBe(WATCH_URL);
  });

  it('returns empty string for undefined', () => {
    expect(toYouTubeWatchUrl(undefined)).toBe('');
  });
});

// ─── hasRecipeVideo ───────────────────────────────────────────────────────────

describe('hasRecipeVideo', () => {
  it('returns true for a valid YouTube watch URL', () => {
    expect(hasRecipeVideo(WATCH_URL)).toBe(true);
  });

  it('returns true for a youtu.be URL', () => {
    expect(hasRecipeVideo(SHORT_URL)).toBe(true);
  });

  it('returns true for an embed URL', () => {
    expect(hasRecipeVideo(EMBED_URL)).toBe(true);
  });

  it('returns false for undefined', () => {
    expect(hasRecipeVideo(undefined)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(hasRecipeVideo('')).toBe(false);
  });

  it('returns false for a non-YouTube URL', () => {
    expect(hasRecipeVideo('https://vimeo.com/12345678901')).toBe(false);
  });
});
