/**
 * Normalize YouTube watch / short / youtu.be links into embed URLs for iframes.
 */
export function toYouTubeEmbedUrl(url: string): string {
  if (!url?.trim()) return '';

  const trimmed = url.trim();

  // If it's already an embed URL, make sure it has the protocol and return it
  if (trimmed.includes('youtube.com/embed/') || trimmed.includes('youtube-nocookie.com/embed/')) {
    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed;
    }
    return `https://${trimmed.replace(/^\/+/, '')}`;
  }

  // Extract video ID (11 characters) from various YouTube URL formats:
  // - youtube.com/watch?v=ID
  // - youtu.be/ID
  // - youtube.com/shorts/ID
  // - youtube.com/v/ID
  const regex = /(?:youtube\.com\/(?:watch\?v=|shorts\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i;
  const match = trimmed.match(regex);

  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }

  // Fallback: If it contains watch?v= but regex missed it (e.g. malformed or protocol-less)
  if (trimmed.includes('watch?v=')) {
    const parts = trimmed.split('watch?v=');
    const videoId = parts[1]?.split(/[?&#]/)[0];
    if (videoId && videoId.length === 11) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  return trimmed;
}

export function getYouTubeThumbnailUrl(videoUrl?: string): string | null {
  if (!videoUrl?.trim()) return null;

  const trimmed = videoUrl.trim();
  const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i;
  const match = trimmed.match(regex);

  if (match && match[1]) {
    return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }

  return null;
}

export function toYouTubeWatchUrl(url?: string): string {
  if (!url?.trim()) return '';

  const trimmed = url.trim();
  const regex = /(?:youtube\.com\/(?:watch\?v=|shorts\/|v\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i;
  const match = trimmed.match(regex);

  if (match && match[1]) {
    return `https://www.youtube.com/watch?v=${match[1]}`;
  }

  return trimmed;
}

export function hasRecipeVideo(videoUrl?: string): boolean {
  if (!videoUrl?.trim()) return false;
  const regex = /(?:youtube\.com\/(?:watch\?v=|shorts\/|v\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i;
  return regex.test(videoUrl.trim());
}
