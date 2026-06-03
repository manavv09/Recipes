import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(!open)}
        className="size-9 rounded-lg border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer transition-all relative overflow-hidden"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-lg focus:outline-none z-50 animate-in fade-in-50 zoom-in-95 duration-100">
          <button
            onClick={() => {
              setTheme('light');
              setOpen(false);
            }}
            className={cn(
              'flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium cursor-pointer transition-all hover:bg-accent hover:text-accent-foreground',
              theme === 'light' && 'text-foreground bg-accent/40'
            )}
          >
            <span className="flex items-center gap-2">
              <Sun className="size-3.5" />
              Light
            </span>
            {theme === 'light' && <Check className="size-3.5 text-primary" />}
          </button>

          <button
            onClick={() => {
              setTheme('dark');
              setOpen(false);
            }}
            className={cn(
              'flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium cursor-pointer transition-all hover:bg-accent hover:text-accent-foreground',
              theme === 'dark' && 'text-foreground bg-accent/40'
            )}
          >
            <span className="flex items-center gap-2">
              <Moon className="size-3.5" />
              Dark
            </span>
            {theme === 'dark' && <Check className="size-3.5 text-primary" />}
          </button>

          <button
            onClick={() => {
              setTheme('system');
              setOpen(false);
            }}
            className={cn(
              'flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium cursor-pointer transition-all hover:bg-accent hover:text-accent-foreground',
              theme === 'system' && 'text-foreground bg-accent/40'
            )}
          >
            <span className="flex items-center gap-2">
              <Laptop className="size-3.5" />
              System
            </span>
            {theme === 'system' && <Check className="size-3.5 text-primary" />}
          </button>
        </div>
      )}
    </div>
  );
}
