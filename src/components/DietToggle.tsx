import { Leaf, Sprout, Drumstick } from 'lucide-react';
import type { DietPreference } from '@/utils/diet';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface DietToggleProps {
  value: DietPreference;
  onChange: (value: DietPreference) => void;
  className?: string;
  compact?: boolean;
}

export function DietToggle({ value, onChange, className, compact }: DietToggleProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {!compact && (
        <p className="text-muted-foreground text-xs font-medium">Diet preference</p>
      )}
      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
        value={value}
        onValueChange={(v) => {
          if (v === 'all' || v === 'veg' || v === 'non-veg' || v === 'vegan') {
            onChange(v as DietPreference);
          }
        }}
        className="bg-background w-full"
      >
        <ToggleGroupItem value="all" className="flex-1 text-xs px-2">
          All
        </ToggleGroupItem>
        <ToggleGroupItem value="veg" className="flex-1 gap-1 text-xs px-2">
          <Leaf className="size-3.5 text-emerald-500" />
          Veg
        </ToggleGroupItem>
        <ToggleGroupItem value="vegan" className="flex-1 gap-1 text-xs px-2">
          <Sprout className="size-3.5 text-teal-500" />
          Vegan
        </ToggleGroupItem>
        <ToggleGroupItem value="non-veg" className="flex-1 gap-1 text-xs px-2">
          <Drumstick className="size-3.5 text-rose-500" />
          Non-Veg
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
