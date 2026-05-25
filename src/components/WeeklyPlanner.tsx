import React from 'react';
import type { WeeklyMealPlan, Recipe, DayMeal } from '../types';
import { Trash2, Plus, Users, Coffee, Utensils, Moon } from 'lucide-react';

interface WeeklyPlannerProps {
  mealPlan: WeeklyMealPlan;
  onRemoveMeal: (day: string, mealType: 'breakfast' | 'lunch' | 'dinner') => void;
  onUpdateServings: (day: string, mealType: 'breakfast' | 'lunch' | 'dinner', servings: number) => void;
  onOpenAddModal: (day: string, mealType: 'breakfast' | 'lunch' | 'dinner') => void;
  onViewRecipe: (recipe: Recipe) => void;
}

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const MEAL_TYPES = [
  { key: 'breakfast', label: 'Breakfast', icon: Coffee, color: 'text-amber-400 bg-amber-500-10' },
  { key: 'lunch', label: 'Lunch', icon: Utensils, color: 'text-teal-400 bg-teal-500-10' },
  { key: 'dinner', label: 'Dinner', icon: Moon, color: 'text-indigo-400 bg-indigo-500-10' }
] as const;

export const WeeklyPlanner: React.FC<WeeklyPlannerProps> = ({
  mealPlan,
  onRemoveMeal,
  onUpdateServings,
  onOpenAddModal,
  onViewRecipe
}) => {
  return (
    <div className="space-y-6">
      {/* Description header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800-80 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Weekly Meal Schedule</h2>
          <p className="text-xs text-slate-400 mt-1">
            Plan your meals for the week. Your grocery shopping list will compile and scale automatically.
          </p>
        </div>
      </div>

      {/* Grid of days */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {DAYS.map((day) => {
          const dayPlan: DayMeal = mealPlan[day] || {};
          
          return (
            <div key={day} className="day-card glass-panel p-4 flex flex-col gap-4 border border-slate-850 rounded-2xl">
              {/* Day Header */}
              <div className="flex justify-between items-center border-b border-slate-800-80 pb-2">
                <h3 className="font-extrabold text-slate-100 tracking-wide text-sm uppercase">
                  {day}
                </h3>
                {/* Small indicator showing scheduled meals for the day */}
                <span className="text-micro text-theme-primary font-bold bg-theme-glow border border-theme-primary-20 px-2 py-0.5 rounded-full">
                  {Object.values(dayPlan).filter(Boolean).length} Planned
                </span>
              </div>

              {/* Slots List */}
              <div className="flex flex-col gap-3 flex-grow">
                {MEAL_TYPES.map(({ key, label, icon: Icon, color }) => {
                  const meal = dayPlan[key];
                  
                  return (
                    <div key={key} className="flex flex-col gap-1-5">
                      {/* Slot Header Label */}
                      <div className="flex items-center gap-1-5 text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">
                        <span className={`p-0.5 rounded ${color}`}>
                          <Icon size={10} />
                        </span>
                        <span>{label}</span>
                      </div>

                      {/* Slot Content */}
                      {meal ? (
                        <div className="relative group/slot flex items-center justify-between gap-3 bg-slate-900-90 border border-slate-800-80 rounded-xl p-2-5 transition-all duration-300 hover:border-slate-700/80">
                          {/* Recipe Thumbnail */}
                          <img
                            src={meal.recipe.image}
                            alt={meal.recipe.title}
                            onClick={() => onViewRecipe(meal.recipe)}
                            className="w-10 h-10 object-cover rounded-lg flex-shrink-0 cursor-pointer hover:opacity-85 transition-opacity"
                          />
                          
                          {/* Recipe Title & Serving Scaler */}
                          <div className="flex-grow min-w-0">
                            <h4 
                              onClick={() => onViewRecipe(meal.recipe)}
                              className="text-xs font-bold text-slate-200 line-clamp-1 cursor-pointer hover:text-theme-primary transition-colors"
                            >
                              {meal.recipe.title}
                            </h4>
                            
                            {/* Serving size controls inside slot */}
                            <div className="flex items-center gap-1-5 mt-1 text-micro text-slate-400">
                              <Users size={10} className="text-slate-500" />
                              <span>{meal.servings} servings</span>
                              <div className="flex items-center gap-1 ml-1-5">
                                <button
                                  onClick={() => onUpdateServings(day, key, Math.max(1, meal.servings - 1))}
                                  className="w-4-5 h-4-5 rounded bg-slate-800 hover:bg-slate-750 flex items-center justify-center font-bold text-slate-300 hover:text-white transition-colors"
                                  title="Decrease servings"
                                >
                                  -
                                </button>
                                <button
                                  onClick={() => onUpdateServings(day, key, Math.min(20, meal.servings + 1))}
                                  className="w-4-5 h-4-5 rounded bg-slate-800 hover:bg-slate-750 flex items-center justify-center font-bold text-slate-300 hover:text-white transition-colors"
                                  title="Increase servings"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Delete Meal Action */}
                          <button
                            onClick={() => onRemoveMeal(day, key)}
                            className="p-1-5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500-10 transition-all duration-200 opacity-80 group-hover/slot:opacity-100 cursor-pointer"
                            title="Remove meal"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      ) : (
                        /* Empty Slot Placeholder */
                        <button
                          onClick={() => onOpenAddModal(day, key)}
                          className="flex items-center justify-center gap-1-5 border border-dashed border-slate-800 hover:border-slate-700 bg-slate-900-20 hover:bg-slate-900-40 rounded-xl p-3 text-slate-500 hover:text-slate-300 text-xs font-semibold transition-all duration-300 group cursor-pointer"
                        >
                          <Plus size={12} className="text-slate-650 group-hover:text-theme-primary transition-colors" />
                          <span>Add Meal</span>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
