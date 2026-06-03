import { Leaf, Sprout, Drumstick } from 'lucide-react';
import type { DietPreference } from '@/utils/diet';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';

interface DietToggleProps {
  value: DietPreference;
  onChange: (value: DietPreference) => void;
  className?: string;
  compact?: boolean;
}

export function DietToggle({ value, onChange, className, compact }: DietToggleProps) {
  const options = [
    {
      value: 'all' as const,
      label: 'All Diet',
      icon: null,
      iconClass: 'text-primary',
      activeBg: 'bg-primary/10 text-primary border-primary/40 dark:bg-primary/20',
      gradient: 'from-primary to-primary/40',
    },
    {
      value: 'veg' as const,
      label: 'Veg',
      icon: Leaf,
      iconClass: 'text-emerald-500',
      activeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 dark:bg-emerald-500/20',
      gradient: 'from-emerald-500 to-emerald-400',
    },
    {
      value: 'vegan' as const,
      label: 'Vegan',
      icon: Sprout,
      iconClass: 'text-teal-500',
      activeBg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/40 dark:bg-teal-500/20',
      gradient: 'from-teal-500 to-teal-400',
    },
    {
      value: 'non-veg' as const,
      label: 'Non-Veg',
      icon: Drumstick,
      iconClass: 'text-rose-500',
      activeBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/40 dark:bg-rose-500/20',
      gradient: 'from-rose-500 to-rose-400',
    }
  ];

  if (compact) {
    const activeOpt = options.find((o) => o.value === value) || options[0];
    const ActiveIcon = activeOpt.icon;
    return (
      <div className={className}>
        <Select value={value} onValueChange={(v) => onChange(v as DietPreference)}>
          <SelectTrigger className="h-8 border-border bg-background/50 backdrop-blur-md rounded-full px-3 gap-1.5 focus:ring-1 focus:ring-primary/30 w-[125px] select-none text-left cursor-pointer">
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              {ActiveIcon && <ActiveIcon className={cn('size-3.5 shrink-0', activeOpt.iconClass)} />}
              <span className="truncate">{activeOpt.label}</span>
            </div>
          </SelectTrigger>
          <SelectContent align="end" className="bg-background/95 backdrop-blur-md">
            {options.map((opt) => {
              const OptIcon = opt.icon;
              return (
                <SelectItem key={opt.value} value={opt.value} className="text-xs cursor-pointer">
                  <div className="flex items-center gap-2">
                    {OptIcon && <OptIcon className={cn('size-3.5 shrink-0', opt.iconClass)} />}
                    <span>{opt.label}</span>
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    );
  }

  return (
    <div className={cn('space-y-3', className)}>
      <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider px-0.5">
        Diet preference
      </p>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => {
          const isActive = value === opt.value;
          const Icon = opt.icon;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                'flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-300 relative overflow-hidden group cursor-pointer h-[80px]',
                isActive
                  ? `${opt.activeBg} font-semibold ring-1 ring-border/5`
                  : 'bg-card/45 border-border/50 hover:border-border hover:bg-card/85 text-muted-foreground hover:text-foreground'
              )}
            >
              {/* Subtle gradient glow inside active card */}
              {isActive && (
                <span className={cn('absolute inset-0 opacity-[0.07] bg-gradient-to-br', opt.gradient)} />
              )}
              
              {Icon ? (
                <Icon className={cn('size-5 mb-2 transition-transform duration-300 group-hover:scale-110', opt.iconClass)} />
              ) : (
                <span className={cn('text-xs font-black mb-2 transition-transform duration-300 group-hover:scale-110', isActive ? 'text-primary' : 'text-muted-foreground')}>
                  ALL
                </span>
              )}
              <span className="text-[10.5px] tracking-wide select-none leading-none">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
