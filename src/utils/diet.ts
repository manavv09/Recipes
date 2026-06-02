import type { Recipe } from '@/types';

export type DietPreference = 'all' | 'veg' | 'non-veg' | 'vegan';

const NON_VEG_DEPARTMENTS = new Set(['Meat', 'Seafood']);

const NON_VEG_NAME_PATTERN =
  /\b(chicken|mutton|lamb|beef|pork|bacon|ham|sausage|fish|salmon|tuna|prawn|prawns|shrimp|crab|lobster|turkey|duck|anchovy|meat|squid|octopus)\b/i;

const EGG_PATTERN = /\begg\b/i;

export function isVegetarianRecipe(recipe: Recipe): boolean {
  const tags = recipe.tags.map((t) => t.toLowerCase());

  if (tags.includes('vegetarian') || tags.includes('vegan')) {
    return true;
  }
  if (
    tags.includes('non-veg') ||
    tags.includes('non-vegetarian') ||
    tags.includes('meat') ||
    tags.includes('seafood')
  ) {
    return false;
  }

  for (const ing of recipe.ingredients) {
    if (NON_VEG_DEPARTMENTS.has(ing.department)) {
      return false;
    }
    if (NON_VEG_NAME_PATTERN.test(ing.name)) {
      return false;
    }
    if (EGG_PATTERN.test(ing.name) && !/eggplant/i.test(ing.name)) {
      return false;
    }
  }

  return true;
}

export function isVeganRecipe(recipe: Recipe): boolean {
  const tags = recipe.tags.map((t) => t.toLowerCase());

  if (tags.includes('vegan')) {
    return true;
  }
  if (!isVegetarianRecipe(recipe)) {
    return false;
  }

  const DAIRY_AND_NON_VEGAN_PATTERN =
    /\b(milk|butter|cheese|paneer|yogurt|curd|curds|ghee|cream|honey|mayo|mayonnaise|whey|condensed milk|milk powder)\b/i;

  const VEGAN_SAFE_QUALIFIERS = /\b(coconut|almond|soy|oat|plant|vegan|cashew|dairy-free)\b/i;

  for (const ing of recipe.ingredients) {
    const name = ing.name.toLowerCase();
    if (DAIRY_AND_NON_VEGAN_PATTERN.test(name)) {
      if (VEGAN_SAFE_QUALIFIERS.test(name)) {
        continue;
      }
      return false;
    }
  }

  return true;
}

export function filterRecipesByDiet(recipes: Recipe[], preference: DietPreference): Recipe[] {
  if (preference === 'all') {
    return recipes;
  }
  if (preference === 'veg') {
    return recipes.filter(isVegetarianRecipe);
  }
  if (preference === 'vegan') {
    return recipes.filter(isVeganRecipe);
  }
  return recipes.filter((r) => !isVegetarianRecipe(r));
}

export function getDietLabel(recipe: Recipe): 'Vegan' | 'Veg' | 'Non-Veg' {
  if (isVeganRecipe(recipe)) {
    return 'Vegan';
  }
  return isVegetarianRecipe(recipe) ? 'Veg' : 'Non-Veg';
}
