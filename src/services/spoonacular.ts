/**
 * Spoonacular API Service
 *
 * Searches for and retrieves recipes from the Spoonacular API.
 * Reads VITE_SPOONACULAR_KEY from environment variables.
 * Falls back gracefully (returns empty results) when no key is configured.
 */

import type { Recipe, Ingredient } from '@/types';

const BASE_URL = 'https://api.spoonacular.com';

function getApiKey(): string | null {
  return import.meta.env.VITE_SPOONACULAR_KEY || null;
}

// ─── Types from Spoonacular API ──────────────────────────────────────────────

interface SpoonacularSearchResult {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

interface SpoonacularSearchResponse {
  results: SpoonacularSearchResult[];
  totalResults: number;
  number: number;
  offset: number;
}

interface SpoonacularNutrient {
  name: string;
  amount: number;
  unit: string;
}

interface SpoonacularIngredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  aisle: string;
}

interface SpoonacularStep {
  number: number;
  step: string;
}

interface SpoonacularInstruction {
  name: string;
  steps: SpoonacularStep[];
}

interface SpoonacularRecipeDetail {
  id: number;
  title: string;
  summary: string;
  image: string;
  readyInMinutes: number;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  servings: number;
  dishTypes: string[];
  diets: string[];
  cuisines: string[];
  nutrition?: {
    nutrients: SpoonacularNutrient[];
  };
  extendedIngredients: SpoonacularIngredient[];
  analyzedInstructions: SpoonacularInstruction[];
  sourceUrl: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
}

// ─── Public API ──────────────────────────────────────────────────────────────

export interface SpoonacularError {
  message: string;
  noApiKey?: boolean;
}

/** Map Spoonacular's aisle name to our grocery department names */
function mapAisleToDepartment(aisle: string): string {
  const lower = aisle.toLowerCase();
  if (lower.includes('produce') || lower.includes('vegetable') || lower.includes('fruit')) return 'Produce';
  if (lower.includes('meat') || lower.includes('poultry')) return 'Meat';
  if (lower.includes('seafood') || lower.includes('fish')) return 'Seafood';
  if (lower.includes('dairy') || lower.includes('cheese') || lower.includes('egg')) return 'Dairy';
  if (lower.includes('bread') || lower.includes('bakery')) return 'Bakery';
  if (lower.includes('frozen')) return 'Frozen';
  return 'Pantry';
}

/** Strip HTML tags from Spoonacular summary strings */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();
}

/** Map a Spoonacular detailed recipe response to our internal Recipe type */
export function mapSpoonacularToRecipe(data: SpoonacularRecipeDetail): Recipe {
  const nutrients = data.nutrition?.nutrients ?? [];
  const getNutrient = (name: string) =>
    Math.round(nutrients.find((n) => n.name.toLowerCase() === name.toLowerCase())?.amount ?? 0);

  const calories = getNutrient('Calories') || getNutrient('calories');
  const protein = getNutrient('Protein');
  const carbs = getNutrient('Carbohydrates');
  const fat = getNutrient('Fat');

  const ingredients: Ingredient[] = data.extendedIngredients.map((ing) => ({
    name: ing.name.charAt(0).toUpperCase() + ing.name.slice(1),
    amount: Math.round(ing.amount * 100) / 100,
    unit: ing.unit || 'pcs',
    department: mapAisleToDepartment(ing.aisle || '')
  }));

  const instructions: string[] = data.analyzedInstructions.flatMap((block) =>
    block.steps.map((s) => s.step)
  );

  const tags: string[] = [];
  if (data.vegetarian) tags.push('Vegetarian');
  if (data.vegan) tags.push('Vegan');
  if (data.glutenFree) tags.push('Gluten-Free');
  data.diets.forEach((d) => {
    const label = d.charAt(0).toUpperCase() + d.slice(1);
    if (!tags.includes(label)) tags.push(label);
  });
  tags.push('Imported');

  // Determine category from cuisine or dish type
  const cuisine = data.cuisines[0] ?? '';
  let category = 'Other';
  if (/italian/i.test(cuisine)) category = 'Italian';
  else if (/french/i.test(cuisine)) category = 'French Cuisine';
  else if (/indian/i.test(cuisine)) category = 'Indian Cuisine';
  else if (/thai/i.test(cuisine)) category = 'Thai';
  else if (/mexican/i.test(cuisine)) category = 'Mexican';
  else if (/mediterranean|greek/i.test(cuisine)) category = 'Mediterranean';
  else if (/japanese|korean|chinese|asian/i.test(cuisine)) category = 'Asian Fusion';

  const prepTime = data.preparationMinutes ?? Math.floor(data.readyInMinutes * 0.4);
  const cookTime = data.cookingMinutes ?? Math.ceil(data.readyInMinutes * 0.6);

  return {
    id: `spoonacular-${data.id}`,
    title: data.title,
    description: stripHtml(data.summary).slice(0, 200) + (data.summary.length > 200 ? '…' : ''),
    image: data.image,
    prepTime,
    cookTime,
    servings: data.servings,
    category,
    tags,
    ingredients,
    instructions: instructions.length > 0 ? instructions : ['See full recipe at source.'],
    difficulty: data.readyInMinutes <= 20 ? 'Easy' : data.readyInMinutes <= 45 ? 'Medium' : 'Hard',
    calories,
    macros: { protein, carbs, fat }
  };
}

/** Search Spoonacular for recipes matching a query. */
export async function searchSpoonacularRecipes(
  query: string,
  diet?: string
): Promise<{ results: SpoonacularSearchResult[]; error?: SpoonacularError }> {
  const key = getApiKey();
  if (!key) {
    return { results: [], error: { message: 'No Spoonacular API key configured.', noApiKey: true } };
  }

  const params = new URLSearchParams({
    apiKey: key,
    query,
    number: '12',
    addRecipeInformation: 'false',
    ...(diet ? { diet } : {})
  });

  try {
    const res = await fetch(`${BASE_URL}/recipes/complexSearch?${params}`);
    if (!res.ok) {
      const msg = res.status === 402
        ? 'Spoonacular daily quota exceeded. Try again tomorrow.'
        : `Spoonacular error ${res.status}`;
      return { results: [], error: { message: msg } };
    }
    const data: SpoonacularSearchResponse = await res.json();
    return { results: data.results };
  } catch (err) {
    return { results: [], error: { message: 'Network error contacting Spoonacular.' } };
  }
}

/** Fetch full recipe details and map to our Recipe type. */
export async function fetchSpoonacularRecipeDetail(
  id: number
): Promise<{ recipe?: Recipe; error?: SpoonacularError }> {
  const key = getApiKey();
  if (!key) {
    return { error: { message: 'No Spoonacular API key configured.', noApiKey: true } };
  }

  const params = new URLSearchParams({ apiKey: key, includeNutrition: 'true' });

  try {
    const res = await fetch(`${BASE_URL}/recipes/${id}/information?${params}`);
    if (!res.ok) {
      return { error: { message: `Spoonacular error ${res.status}` } };
    }
    const data: SpoonacularRecipeDetail = await res.json();
    return { recipe: mapSpoonacularToRecipe(data) };
  } catch (err) {
    return { error: { message: 'Network error contacting Spoonacular.' } };
  }
}
