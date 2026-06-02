import { useState, useEffect } from 'react';
import type { Recipe } from '@/types';
import { getRecipeCategoryBreadcrumb } from '@/data/categories';
import { scaleAmount, formatQuantity } from '@/utils/helpers';
import { hasRecipeVideo, toYouTubeWatchUrl, getYouTubeThumbnailUrl } from '@/utils/youtube';
import { Users, Clock, Flame, Check, Calendar, Play, Star, Dumbbell, Heart, Film, Minus, Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RecipeImage } from '@/components/RecipeImage';

interface RecipeDetailModalProps {
  recipe: Recipe;
  onClose: () => void;
  onAddToPlan: (recipe: Recipe) => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string) => void;
  onRateRecipe?: (recipeId: string, rating: number) => void;
}

export function RecipeDetailModal({
  recipe,
  onClose,
  onAddToPlan,
  isFavorite,
  onToggleFavorite,
  onRateRecipe
}: RecipeDetailModalProps) {
  const [servings, setServings] = useState(recipe.servings);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [showVideo, setShowVideo] = useState(() => hasRecipeVideo(recipe.videoUrl));
  const [userRating, setUserRating] = useState(recipe.rating || 5);

  useEffect(() => {
    setServings(recipe.servings);
    setCheckedIngredients({});
    setShowVideo(hasRecipeVideo(recipe.videoUrl));
    setUserRating(recipe.rating || 5);
  }, [recipe]);

  const getScaledMacro = (macroVal?: number) => {
    if (!macroVal) return 0;
    return Math.round(scaleAmount(macroVal, recipe.servings, servings));
  };

  const scaledCalories = Math.round(scaleAmount(recipe.calories, recipe.servings, servings));

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[90vh] max-w-3xl flex-col gap-0 overflow-hidden p-0 sm:max-w-3xl"
      >
        <div className="relative h-48 shrink-0 sm:h-56">
          <RecipeImage recipe={recipe} className="size-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute top-3 right-3 flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="size-9 bg-background/80 backdrop-blur-sm"
              onClick={() => onToggleFavorite(recipe.id)}
            >
              <Heart className={cn('size-4', isFavorite && 'fill-rose-500 text-rose-500')} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="size-9 bg-background/80 backdrop-blur-sm"
              onClick={onClose}
            >
              <X className="size-4" />
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className="mb-2">{getRecipeCategoryBreadcrumb(recipe)}</Badge>
            <DialogHeader className="p-0 text-left">
              <DialogTitle className="text-xl sm:text-2xl">{recipe.title}</DialogTitle>
            </DialogHeader>
          </div>
        </div>

        <ScrollArea className="flex-1 px-6">
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="bg-muted/50 rounded-lg border p-3 text-center">
                <Clock className="text-primary mx-auto mb-1 size-4" />
                <p className="text-muted-foreground text-[10px] uppercase">Time</p>
                <p className="text-sm font-semibold">{recipe.prepTime + recipe.cookTime} min</p>
              </div>
              <div className="bg-muted/50 rounded-lg border p-3 text-center">
                <Flame className="mx-auto mb-1 size-4 text-amber-500" />
                <p className="text-muted-foreground text-[10px] uppercase">Calories</p>
                <p className="text-sm font-semibold">{scaledCalories}</p>
              </div>
              <div className="bg-muted/50 col-span-2 rounded-lg border p-3 text-center sm:col-span-2">
                <Dumbbell className="text-primary mx-auto mb-1 size-4" />
                <p className="text-muted-foreground text-[10px] uppercase">Macros</p>
                {recipe.macros ? (
                  <p className="text-sm font-semibold">
                    P {getScaledMacro(recipe.macros.protein)}g · C{' '}
                    {getScaledMacro(recipe.macros.carbs)}g · F {getScaledMacro(recipe.macros.fat)}g
                  </p>
                ) : (
                  <p className="text-muted-foreground text-sm">—</p>
                )}
              </div>
            </div>

            {hasRecipeVideo(recipe.videoUrl) && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 px-1">
                  <Film className="text-primary size-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Video tutorial</span>
                </div>
                <button
                  type="button"
                  onClick={() => window.open(toYouTubeWatchUrl(recipe.videoUrl), '_blank', 'noopener,noreferrer')}
                  className="group relative block w-full aspect-video rounded-xl overflow-hidden border border-border/80 bg-muted cursor-pointer transition-transform duration-300 active:scale-[0.99] hover:shadow-md"
                >
                  <img
                    src={getYouTubeThumbnailUrl(recipe.videoUrl) || ''}
                    alt={`${recipe.title} video tutorial`}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/30" />
                  <div className="absolute size-14 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-500 ring-4 ring-white/10">
                    <Play className="size-6 fill-current ml-0.5" />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                    <Film className="size-3 text-red-500" />
                    Open in YouTube
                  </div>
                </button>
              </div>
            )}

            <DialogDescription className="text-sm leading-relaxed">
              {recipe.description}
            </DialogDescription>

            <Separator />

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold">Ingredients</h3>
                <div className="flex items-center gap-2 rounded-lg border px-2 py-1">
                  <Users className="text-muted-foreground size-3.5" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-7"
                    onClick={() => setServings((s) => Math.max(1, s - 1))}
                  >
                    <Minus className="size-3" />
                  </Button>
                  <span className="w-6 text-center text-sm font-semibold">{servings}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-7"
                    onClick={() => setServings((s) => Math.min(20, s + 1))}
                  >
                    <Plus className="size-3" />
                  </Button>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {recipe.ingredients.map((ing) => {
                  const scaled = scaleAmount(ing.amount, recipe.servings, servings);
                  const checked = !!checkedIngredients[ing.name];
                  return (
                    <button
                      key={ing.name}
                      type="button"
                      onClick={() =>
                        setCheckedIngredients((p) => ({ ...p, [ing.name]: !p[ing.name] }))
                      }
                      className={cn(
                        'flex items-center gap-3 rounded-lg border p-3 text-left text-sm transition-colors',
                        checked && 'bg-muted/30 opacity-60'
                      )}
                    >
                      <div
                        className={cn(
                          'flex size-5 items-center justify-center rounded border',
                          checked && 'bg-primary text-primary-foreground border-primary'
                        )}
                      >
                        {checked && <Check className="size-3" />}
                      </div>
                      <span className={cn('flex-1', checked && 'line-through')}>
                        <span className="text-primary font-medium">
                          {formatQuantity(scaled)} {ing.unit}
                        </span>{' '}
                        {ing.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Directions</h3>
              <ol className="space-y-3">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx} className="flex gap-3 rounded-lg border p-3 text-sm">
                    <span className="bg-primary/10 text-primary flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex items-center gap-2">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium">Rate:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" onClick={() => {
                  setUserRating(star);
                  onRateRecipe?.(recipe.id, star);
                }}>
                  <Star
                    className={cn(
                      'size-4',
                      star <= userRating ? 'fill-amber-400 text-amber-400' : 'text-muted'
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="gap-2 border-t p-4 sm:gap-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              onAddToPlan({ ...recipe, servings });
              onClose();
            }}
          >
            <Calendar className="size-4" />
            Schedule ({servings} servings)
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
