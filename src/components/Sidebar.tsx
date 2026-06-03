import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Dumbbell,
  ShoppingBag,
  UtensilsCrossed,
  Sparkles,
  CloudOff,
  Cloud,
  Loader2,
  WifiOff,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AccentTheme } from '@/lib/theme';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { DietToggle } from '@/components/DietToggle';
import type { DietPreference } from '@/utils/diet';
import type { SyncStatus } from '@/hooks/useAuth';
import type { User } from 'firebase/auth';

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
  syncStatus: SyncStatus;
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
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
  syncStatus,
  user,
  signInWithGoogle,
  signOut,
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
      <div className="flex items-center justify-between px-2 py-1">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <UtensilsCrossed className="size-5" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight">RecipeForge</p>
            <p className="text-muted-foreground text-xs">Meal & gym planner</p>
          </div>
        </div>

        {/* GitHub link - Shadcn style */}
        <a
          href="https://github.com/manavv09/Recipes"
          target="_blank"
          rel="noreferrer"
          className="flex size-8 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
          title="View GitHub"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
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

        {/* Sync status indicator */}
        <Separator />
        <div className="space-y-3 px-1">
          <div
            className={cn(
              'flex items-center gap-2 rounded-md px-2 py-1 text-xs',
              syncStatus === 'synced' && 'text-emerald-500',
              syncStatus === 'connecting' && 'text-amber-500',
              syncStatus === 'offline' && 'text-red-500',
              syncStatus === 'unconfigured' && 'text-muted-foreground'
            )}
          >
            {syncStatus === 'synced' && <Cloud className="size-3.5" />}
            {syncStatus === 'connecting' && <Loader2 className="size-3.5 animate-spin" />}
            {syncStatus === 'offline' && <WifiOff className="size-3.5" />}
            {syncStatus === 'unconfigured' && <CloudOff className="size-3.5" />}
            <span>
              {syncStatus === 'synced' && (user?.isAnonymous ? 'Cloud synced (Guest)' : 'Cloud synced')}
              {syncStatus === 'connecting' && 'Connecting…'}
              {syncStatus === 'offline' && 'Offline mode'}
              {syncStatus === 'unconfigured' && 'Local only'}
            </span>
          </div>

          {/* Authentication UI */}
          {syncStatus !== 'unconfigured' && user && (
            <div className="pt-1">
              {user.isAnonymous ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-center gap-2 border-border hover:bg-accent text-xs font-normal transition-all"
                  onClick={signInWithGoogle}
                >
                  <svg className="size-3.5 text-foreground" aria-hidden="true" focusable="false" viewBox="0 0 488 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                  </svg>
                  Sign in with Google
                </Button>
              ) : (
                <div className="bg-secondary/30 flex items-center justify-between gap-3 rounded-lg border border-border/60 p-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || 'User'}
                        className="size-7 rounded-full border border-border object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="bg-primary/10 text-primary flex size-7 items-center justify-center rounded-full text-xs font-semibold uppercase">
                        {(user.displayName || user.email || 'G')[0]}
                      </div>
                    )}
                    <div className="flex flex-col min-w-0">
                      <span className="truncate text-xs font-medium text-foreground">
                        {user.displayName || 'Google User'}
                      </span>
                      <span className="truncate text-[10px] text-muted-foreground">
                        {user.email}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-7 shrink-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                    title="Sign Out"
                    onClick={signOut}
                  >
                    <LogOut className="size-3.5" />
                  </Button>
                </div>
              )}
            </div>
          )}
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
  setIsOpen,
  syncStatus,
  user,
  signInWithGoogle,
  signOut
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
    setDietPreference,
    syncStatus,
    user,
    signInWithGoogle,
    signOut
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
