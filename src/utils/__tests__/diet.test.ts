import { describe, it, expect } from 'vitest';
import {
  isVegetarianRecipe,
  isVeganRecipe,
  filterRecipesByDiet,
  getDietLabel
} from '../diet';
import type { Recipe } from '@/types';

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const makeRecipe = (overrides: Partial<Recipe> & { id: string }): Recipe => ({
  title: 'Test Recipe',
  description: '',
  image: '',
  prepTime: 10,
  cookTime: 10,
  servings: 2,
  category: 'Test',
  tags: [],
  ingredients: [],
  instructions: [],
  difficulty: 'Easy',
  calories: 300,
  ...overrides
});

const veganRecipe = makeRecipe({
  id: 'vegan-1',
  tags: ['Vegan'],
  ingredients: [
    { name: 'Tofu', amount: 200, unit: 'g', department: 'Produce' },
    { name: 'Soy Sauce', amount: 1, unit: 'tbsp', department: 'Pantry' }
  ]
});

const vegRecipe = makeRecipe({
  id: 'veg-1',
  tags: ['Vegetarian'],
  ingredients: [
    { name: 'Cheese', amount: 50, unit: 'g', department: 'Dairy' },
    { name: 'Egg', amount: 2, unit: 'pcs', department: 'Dairy' }
  ]
});

const nonVegRecipe = makeRecipe({
  id: 'nonveg-1',
  tags: [],
  ingredients: [
    { name: 'Chicken Breast', amount: 200, unit: 'g', department: 'Meat' },
    { name: 'Olive Oil', amount: 1, unit: 'tbsp', department: 'Pantry' }
  ]
});

const seafoodRecipe = makeRecipe({
  id: 'seafood-1',
  tags: [],
  ingredients: [
    { name: 'Salmon Fillet', amount: 2, unit: 'pcs', department: 'Seafood' }
  ]
});

// ─── isVegetarianRecipe ───────────────────────────────────────────────────────

describe('isVegetarianRecipe', () => {
  it('returns true when "Vegetarian" tag is present', () => {
    expect(isVegetarianRecipe(vegRecipe)).toBe(true);
  });

  it('returns true when "Vegan" tag is present', () => {
    expect(isVegetarianRecipe(veganRecipe)).toBe(true);
  });

  it('returns false when "non-veg" tag is present', () => {
    const r = makeRecipe({ id: 'x', tags: ['non-veg'], ingredients: [] });
    expect(isVegetarianRecipe(r)).toBe(false);
  });

  it('returns false when ingredient is from Meat department', () => {
    expect(isVegetarianRecipe(nonVegRecipe)).toBe(false);
  });

  it('returns false when ingredient is from Seafood department', () => {
    expect(isVegetarianRecipe(seafoodRecipe)).toBe(false);
  });

  it('returns false when ingredient name matches non-veg pattern (chicken)', () => {
    const r = makeRecipe({
      id: 'x',
      ingredients: [{ name: 'Chicken Stock', amount: 1, unit: 'cup', department: 'Pantry' }]
    });
    expect(isVegetarianRecipe(r)).toBe(false);
  });

  it('returns false when ingredient is egg (but not eggplant)', () => {
    const withEgg = makeRecipe({
      id: 'egg-1',
      ingredients: [{ name: 'Egg', amount: 2, unit: 'pcs', department: 'Dairy' }]
    });
    expect(isVegetarianRecipe(withEgg)).toBe(false);
  });

  it('does NOT treat eggplant as an egg (eggplant edge case)', () => {
    const withEggplant = makeRecipe({
      id: 'eggplant-1',
      ingredients: [{ name: 'Eggplant', amount: 1, unit: 'pcs', department: 'Produce' }]
    });
    expect(isVegetarianRecipe(withEggplant)).toBe(true);
  });

  it('returns true for a recipe with only pantry/produce ingredients and no tags', () => {
    const r = makeRecipe({
      id: 'pure-veg',
      ingredients: [
        { name: 'Garlic', amount: 3, unit: 'pcs', department: 'Produce' },
        { name: 'Olive Oil', amount: 1, unit: 'tbsp', department: 'Pantry' }
      ]
    });
    expect(isVegetarianRecipe(r)).toBe(true);
  });
});

// ─── isVeganRecipe ────────────────────────────────────────────────────────────

describe('isVeganRecipe', () => {
  it('returns true when "Vegan" tag is present', () => {
    expect(isVeganRecipe(veganRecipe)).toBe(true);
  });

  it('returns false for a non-vegetarian recipe', () => {
    expect(isVeganRecipe(nonVegRecipe)).toBe(false);
  });

  it('returns false when dairy ingredients are present', () => {
    const r = makeRecipe({
      id: 'dairy-1',
      tags: ['Vegetarian'],
      ingredients: [{ name: 'Butter', amount: 2, unit: 'tbsp', department: 'Dairy' }]
    });
    expect(isVeganRecipe(r)).toBe(false);
  });

  it('returns false when ghee is present', () => {
    const r = makeRecipe({
      id: 'ghee-1',
      tags: ['Vegetarian'],
      ingredients: [{ name: 'Ghee', amount: 1, unit: 'tbsp', department: 'Dairy' }]
    });
    expect(isVeganRecipe(r)).toBe(false);
  });

  it('returns true for coconut milk (vegan-safe qualifier)', () => {
    const r = makeRecipe({
      id: 'coconut-1',
      tags: [],
      ingredients: [{ name: 'Coconut Milk', amount: 1, unit: 'cups', department: 'Pantry' }]
    });
    expect(isVeganRecipe(r)).toBe(true);
  });

  it('returns true for almond milk', () => {
    const r = makeRecipe({
      id: 'almond-milk-1',
      ingredients: [{ name: 'Almond Milk', amount: 1, unit: 'cups', department: 'Dairy' }]
    });
    expect(isVeganRecipe(r)).toBe(true);
  });

  it('returns false when paneer is present', () => {
    const r = makeRecipe({
      id: 'paneer-1',
      tags: ['Vegetarian'],
      ingredients: [{ name: 'Paneer', amount: 100, unit: 'g', department: 'Dairy' }]
    });
    expect(isVeganRecipe(r)).toBe(false);
  });
});

// ─── filterRecipesByDiet ──────────────────────────────────────────────────────

describe('filterRecipesByDiet', () => {
  const recipes = [veganRecipe, vegRecipe, nonVegRecipe, seafoodRecipe];

  it('returns all recipes when preference is "all"', () => {
    expect(filterRecipesByDiet(recipes, 'all')).toHaveLength(4);
  });

  it('returns only vegetarian recipes when preference is "veg"', () => {
    const result = filterRecipesByDiet(recipes, 'veg');
    expect(result.every(isVegetarianRecipe)).toBe(true);
    expect(result).toContainEqual(vegRecipe);
    expect(result).toContainEqual(veganRecipe);
    expect(result).not.toContainEqual(nonVegRecipe);
  });

  it('returns only vegan recipes when preference is "vegan"', () => {
    const result = filterRecipesByDiet(recipes, 'vegan');
    expect(result.every(isVeganRecipe)).toBe(true);
    expect(result).toContainEqual(veganRecipe);
    expect(result).not.toContainEqual(vegRecipe);
  });

  it('returns only non-vegetarian recipes when preference is "non-veg"', () => {
    const result = filterRecipesByDiet(recipes, 'non-veg');
    expect(result.every((r) => !isVegetarianRecipe(r))).toBe(true);
    expect(result).toContainEqual(nonVegRecipe);
    expect(result).toContainEqual(seafoodRecipe);
  });
});

// ─── getDietLabel ─────────────────────────────────────────────────────────────

describe('getDietLabel', () => {
  it('returns "Vegan" for vegan recipe', () => {
    expect(getDietLabel(veganRecipe)).toBe('Vegan');
  });

  it('returns "Veg" for vegetarian (non-vegan) recipe', () => {
    expect(getDietLabel(vegRecipe)).toBe('Veg');
  });

  it('returns "Non-Veg" for meat recipe', () => {
    expect(getDietLabel(nonVegRecipe)).toBe('Non-Veg');
  });
});
