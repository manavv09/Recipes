import type { Recipe } from '@/types';
import { getRecipeCategoryBreadcrumb } from '@/data/categories';
import { hasRecipeVideo, toYouTubeWatchUrl } from '@/utils/youtube';
import {
  Clock,
  Flame,
  Plus,
  Eye,
  Heart,
  Star,
  Dumbbell,
  Film,
  ChefHat
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { RecipeImage } from '@/components/RecipeImage';
import { getDietLabel } from '@/utils/diet';

interface RecipeCardProps {
  recipe: Recipe;
  onViewDetails: (recipe: Recipe) => void;
  onAddToPlan: (recipe: Recipe) => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string) => void;
}

export function RecipeCard({
  recipe,
  onViewDetails,
  onAddToPlan,
  isFavorite,
  onToggleFavorite
}: RecipeCardProps) {
  const categoryLabel = getRecipeCategoryBreadcrumb(recipe);
  const showVideo = hasRecipeVideo(recipe.videoUrl);
  const dietLabel = getDietLabel(recipe);

  const difficultyVariant =
    recipe.difficulty === 'Easy'
      ? 'secondary'
      : recipe.difficulty === 'Medium'
        ? 'outline'
        : 'destructive';

  return (
    <Card className="group overflow-hidden pt-0 transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <RecipeImage
          recipe={recipe}
          className="size-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <Badge
            className={cn(
              'w-fit backdrop-blur-sm',
              dietLabel === 'Vegan'
                ? 'border-teal-500/40 bg-teal-500/20 text-teal-100'
                : dietLabel === 'Veg'
                  ? 'border-emerald-500/40 bg-emerald-500/20 text-emerald-100'
                  : 'border-rose-500/40 bg-rose-500/20 text-rose-100'
            )}
          >
            {dietLabel}
          </Badge>
          <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
            {categoryLabel}
          </Badge>
          {recipe.tags.includes('Authentic') && (
            <Badge variant="outline" className="w-fit border-amber-500/40 bg-amber-500/10 text-amber-200">
              Authentic
            </Badge>
          )}
          {showVideo && (
            <Badge variant="destructive" className="w-fit gap-1">
              <Film className="size-3" />
              Video
            </Badge>
          )}
        </div>

        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 size-8 bg-background/80 backdrop-blur-sm"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.id);
          }}
        >
          <Heart className={cn('size-4', isFavorite && 'fill-rose-500 text-rose-500')} />
        </Button>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <Badge variant={difficultyVariant}>{recipe.difficulty}</Badge>
          <Badge variant="secondary" className="gap-1 bg-black/50 text-white backdrop-blur-sm">
            <Flame className="size-3 text-amber-400" />
            {recipe.calories} kcal
          </Badge>
        </div>
      </div>

      <CardContent className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-semibold leading-tight">{recipe.title}</h3>
          {recipe.rating && (
            <div className="flex shrink-0 items-center gap-0.5 text-xs font-medium text-amber-500">
              <Star className="size-3.5 fill-amber-500" />
              {recipe.rating}
            </div>
          )}
        </div>

        <p className="text-muted-foreground line-clamp-2 text-sm">{recipe.description}</p>

        {recipe.macros && (
          <div className="bg-muted/50 flex items-center justify-between rounded-lg border px-3 py-2 text-xs">
            <span className="text-muted-foreground flex items-center gap-1 font-medium">
              <Dumbbell className="text-primary size-3.5" />
              Macros
            </span>
            <span className="font-medium">
              P {recipe.macros.protein}g · C {recipe.macros.carbs}g · F {recipe.macros.fat}g
            </span>
          </div>
        )}

        <div className="text-muted-foreground flex gap-4 text-xs">
          <span className="flex items-center gap-1">
            <Clock className="text-primary size-3.5" />
            {recipe.prepTime + recipe.cookTime} min
          </span>
          <span className="flex items-center gap-1">
            <ChefHat className="text-primary size-3.5" />
            {recipe.servings} servings
          </span>
        </div>
      </CardContent>

      <CardFooter className="gap-2 border-t pt-4">
        <Button variant="outline" className="flex-1" size="sm" onClick={() => onViewDetails(recipe)}>
          <Eye className="size-3.5" />
          Details
        </Button>
        {showVideo && (
          <Button
            variant="outline"
            size="icon"
            className="size-9 shrink-0 text-red-500 border-red-200/50 hover:bg-red-50 dark:border-red-950/50 dark:hover:bg-red-950/20 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              window.open(toYouTubeWatchUrl(recipe.videoUrl), '_blank', 'noopener,noreferrer');
            }}
            title="Watch video tutorial on YouTube"
          >
            <Film className="size-4" />
          </Button>
        )}
        <Button className="flex-1" size="sm" onClick={() => onAddToPlan(recipe)}>
          <Plus className="size-3.5" />
          Schedule
        </Button>
      </CardFooter>
    </Card>
  );
}
