import { useState, useMemo } from 'react';
import type { Recipe } from '@/types';
import { RecipeCard } from './RecipeCard';
import { CategoryFilter } from './CategoryFilter';
import { RECIPE_CATEGORIES } from '@/data/categories';
import { hasRecipeVideo } from '@/utils/youtube';
import { Search, SlidersHorizontal, EyeOff, Plus, Heart, Film, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Toggle } from '@/components/ui/toggle';
import type { DietPreference } from '@/utils/diet';

interface RecipeExplorerProps {
  recipes: Recipe[];
  totalRecipesCount?: number;
  dietPreference?: DietPreference;
  onViewDetails: (recipe: Recipe) => void;
  onAddToPlan: (recipe: Recipe) => void;
  favorites: string[];
  onToggleFavorite: (recipeId: string) => void;
  onOpenCreateModal: () => void;
}

type SortOption = 'default' | 'time-low' | 'calories-low' | 'calories-high' | 'rating-high';

export function RecipeExplorer({
  recipes,
  totalRecipesCount,
  dietPreference = 'all',
  onViewDetails,
  onAddToPlan,
  favorites,
  onToggleFavorite,
  onOpenCreateModal
}: RecipeExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [showFilters, setShowFilters] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [videosOnly, setVideosOnly] = useState(false);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    recipes.forEach((r) => r.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, [recipes]);

  const recipeCounts = useMemo(() => {
    const counts: Record<string, number> = { All: recipes.length };
    RECIPE_CATEGORIES.forEach((cat) => {
      counts[cat.label] = recipes.filter((r) => r.category === cat.label).length;
    });
    return counts;
  }, [recipes]);

  const subcategoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    recipes.forEach((r) => {
      if (r.subcategory) {
        counts[r.subcategory] = (counts[r.subcategory] ?? 0) + 1;
      }
    });
    return counts;
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    let result = [...recipes];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ||
          (r.subcategory?.toLowerCase().includes(q) ?? false) ||
          r.ingredients.some((ing) => ing.name.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter((r) => r.category === selectedCategory);
    }
    if (selectedSubcategory) {
      result = result.filter((r) => r.subcategory === selectedSubcategory);
    }
    if (showFavoritesOnly) {
      result = result.filter((r) => favorites.includes(r.id));
    }
    if (videosOnly) {
      result = result.filter((r) => hasRecipeVideo(r.videoUrl));
    }
    if (selectedTags.length > 0) {
      result = result.filter((r) => selectedTags.every((t) => r.tags.includes(t)));
    }

    if (sortBy === 'time-low') {
      result.sort((a, b) => a.prepTime + a.cookTime - (b.prepTime + b.cookTime));
    } else if (sortBy === 'calories-low') {
      result.sort((a, b) => a.calories - b.calories);
    } else if (sortBy === 'calories-high') {
      result.sort((a, b) => b.calories - a.calories);
    } else if (sortBy === 'rating-high') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [
    recipes,
    searchQuery,
    selectedCategory,
    selectedSubcategory,
    selectedTags,
    sortBy,
    showFavoritesOnly,
    videosOnly,
    favorites
  ]);

  const videoCount = recipes.filter((r) => hasRecipeVideo(r.videoUrl)).length;

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSubcategory(null);
    setSelectedTags([]);
    setSortBy('default');
    setShowFavoritesOnly(false);
    setVideosOnly(false);
  };

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-gradient-to-br from-card to-muted/30">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <div className="text-primary flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="size-4" />
                Recipe catalog
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                Explore world cuisines
              </CardTitle>
              <CardDescription className="max-w-xl text-base">
                Indian regional dishes, Italian classics, French bistro fare, and gym meal prep —
                with YouTube video tutorials.
              </CardDescription>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge variant="secondary">
                  {recipes.length} recipes
                  {dietPreference !== 'all' && totalRecipesCount != null && (
                    <span className="text-muted-foreground font-normal">
                      {' '}
                      · {dietPreference === 'veg' ? 'Veg' : dietPreference === 'vegan' ? 'Vegan' : 'Non-Veg'} filter
                    </span>
                  )}
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Film className="size-3" />
                  {videoCount} videos
                </Badge>
              </div>
            </div>
            <Button onClick={onOpenCreateModal} className="shrink-0">
              <Plus className="size-4" />
              Add recipe
            </Button>
          </div>
        </CardHeader>
      </Card>

      <CategoryFilter
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        onSelectCategory={setSelectedCategory}
        onSelectSubcategory={setSelectedSubcategory}
        recipeCounts={recipeCounts}
        subcategoryCounts={subcategoryCounts}
      />

      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipes, regions, ingredients..."
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Toggle
            pressed={showFavoritesOnly}
            onPressedChange={setShowFavoritesOnly}
            variant="outline"
            className="gap-1.5 data-[state=on]:border-rose-500/50 data-[state=on]:bg-rose-500/10 data-[state=on]:text-rose-400"
          >
            <Heart className={showFavoritesOnly ? 'fill-rose-500 text-rose-500 size-4' : 'size-4'} />
            Favorites
          </Toggle>
          <Toggle
            pressed={videosOnly}
            onPressedChange={setVideosOnly}
            variant="outline"
            className="gap-1.5"
          >
            <Film className="size-4" />
            Has video
          </Toggle>
          <Button
            variant={showFilters || selectedTags.length > 0 ? 'secondary' : 'outline'}
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="size-4" />
            Tags {selectedTags.length > 0 && `(${selectedTags.length})`}
          </Button>
          <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="time-low">Shortest cook time</SelectItem>
              <SelectItem value="calories-low">Calories: low → high</SelectItem>
              <SelectItem value="calories-high">Calories: high → low</SelectItem>
              <SelectItem value="rating-high">Highest rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {showFilters && (
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wider">
              Filter by tag
            </p>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => {
                const selected = selectedTags.includes(tag);
                return (
                  <Button
                    key={tag}
                    size="sm"
                    variant={selected ? 'default' : 'outline'}
                    onClick={() =>
                      setSelectedTags((prev) =>
                        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
                      )
                    }
                  >
                    {tag}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <p className="text-muted-foreground text-sm">
        Showing <span className="text-foreground font-medium">{filteredRecipes.length}</span> of{' '}
        {recipes.length}
        {selectedSubcategory && (
          <span className="text-primary ml-1">· {selectedSubcategory}</span>
        )}
      </p>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center py-16 text-center">
            <EyeOff className="text-muted-foreground mb-4 size-12" />
            <CardTitle className="text-base">No recipes found</CardTitle>
            <CardDescription className="mt-2 max-w-sm">
              {dietPreference !== 'all'
                ? `No ${dietPreference === 'veg' ? 'vegetarian' : dietPreference === 'vegan' ? 'vegan' : 'non-vegetarian'} recipes match these filters. Try another category or switch diet in the sidebar.`
                : 'Try a different category or reset your filters.'}
            </CardDescription>
            <Button variant="outline" className="mt-6" onClick={resetFilters}>
              Reset filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
