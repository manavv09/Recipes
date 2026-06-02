import { INDIAN_STATE_CUISINES, normalizeIndianSubcategory } from './indianStates';

/**
 * Hierarchical recipe category tree for browsing & filtering.
 */
export interface CategoryNode {
  id: string;
  label: string;
  emoji: string;
  subcategories: string[];
}

export const RECIPE_CATEGORIES: CategoryNode[] = [
  {
    id: 'indian',
    label: 'Indian Cuisine',
    emoji: '🇮🇳',
    subcategories: [...INDIAN_STATE_CUISINES]
  },
  {
    id: 'italian',
    label: 'Italian',
    emoji: '🇮🇹',
    subcategories: ['Pasta', 'Pizza & Bread', 'Risotto', 'Seafood']
  },
  {
    id: 'french',
    label: 'French Cuisine',
    emoji: '🇫🇷',
    subcategories: ['Classic', 'Bistro', 'Pastry', 'Provence']
  },
  {
    id: 'gym',
    label: 'Gym Diet',
    emoji: '💪',
    subcategories: ['High Protein', 'Cutting', 'Bulking', 'Meal Prep']
  },
  {
    id: 'thai',
    label: 'Thai',
    emoji: '🇹🇭',
    subcategories: ['Stir-Fry', 'Curry', 'Street Food']
  },
  {
    id: 'mexican',
    label: 'Mexican',
    emoji: '🇲🇽',
    subcategories: ['Tacos', 'Bowls', 'Salsas']
  },
  {
    id: 'mediterranean',
    label: 'Mediterranean',
    emoji: '🫒',
    subcategories: ['Greek', 'Levantine', 'Grilled']
  },
  {
    id: 'asian-fusion',
    label: 'Asian Fusion',
    emoji: '🍜',
    subcategories: ['Japanese', 'Korean', 'Breakfast']
  }
];

export const ALL_CATEGORY_LABELS = RECIPE_CATEGORIES.map((c) => c.label);

export function findCategoryByLabel(label: string): CategoryNode | undefined {
  return RECIPE_CATEGORIES.find((c) => c.label === label);
}

export function getRecipeCategoryLabel(recipe: {
  category?: string;
  subcategory?: string;
  cuisine?: string;
}): string {
  if (recipe.subcategory) return recipe.subcategory;
  if (recipe.category) return recipe.category;
  return recipe.cuisine || 'Other';
}

export function getRecipeCategoryBreadcrumb(recipe: {
  category?: string;
  subcategory?: string;
  cuisine?: string;
}): string {
  if (recipe.subcategory && recipe.category) {
    return `${recipe.subcategory} · ${recipe.category}`;
  }
  return recipe.category || recipe.cuisine || 'Other';
}

/** Map legacy `cuisine` strings from saved custom recipes to the new category model. */
export function migrateRecipeCategory(recipe: {
  category?: string;
  subcategory?: string;
  cuisine?: string;
  tags?: string[];
}): { category: string; subcategory?: string } {
  if (recipe.category) {
    const subcategory =
      recipe.category === 'Indian Cuisine'
        ? normalizeIndianSubcategory(recipe.subcategory)
        : recipe.subcategory;
    return { category: recipe.category, subcategory };
  }

  const cuisine = (recipe.cuisine || '').toLowerCase();
  const tags = recipe.tags || [];

  if (tags.includes('Gym Diet') || cuisine.includes('gym')) {
    return { category: 'Gym Diet', subcategory: tags.includes('High-Protein') ? 'High Protein' : 'Meal Prep' };
  }
  if (cuisine.includes('italian')) return { category: 'Italian' };
  if (cuisine.includes('french')) return { category: 'French Cuisine' };
  if (cuisine.includes('indian') || cuisine.includes('punjabi') || cuisine.includes('tamil')) {
    const sub = normalizeIndianSubcategory(
      cuisine.includes('tamil') ? 'Tamil Nadu' : cuisine.includes('bengali') ? 'West Bengal' : 'Punjab'
    );
    return { category: 'Indian Cuisine', subcategory: sub };
  }
  if (cuisine.includes('thai')) return { category: 'Thai', subcategory: 'Stir-Fry' };
  if (cuisine.includes('mexican')) return { category: 'Mexican', subcategory: 'Tacos' };
  if (cuisine.includes('greek')) return { category: 'Mediterranean', subcategory: 'Greek' };
  if (cuisine.includes('japanese')) return { category: 'Asian Fusion', subcategory: 'Japanese' };

  return { category: recipe.cuisine || 'Other' };
}
