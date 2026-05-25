import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Dumbbell,
  ShoppingBag,
  UtensilsCrossed,
  X,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  activeTab: 'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping';
  setActiveTab: (tab: 'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping') => void;
  scheduledMealsCount: number;
  shoppingListCount: number;
  shoppingCheckedCount: number;
  currentTheme: 'teal' | 'amber' | 'rose' | 'indigo';
  setTheme: (theme: 'teal' | 'amber' | 'rose' | 'indigo') => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  scheduledMealsCount,
  shoppingListCount,
  shoppingCheckedCount,
  currentTheme,
  setTheme,
  isOpen,
  setIsOpen
}) => {
  const themes = [
    { id: 'teal', label: 'Cyan', colorClass: 'bg-teal-500' },
    { id: 'amber', label: 'Gold', colorClass: 'bg-amber-500' },
    { id: 'rose', label: 'Rose', colorClass: 'bg-rose-500' },
    { id: 'indigo', label: 'Neon', colorClass: 'bg-indigo-500' }
  ] as const;

  interface MenuItem {
    id: 'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping';
    label: string;
    icon: React.ComponentType<any> | any;
    badge?: number | string;
  }

  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'recipes', label: 'Recipes Explorer', icon: BookOpen },
    { id: 'planner', label: 'Weekly Planner', icon: Calendar, badge: scheduledMealsCount },
    { id: 'gym', label: 'Gym Diet Center', icon: Dumbbell },
    { id: 'shopping', label: 'Grocery Shopping', icon: ShoppingBag, badge: shoppingListCount > 0 ? `${shoppingCheckedCount}/${shoppingListCount}` : undefined }
  ];

  const handleNavClick = (tabId: 'dashboard' | 'recipes' | 'planner' | 'gym' | 'shopping') => {
    setActiveTab(tabId);
    setIsOpen(false); // Close mobile sidebar
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`sidebar-panel fixed lg:sticky ${isOpen ? 'mobile-open' : ''}`}>
        {/* Sidebar Header */}
        <div className="p-6 flex items-center justify-between border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <UtensilsCrossed size={20} className="text-slate-950" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-white leading-tight">
                Recipe<span className="text-theme-primary font-semibold transition-colors duration-300">Forge</span>
              </h1>
              <span className="text-micro text-slate-500 font-semibold uppercase tracking-wider block">
                Gym & Planner Suite
              </span>
            </div>
          </div>
          
          {/* Mobile Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-900 border border-slate-800"
          >
            <X size={16} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`sidebar-nav-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} className={isActive ? 'text-theme-primary transition-colors' : 'text-slate-400'} />
                <span className="flex-grow">{item.label}</span>
                {item.badge !== undefined && item.badge !== 0 && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-theme-glow text-theme-primary' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Theme Engine Selector Panel */}
        <div className="p-5 border-t border-slate-900 bg-slate-950-20">
          <div className="flex items-center gap-2 mb-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={12} className="text-theme-primary" />
            <span>Select Accent Theme</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {themes.map((t) => {
              const isSelected = currentTheme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`h-9 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    isSelected 
                      ? 'border-theme-primary bg-slate-900 shadow-md shadow-theme-glow' 
                      : 'border-slate-850 hover:border-slate-700 bg-slate-905'
                  }`}
                  title={t.label}
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${t.colorClass} block shadow-inner`} />
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};
