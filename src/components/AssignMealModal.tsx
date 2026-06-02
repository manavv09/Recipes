import { useState, useEffect } from 'react';
import type { Recipe } from '@/types';
import { getRecipeCategoryBreadcrumb } from '@/data/categories';
import { DAYS } from './WeeklyPlanner';
import { Calendar, Users, Coffee, Utensils, Moon, Minus, Plus } from 'lucide-react';
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
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { RecipeImage } from '@/components/RecipeImage';

interface AssignMealModalProps {
  recipes: Recipe[];
  prefilledDay: string | null;
  prefilledMealType: 'breakfast' | 'lunch' | 'dinner' | null;
  prefilledRecipe: Recipe | null;
  onClose: () => void;
  onConfirm: (
    recipe: Recipe,
    day: string,
    mealType: 'breakfast' | 'lunch' | 'dinner',
    servings: number
  ) => void;
}

const mealTypes = ['breakfast', 'lunch', 'dinner'] as const;
const mealIcons = { breakfast: Coffee, lunch: Utensils, dinner: Moon };

export function AssignMealModal({
  recipes,
  prefilledDay,
  prefilledMealType,
  prefilledRecipe,
  onClose,
  onConfirm
}: AssignMealModalProps) {
  const [selectedRecipeId, setSelectedRecipeId] = useState('');
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedMealType, setSelectedMealType] = useState<'breakfast' | 'lunch' | 'dinner'>('dinner');
  const [servings, setServings] = useState(4);

  useEffect(() => {
    if (prefilledRecipe) {
      setSelectedRecipeId(prefilledRecipe.id);
      setServings(prefilledRecipe.servings);
    } else if (recipes.length > 0) {
      setSelectedRecipeId(recipes[0].id);
      setServings(recipes[0].servings);
    }
    if (prefilledDay) setSelectedDay(prefilledDay);
    if (prefilledMealType) setSelectedMealType(prefilledMealType);
  }, [prefilledRecipe, prefilledDay, prefilledMealType, recipes]);

  const currentRecipe = recipes.find((r) => r.id === selectedRecipeId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentRecipe) return;
    onConfirm(currentRecipe, selectedDay, selectedMealType, servings);
    onClose();
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="text-primary size-5" />
            Schedule meal
          </DialogTitle>
          <DialogDescription>Add a recipe to your weekly plan.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Recipe</Label>
            {prefilledRecipe ? (
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <RecipeImage recipe={prefilledRecipe} className="size-12 rounded-md" />
                <div>
                  <p className="font-medium">{prefilledRecipe.title}</p>
                  <p className="text-muted-foreground text-xs">
                    {getRecipeCategoryBreadcrumb(prefilledRecipe)}
                  </p>
                </div>
              </div>
            ) : (
              <Select value={selectedRecipeId} onValueChange={(id) => {
                setSelectedRecipeId(id);
                const r = recipes.find((x) => x.id === id);
                if (r) setServings(r.servings);
              }}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose recipe" />
                </SelectTrigger>
                <SelectContent>
                  {recipes.map((r) => (
                    <SelectItem key={r.id} value={r.id}>
                      {r.title} · {getRecipeCategoryBreadcrumb(r)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <div className="space-y-2">
            <Label>Day</Label>
            {prefilledDay ? (
              <p className="bg-muted rounded-lg border px-3 py-2 text-sm font-medium">{prefilledDay}</p>
            ) : (
              <Select value={selectedDay} onValueChange={setSelectedDay}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DAYS.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <div className="space-y-2">
            <Label>Meal slot</Label>
            {prefilledMealType ? (
              <p className="bg-muted flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium capitalize">
                {(() => {
                  const Icon = mealIcons[prefilledMealType];
                  return <Icon className="text-primary size-4" />;
                })()}
                {prefilledMealType}
              </p>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {mealTypes.map((type) => {
                  const Icon = mealIcons[type];
                  const active = selectedMealType === type;
                  return (
                    <Button
                      key={type}
                      type="button"
                      variant={active ? 'secondary' : 'outline'}
                      className={cn('h-auto flex-col gap-1 py-3 capitalize', active && 'ring-primary ring-1')}
                      onClick={() => setSelectedMealType(type)}
                    >
                      <Icon className="size-4" />
                      {type}
                    </Button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-1.5">
              <Users className="size-3.5" />
              Servings
            </Label>
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setServings((s) => Math.max(1, s - 1))}
              >
                <Minus className="size-4" />
              </Button>
              <span className="text-lg font-semibold">{servings}</span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setServings((s) => Math.min(20, s + 1))}
              >
                <Plus className="size-4" />
              </Button>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Confirm schedule
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
