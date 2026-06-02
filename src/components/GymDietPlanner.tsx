import { useState, useEffect, useMemo } from 'react';
import type { GymGoal, Recipe } from '@/types';
import { RecipeCard } from './RecipeCard';
import { Dumbbell, Info, Scale, Percent, Zap, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface GymDietPlannerProps {
  gymGoal: GymGoal | null;
  onSaveGoal: (goal: GymGoal) => void;
  recipes: Recipe[];
  onViewRecipe: (recipe: Recipe) => void;
  onAddToPlan: (recipe: Recipe) => void;
  favorites: string[];
  onToggleFavorite: (recipeId: string) => void;
}

export function GymDietPlanner({
  gymGoal,
  onSaveGoal,
  recipes,
  onViewRecipe,
  onAddToPlan,
  favorites,
  onToggleFavorite
}: GymDietPlannerProps) {
  const [weight, setWeight] = useState(gymGoal?.weight || 75);
  const [activityLevel, setActivityLevel] = useState<GymGoal['activityLevel']>(
    gymGoal?.activityLevel || 'moderate'
  );
  const [goal, setGoal] = useState<GymGoal['goal']>(gymGoal?.goal || 'bulk');
  const [computedGoal, setComputedGoal] = useState<GymGoal | null>(gymGoal);

  const calculateTargets = () => {
    const bmr = weight * 22;
    let multiplier = 1.2;
    if (activityLevel === 'light') multiplier = 1.375;
    else if (activityLevel === 'moderate') multiplier = 1.55;
    else if (activityLevel === 'very_active') multiplier = 1.725;

    let targetCalories = Math.round(bmr * multiplier);
    if (goal === 'bulk') targetCalories += 400;
    else if (goal === 'cut') targetCalories -= 500;

    let proteinMultiplier = 2.0;
    if (goal === 'bulk') proteinMultiplier = 2.2;
    else if (goal === 'cut') proteinMultiplier = 2.4;

    const targetProtein = Math.round(weight * proteinMultiplier);
    const fatPct = goal === 'cut' ? 0.2 : 0.25;
    const targetFat = Math.round((targetCalories * fatPct) / 9);
    const targetCarbs = Math.round(
      Math.max(50, (targetCalories - targetProtein * 4 - targetFat * 9) / 4)
    );

    const updated: GymGoal = {
      weight,
      activityLevel,
      goal,
      calories: targetCalories,
      protein: targetProtein,
      carbs: targetCarbs,
      fat: targetFat
    };
    setComputedGoal(updated);
    onSaveGoal(updated);
  };

  useEffect(() => {
    if (!gymGoal) calculateTargets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goalMatchingRecipes = useMemo(() => {
    if (!computedGoal) return recipes;
    return recipes.filter((recipe) => {
      const isHighProtein = (recipe.macros?.protein || 0) >= 20;
      if (computedGoal.goal === 'cut') return isHighProtein && recipe.calories <= 450;
      if (computedGoal.goal === 'bulk') return isHighProtein || recipe.calories >= 400;
      return isHighProtein;
    });
  }, [recipes, computedGoal]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <Dumbbell className="text-primary size-6" />
          Gym diet & macros
        </h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Calculate protein, carbs, and fat targets for your training goals.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Scale className="text-primary size-4" />
              Biometrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <Label>Body weight</Label>
                <span className="text-primary font-semibold">{weight} kg</span>
              </div>
              <Slider
                min={45}
                max={130}
                step={1}
                value={[weight]}
                onValueChange={([v]) => setWeight(v)}
              />
            </div>

            <div className="space-y-2">
              <Label>Activity level</Label>
              <Select value={activityLevel} onValueChange={(v) => setActivityLevel(v as GymGoal['activityLevel'])}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary</SelectItem>
                  <SelectItem value="light">Light (1–2 days/week)</SelectItem>
                  <SelectItem value="moderate">Moderate (3–5 days/week)</SelectItem>
                  <SelectItem value="very_active">Very active (6–7 days/week)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Strategy</Label>
              <div className="grid grid-cols-3 gap-2">
                {(['bulk', 'cut', 'maintain'] as const).map((g) => (
                  <Button
                    key={g}
                    type="button"
                    variant={goal === g ? 'default' : 'outline'}
                    size="sm"
                    className="capitalize"
                    onClick={() => setGoal(g)}
                  >
                    {g === 'bulk' ? 'Bulk' : g === 'cut' ? 'Cut' : 'Maintain'}
                  </Button>
                ))}
              </div>
            </div>

            <Button className="w-full" onClick={calculateTargets}>
              <Zap className="size-4" />
              Compute macros
            </Button>
          </CardContent>
        </Card>

        {computedGoal && (
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Percent className="text-primary size-4" />
                  Daily targets
                </CardTitle>
                <Badge variant="secondary" className="gap-1">
                  <Flame className="size-3" />
                  {computedGoal.calories} kcal
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Protein', value: `${computedGoal.protein}g`, sub: 'Muscle' },
                  { label: 'Carbs', value: `${computedGoal.carbs}g`, sub: 'Energy' },
                  { label: 'Fat', value: `${computedGoal.fat}g`, sub: 'Hormonal' }
                ].map((m) => (
                  <div key={m.label} className="bg-muted/50 rounded-lg border p-4 text-center">
                    <p className="text-muted-foreground text-[10px] font-semibold uppercase">{m.label}</p>
                    <p className="mt-1 text-2xl font-bold">{m.value}</p>
                    <p className="text-primary mt-1 text-[10px] font-medium">{m.sub}</p>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 flex gap-3 rounded-lg border p-4 text-sm">
                <Info className="text-primary mt-0.5 size-4 shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  {computedGoal.goal === 'cut' &&
                    'Calorie deficit with elevated protein (2.4g/kg) to preserve muscle.'}
                  {computedGoal.goal === 'bulk' &&
                    'Calorie surplus with 2.2g/kg protein to support hypertrophy.'}
                  {computedGoal.goal === 'maintain' &&
                    'Balanced intake at 2.0g/kg protein for recovery and performance.'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Recommended recipes</h3>
          <p className="text-muted-foreground text-sm">High-protein picks for your current goal.</p>
        </div>
        {goalMatchingRecipes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {goalMatchingRecipes.slice(0, 3).map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onViewDetails={onViewRecipe}
                onAddToPlan={onAddToPlan}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="text-muted-foreground py-12 text-center text-sm">
              No matching recipes found.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
