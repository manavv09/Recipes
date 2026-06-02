import type { WeeklyMealPlan, Recipe, DayMeal } from '@/types';
import { Trash2, Plus, Users, Coffee, Utensils, Moon, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RecipeImage } from '@/components/RecipeImage';

interface WeeklyPlannerProps {
  mealPlan: WeeklyMealPlan;
  onRemoveMeal: (day: string, mealType: 'breakfast' | 'lunch' | 'dinner') => void;
  onUpdateServings: (day: string, mealType: 'breakfast' | 'lunch' | 'dinner', servings: number) => void;
  onOpenAddModal: (day: string, mealType: 'breakfast' | 'lunch' | 'dinner') => void;
  onViewRecipe: (recipe: Recipe) => void;
}

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const MEAL_TYPES = [
  { key: 'breakfast' as const, label: 'Breakfast', icon: Coffee },
  { key: 'lunch' as const, label: 'Lunch', icon: Utensils },
  { key: 'dinner' as const, label: 'Dinner', icon: Moon }
];

export function WeeklyPlanner({
  mealPlan,
  onRemoveMeal,
  onUpdateServings,
  onOpenAddModal,
  onViewRecipe
}: WeeklyPlannerProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Weekly meal schedule</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Plan meals for the week. Your grocery list updates automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {DAYS.map((day) => {
          const dayPlan: DayMeal = mealPlan[day] || {};
          const planned = Object.values(dayPlan).filter(Boolean).length;

          return (
            <Card key={day}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm uppercase tracking-wide">{day}</CardTitle>
                  <Badge variant="secondary">{planned} planned</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {MEAL_TYPES.map(({ key, label, icon: Icon }) => {
                  const meal = dayPlan[key];
                  return (
                    <div key={key} className="space-y-1.5">
                      <div className="text-muted-foreground flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider">
                        <Icon className="size-3" />
                        {label}
                      </div>
                      {meal ? (
                        <div className="group flex items-center gap-2 rounded-lg border bg-muted/30 p-2">
                          <button
                            type="button"
                            onClick={() => onViewRecipe(meal.recipe)}
                            className="size-10 shrink-0 overflow-hidden rounded-md"
                          >
                            <RecipeImage recipe={meal.recipe} className="size-full" />
                          </button>
                          <div className="min-w-0 flex-1">
                            <button
                              type="button"
                              onClick={() => onViewRecipe(meal.recipe)}
                              className="hover:text-primary line-clamp-1 text-left text-xs font-medium"
                            >
                              {meal.recipe.title}
                            </button>
                            <div className="mt-1 flex items-center gap-1">
                              <Users className="text-muted-foreground size-3" />
                              <span className="text-muted-foreground text-[10px]">{meal.servings} srv</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="size-5"
                                onClick={() => onUpdateServings(day, key, Math.max(1, meal.servings - 1))}
                              >
                                <Minus className="size-2.5" />
                              </Button>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="size-5"
                                onClick={() => onUpdateServings(day, key, Math.min(20, meal.servings + 1))}
                              >
                                <Plus className="size-2.5" />
                              </Button>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-destructive size-7"
                            onClick={() => onRemoveMeal(day, key)}
                          >
                            <Trash2 className="size-3.5" />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          type="button"
                          variant="outline"
                          className={cn('h-auto w-full border-dashed py-3 text-xs')}
                          onClick={() => onOpenAddModal(day, key)}
                        >
                          <Plus className="size-3.5" />
                          Add meal
                        </Button>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
