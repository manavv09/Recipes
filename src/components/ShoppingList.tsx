import { useMemo, useState } from 'react';
import type { ShoppingItem } from '@/types';
import { formatQuantity } from '@/utils/helpers';
import { Check, Clipboard, RefreshCw, ShoppingBag, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

interface ShoppingListProps {
  shoppingList: ShoppingItem[];
  checkedItems: Record<string, boolean>;
  onToggleItem: (id: string) => void;
  onClearChecked: () => void;
  onAddCustomItem: (name: string, amount: number, unit: string, department: string) => void;
  onRemoveCustomItem: (id: string) => void;
}

export function ShoppingList({
  shoppingList,
  checkedItems,
  onToggleItem,
  onClearChecked,
  onAddCustomItem,
  onRemoveCustomItem
}: ShoppingListProps) {
  const [copied, setCopied] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customAmount, setCustomAmount] = useState(1);
  const [customUnit, setCustomUnit] = useState('pcs');
  const [customDept, setCustomDept] = useState('Pantry');

  const groupedItems = useMemo(() => {
    const groups: Record<string, ShoppingItem[]> = {};
    shoppingList.forEach((item) => {
      const dept = item.department || 'Other';
      if (!groups[dept]) groups[dept] = [];
      groups[dept].push(item);
    });
    return groups;
  }, [shoppingList]);

  const totalItemsCount = shoppingList.length;
  const checkedItemsCount = shoppingList.filter((item) => checkedItems[item.id]).length;

  const copyToClipboard = () => {
    if (shoppingList.length === 0) return;
    let text = `RecipeForge Grocery List\n${new Date().toLocaleDateString()}\n\n`;
    Object.entries(groupedItems).forEach(([department, items]) => {
      text += `${department.toUpperCase()}\n`;
      items.forEach((item) => {
        const mark = checkedItems[item.id] ? '[x]' : '[ ]';
        text += `${mark} ${formatQuantity(item.amount)} ${item.unit} - ${item.name}\n`;
      });
      text += '\n';
    });
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;
    onAddCustomItem(customName.trim(), Number(customAmount) || 1, customUnit.trim() || 'pcs', customDept);
    setCustomName('');
    setCustomAmount(1);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Grocery list</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Check off items as you shop.
            {totalItemsCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {checkedItemsCount}/{totalItemsCount}
              </Badge>
            )}
          </p>
        </div>
        <div className="flex gap-2">
          {shoppingList.length > 0 && (
            <Button variant="outline" size="sm" onClick={copyToClipboard}>
              {copied ? <Check className="size-4 text-emerald-500" /> : <Clipboard className="size-4" />}
              {copied ? 'Copied' : 'Copy'}
            </Button>
          )}
          {checkedItemsCount > 0 && (
            <Button variant="outline" size="sm" onClick={onClearChecked}>
              <RefreshCw className="size-4" />
              Reset
            </Button>
          )}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Quick add item</CardTitle>
          <CardDescription>Pantry staples not tied to a recipe.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1 space-y-2">
              <Label htmlFor="item-name">Name</Label>
              <Input
                id="item-name"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="Protein powder, oats..."
              />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:w-auto">
              <div className="space-y-2">
                <Label>Qty</Label>
                <Input
                  type="number"
                  min={0.1}
                  value={customAmount}
                  onChange={(e) => setCustomAmount(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label>Unit</Label>
                <Input value={customUnit} onChange={(e) => setCustomUnit(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Dept</Label>
                <Select value={customDept} onValueChange={setCustomDept}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {['Produce', 'Meat', 'Seafood', 'Dairy', 'Pantry', 'Bakery', 'Household', 'Other'].map(
                      (d) => (
                        <SelectItem key={d} value={d}>
                          {d}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit">
              <Plus className="size-4" />
              Add
            </Button>
          </form>
        </CardContent>
      </Card>

      {shoppingList.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center py-16 text-center">
            <ShoppingBag className="text-muted-foreground mb-4 size-12" />
            <CardTitle className="text-base">Your list is empty</CardTitle>
            <CardDescription className="mt-2 max-w-sm">
              Schedule meals in the Weekly Planner or add custom items above.
            </CardDescription>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedItems).map(([department, items]) => (
            <div key={department}>
              <h3 className="text-primary mb-3 border-l-2 border-primary pl-2 text-xs font-semibold uppercase tracking-wider">
                {department}
              </h3>
              <div className="space-y-2">
                {items.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  const isCustom = item.id.startsWith('custom-');
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        'flex items-center gap-3 rounded-lg border p-3 transition-colors',
                        isChecked && 'bg-muted/40 opacity-70'
                      )}
                    >
                      <Checkbox checked={isChecked} onCheckedChange={() => onToggleItem(item.id)} />
                      <button
                        type="button"
                        className="flex flex-1 items-center justify-between text-left text-sm"
                        onClick={() => onToggleItem(item.id)}
                      >
                        <span className={cn('font-medium', isChecked && 'line-through')}>{item.name}</span>
                        <span className={cn('text-primary font-semibold', isChecked && 'line-through')}>
                          {formatQuantity(item.amount)} {item.unit}
                        </span>
                      </button>
                      {isCustom && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive size-8"
                          onClick={() => onRemoveCustomItem(item.id)}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
              <Separator className="mt-6" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
