import React from 'react';
import type { Recipe } from '../types';
import { Clock, Flame, BarChart3, Plus, Eye, Heart, Star, Dumbbell } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onViewDetails: (recipe: Recipe) => void;
  onAddToPlan: (recipe: Recipe) => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onViewDetails,
  onAddToPlan,
  isFavorite,
  onToggleFavorite
}) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-500-10 text-emerald-400 border border-emerald-500/20';
      case 'Medium':
        return 'bg-amber-500-10 text-amber-400 border border-amber-500/20';
      case 'Hard':
        return 'bg-rose-500-10 text-rose-400 border border-rose-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400';
    }
  };

  return (
    <div className="recipe-card glass-panel group relative flex flex-col h-full rounded-3xl overflow-hidden border border-slate-850">
      {/* Recipe Image with zoom effect */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        
        {/* Cuisine Tag in top-left */}
        <span className="absolute left-4 top-4 rounded-full bg-slate-905/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-theme-primary backdrop-blur-md border border-slate-800">
          {recipe.cuisine}
        </span>

        {/* Favorite Button (Heart) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.id);
          }}
          className="absolute right-4 top-4 p-2 rounded-xl bg-slate-905/90 text-slate-400 hover:text-rose-550 border border-slate-800 hover:border-rose-500-30 backdrop-blur-md transition-all duration-300 active:scale-90 cursor-pointer"
          title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        >
          <Heart size={14} className={isFavorite ? 'fill-rose-500 text-rose-500 animate-pulse' : ''} />
        </button>

        {/* Calories and Difficulty bottom overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-xs">
          <span className={`rounded px-2.5 py-0.5 font-bold ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
          <span className="flex items-center gap-1 text-slate-200 font-bold bg-slate-950-65 px-2.5 py-0.5 rounded backdrop-blur-sm">
            <Flame size={12} className="text-amber-500 animate-pulse" />
            {recipe.calories} kcal
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-base font-extrabold text-slate-100 group-hover:text-theme-primary transition-colors duration-200 line-clamp-1">
              {recipe.title}
            </h3>
            
            {/* Rating */}
            {recipe.rating && (
              <div className="flex items-center gap-0.5 text-xs font-bold text-amber-400 flex-shrink-0 pt-0.5">
                <Star size={12} className="fill-amber-400" />
                <span>{recipe.rating}</span>
              </div>
            )}
          </div>

          <p className="mt-2 text-xs text-slate-400 line-clamp-2 h-9 leading-relaxed">
            {recipe.description}
          </p>

          {/* Macros split row (Gym Diet Addition) */}
          {recipe.macros && (
            <div className="mt-3.5 bg-slate-905/90 border border-slate-850 rounded-xl p-2 flex items-center justify-between text-[10px] font-bold text-slate-400 shadow-inner">
              <div className="flex items-center gap-1">
                <Dumbbell size={10} className="text-theme-primary" />
                <span>Gym Diet:</span>
              </div>
              <div className="flex gap-2">
                <span>P: <span className="text-theme-primary">{recipe.macros.protein}g</span></span>
                <span>C: <span className="text-indigo-400">{recipe.macros.carbs}g</span></span>
                <span>F: <span className="text-emerald-450">{recipe.macros.fat}g</span></span>
              </div>
            </div>
          )}

          {/* Core Info Row */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-350 border-t border-slate-900 pt-3">
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-theme-primary" />
              <span>Prep: {recipe.prepTime}m</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart3 size={13} className="text-theme-primary" />
              <span>Cook: {recipe.cookTime}m</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 flex gap-2.5">
          <button
            onClick={() => onViewDetails(recipe)}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-2.5 text-xs font-semibold transition-all duration-300 border border-slate-800 hover:border-slate-700 cursor-pointer"
          >
            <Eye size={13} />
            <span>Details</span>
          </button>
          
          <button
            onClick={() => onAddToPlan(recipe)}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-bold px-3 py-2.5 text-xs transition-all duration-300 shadow-lg shadow-theme-glow active:scale-95 cursor-pointer"
          >
            <Plus size={13} strokeWidth={3} />
            <span>Schedule</span>
          </button>
        </div>
      </div>
    </div>
  );
};
