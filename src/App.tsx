import { useState, useEffect, useMemo } from 'react';
import type { WeeklyMealPlan, Recipe, DayMeal, GymGoal, ShoppingItem } from './types';
import { mockRecipes } from './data/recipes';
import { migrateRecipeCategory } from './data/categories';
import { compileShoppingList } from './utils/helpers';
import { toYouTubeEmbedUrl } from './utils/youtube';
import { getRecipeImageUrl } from './utils/recipeImages';
import { normalizeIndianSubcategory } from './data/indianStates';
import { Sidebar } from './components/Sidebar';
import { DashboardOverview } from './components/DashboardOverview';
import { RecipeExplorer } from './components/RecipeExplorer';
import { WeeklyPlanner } from './components/WeeklyPlanner';
import { GymDietPlanner } from './components/GymDietPlanner';
import { ShoppingList } from './components/ShoppingList';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { AssignMealModal } from './components/AssignMealModal';
import { RecipeBuilderModal } from './components/RecipeBuilderModal';
import { Menu, UtensilsCrossed } from 'lucide-react';
import { applyAccentTheme, type AccentTheme } from '@/lib/theme';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { DietToggle } from '@/components/DietToggle';
import { filterRecipesByDiet, type DietPreference } from '@/utils/diet';

interface AssignMealState {
  open: boolean;
  day: string | null;
  mealType: 'breakfast' | 'lunch' | 'dinner' | null;
  recipe: Recipe | null;
}

const createEmptyMealPlan = (): WeeklyMealPlan => {
  const plan: WeeklyMealPlan = {};
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].forEach((day) => {
    plan[day] = {};
  });
  return plan;
};

export default function App() {
  // 1. NAVIGATION & LAYOUT STATES
  const [activeTab, setActiveTab] = useState<'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping'>(() => {
    const saved = localStorage.getItem('recipeforge_tab');
    return (saved as any) || 'dashboard';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 2. THEME STATES
  const [theme, setTheme] = useState<AccentTheme>(() => {
    const saved = localStorage.getItem('recipeforge_theme');
    return (saved as AccentTheme) || 'teal';
  });

  const [dietPreference, setDietPreference] = useState<DietPreference>(() => {
    const saved = localStorage.getItem('recipeforge_diet');
    if (saved === 'veg' || saved === 'non-veg' || saved === 'all' || saved === 'vegan') {
      return saved as DietPreference;
    }
    return 'all';
  });

  // 3. RECIPES STATES (Custom Recipes + Mock database)
  const [customRecipes, setCustomRecipes] = useState<Recipe[]>(() => {
    const saved = localStorage.getItem('recipeforge_customrecipes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed parsing custom recipes', e);
      }
    }
    return [];
  });

  const normalizeRecipe = (recipe: Recipe): Recipe => {
    const { category, subcategory } = migrateRecipeCategory(recipe);
    const normalizedSub =
      category === 'Indian Cuisine' ? normalizeIndianSubcategory(subcategory) : subcategory;
    const normalized: Recipe = {
      ...recipe,
      category,
      subcategory: normalizedSub,
      image: getRecipeImageUrl({ ...recipe, category, subcategory: normalizedSub }),
      videoUrl: recipe.videoUrl ? toYouTubeEmbedUrl(recipe.videoUrl) : undefined
    };
    if (category === 'Indian Cuisine' && !normalized.tags.includes('Authentic')) {
      normalized.tags = [...normalized.tags, 'Authentic'];
    }
    return normalized;
  };

  const allRecipes = useMemo(() => {
    return [...customRecipes.map(normalizeRecipe), ...mockRecipes.map(normalizeRecipe)];
  }, [customRecipes]);

  const dietFilteredRecipes = useMemo(
    () => filterRecipesByDiet(allRecipes, dietPreference),
    [allRecipes, dietPreference]
  );

  // 4. FAVORITES STATE
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('recipeforge_favorites');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed parsing favorites', e);
      }
    }
    return [];
  });

  // 5. GYM GOAL DIET STATES
  const [gymGoal, setGymGoal] = useState<GymGoal | null>(() => {
    const saved = localStorage.getItem('recipeforge_gymgoal');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed parsing gym goals', e);
      }
    }
    return null;
  });

  // 6. PLANNER STATE
  const [mealPlan, setMealPlan] = useState<WeeklyMealPlan>(() => {
    const saved = localStorage.getItem('recipeforge_mealplan');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed parsing saved meal plan', e);
      }
    }
    return createEmptyMealPlan();
  });

  // 7. GROCERY STATES
  const [customShoppingItems, setCustomShoppingItems] = useState<ShoppingItem[]>(() => {
    const saved = localStorage.getItem('recipeforge_customshopping');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed parsing custom shopping items', e);
      }
    }
    return [];
  });

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('recipeforge_checkeditems');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed parsing checked items', e);
      }
    }
    return {};
  });

  // Modals overlays state
  const [activeDetailRecipe, setActiveDetailRecipe] = useState<Recipe | null>(null);
  const [assignMeal, setAssignMeal] = useState<AssignMealState>({
    open: false,
    day: null,
    mealType: null,
    recipe: null
  });
  const [createRecipeOpen, setCreateRecipeOpen] = useState(false);

  // 8. SYNCHRONIZE AND PERSIST TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('recipeforge_tab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem('recipeforge_theme', theme);
    applyAccentTheme(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('recipeforge_diet', dietPreference);
  }, [dietPreference]);

  useEffect(() => {
    localStorage.setItem('recipeforge_customrecipes', JSON.stringify(customRecipes));
  }, [customRecipes]);

  useEffect(() => {
    localStorage.setItem('recipeforge_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('recipeforge_gymgoal', JSON.stringify(gymGoal));
  }, [gymGoal]);

  useEffect(() => {
    localStorage.setItem('recipeforge_mealplan', JSON.stringify(mealPlan));
  }, [mealPlan]);

  useEffect(() => {
    localStorage.setItem('recipeforge_customshopping', JSON.stringify(customShoppingItems));
  }, [customShoppingItems]);

  useEffect(() => {
    localStorage.setItem('recipeforge_checkeditems', JSON.stringify(checkedItems));
  }, [checkedItems]);

  // 9. COMPILED SHOPPING LIST (Recipe Aggregation + Custom Items)
  const shoppingList = useMemo(() => {
    const compiledRecipeItems = compileShoppingList(mealPlan);
    const list = [...compiledRecipeItems, ...customShoppingItems];
    return list.sort((a, b) => {
      if (a.department !== b.department) {
        return a.department.localeCompare(b.department);
      }
      return a.name.localeCompare(b.name);
    });
  }, [mealPlan, customShoppingItems]);

  const scheduledMealsCount = useMemo(() => {
    let count = 0;
    Object.values(mealPlan).forEach((dayMeal) => {
      if (dayMeal.breakfast) count++;
      if (dayMeal.lunch) count++;
      if (dayMeal.dinner) count++;
    });
    return count;
  }, [mealPlan]);

  const shoppingCheckedCount = useMemo(() => {
    return shoppingList.filter((item) => checkedItems[item.id]).length;
  }, [shoppingList, checkedItems]);

  // 10. ACTION HANDLERS
  const handleToggleFavorite = (recipeId: string) => {
    setFavorites((prev) =>
      prev.includes(recipeId) ? prev.filter((id) => id !== recipeId) : [...prev, recipeId]
    );
  };

  const handleRateRecipe = (recipeId: string, rating: number) => {
    // If rating a custom recipe, we can update it in customRecipes list
    if (customRecipes.some((r) => r.id === recipeId)) {
      setCustomRecipes((prev) =>
        prev.map((r) => (r.id === recipeId ? { ...r, rating } : r))
      );
    }
  };

  const handleSaveGoal = (goal: GymGoal) => {
    setGymGoal(goal);
  };

  const handleSaveCustomRecipe = (newRecipe: Recipe) => {
    setCustomRecipes((prev) => [newRecipe, ...prev]);
  };

  const handleAddCustomShoppingItem = (name: string, amount: number, unit: string, department: string) => {
    const newItem: ShoppingItem = {
      id: `custom-shop-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name,
      amount,
      unit,
      department,
      checked: false
    };
    setCustomShoppingItems((prev) => [...prev, newItem]);
  };

  const handleRemoveCustomShoppingItem = (id: string) => {
    setCustomShoppingItems((prev) => prev.filter((item) => item.id !== id));
    // Clean up checked cache as well
    setCheckedItems((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleAddMealConfirm = (
    recipe: Recipe,
    day: string,
    mealType: 'breakfast' | 'lunch' | 'dinner',
    servings: number
  ) => {
    setMealPlan((prev) => {
      const updatedDay: DayMeal = {
        ...prev[day],
        [mealType]: { recipe, servings }
      };
      return {
        ...prev,
        [day]: updatedDay
      };
    });
  };

  const handleRemoveMeal = (day: string, mealType: 'breakfast' | 'lunch' | 'dinner') => {
    setMealPlan((prev) => {
      const updatedDay = { ...prev[day] };
      delete updatedDay[mealType];
      return {
        ...prev,
        [day]: updatedDay
      };
    });
  };

  const handleUpdateServings = (
    day: string,
    mealType: 'breakfast' | 'lunch' | 'dinner',
    servings: number
  ) => {
    setMealPlan((prev) => {
      const currentMeal = prev[day][mealType];
      if (!currentMeal) return prev;

      const updatedDay: DayMeal = {
        ...prev[day],
        [mealType]: { ...currentMeal, servings }
      };
      return {
        ...prev,
        [day]: updatedDay
      };
    });
  };

  const handleToggleShoppingItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleClearCheckedItems = () => {
    setCheckedItems({});
  };

  return (
    <div className="bg-background flex min-h-screen">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        scheduledMealsCount={scheduledMealsCount}
        shoppingListCount={shoppingList.length}
        shoppingCheckedCount={shoppingCheckedCount}
        currentTheme={theme}
        setTheme={setTheme}
        dietPreference={dietPreference}
        setDietPreference={setDietPreference}
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="bg-background/95 sticky top-0 z-30 flex h-14 items-center justify-between border-b px-4 backdrop-blur lg:hidden">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="size-4" />
            </Button>
            <UtensilsCrossed className="text-primary size-4" />
            <span className="text-sm font-semibold">RecipeForge</span>
          </div>
          <div className="flex items-center gap-2">
            <DietToggle
              value={dietPreference}
              onChange={setDietPreference}
              compact
              className="max-w-[280px]"
            />
            <Badge variant="secondary" className="capitalize">
              {activeTab}
            </Badge>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl flex-1 p-4 md:p-6 lg:p-8">
          {activeTab === 'dashboard' && (
            <DashboardOverview
              mealPlan={mealPlan}
              recipes={dietFilteredRecipes}
              allRecipesCount={allRecipes.length}
              dietPreference={dietPreference}
              gymGoal={gymGoal}
              onViewRecipe={(recipe) => setActiveDetailRecipe(recipe)}
              onAddToPlan={(recipe) =>
                setAssignMeal({ open: true, day: null, mealType: null, recipe })
              }
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === 'recipes' && (
            <RecipeExplorer
              recipes={dietFilteredRecipes}
              totalRecipesCount={allRecipes.length}
              dietPreference={dietPreference}
              favorites={favorites}
              onViewDetails={(recipe) => setActiveDetailRecipe(recipe)}
              onAddToPlan={(recipe) =>
                setAssignMeal({ open: true, day: null, mealType: null, recipe })
              }
              onToggleFavorite={handleToggleFavorite}
              onOpenCreateModal={() => setCreateRecipeOpen(true)}
            />
          )}

          {activeTab === 'planner' && (
            <WeeklyPlanner
              mealPlan={mealPlan}
              onRemoveMeal={handleRemoveMeal}
              onUpdateServings={handleUpdateServings}
              onOpenAddModal={(day, mealType) =>
                setAssignMeal({ open: true, day, mealType, recipe: null })
              }
              onViewRecipe={(recipe) => setActiveDetailRecipe(recipe)}
            />
          )}

          {activeTab === 'gym' && (
            <GymDietPlanner
              gymGoal={gymGoal}
              onSaveGoal={handleSaveGoal}
              recipes={dietFilteredRecipes}
              onViewRecipe={(recipe) => setActiveDetailRecipe(recipe)}
              onAddToPlan={(recipe) =>
                setAssignMeal({ open: true, day: null, mealType: null, recipe })
              }
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          )}

          {activeTab === 'shopping' && (
            <ShoppingList
              shoppingList={shoppingList}
              checkedItems={checkedItems}
              onToggleItem={handleToggleShoppingItem}
              onClearChecked={handleClearCheckedItems}
              onAddCustomItem={handleAddCustomShoppingItem}
              onRemoveCustomItem={handleRemoveCustomShoppingItem}
            />
          )}
        </main>

        <footer className="text-muted-foreground border-t px-4 py-6 text-center text-xs">
          <Separator className="mb-4" />
          <p>© {new Date().getFullYear()} RecipeForge · React, TypeScript & shadcn/ui</p>
        </footer>
      </div>

      {/* PORTALS / MODALS INTERFACES */}
      
      {/* Recipe Detail Drawer */}
      {activeDetailRecipe && (
        <RecipeDetailModal
          recipe={activeDetailRecipe}
          isFavorite={favorites.includes(activeDetailRecipe.id)}
          onToggleFavorite={handleToggleFavorite}
          onRateRecipe={handleRateRecipe}
          onClose={() => setActiveDetailRecipe(null)}
          onAddToPlan={(recipe) =>
            setAssignMeal({ open: true, day: null, mealType: null, recipe })
          }
        />
      )}

      {/* Schedule Meal Drawer */}
      {assignMeal.open && (
        <AssignMealModal
          recipes={dietFilteredRecipes}
          prefilledDay={assignMeal.day}
          prefilledMealType={assignMeal.mealType}
          prefilledRecipe={assignMeal.recipe}
          onClose={() =>
            setAssignMeal({ open: false, day: null, mealType: null, recipe: null })
          }
          onConfirm={handleAddMealConfirm}
        />
      )}

      {/* Create Recipe Multi-Step Builder */}
      {createRecipeOpen && (
        <RecipeBuilderModal
          onClose={() => setCreateRecipeOpen(false)}
          onSave={handleSaveCustomRecipe}
        />
      )}
    </div>
  );
}
