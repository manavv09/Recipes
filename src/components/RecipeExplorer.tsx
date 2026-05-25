import React, { useState, useMemo } from 'react';
import type { Recipe } from '../types';
import { RecipeCard } from './RecipeCard';
import { Search, SlidersHorizontal, EyeOff, Plus, Heart } from 'lucide-react';

interface RecipeExplorerProps {
  recipes: Recipe[];
  onViewDetails: (recipe: Recipe) => void;
  onAddToPlan: (recipe: Recipe) => void;
  favorites: string[];
  onToggleFavorite: (recipeId: string) => void;
  onOpenCreateModal: () => void;
}

type SortOption = 'default' | 'time-low' | 'calories-low' | 'calories-high' | 'rating-high';

export const RecipeExplorer: React.FC<RecipeExplorerProps> = ({
  recipes,
  onViewDetails,
  onAddToPlan,
  favorites,
  onToggleFavorite,
  onOpenCreateModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<string>('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [showFilters, setShowFilters] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Dynamic cuisines
  const cuisines = useMemo(() => {
    const list = recipes.map((r) => r.cuisine);
    return ['All', ...Array.from(new Set(list))];
  }, [recipes]);

  // Dynamic tags list
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    recipes.forEach((r) => r.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, [recipes]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter & Sort logic
  const filteredRecipes = useMemo(() => {
    let result = [...recipes];

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.ingredients.some((ing) => ing.name.toLowerCase().includes(q))
      );
    }

    // Cuisine
    if (selectedCuisine !== 'All') {
      result = result.filter((r) => r.cuisine === selectedCuisine);
    }

    // Favorites Only
    if (showFavoritesOnly) {
      result = result.filter((r) => favorites.includes(r.id));
    }

    // Tags
    if (selectedTags.length > 0) {
      result = result.filter((r) =>
        selectedTags.every((t) => r.tags.includes(t))
      );
    }

    // Sorting
    if (sortBy === 'time-low') {
      result.sort((a, b) => (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime));
    } else if (sortBy === 'calories-low') {
      result.sort((a, b) => a.calories - b.calories);
    } else if (sortBy === 'calories-high') {
      result.sort((a, b) => b.calories - a.calories);
    } else if (sortBy === 'rating-high') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [recipes, searchQuery, selectedCuisine, selectedTags, sortBy, showFavoritesOnly, favorites]);

  return (
    <div className="space-y-6">
      {/* Upper header action row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-900 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Recipe Catalog</h2>
          <p className="text-xs text-slate-400 mt-1">
            Browse through muscle-building gym diets, quick prep snacks, and custom meals.
          </p>
        </div>

        <button
          onClick={onOpenCreateModal}
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-black text-xs transition-all shadow-md shadow-theme-glow active:scale-95 cursor-pointer"
        >
          <Plus size={14} strokeWidth={3} />
          <span>Add Custom Recipe</span>
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search input */}
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipes, ingredients, cuisines..."
            className="w-full bg-slate-900 border border-slate-850 rounded-2xl pl-12 pr-4 py-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none shadow-inner"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {/* Favorite Toggle button */}
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl border text-xs font-bold transition-all duration-300 ${
              showFavoritesOnly
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 shadow-sm shadow-rose-500-10'
                : 'bg-slate-905 text-slate-350 border-slate-850 hover:bg-slate-900'
            }`}
            title="Toggle Favorites Only"
          >
            <Heart size={14} className={showFavoritesOnly ? 'fill-rose-500 text-rose-500' : ''} />
            <span>Favorites</span>
          </button>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1.5 px-4 py-3 rounded-2xl border text-xs font-bold transition-all duration-300 ${
              showFilters || selectedTags.length > 0
                ? 'bg-theme-glow text-theme-primary border-theme-primary/30'
                : 'bg-slate-905 text-slate-350 border-slate-850 hover:bg-slate-900'
            }`}
          >
            <SlidersHorizontal size={14} />
            <span>Filters {selectedTags.length > 0 && `(${selectedTags.length})`}</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-slate-905 border border-slate-850 rounded-2xl px-4 py-3 text-xs text-slate-300 font-bold focus:outline-none cursor-pointer"
          >
            <option value="default">Sort by: Default</option>
            <option value="time-low">Cook Time: Shortest</option>
            <option value="calories-low">Calories: Low to High</option>
            <option value="calories-high">Calories: High to Low</option>
            <option value="rating-high">Rating: Highest</option>
          </select>
        </div>
      </div>

      {/* Expanded Tag Filters */}
      {showFilters && (
        <div className="glass-panel p-5 rounded-2xl border border-slate-850 animate-slide-down">
          <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 pl-1">Filter by Diet / Tag</h4>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all duration-300 ${
                    isSelected
                      ? 'bg-theme-primary text-slate-950 border-white shadow-md'
                      : 'bg-slate-950 text-slate-450 border-slate-850 hover:border-slate-800'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="mt-4 text-xs font-bold text-rose-400 hover:text-rose-350 transition-colors"
            >
              Clear all active filters
            </button>
          )}
        </div>
      )}

      {/* Cuisine Quick Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => setSelectedCuisine(cuisine)}
            className={`px-4.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 border ${
              selectedCuisine === cuisine
                ? 'bg-slate-100 text-slate-950 border-white shadow-md'
                : 'bg-slate-900 text-slate-450 border-slate-850 hover:bg-slate-800'
            }`}
          >
            {cuisine}
          </button>
        ))}
      </div>

      {/* Grid of Results */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onViewDetails={onViewDetails}
              onAddToPlan={onAddToPlan}
              isFavorite={favorites.includes(recipe.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center glass-panel rounded-3xl border border-slate-850">
          <EyeOff size={44} className="text-slate-600 mb-4 animate-pulse" />
          <h3 className="text-sm font-bold text-slate-350">No Recipes Match Your Filters</h3>
          <p className="mt-2 text-xs text-slate-500 max-w-sm px-6 leading-relaxed">
            Try adjusting your search criteria, clearing your filters, or toggling off the favorites only mode.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCuisine('All');
              setSelectedTags([]);
              setSortBy('default');
              setShowFavoritesOnly(false);
            }}
            className="mt-6 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-theme-primary font-bold px-4 py-2 text-xs transition-all"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
