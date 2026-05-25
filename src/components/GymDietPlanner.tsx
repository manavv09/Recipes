import React, { useState, useEffect } from 'react';
import type { GymGoal, Recipe } from '../types';
import { RecipeCard } from './RecipeCard';
import { Dumbbell, Info, Sparkles, Scale, Percent, Zap, Flame } from 'lucide-react';

interface GymDietPlannerProps {
  gymGoal: GymGoal | null;
  onSaveGoal: (goal: GymGoal) => void;
  recipes: Recipe[];
  onViewRecipe: (recipe: Recipe) => void;
  onAddToPlan: (recipe: Recipe) => void;
  favorites: string[];
  onToggleFavorite: (recipeId: string) => void;
}

export const GymDietPlanner: React.FC<GymDietPlannerProps> = ({
  gymGoal,
  onSaveGoal,
  recipes,
  onViewRecipe,
  onAddToPlan,
  favorites,
  onToggleFavorite
}) => {
  // Input fields state
  const [weight, setWeight] = useState<number>(gymGoal?.weight || 75);
  const [activityLevel, setActivityLevel] = useState<GymGoal['activityLevel']>(gymGoal?.activityLevel || 'moderate');
  const [goal, setGoal] = useState<GymGoal['goal']>(gymGoal?.goal || 'bulk');

  // Computed state
  const [computedGoal, setComputedGoal] = useState<GymGoal | null>(gymGoal);

  // Recalculate targets whenever inputs change
  const calculateTargets = () => {
    // 1. Calculate Base BMR (Harris-Benedict simplified formula)
    const bmr = weight * 22; // Quick active metabolism index

    // 2. Multiply by activity multiplier
    let multiplier = 1.2;
    if (activityLevel === 'light') multiplier = 1.375;
    else if (activityLevel === 'moderate') multiplier = 1.55;
    else if (activityLevel === 'very_active') multiplier = 1.725;

    let tdee = Math.round(bmr * multiplier);

    // 3. Adjust for gym goal
    let targetCalories = tdee;
    if (goal === 'bulk') {
      targetCalories += 400; // Hypertrophy surplus
    } else if (goal === 'cut') {
      targetCalories -= 500; // Fat loss deficit
    }

    // 4. Calculate Gym Macro Splits (Protein focused)
    // Bulk: 2.2g Protein / kg
    // Cut: 2.4g Protein / kg (protect muscle)
    // Maintain: 2.0g Protein / kg
    let proteinMultiplier = 2.0;
    if (goal === 'bulk') proteinMultiplier = 2.2;
    else if (goal === 'cut') proteinMultiplier = 2.4;

    const targetProtein = Math.round(weight * proteinMultiplier);
    
    // Fat intake: 25% of calories for Bulk/Maintain, 20% for Cut
    const fatPct = goal === 'cut' ? 0.20 : 0.25;
    const targetFat = Math.round((targetCalories * fatPct) / 9);

    // Carbohydrates: remaining calories
    const proteinCal = targetProtein * 4;
    const fatCal = targetFat * 9;
    const targetCarbs = Math.round(Math.max(50, (targetCalories - proteinCal - fatCal) / 4));

    const updatedGoal: GymGoal = {
      weight,
      activityLevel,
      goal,
      calories: targetCalories,
      protein: targetProtein,
      carbs: targetCarbs,
      fat: targetFat
    };

    setComputedGoal(updatedGoal);
    onSaveGoal(updatedGoal);
  };

  // Run calculation on initial load if none is set
  useEffect(() => {
    if (!gymGoal) {
      calculateTargets();
    }
  }, []);

  // Filter recipes appropriate for the active fitness goal
  const goalMatchingRecipes = React.useMemo(() => {
    if (!computedGoal) return recipes;

    return recipes.filter((recipe) => {
      const isHighProtein = (recipe.macros?.protein || 0) >= 20; // 20g+ is standard high-protein
      
      if (computedGoal.goal === 'cut') {
        // High protein, lower calorie, lower carb
        return isHighProtein && recipe.calories <= 450;
      }
      if (computedGoal.goal === 'bulk') {
        // Higher calorie, high protein, high carb
        return isHighProtein || recipe.calories >= 400;
      }
      // Maintenance
      return isHighProtein;
    });
  }, [recipes, computedGoal]);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <Dumbbell className="text-theme-primary" size={22} />
          <span>Gym Diet & Macro Calculator</span>
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Compute custom protein, fat, and carbohydrate splits suited for your gym workouts and weight goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Calculator Inputs Form */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800-80 space-y-6">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Scale size={16} className="text-theme-primary" />
            <span>Biometrics & Goals</span>
          </h3>

          <div className="space-y-4">
            {/* Weight Input */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-350">
                <label>Body Weight</label>
                <span className="text-theme-primary font-bold">{weight} kg</span>
              </div>
              <input
                type="range"
                min="45"
                max="130"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                <span>45 kg</span>
                <span>85 kg</span>
                <span>130 kg</span>
              </div>
            </div>

            {/* Activity Level Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-350">Activity Multiplier</label>
              <select
                value={activityLevel}
                onChange={(e: any) => setActivityLevel(e.target.value)}
                className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-xs text-slate-200 font-semibold focus:outline-none cursor-pointer"
              >
                <option value="sedentary">Sedentary (No Exercise / Desk Job)</option>
                <option value="light">Light Activity (Gym 1-2 days/week)</option>
                <option value="moderate">Moderate Activity (Gym 3-5 days/week)</option>
                <option value="very_active">Very Active (Gym 6-7 days/week, athletic)</option>
              </select>
            </div>

            {/* Fitness Goal Toggle */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-350">Diet Strategy</label>
              <div className="grid grid-cols-3 gap-2">
                {(['bulk', 'cut', 'maintain'] as const).map((goalOption) => {
                  const isActive = goal === goalOption;
                  return (
                    <button
                      key={goalOption}
                      type="button"
                      onClick={() => setGoal(goalOption)}
                      className={`py-3 rounded-xl border text-[11px] font-bold capitalize transition-all duration-300 ${
                        isActive
                          ? 'bg-theme-glow border-theme-primary text-theme-primary shadow-sm shadow-theme-glow'
                          : 'bg-slate-905 border-slate-850 text-slate-400 hover:border-slate-800'
                      }`}
                    >
                      {goalOption === 'bulk' && 'Bulk Up'}
                      {goalOption === 'cut' && 'Lean Cut'}
                      {goalOption === 'maintain' && 'Maintain'}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            onClick={calculateTargets}
            className="w-full flex items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-black py-3.5 text-xs transition-all duration-300 shadow-lg shadow-theme-glow cursor-pointer"
          >
            <Zap size={14} />
            <span>Compute Gym Macros</span>
          </button>
        </div>

        {/* Right Side: Calculated Gym Targets */}
        {computedGoal && (
          <div className="lg:col-span-2 glass-panel p-6 rounded-3xl border border-slate-800-80 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <Percent size={16} className="text-theme-primary" />
                  <span>Your Fitness Macro Breakdown</span>
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold bg-amber-500-10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  <Flame size={12} className="animate-pulse" />
                  <span>{computedGoal.calories} kcal / day</span>
                </div>
              </div>

              {/* Three macro metrics display */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Protein */}
                <div className="bg-slate-900 border border-slate-850 p-4 rounded-2xl text-center shadow-inner relative overflow-hidden">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Protein (g)</span>
                  <span className="text-2xl font-black text-slate-100 block mt-1.5">{computedGoal.protein}g</span>
                  <span className="text-[10px] text-theme-primary font-bold block mt-1 uppercase tracking-wide">
                    {computedGoal.goal === 'cut' ? 'Muscle Protect' : 'Hypertrophy'}
                  </span>
                </div>

                {/* Carbs */}
                <div className="bg-slate-900 border border-slate-850 p-4 rounded-2xl text-center shadow-inner relative overflow-hidden">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Carbs (g)</span>
                  <span className="text-2xl font-black text-slate-100 block mt-1.5">{computedGoal.carbs}g</span>
                  <span className="text-[10px] text-indigo-400 font-bold block mt-1 uppercase tracking-wide">Glycogen</span>
                </div>

                {/* Fat */}
                <div className="bg-slate-900 border border-slate-850 p-4 rounded-2xl text-center shadow-inner relative overflow-hidden">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Fats (g)</span>
                  <span className="text-2xl font-black text-slate-100 block mt-1.5">{computedGoal.fat}g</span>
                  <span className="text-[10px] text-emerald-400 font-bold block mt-1 uppercase tracking-wide">Hormonal</span>
                </div>
              </div>

              {/* Nutritional tip */}
              <div className="bg-slate-905 border border-slate-850 p-4 rounded-2xl flex gap-3 items-start">
                <Info size={16} className="text-theme-primary flex-shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  {computedGoal.goal === 'cut' && (
                    <span><strong>Strategy: Fat Loss Deficit.</strong> Calorie deficit calculated for healthy body fat reduction. Protein is boosted to <strong>2.4g/kg</strong> to prevent catabolic muscle loss. Try selecting low-calorie, high-protein recipes.</span>
                  )}
                  {computedGoal.goal === 'bulk' && (
                    <span><strong>Strategy: Hypertrophy Surplus.</strong> Calorie surplus allocated to promote anabolic muscle building. Protein target set at <strong>2.2g/kg</strong>. Carbs are boosted to fuel heavy training in the gym.</span>
                  )}
                  {computedGoal.goal === 'maintain' && (
                    <span><strong>Strategy: Healthy Maintenance.</strong> Energy intake matches body expenditure. Protein set at <strong>2.0g/kg</strong>. Balance meals evenly to sustain energy and recover from workouts.</span>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-900 pt-4 mt-6 flex items-center justify-between text-[10px] text-slate-500 font-bold">
              <span className="flex items-center gap-1">
                <Sparkles size={11} className="text-theme-primary animate-pulse" />
                <span>Computed: Harris-Benedict Met. Index</span>
              </span>
              <span>Body Weight basis: {computedGoal.weight} kg</span>
            </div>
          </div>
        )}
      </div>

      {/* Goal matching recipes recommendations section */}
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <Dumbbell size={16} className="text-theme-primary" />
            <span>Recommended Gym Diet Recipes</span>
          </h3>
          <p className="text-xs text-slate-450 mt-0.5">
            These high-protein recipes align with your target macro ratios and fitness goals.
          </p>
        </div>

        {goalMatchingRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goalMatchingRecipes.slice(0, 3).map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onViewDetails={onViewRecipe}
                onAddToPlan={onAddToPlan}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center glass-panel rounded-2xl border border-slate-850 text-slate-500 text-xs italic">
            No recipes matching gym filter criteria.
          </div>
        )}
      </div>
    </div>
  );
};
