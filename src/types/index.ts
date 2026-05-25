/**
 * RecipeForge TypeScript Type Definitions
 * 
 * This file contains all the type declarations and interfaces used in our app.
 * In TypeScript, interfaces and types help us model the structure of our data,
 * providing autocomplete, catching bugs during writing code, and documentating code.
 */

/**
 * 1. INGREDIENT INTERFACE
 * An interface defines the shape/structure of an object.
 * Any object declared as an 'Ingredient' must have these exact properties.
 */
export interface Ingredient {
  name: string;        // Name of the ingredient (e.g., "Olive Oil")
  amount: number;      // Quantity (e.g., 2, 150)
  unit: string;        // Unit of measurement (e.g., "tbsp", "g", "ml", "pcs")
  department: string;  // Grocery section for grouping (e.g., "Produce", "Dairy", "Pantry")
}

/**
 * 2. DIFFICULTY UNION TYPE
 * Instead of letting 'difficulty' be any random string, we restrict it to three specific values.
 * This is called a Union Type. TypeScript will error if you try to set difficulty to "Super Hard".
 */
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

/**
 * 3. RECIPE INTERFACE
 * Represents a full recipe object. It embeds the Ingredient interface we defined above.
 */
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;       // URL to recipe image
  prepTime: number;    // time in minutes
  cookTime: number;    // time in minutes
  servings: number;    // baseline servings (e.g., 4)
  cuisine: string;     // e.g., "Italian", "Mexican", "Japanese"
  tags: string[];      // e.g., ["Gluten-Free", "Vegetarian", "Spicy"]
  ingredients: Ingredient[];
  instructions: string[]; // List of step-by-step cooking instructions
  difficulty: Difficulty;
  calories: number;    // Calories per serving
  macros?: {
    protein: number;   // in grams
    carbs: number;     // in grams
    fat: number;       // in grams
  };
  videoUrl?: string;   // Video tutorial link
  rating?: number;     // User rating (1-5)
}

/**
 * 4.5. GYM DIET GOAL INTERFACE
 * Holds user inputs and target macros for the Gym Diet Feature.
 */
export interface GymGoal {
  weight: number; // in kg
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'very_active';
  goal: 'bulk' | 'cut' | 'maintain';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

/**
 * 4. MEAL PLAN TYPES
 * We want to schedule meals.
 * A PlannedMeal couples a Recipe with a specific serving count chosen by the user.
 */
export interface PlannedMeal {
  recipe: Recipe;
  servings: number; // The target serving size for this specific scheduled meal
}

/**
 * A DayMeal contains optional Breakfast, Lunch, and Dinner.
 * The '?' mark means the property is optional (a day might not have all meals planned yet).
 */
export interface DayMeal {
  breakfast?: PlannedMeal;
  lunch?: PlannedMeal;
  dinner?: PlannedMeal;
}

/**
 * We represent the weekly schedule.
 * The keys are the days of the week, mapping to DayMeal objects.
 */
export interface WeeklyMealPlan {
  [day: string]: DayMeal; // Dynamic keys representing days (e.g., "Monday", "Tuesday")
}

/**
 * 5. SHOPPING LIST TYPES
 * Represents an item in the compiled grocery list.
 * It extends the base ingredients details with a 'checked' state.
 */
export interface ShoppingItem {
  id: string;          // Unique ID for the shopping item list key
  name: string;
  amount: number;
  unit: string;
  department: string;
  checked: boolean;    // Whether the user has ticked this off in their grocery store
}
