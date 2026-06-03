import { describe, it, expect } from 'vitest';
import { scaleAmount, formatQuantity, compileShoppingList } from '../helpers';
import type { WeeklyMealPlan } from '@/types';

// ─── scaleAmount ─────────────────────────────────────────────────────────────

describe('scaleAmount', () => {
  it('returns 0 when amount is 0', () => {
    expect(scaleAmount(0, 4, 2)).toBe(0);
  });

  it('scales up correctly', () => {
    expect(scaleAmount(2, 2, 4)).toBe(4);
  });

  it('scales down correctly', () => {
    expect(scaleAmount(3, 3, 1)).toBe(1);
  });

  it('handles fractional result and rounds to 2 decimal places', () => {
    expect(scaleAmount(1, 3, 2)).toBe(0.67);
  });

  it('handles same servings (no change)', () => {
    expect(scaleAmount(5, 4, 4)).toBe(5);
  });

  it('handles large amount × large servings without floating point blowup', () => {
    const result = scaleAmount(100, 3, 6);
    expect(result).toBe(200);
  });
});

// ─── formatQuantity ───────────────────────────────────────────────────────────

describe('formatQuantity', () => {
  it('returns empty string for 0', () => {
    expect(formatQuantity(0)).toBe('');
  });

  it('formats 0.25 as 1/4', () => {
    expect(formatQuantity(0.25)).toBe('1/4');
  });

  it('formats 0.33 as 1/3', () => {
    expect(formatQuantity(0.33)).toBe('1/3');
  });

  it('formats 0.5 as 1/2', () => {
    expect(formatQuantity(0.5)).toBe('1/2');
  });

  it('formats 0.67 as 2/3', () => {
    expect(formatQuantity(0.67)).toBe('2/3');
  });

  it('formats 0.75 as 3/4', () => {
    expect(formatQuantity(0.75)).toBe('3/4');
  });

  it('formats a whole number correctly', () => {
    expect(formatQuantity(3)).toBe('3');
  });

  it('formats a mixed number (e.g. 1.5 → "1 1/2")', () => {
    expect(formatQuantity(1.5)).toBe('1 1/2');
  });

  it('formats 2.25 as "2 1/4"', () => {
    expect(formatQuantity(2.25)).toBe('2 1/4');
  });

  it('formats an uncommon decimal with one decimal place', () => {
    // 0.6 is not a common fraction — should display as ".6"
    const result = formatQuantity(0.6);
    expect(result).toMatch(/0?\.6/);
  });
});

// ─── compileShoppingList ──────────────────────────────────────────────────────

const makeRecipe = (id: string, ingredients: { name: string; amount: number; unit: string; department: string }[]) => ({
  id,
  title: `Recipe ${id}`,
  description: '',
  image: '',
  prepTime: 10,
  cookTime: 10,
  servings: 2,
  category: 'Test',
  tags: [],
  ingredients,
  instructions: [],
  difficulty: 'Easy' as const,
  calories: 200
});

describe('compileShoppingList', () => {
  it('returns empty list for an empty meal plan', () => {
    const plan: WeeklyMealPlan = { Monday: {}, Tuesday: {} };
    expect(compileShoppingList(plan)).toEqual([]);
  });

  it('compiles a single meal into a shopping list', () => {
    const recipe = makeRecipe('r1', [
      { name: 'Olive Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ]);
    const plan: WeeklyMealPlan = {
      Monday: { breakfast: { recipe, servings: 2 } }
    };
    const list = compileShoppingList(plan);
    expect(list).toHaveLength(1);
    expect(list[0].name).toBe('Olive Oil');
    expect(list[0].amount).toBe(2); // same servings as recipe baseline
  });

  it('scales ingredient amounts by serving multiplier', () => {
    const recipe = makeRecipe('r2', [
      { name: 'Eggs', amount: 4, unit: 'pcs', department: 'Dairy' }
    ]);
    // Recipe baseline = 2 servings, planned = 4 servings → 4 eggs × 2 = 8
    const plan: WeeklyMealPlan = {
      Wednesday: { lunch: { recipe, servings: 4 } }
    };
    const list = compileShoppingList(plan);
    expect(list[0].amount).toBe(8);
  });

  it('deduplicates the same ingredient from multiple meals (same name+unit)', () => {
    const r1 = makeRecipe('r1', [{ name: 'Garlic', amount: 2, unit: 'pcs', department: 'Produce' }]);
    const r2 = makeRecipe('r2', [{ name: 'garlic', amount: 3, unit: 'pcs', department: 'Produce' }]);
    const plan: WeeklyMealPlan = {
      Monday: { breakfast: { recipe: r1, servings: 2 }, lunch: { recipe: r2, servings: 2 } }
    };
    const list = compileShoppingList(plan);
    // Should be merged — garlic appears once with total 5
    const garlic = list.find((item) => item.name.toLowerCase() === 'garlic');
    expect(garlic).toBeDefined();
    expect(garlic!.amount).toBe(5);
    expect(list.length).toBe(1);
  });

  it('does NOT merge ingredients with different units', () => {
    const recipe = makeRecipe('r1', [
      { name: 'Milk', amount: 1, unit: 'cups', department: 'Dairy' },
      { name: 'Milk', amount: 200, unit: 'ml', department: 'Dairy' }
    ]);
    const plan: WeeklyMealPlan = {
      Tuesday: { dinner: { recipe, servings: 2 } }
    };
    const list = compileShoppingList(plan);
    expect(list).toHaveLength(2);
  });

  it('sorts results by department then name', () => {
    const recipe = makeRecipe('r1', [
      { name: 'Zucchini', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Flour', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Apple', amount: 3, unit: 'pcs', department: 'Produce' }
    ]);
    const plan: WeeklyMealPlan = {
      Friday: { dinner: { recipe, servings: 2 } }
    };
    const list = compileShoppingList(plan);
    // Pantry < Produce alphabetically
    expect(list[0].department).toBe('Pantry');
    expect(list[1].name).toBe('Apple');
    expect(list[2].name).toBe('Zucchini');
  });

  it('handles multiple days with different meals', () => {
    const r1 = makeRecipe('r1', [{ name: 'Chicken', amount: 200, unit: 'g', department: 'Meat' }]);
    const r2 = makeRecipe('r2', [{ name: 'Broccoli', amount: 100, unit: 'g', department: 'Produce' }]);
    const plan: WeeklyMealPlan = {
      Monday: { breakfast: { recipe: r1, servings: 2 } },
      Tuesday: { lunch: { recipe: r2, servings: 2 } }
    };
    const list = compileShoppingList(plan);
    expect(list).toHaveLength(2);
  });
});
