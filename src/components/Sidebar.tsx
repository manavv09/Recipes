import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Dumbbell,
  ShoppingBag,
  UtensilsCrossed,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AccentTheme } from '@/lib/theme';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { DietToggle } from '@/components/DietToggle';
import type { DietPreference } from '@/utils/diet';

interface SidebarProps {
  activeTab: 'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping';
  setActiveTab: (tab: 'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping') => void;
  scheduledMealsCount: number;
  shoppingListCount: number;
  shoppingCheckedCount: number;
  currentTheme: AccentTheme;
  setTheme: (theme: AccentTheme) => void;
  dietPreference: DietPreference;
  setDietPreference: (diet: DietPreference) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const themes: { id: AccentTheme; label: string; color: string }[] = [
  { id: 'teal', label: 'Teal', color: 'bg-teal-500' },
  { id: 'amber', label: 'Amber', color: 'bg-amber-500' },
  { id: 'rose', label: 'Rose', color: 'bg-rose-500' },
  { id: 'indigo', label: 'Indigo', color: 'bg-indigo-500' }
];

const menuItems = [
  { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
  { id: 'recipes' as const, label: 'Recipes', icon: BookOpen },
  { id: 'planner' as const, label: 'Weekly Planner', icon: Calendar },
  { id: 'gym' as const, label: 'Gym Diet', icon: Dumbbell },
  { id: 'shopping' as const, label: 'Shopping', icon: ShoppingBag }
];

function NavContent({
  activeTab,
  setActiveTab,
  scheduledMealsCount,
  shoppingListCount,
  shoppingCheckedCount,
  currentTheme,
  setTheme,
  dietPreference,
  setDietPreference,
  onNavigate
}: Omit<SidebarProps, 'isOpen' | 'setIsOpen'> & { onNavigate?: () => void }) {
  const getBadge = (id: (typeof menuItems)[number]['id']) => {
    if (id === 'planner' && scheduledMealsCount > 0) return String(scheduledMealsCount);
    if (id === 'shopping' && shoppingListCount > 0) {
      return `${shoppingCheckedCount}/${shoppingListCount}`;
    }
    return null;
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 px-2 py-1">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
          <UtensilsCrossed className="size-5" />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight">RecipeForge</p>
          <p className="text-muted-foreground text-xs">Meal & gym planner</p>
        </div>
      </div>

      <Separator className="my-4" />

      <nav className="flex flex-1 flex-col gap-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const badge = getBadge(item.id);

          return (
            <Button
              key={item.id}
              variant={isActive ? 'secondary' : 'ghost'}
              className={cn(
                'h-10 w-full justify-start gap-3 px-3',
                isActive && 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
              )}
              onClick={() => {
                setActiveTab(item.id);
                onNavigate?.();
              }}
            >
              <Icon className={cn('size-4', isActive ? 'text-primary' : 'text-muted-foreground')} />
              <span className="flex-1 text-left">{item.label}</span>
              {badge && (
                <Badge variant={isActive ? 'default' : 'secondary'} className="text-[10px]">
                  {badge}
                </Badge>
              )}
            </Button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-3 pt-4">
        <Separator />
        <DietToggle
          value={dietPreference}
          onChange={setDietPreference}
          className="px-1"
        />
        <div className="px-1">
          <div className="text-muted-foreground mb-2 flex items-center gap-1.5 text-xs font-medium">
            <Sparkles className="text-primary size-3.5" />
            Accent color
          </div>
          <div className="grid grid-cols-4 gap-2">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                title={t.label}
                onClick={() => setTheme(t.id)}
                className={cn(
                  'flex h-9 items-center justify-center rounded-md border transition-all',
                  currentTheme === t.id
                    ? 'border-primary bg-accent ring-2 ring-primary/30'
                    : 'border-border hover:border-muted-foreground/40'
                )}
              >
                <span className={cn('size-3.5 rounded-full', t.color)} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Sidebar({
  activeTab,
  setActiveTab,
  scheduledMealsCount,
  shoppingListCount,
  shoppingCheckedCount,
  currentTheme,
  setTheme,
  dietPreference,
  setDietPreference,
  isOpen,
  setIsOpen
}: SidebarProps) {
  const navProps = {
    activeTab,
    setActiveTab,
    scheduledMealsCount,
    shoppingListCount,
    shoppingCheckedCount,
    currentTheme,
    setTheme,
    dietPreference,
    setDietPreference
  };

  return (
    <>
      <aside className="bg-sidebar text-sidebar-foreground hidden h-screen w-64 shrink-0 border-r lg:sticky lg:top-0 lg:flex lg:flex-col lg:p-4">
        <NavContent {...navProps} />
      </aside>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="bg-sidebar text-sidebar-foreground w-72 p-4">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <NavContent {...navProps} onNavigate={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
}
