import React, { useMemo } from 'react';
import type { WeeklyMealPlan, Recipe, GymGoal } from '../types';
import { Flame, Dumbbell, Award, Plus, Calendar, Star } from 'lucide-react';

interface DashboardOverviewProps {
  mealPlan: WeeklyMealPlan;
  recipes: Recipe[];
  gymGoal: GymGoal | null;
  onViewRecipe: (recipe: Recipe) => void;
  onAddToPlan: (recipe: Recipe) => void;
  setActiveTab: (tab: 'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping') => void;
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Reusable Circular Progress Ring Component
const RadialRing = ({ 
  percent, 
  color, 
  size = 76, 
  strokeWidth = 6, 
  label, 
  value, 
  unit 
}: { 
  percent: number; 
  color: string; 
  size?: number; 
  strokeWidth?: number; 
  label: string; 
  value: number; 
  unit: string; 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * Math.min(100, percent)) / 100;
  
  return (
    <div className="flex flex-col items-center justify-center p-3.5 bg-slate-905 border border-slate-850 rounded-2xl relative overflow-hidden group">
      <div className="relative flex items-center justify-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.02)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Active progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{ filter: `drop-shadow(0 0 3px ${color}80)` }}
          />
        </svg>
        {/* Central percentage text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[11px] font-black text-slate-100">{percent}%</span>
        </div>
      </div>
      
      {/* Description below */}
      <div className="text-center mt-3">
        <span className="text-[9px] text-slate-500 font-extrabold uppercase tracking-wider block">{label}</span>
        <span className="text-xs font-bold text-slate-200 mt-0.5">{value}{unit}</span>
      </div>
    </div>
  );
};

// Calorie Main Radial Ring Component
const CalorieRadial = ({ 
  percent, 
  value, 
  target 
}: { 
  percent: number; 
  value: number; 
  target: number; 
}) => {
  const size = 150;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * Math.min(100, percent)) / 100;
  
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-slate-905 border border-slate-850 rounded-2xl relative overflow-hidden group">
      <div className="relative flex items-center justify-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.02)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="var(--theme-primary)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{ filter: `drop-shadow(0 0 5px var(--theme-primary))` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <Flame size={20} className="text-amber-500 animate-pulse mb-0.5" />
          <span className="text-2xl font-black text-white leading-tight">{value}</span>
          <span className="text-[8px] text-slate-500 font-extrabold uppercase tracking-wider">kcal active</span>
        </div>
      </div>
      <div className="text-center mt-4">
        <span className="text-xs text-slate-400 font-semibold">Weekly Target: {target} kcal</span>
      </div>
    </div>
  );
};

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  mealPlan,
  recipes,
  gymGoal,
  onViewRecipe,
  onAddToPlan,
  setActiveTab
}) => {
  const today = useMemo(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todayIndex = new Date().getDay();
    return days[todayIndex];
  }, []);

  // Sum actual weekly planned macros
  const weeklyStats = useMemo(() => {
    let calories = 0;
    let protein = 0;
    let carbs = 0;
    let fat = 0;

    Object.values(mealPlan).forEach((dayMeal) => {
      const activeMeals = [dayMeal.breakfast, dayMeal.lunch, dayMeal.dinner].filter(
        (meal): meal is NonNullable<typeof meal> => meal !== undefined
      );

      activeMeals.forEach((meal) => {
        const ratio = meal.servings / meal.recipe.servings;
        calories += meal.recipe.calories * ratio;
        if (meal.recipe.macros) {
          protein += meal.recipe.macros.protein * ratio;
          carbs += meal.recipe.macros.carbs * ratio;
          fat += meal.recipe.macros.fat * ratio;
        }
      });
    });

    return {
      calories: Math.round(calories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat)
    };
  }, [mealPlan]);

  const targets = useMemo(() => {
    if (gymGoal) {
      return {
        calories: gymGoal.calories * 7,
        protein: gymGoal.protein * 7,
        carbs: gymGoal.carbs * 7,
        fat: gymGoal.fat * 7
      };
    }
    return {
      calories: 2000 * 7,
      protein: 130 * 7,
      carbs: 220 * 7,
      fat: 65 * 7
    };
  }, [gymGoal]);

  const featuredRecipe = useMemo(() => {
    if (recipes.length === 0) return null;
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 1).getTime()) / 86400000);
    const index = dayOfYear % recipes.length;
    return recipes[index];
  }, [recipes]);

  const getPercent = (value: number, target: number) => {
    return Math.min(100, Math.round((value / target) * 100)) || 0;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Control Banner Card */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-800-80 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-theme-primary/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Welcome back to <span className="text-theme-primary transition-colors">RecipeForge</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
            Your fitness-focused culinary workspace. Review your weekly nutrition, schedule today's gym prep meals, and explore high-protein cooking tutorials.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('gym')}
          className="flex-shrink-0 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-black px-5 py-3 text-xs transition-all duration-300 shadow-lg shadow-theme-glow active:scale-95 cursor-pointer"
        >
          <Dumbbell size={16} />
          <span>Gym Macro Targets</span>
        </button>
      </div>

      {/* Main 3-Column Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Central Meal Schedule Grid & Featured Recipe */}
        <div className="xl:col-span-2 space-y-8">
          
          {/* Weekly Schedule Glance (Weekly Meal Grid) */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Calendar size={18} className="text-theme-primary" />
                <span>Weekly Schedule Glance</span>
              </h3>
              <span 
                onClick={() => setActiveTab('planner')}
                className="text-xs text-slate-450 hover:text-theme-primary font-bold transition-colors cursor-pointer"
              >
                Open Full Planner →
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {DAYS.map((day) => {
                const dayPlan = mealPlan[day] || {};
                const dayShort = day.substring(0, 3);
                const isToday = day === today;
                
                return (
                  <div key={day} className={`glass-panel p-3 rounded-2xl flex flex-col gap-2.5 border transition-all ${
                    isToday ? 'border-theme-primary bg-theme-glow/10 shadow-md shadow-theme-glow' : 'border-slate-850'
                  }`}>
                    <span className={`text-[10px] font-black tracking-widest uppercase text-center block ${
                      isToday ? 'text-theme-primary' : 'text-slate-500'
                    }`}>
                      {dayShort}
                    </span>
                    
                    <div className="flex flex-col gap-1.5">
                      {(['breakfast', 'lunch', 'dinner'] as const).map((mealType) => {
                        const meal = (dayPlan as any)[mealType];
                        return (
                          <div key={mealType} className="relative group/mini h-11 rounded-xl overflow-hidden border border-slate-900 bg-slate-950 flex items-center justify-center">
                            {meal ? (
                              <>
                                <img
                                  src={meal.recipe.image}
                                  alt={meal.recipe.title}
                                  className="w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-slate-950/85 flex flex-col items-center justify-center p-1 opacity-0 group-hover/mini:opacity-100 transition-opacity">
                                  <span className="text-[8px] font-extrabold text-white truncate w-full text-center">{meal.recipe.title}</span>
                                  <span className="text-[7px] text-theme-primary font-bold block mt-0.5">{mealType}</span>
                                </div>
                                <div className="absolute bottom-0.5 right-1 px-1 rounded bg-slate-905/90 border border-slate-800 text-[6px] font-black uppercase text-slate-350 pointer-events-none group-hover/mini:opacity-0 transition-opacity">
                                  {mealType[0]}
                                </div>
                              </>
                            ) : (
                              <button
                                onClick={() => setActiveTab('planner')}
                                className="w-full h-full flex items-center justify-center text-slate-700 hover:text-theme-primary transition-colors cursor-pointer"
                                title={`Add ${mealType} for ${day}`}
                              >
                                <Plus size={11} />
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

          {/* Featured Recipe Card */}
          {featuredRecipe && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Star size={18} className="text-amber-500 fill-amber-500" />
                <span>Featured Recipe of the Day</span>
              </h3>

              <div className="glass-panel rounded-3xl border border-slate-850 overflow-hidden flex flex-col md:flex-row">
                <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img
                    src={featuredRecipe.image}
                    alt={featuredRecipe.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                <div className="p-6 md:p-7 md:w-3/5 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2 items-center mb-3">
                      <span className="rounded-full bg-slate-900 border border-slate-800 px-3 py-0.5 text-micro font-bold uppercase tracking-wider text-theme-primary">
                        {featuredRecipe.cuisine}
                      </span>
                      {featuredRecipe.macros && (
                        <span className="rounded-full bg-emerald-500-10 text-emerald-450 border border-emerald-500/20 px-3 py-0.5 text-micro font-bold">
                          {featuredRecipe.macros.protein}g Muscle Protein
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-100">{featuredRecipe.title}</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {featuredRecipe.description}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => onViewRecipe(featuredRecipe)}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-850 text-xs font-bold text-slate-200 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      Recipe Details
                    </button>
                    <button
                      onClick={() => onAddToPlan(featuredRecipe)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-black text-xs transition-all shadow-md shadow-theme-glow active:scale-95 cursor-pointer"
                    >
                      Add to Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Nutrition Metrics Tracker (Circular Radials) */}
        <div className="xl:col-span-1 space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-slate-850 flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-slate-900 pb-3">
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <Award size={16} className="text-theme-primary" />
                <span>Gym Nutrition Hub</span>
              </h3>
              <span className="text-[9px] font-black text-slate-500 bg-slate-900 border border-slate-850 px-2 py-0.5 rounded-full uppercase">
                {gymGoal ? gymGoal.goal : 'Maintain'}
              </span>
            </div>

            {/* Central Calorie Progress Ring */}
            <div className="flex justify-center">
              <CalorieRadial
                percent={getPercent(weeklyStats.calories, targets.calories)}
                value={weeklyStats.calories}
                target={targets.calories}
              />
            </div>

            {/* Micro Radial Split Indicators */}
            <div className="grid grid-cols-3 gap-3 border-t border-slate-900 pt-5">
              <RadialRing
                percent={getPercent(weeklyStats.protein, targets.protein)}
                color="var(--theme-primary)"
                label="Protein"
                value={weeklyStats.protein}
                unit="g"
              />
              <RadialRing
                percent={getPercent(weeklyStats.carbs, targets.carbs)}
                color="hsl(239, 84%, 66%)"
                label="Carbs"
                value={weeklyStats.carbs}
                unit="g"
              />
              <RadialRing
                percent={getPercent(weeklyStats.fat, targets.fat)}
                color="hsl(150, 70%, 45%)"
                label="Fats"
                value={weeklyStats.fat}
                unit="g"
              />
            </div>

            <div className="bg-slate-905 border border-slate-850 p-4 rounded-2xl flex gap-2 items-start">
              <InfoIcon className="text-theme-primary flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-450 leading-relaxed">
                Rings compile automatically based on serving sizes and food item scales mapped in your planner. Adjust strategy anytime inside the Gym Diet Planner calculator page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal icon wrapper to save imports
const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
