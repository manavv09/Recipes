import type { WeeklyMealPlan, ShoppingItem, Ingredient } from '../types';

/**
 * 1. SCALE INGREDIENT AMOUNT
 * Computes the scaled amount of an ingredient based on target servings.
 * Rounds to two decimal places to avoid floating point issues (e.g. 0.333333333).
 */
export const scaleAmount = (amount: number, originalServings: number, targetServings: number): number => {
  if (!amount) return 0;
  const scaled = amount * (targetServings / originalServings);
  return Math.round(scaled * 100) / 100;
};

/**
 * 2. FORMAT QUANTITY
 * A premium touch: Formats decimals to standard kitchen fractions.
 * e.g., 0.5 -> "1/2", 1.25 -> "1 1/4", 3 -> "3"
 */
export const formatQuantity = (amount: number): string => {
  if (amount === 0) return '';
  
  const integerPart = Math.floor(amount);
  const decimalPart = amount - integerPart;
  
  // Close enough threshold for floating points (e.g., 0.33 or 0.333333)
  const epsilon = 0.02;
  
  let fractionStr = '';
  
  if (Math.abs(decimalPart - 0.25) < epsilon) fractionStr = '1/4';
  else if (Math.abs(decimalPart - 0.33) < epsilon || Math.abs(decimalPart - 0.34) < epsilon) fractionStr = '1/3';
  else if (Math.abs(decimalPart - 0.5) < epsilon) fractionStr = '1/2';
  else if (Math.abs(decimalPart - 0.67) < epsilon || Math.abs(decimalPart - 0.66) < epsilon) fractionStr = '2/3';
  else if (Math.abs(decimalPart - 0.75) < epsilon) fractionStr = '3/4';
  else if (decimalPart > epsilon) {
    // If it's not a common fraction, show up to 1 decimal place
    fractionStr = decimalPart.toFixed(1).replace(/^0/, '');
  }
  
  if (integerPart > 0) {
    return fractionStr ? `${integerPart} ${fractionStr}` : `${integerPart}`;
  }
  
  return fractionStr || `${amount}`;
};

/**
 * 3. COMPILE WEEKLY SHOPPING LIST
 * Takes a weekly meal plan, finds all planned recipes, scales their ingredients,
 * and compiles them into a single list grouped/sorted by department (e.g., "Produce" first).
 */
export const compileShoppingList = (mealPlan: WeeklyMealPlan): ShoppingItem[] => {
  // A temporary map to aggregate amounts of identical items.
  // The key will be a combination of ingredient name and unit (e.g., "garlic cloves-pcs")
  const aggregated: { [key: string]: Omit<ShoppingItem, 'id' | 'checked'> } = {};

  // Loop through each day of the week in the meal plan
  Object.values(mealPlan).forEach((dayMeal) => {
    // A DayMeal has optional breakfast, lunch, and dinner.
    // We filter out undefined meals and process the ones that are planned.
    const activeMeals = [dayMeal.breakfast, dayMeal.lunch, dayMeal.dinner].filter(
      (meal): meal is NonNullable<typeof meal> => meal !== undefined
    );

    activeMeals.forEach((meal) => {
      const { recipe, servings } = meal;
      
      recipe.ingredients.forEach((ing: Ingredient) => {
        // Standardize key names to merge duplicates (e.g., "Olive oil" and "olive oil")
        const normalizedName = ing.name.trim().toLowerCase();
        const normalizedUnit = ing.unit.trim().toLowerCase();
        const key = `${normalizedName}-${normalizedUnit}`;

        const scaledAmt = scaleAmount(ing.amount, recipe.servings, servings);

        if (aggregated[key]) {
          // If already in list, add the scaled amount
          aggregated[key].amount += scaledAmt;
        } else {
          // Otherwise create a new record
          aggregated[key] = {
            name: ing.name, // Keep original casing for display
            amount: scaledAmt,
            unit: ing.unit,
            department: ing.department
          };
        }
      });
    });
  });

  // Convert the aggregated dictionary back to an array of ShoppingItem
  const list: ShoppingItem[] = Object.entries(aggregated).map(([key, details], index) => {
    return {
      id: `shop-${key}-${index}`,
      ...details,
      checked: false // Defaults to unchecked
    };
  });

  // Sort by department (so Produce stays together, Meat stays together)
  // then sort alphabetically by name within each department
  return list.sort((a, b) => {
    if (a.department !== b.department) {
      return a.department.localeCompare(b.department);
    }
    return a.name.localeCompare(b.name);
  });
};
