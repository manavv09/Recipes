import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Dumbbell,
  ShoppingBag,
  UtensilsCrossed,
  Sparkles,
  Cloud,
  Loader2,
  WifiOff,
  LogOut,
  Menu
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

interface NavbarProps {
  activeTab: 'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping';
  setActiveTab: (tab: 'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping') => void;
  scheduledMealsCount: number;
  shoppingListCount: number;
  shoppingCheckedCount: number;
  currentTheme: AccentTheme;
  setTheme: (theme: AccentTheme) => void;
  dietPreference: DietPreference;
  setDietPreference: (diet: DietPreference) => void;
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

export function Navbar({
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
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Cleanup body scroll lock left behind by Radix Sheet on mobile close
  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.pointerEvents = '';
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const getBadge = (id: (typeof menuItems)[number]['id']) => {
    if (id === 'planner' && scheduledMealsCount > 0) return String(scheduledMealsCount);
    if (id === 'shopping' && shoppingListCount > 0) {
      return `${shoppingCheckedCount}/${shoppingListCount}`;
    }
    return null;
  };

  return (
    <header className="bg-background/95 sticky top-0 z-40 w-full border-b border-border/80 backdrop-blur select-none">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LEFT SECTION: Logo & Github Link */}
        <div className="flex items-center gap-4">
          {/* Mobile hamburger menu (hidden on desktop) */}
          <Button
            variant="ghost"
            size="icon"
            className="flex lg:hidden size-9 shrink-0 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" />
          </Button>

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <UtensilsCrossed className="size-4.5" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight leading-none">RecipeForge</p>
              <p className="text-muted-foreground text-[10px] mt-0.5 leading-none">Meal & gym planner</p>
            </div>
          </div>

          {/* GitHub badge (desktop) */}
          <a
            href="https://github.com/manavv09/Recipes"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex size-8 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all ml-1"
            title="View GitHub"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>

        {/* CENTER SECTION: Horizontal Nav Tabs (Desktop only) */}
        <nav className="hidden lg:flex items-center h-full gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const badge = getBadge(item.id);

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  'relative h-16 px-4 flex items-center gap-2 text-sm transition-colors duration-200 cursor-pointer',
                  isActive 
                    ? 'text-foreground font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className={cn('size-4', isActive ? 'text-primary' : 'text-muted-foreground')} />
                <span>{item.label}</span>
                {badge && (
                  <Badge variant={isActive ? 'default' : 'secondary'} className="text-[9px] py-0 px-1 ml-1 leading-none h-4 flex items-center">
                    {badge}
                  </Badge>
                )}
                {/* Active Indicator Line */}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-t-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT SECTION: Control widgets (Desktop / Mixed) */}
        <div className="flex items-center gap-3">
          {/* Diet dropdown (Desktop only) */}
          <DietToggle
            value={dietPreference}
            onChange={setDietPreference}
            compact
            className="hidden sm:block"
          />

          {/* Accent theme dots (Desktop only) */}
          <div className="hidden md:flex items-center gap-1 border-l border-border/80 pl-3">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                title={t.label}
                onClick={() => setTheme(t.id)}
                className={cn(
                  'flex size-5 items-center justify-center rounded-full border transition-all cursor-pointer',
                  currentTheme === t.id
                    ? 'border-primary ring-1 ring-primary/45 scale-110'
                    : 'border-border hover:scale-115'
                )}
              >
                <span className={cn('size-2.5 rounded-full', t.color)} />
              </button>
            ))}
          </div>

          {/* Cloud Sync Icon (Desktop/Tablet indicator) */}
          {syncStatus !== 'unconfigured' && (
            <div
              className={cn(
                'flex items-center justify-center p-1 rounded-md transition-colors',
                syncStatus === 'synced' && 'text-emerald-500',
                syncStatus === 'connecting' && 'text-amber-500',
                syncStatus === 'offline' && 'text-red-500'
              )}
              title={
                syncStatus === 'synced' 
                  ? (user?.isAnonymous ? 'Synced (Guest)' : 'Synced (Google)') 
                  : syncStatus === 'connecting' ? 'Connecting...' : 'Offline mode'
              }
            >
              {syncStatus === 'synced' && <Cloud className="size-4" />}
              {syncStatus === 'connecting' && <Loader2 className="size-4 animate-spin" />}
              {syncStatus === 'offline' && <WifiOff className="size-4" />}
            </div>
          )}

          {/* Auth Card / Trigger */}
          {syncStatus !== 'unconfigured' && user && (
            <div className="flex items-center border-l border-border/80 pl-3">
              {user.isAnonymous ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-border hover:bg-accent text-xs font-normal transition-all"
                  onClick={signInWithGoogle}
                >
                  <svg className="size-3.5 mr-1.5 text-foreground" aria-hidden="true" focusable="false" viewBox="0 0 488 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                  </svg>
                  <span className="hidden xs:inline">Sign In</span>
                </Button>
              ) : (
                <div className="flex items-center gap-2 bg-secondary/30 border border-border/50 rounded-full pl-1.5 pr-2 py-0.5">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      className="size-6 rounded-full border border-border object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="bg-primary/10 text-primary flex size-6 items-center justify-center rounded-full text-[10px] font-semibold uppercase">
                      {(user.displayName || user.email || 'G')[0]}
                    </div>
                  )}
                  <span className="hidden md:inline text-xs font-medium text-foreground max-w-[80px] truncate">
                    {user.displayName?.split(' ')[0] || 'User'}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full"
                    title="Sign Out"
                    onClick={signOut}
                  >
                    <LogOut className="size-3" />
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* GitHub badge (mobile/tablet only) */}
          <a
            href="https://github.com/manavv09/Recipes"
            target="_blank"
            rel="noreferrer"
            className="flex sm:hidden size-8 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
            title="View GitHub"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>
      </div>

      {/* MOBILE DRAWER SHEET */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="bg-sidebar text-sidebar-foreground w-72 p-4 flex flex-col h-full overflow-y-auto">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          
          {/* Mobile Drawer Header */}
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

          {/* Mobile Drawer Navigation Links */}
          <nav className="flex flex-col gap-1 flex-1">
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
                    setMobileOpen(false);
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

          {/* Mobile Drawer Footer Controls */}
          <div className="mt-auto space-y-3 pt-4">
            <Separator />
            <DietToggle
              value={dietPreference}
              onChange={setDietPreference}
              className="px-1"
            />

            <Separator />
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
                      'flex h-9 items-center justify-center rounded-md border transition-all cursor-pointer',
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

            {/* Mobile Sync Indicator */}
            {syncStatus !== 'unconfigured' && (
              <>
                <Separator />
                <div className="px-1">
                  <div
                    className={cn(
                      'flex items-center gap-2 rounded-md px-2 py-1 text-xs',
                      syncStatus === 'synced' && 'text-emerald-500',
                      syncStatus === 'connecting' && 'text-amber-500',
                      syncStatus === 'offline' && 'text-red-500'
                    )}
                  >
                    {syncStatus === 'synced' && <Cloud className="size-3.5" />}
                    {syncStatus === 'connecting' && <Loader2 className="size-3.5 animate-spin" />}
                    {syncStatus === 'offline' && <WifiOff className="size-3.5" />}
                    <span>
                      {syncStatus === 'synced' && (user?.isAnonymous ? 'Cloud synced (Guest)' : 'Cloud synced')}
                      {syncStatus === 'connecting' && 'Connecting…'}
                      {syncStatus === 'offline' && 'Offline mode'}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
