/**
 * Reliable recipe image URLs and fallbacks when external hosts fail.
 */
import { getYouTubeThumbnailUrl } from './youtube';

const CATEGORY_FALLBACKS: Record<string, string> = {
  'Indian Cuisine':
    'https://images.unsplash.com/photo-1585937421612-70a008296fbe?auto=format&fit=crop&w=800&q=80',
  Italian:
    'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
  'French Cuisine':
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  'Gym Diet':
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  Thai: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
  Mexican:
    'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
  Mediterranean:
    'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
  'Asian Fusion':
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80'
};

const STATE_FALLBACKS: Record<string, string> = {
  Punjab:
    'https://images.unsplash.com/photo-1603894584379-ff147475b63d?auto=format&fit=crop&w=800&q=80',
  'Tamil Nadu':
    'https://images.unsplash.com/photo-1585937421612-70a008296fbe?auto=format&fit=crop&w=800&q=80',
  Rajasthan:
    'https://images.unsplash.com/photo-1596797038530-2c107229588b?auto=format&fit=crop&w=800&q=80',
  'West Bengal':
    'https://images.unsplash.com/photo-1626700051175-6818013e1f4a?auto=format&fit=crop&w=800&q=80',
  Kerala:
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
  Goa: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
};

const DEFAULT_FALLBACK =
  'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80';

/** Known broken or placeholder Unsplash IDs in old data */
const BROKEN_IMAGE_PATTERNS = [
  /photo-1604908176997/,
  /photo-1572441713132-51c1110a0a6a/,
  /4318c0c0c0c0/
];

export function isBrokenRecipeImageUrl(url?: string): boolean {
  if (!url?.trim()) return true;
  return BROKEN_IMAGE_PATTERNS.some((pattern) => pattern.test(url));
}

export function getRecipeImageUrl(recipe: {
  id: string;
  image?: string;
  category?: string;
  subcategory?: string;
  videoUrl?: string;
}): string {
  const image = recipe.image?.trim();
  if (image && !isBrokenRecipeImageUrl(image)) {
    return image;
  }

  // Fallback to YouTube video thumbnail if image is missing/broken
  if (recipe.videoUrl) {
    const ytThumb = getYouTubeThumbnailUrl(recipe.videoUrl);
    if (ytThumb) {
      return ytThumb;
    }
  }

  if (recipe.subcategory && STATE_FALLBACKS[recipe.subcategory]) {
    return STATE_FALLBACKS[recipe.subcategory];
  }

  if (recipe.category && CATEGORY_FALLBACKS[recipe.category]) {
    return CATEGORY_FALLBACKS[recipe.category];
  }

  return `${DEFAULT_FALLBACK.split('?')[0]}?auto=format&fit=crop&w=800&q=80&sig=${encodeURIComponent(recipe.id)}`;
}

export function getRecipeImageFallback(recipe: {
  id: string;
  category?: string;
  subcategory?: string;
  videoUrl?: string;
}): string {
  return getRecipeImageUrl({ ...recipe, image: undefined });
}
