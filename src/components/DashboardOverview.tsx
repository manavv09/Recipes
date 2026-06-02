import { useMemo } from 'react';
import type { WeeklyMealPlan, Recipe, GymGoal } from '@/types';
import { getRecipeCategoryBreadcrumb } from '@/data/categories';
import { Flame, Dumbbell, Award, Plus, Calendar, Star, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RecipeImage } from '@/components/RecipeImage';
import type { DietPreference } from '@/utils/diet';
import { getDietLabel } from '@/utils/diet';

interface DashboardOverviewProps {
  mealPlan: WeeklyMealPlan;
  recipes: Recipe[];
  allRecipesCount?: number;
  dietPreference?: DietPreference;
  gymGoal: GymGoal | null;
  onViewRecipe: (recipe: Recipe) => void;
  onAddToPlan: (recipe: Recipe) => void;
  setActiveTab: (tab: 'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping') => void;
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function MacroBar({ label, value, target, className }: { label: string; value: number; target: number; className?: string }) {
  const pct = Math.min(100, Math.round((value / target) * 100)) || 0;
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">
          {value}g / {target}g
        </span>
      </div>
      <Progress value={pct} className={cn('h-2', className)} />
    </div>
  );
}

export function DashboardOverview({
  mealPlan,
  recipes,
  allRecipesCount,
  dietPreference = 'all',
  gymGoal,
  onViewRecipe,
  onAddToPlan,
  setActiveTab
}: DashboardOverviewProps) {
  const today = useMemo(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  }, []);

  const weeklyStats = useMemo(() => {
    let calories = 0;
    let protein = 0;
    let carbs = 0;
    let fat = 0;
    Object.values(mealPlan).forEach((dayMeal) => {
      [dayMeal.breakfast, dayMeal.lunch, dayMeal.dinner]
        .filter((m): m is NonNullable<typeof m> => m !== undefined)
        .forEach((meal) => {
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
    return { calories: 14000, protein: 910, carbs: 1540, fat: 455 };
  }, [gymGoal]);

  const featuredRecipe = useMemo(() => {
    if (!recipes.length) return null;
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 1).getTime()) / 86400000
    );
    return recipes[dayOfYear % recipes.length];
  }, [recipes]);

  const caloriePct = Math.min(100, Math.round((weeklyStats.calories / targets.calories) * 100)) || 0;

  return (
    <div className="space-y-8">
      <Card className="border-primary/20 bg-gradient-to-br from-card to-muted/20">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-2xl md:text-3xl">
              Welcome to <span className="text-primary">RecipeForge</span>
            </CardTitle>
            <CardDescription className="mt-2 max-w-xl text-base">
              Plan meals, track macros, and explore recipes with video tutorials.
              {dietPreference !== 'all' && allRecipesCount != null && (
                <span className="text-primary mt-1 block text-sm">
                  Showing {dietPreference === 'veg' ? 'vegetarian' : dietPreference === 'vegan' ? 'vegan' : 'non-vegetarian'} recipes (
                  {recipes.length} of {allRecipesCount}).
                </span>
              )}
            </CardDescription>
          </div>
          <Button onClick={() => setActiveTab('gym')}>
            <Dumbbell className="size-4" />
            Gym macro targets
          </Button>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="space-y-8 xl:col-span-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-semibold">
                <Calendar className="text-primary size-4" />
                Weekly schedule
              </h3>
              <Button variant="link" className="h-auto p-0 text-xs" onClick={() => setActiveTab('planner')}>
                Open planner →
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-7">
              {DAYS.map((day) => {
                const dayPlan = mealPlan[day] || {};
                const isToday = day === today;
                return (
                  <Card
                    key={day}
                    className={cn('py-3', isToday && 'border-primary ring-1 ring-primary/30')}
                  >
                    <CardContent className="space-y-2 p-3">
                      <p
                        className={cn(
                          'text-center text-[10px] font-bold uppercase tracking-wider',
                          isToday ? 'text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {day.slice(0, 3)}
                      </p>
                      {(['breakfast', 'lunch', 'dinner'] as const).map((mealType) => {
                        const meal = dayPlan[mealType];
                        return (
                          <div
                            key={mealType}
                            className="bg-muted relative flex h-10 items-center justify-center overflow-hidden rounded-md border"
                          >
                            {meal ? (
                              <RecipeImage
                                recipe={meal.recipe}
                                className="size-full"
                                imgClassName="pointer-events-none"
                              />
                            ) : (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="size-full rounded-none"
                                onClick={() => setActiveTab('planner')}
                              >
                                <Plus className="text-muted-foreground size-3" />
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

          {featuredRecipe && (
            <Card className="overflow-hidden pt-0">
              <div className="grid md:grid-cols-5">
                <div className="relative md:col-span-2">
                  <RecipeImage
                    recipe={featuredRecipe}
                    className="aspect-video w-full md:aspect-auto md:h-full min-h-48"
                  />
                </div>
                <CardContent className="flex flex-col justify-between gap-4 md:col-span-3 md:p-6">
                  <div>
                    <div className="mb-2 flex flex-wrap gap-2">
                      <Badge
                        variant={getDietLabel(featuredRecipe) === 'Non-Veg' ? 'outline' : 'secondary'}
                        className={
                          getDietLabel(featuredRecipe) === 'Vegan'
                            ? 'border-teal-500/30 text-teal-600 dark:text-teal-400'
                            : getDietLabel(featuredRecipe) === 'Veg'
                              ? 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                              : 'border-rose-500/30 text-rose-600 dark:text-rose-400'
                        }
                      >
                        {getDietLabel(featuredRecipe)}
                      </Badge>
                      <Badge variant="secondary">{getRecipeCategoryBreadcrumb(featuredRecipe)}</Badge>
                      {featuredRecipe.macros && (
                        <Badge>{featuredRecipe.macros.protein}g protein</Badge>
                      )}
                    </div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold">
                      <Star className="size-4 fill-amber-400 text-amber-400" />
                      Recipe of the day
                    </h4>
                    <p className="mt-1 font-medium">{featuredRecipe.title}</p>
                    <p className="text-muted-foreground mt-2 text-sm">{featuredRecipe.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => onViewRecipe(featuredRecipe)}>
                      Details
                    </Button>
                    <Button onClick={() => onAddToPlan(featuredRecipe)}>Add to plan</Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          )}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <Award className="text-primary size-4" />
                Weekly nutrition
              </CardTitle>
              <Badge variant="outline" className="capitalize">
                {gymGoal?.goal || 'maintain'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <Flame className="size-5 text-amber-500" />
                <span className="text-3xl font-bold">{weeklyStats.calories}</span>
                <span className="text-muted-foreground text-sm">kcal planned</span>
              </div>
              <Progress value={caloriePct} className="h-3" />
              <p className="text-muted-foreground text-xs">
                {caloriePct}% of {targets.calories} kcal weekly target
              </p>
            </div>

            <MacroBar label="Protein" value={weeklyStats.protein} target={targets.protein} />
            <MacroBar label="Carbs" value={weeklyStats.carbs} target={targets.carbs} />
            <MacroBar label="Fat" value={weeklyStats.fat} target={targets.fat} />

            <div className="bg-muted/30 flex gap-2 rounded-lg border p-3 text-xs">
              <Info className="text-primary mt-0.5 size-3.5 shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                Totals update from your weekly planner servings. Set targets in Gym Diet.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
