import { useState, useEffect, useMemo } from 'react';
import type { WeeklyMealPlan, Recipe, DayMeal, GymGoal, ShoppingItem } from './types';
import { mockRecipes } from './data/recipes';
import { compileShoppingList } from './utils/helpers';
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
  const [theme, setTheme] = useState<'teal' | 'amber' | 'rose' | 'indigo'>(() => {
    const saved = localStorage.getItem('recipeforge_theme');
    return (saved as any) || 'teal';
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

  const allRecipes = useMemo(() => {
    return [...customRecipes, ...mockRecipes];
  }, [customRecipes]);

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
    const body = document.body;
    body.className = ''; // Reset
    body.classList.add(`theme-${theme}`);
  }, [theme]);

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
    <div className="main-layout-wrapper font-sans text-slate-100 antialiased overflow-x-hidden relative min-h-screen">
      {/* Animated Decorative Glow Elements */}
      <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-theme-primary/5 rounded-full blur-[120px] pointer-events-none glow-blob-1" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none glow-blob-2" />

      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        scheduledMealsCount={scheduledMealsCount}
        shoppingListCount={shoppingList.length}
        shoppingCheckedCount={shoppingCheckedCount}
        currentTheme={theme}
        setTheme={setTheme}
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-w-0">
        
        {/* Mobile Header Bar */}
        <header className="lg:hidden sticky top-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 h-16 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <Menu size={18} />
            </button>
            <div className="flex items-center gap-2 pl-2">
              <UtensilsCrossed size={16} className="text-theme-primary" />
              <span className="text-sm font-extrabold tracking-tight">RecipeForge</span>
            </div>
          </div>
          
          <span className="text-[10px] text-theme-primary font-bold bg-theme-glow px-2.5 py-0.5 rounded-full capitalize">
            {activeTab}
          </span>
        </header>

        {/* Core Tab Panels Router */}
        <main className="content-panel w-full flex-grow max-w-7xl">
          {activeTab === 'dashboard' && (
            <DashboardOverview
              mealPlan={mealPlan}
              recipes={allRecipes}
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
              recipes={allRecipes}
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
              recipes={allRecipes}
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

        {/* Footer */}
        <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} RecipeForge Dashboard. Built with React & TypeScript.</p>
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
          recipes={allRecipes}
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
