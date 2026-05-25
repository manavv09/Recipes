import React, { useState, useEffect } from 'react';
import type { Recipe } from '../types';
import { scaleAmount, formatQuantity } from '../utils/helpers';
import { X, Users, Clock, Flame, Check, Calendar, Play, Star, Dumbbell, Heart } from 'lucide-react';

interface RecipeDetailModalProps {
  recipe: Recipe;
  onClose: () => void;
  onAddToPlan: (recipe: Recipe) => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string) => void;
  onRateRecipe?: (recipeId: string, rating: number) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
  onAddToPlan,
  isFavorite,
  onToggleFavorite,
  onRateRecipe
}) => {
  const [servings, setServings] = useState(recipe.servings);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [showVideo, setShowVideo] = useState(false);
  const [userRating, setUserRating] = useState<number>(recipe.rating || 5);

  useEffect(() => {
    setServings(recipe.servings);
    setCheckedIngredients({});
    setShowVideo(false);
    setUserRating(recipe.rating || 5);
  }, [recipe]);

  const toggleIngredient = (name: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleIncrement = () => setServings((prev) => Math.min(prev + 1, 20));
  const handleDecrement = () => setServings((prev) => Math.max(prev - 1, 1));

  const handleStarClick = (ratingVal: number) => {
    setUserRating(ratingVal);
    if (onRateRecipe) {
      onRateRecipe(recipe.id, ratingVal);
    }
  };

  // Scaled macros helper
  const getScaledMacro = (macroVal?: number) => {
    if (!macroVal) return 0;
    return Math.round(scaleAmount(macroVal, recipe.servings, servings));
  };

  const scaledCalories = Math.round(scaleAmount(recipe.calories, recipe.servings, servings));

  return (
    <div className="modal-overlay flex items-center justify-center p-4 z-50 animate-fade-in">
      {/* Modal Card */}
      <div className="glass-panel w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-800-80 shadow-2xl flex flex-col relative animate-slide-up">
        
        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite(recipe.id)}
          className="absolute right-14 top-4 z-10 p-2 rounded-full bg-slate-950/70 text-slate-400 hover:text-rose-550 border border-slate-800/60 backdrop-blur-md transition-all duration-300 cursor-pointer"
          title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        >
          <Heart size={18} className={isFavorite ? 'fill-rose-500 text-rose-500' : ''} />
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-slate-950/70 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800/60 backdrop-blur-md transition-all duration-300 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Hero Image Header */}
        <div className="relative h-64 md:h-72 w-full flex-shrink-0">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="rounded-full bg-theme-glow text-theme-primary border border-theme-primary-20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
              {recipe.cuisine}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 mt-2 filter drop-shadow">
              {recipe.title}
            </h2>
          </div>
        </div>

        {/* Info Grid */}
        <div className="p-6 md:p-8 space-y-6 flex-grow">
          
          {/* Calorie & Macro Info Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-slate-900 pb-6">
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-905 border border-slate-850 text-center">
              <Clock size={18} className="text-theme-primary mb-1" />
              <span className="text-micro uppercase font-semibold text-slate-500 tracking-wider">Cook / Prep</span>
              <span className="text-xs font-bold text-slate-200 mt-0.5">{recipe.prepTime + recipe.cookTime} mins</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-905 border border-slate-850 text-center">
              <Flame size={18} className="text-amber-500 mb-1 animate-pulse" />
              <span className="text-micro uppercase font-semibold text-slate-500 tracking-wider">Energy</span>
              <span className="text-xs font-bold text-slate-200 mt-0.5">{scaledCalories} kcal</span>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-905 border border-slate-850 text-center col-span-1 md:col-span-2">
              <Dumbbell size={18} className="text-indigo-400 mb-1" />
              <span className="text-micro uppercase font-semibold text-slate-500 tracking-wider">Macros (Muscle Fuel)</span>
              {recipe.macros ? (
                <span className="text-xs font-bold text-slate-200 mt-0.5">
                  P: <span className="text-theme-primary">{getScaledMacro(recipe.macros.protein)}g</span> · 
                  C: <span className="text-indigo-400 ml-1">{getScaledMacro(recipe.macros.carbs)}g</span> · 
                  F: <span className="text-emerald-400 ml-1">{getScaledMacro(recipe.macros.fat)}g</span>
                </span>
              ) : (
                <span className="text-xs font-bold text-slate-500 mt-0.5">Standard Healthy</span>
              )}
            </div>
          </div>

          {/* Description & Video Toggle Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 bg-slate-905 p-4 rounded-2xl border border-slate-850">
            <p className="text-slate-300 leading-relaxed text-xs italic flex-grow">
              "{recipe.description}"
            </p>
            
            {recipe.videoUrl && (
              <button
                onClick={() => setShowVideo(!showVideo)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 ${
                  showVideo 
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-450' 
                    : 'bg-slate-900 border-slate-800 text-slate-200 hover:text-white'
                }`}
              >
                <Play size={12} className="fill-rose-500 text-rose-500" />
                <span>{showVideo ? 'Hide Video' : 'Video Tutorial'}</span>
              </button>
            )}
          </div>

          {/* Video Player Display (Gym Diet Video Feature) */}
          {showVideo && recipe.videoUrl && (
            <div className="space-y-2 animate-slide-down">
              <span className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1 block">Video Walkthrough Tutorial</span>
              <div className="video-tutorial-container">
                <iframe
                  src={recipe.videoUrl}
                  title={`${recipe.title} Video Tutorial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Ingredients Section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-900 pb-3">
              <h3 className="text-sm font-bold text-slate-250 flex items-center gap-2">
                <span>Ingredients Checklist</span>
                <span className="text-micro font-semibold bg-slate-900 text-slate-450 border border-slate-850 px-2 py-0.5 rounded-full">
                  Tap to mark off stock
                </span>
              </h3>
              
              {/* Servings Scaler Controls */}
              <div className="flex items-center gap-3 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-850 w-fit">
                <span className="text-xs font-semibold text-slate-450 flex items-center gap-1.5">
                  <Users size={12} />
                  Servings:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDecrement}
                    className="w-5.5 h-5.5 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-5 text-center text-xs font-extrabold text-theme-primary">
                    {servings}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="w-5.5 h-5.5 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {recipe.ingredients.map((ing) => {
                const scaled = scaleAmount(ing.amount, recipe.servings, servings);
                const isChecked = !!checkedIngredients[ing.name];
                
                return (
                  <div
                    key={ing.name}
                    onClick={() => toggleIngredient(ing.name)}
                    className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer select-none transition-all duration-300 ${
                      isChecked
                        ? 'bg-slate-950-40 border-slate-900 text-slate-650'
                        : 'bg-slate-900-70 border-slate-800-60 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                      isChecked
                        ? 'bg-theme-glow border-theme-primary/50 text-theme-primary'
                        : 'border-slate-750 bg-slate-950'
                    }`}>
                      {isChecked && <Check size={12} strokeWidth={3} />}
                    </div>
                    <div className="flex-grow text-xs">
                      <span className={`font-bold ${isChecked ? 'line-through text-slate-600' : 'text-theme-primary'}`}>
                        {formatQuantity(scaled)} {ing.unit}
                      </span>
                      <span className={`ml-1.5 ${isChecked ? 'line-through text-slate-500' : ''}`}>
                        {ing.name}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold uppercase text-slate-600 px-2 py-0.5 rounded bg-slate-950-65">
                      {ing.department}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructions Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 border-b border-slate-900 pb-3">Step-by-Step Directions</h3>
            <div className="space-y-3">
              {recipe.instructions.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-905 border border-slate-850">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-xl bg-theme-glow text-theme-primary font-black text-xs border border-theme-primary-20">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Star Rating Selector */}
          <div className="border-t border-slate-900 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold text-slate-350">Rate this recipe:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className="p-0.5 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star
                      size={16}
                      className={star <= userRating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <span className="text-micro font-semibold text-slate-500">
              Rated: {userRating}.0 / 5.0
            </span>
          </div>

          {/* Action Row */}
          <div className="flex gap-3 pt-4 border-t border-slate-900">
            <button
              onClick={() => {
                onAddToPlan({ ...recipe, servings }); // Pass recipe with current servings selected
                onClose();
              }}
              className="flex-grow flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-black px-6 py-4 shadow-xl shadow-theme-glow transition-all duration-300 active:scale-95 text-xs cursor-pointer"
            >
              <Calendar size={16} />
              <span>Schedule for this Week ({servings} Servings)</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 font-bold hover:bg-slate-800 text-xs transition-all duration-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
