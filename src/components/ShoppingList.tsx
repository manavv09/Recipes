import React, { useMemo, useState } from 'react';
import type { ShoppingItem } from '../types';
import { formatQuantity } from '../utils/helpers';
import { CheckSquare, Square, Clipboard, Check, RefreshCw, ShoppingBag, Plus, Trash2 } from 'lucide-react';

interface ShoppingListProps {
  shoppingList: ShoppingItem[];
  checkedItems: Record<string, boolean>;
  onToggleItem: (id: string) => void;
  onClearChecked: () => void;
  onAddCustomItem: (name: string, amount: number, unit: string, department: string) => void;
  onRemoveCustomItem: (id: string) => void;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({
  shoppingList,
  checkedItems,
  onToggleItem,
  onClearChecked,
  onAddCustomItem,
  onRemoveCustomItem
}) => {
  const [copied, setCopied] = useState(false);

  // Form State for custom items
  const [customName, setCustomName] = useState('');
  const [customAmount, setCustomAmount] = useState<number>(1);
  const [customUnit, setCustomUnit] = useState('pcs');
  const [customDept, setCustomDept] = useState('Pantry');

  // Dynamic grouping by department
  const groupedItems = useMemo(() => {
    const groups: Record<string, ShoppingItem[]> = {};
    
    shoppingList.forEach((item) => {
      const dept = item.department || 'Other';
      if (!groups[dept]) {
        groups[dept] = [];
      }
      groups[dept].push(item);
    });

    return groups;
  }, [shoppingList]);

  // Stats
  const totalItemsCount = shoppingList.length;
  const checkedItemsCount = shoppingList.filter((item) => checkedItems[item.id]).length;

  // Export list
  const copyToClipboard = () => {
    if (shoppingList.length === 0) return;
    
    let text = `🛒 RECIPEFORGE GROCERY LIST\n`;
    text += `Generated on ${new Date().toLocaleDateString()}\n\n`;

    Object.entries(groupedItems).forEach(([department, items]) => {
      text += `📁 ${department.toUpperCase()}\n`;
      items.forEach((item) => {
        const isChecked = checkedItems[item.id] ? '[x]' : '[ ]';
        text += `${isChecked} ${formatQuantity(item.amount)} ${item.unit} - ${item.name}\n`;
      });
      text += `\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;
    
    onAddCustomItem(
      customName.trim(),
      Number(customAmount) || 1,
      customUnit.trim() || 'pcs',
      customDept
    );

    // Reset inputs
    setCustomName('');
    setCustomAmount(1);
    setCustomUnit('pcs');
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-fade-in">
      {/* Header and Quick stats */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-900 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <span>Grocery Shopping List</span>
            {totalItemsCount > 0 && (
              <span className="text-xs bg-theme-glow text-theme-primary border border-theme-primary-20 px-2.5 py-0.5 rounded-full font-bold">
                {checkedItemsCount}/{totalItemsCount} items
              </span>
            )}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Toggle checked items to track what is already in your kitchen stock.
          </p>
        </div>

        <div className="flex gap-2">
          {shoppingList.length > 0 && (
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs font-semibold text-slate-300 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Clipboard size={14} />
                  <span>Copy List</span>
                </>
              )}
            </button>
          )}

          {checkedItemsCount > 0 && (
            <button
              onClick={onClearChecked}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-rose-500-10 hover:border-rose-500/20 text-xs font-semibold text-rose-450 hover:text-rose-350 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <RefreshCw size={14} />
              <span>Reset Checked</span>
            </button>
          )}
        </div>
      </div>

      {/* QUICK ADD CUSTOM ITEM FORM */}
      <form onSubmit={handleAddSubmit} className="bg-slate-900 border border-slate-850 p-4 rounded-2xl space-y-3">
        <div className="text-xs font-bold text-slate-400 pl-1 uppercase tracking-wider">
          Quick Add Custom Item (Pantry, Household, etc.)
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          {/* Name input */}
          <input
            type="text"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            placeholder="e.g. Oatmeal bags, protein powder..."
            className="flex-grow bg-slate-950 border border-slate-850 rounded-xl px-3 py-2 text-xs text-slate-200"
          />

          <div className="flex gap-2">
            {/* Amount */}
            <input
              type="number"
              min="0.1"
              step="any"
              value={customAmount}
              onChange={(e) => setCustomAmount(Number(e.target.value))}
              className="w-16 bg-slate-950 border border-slate-850 rounded-xl px-2.5 py-2 text-xs text-slate-200 text-center"
              title="Quantity"
            />
            {/* Unit */}
            <input
              type="text"
              value={customUnit}
              onChange={(e) => setCustomUnit(e.target.value)}
              placeholder="unit"
              className="w-16 bg-slate-950 border border-slate-850 rounded-xl px-2.5 py-2 text-xs text-slate-200 text-center"
              title="Unit"
            />
            {/* Department */}
            <select
              value={customDept}
              onChange={(e) => setCustomDept(e.target.value)}
              className="bg-slate-950 border border-slate-850 rounded-xl px-3 py-2 text-xs text-slate-350 cursor-pointer"
            >
              <option value="Produce">Produce</option>
              <option value="Meat">Meat</option>
              <option value="Seafood">Seafood</option>
              <option value="Dairy">Dairy</option>
              <option value="Pantry">Pantry</option>
              <option value="Bakery">Bakery</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="flex-shrink-0 flex items-center justify-center gap-1 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <Plus size={14} strokeWidth={3} />
            <span>Add</span>
          </button>
        </div>
      </form>

      {/* Empty State */}
      {shoppingList.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center glass-panel rounded-3xl border border-slate-850">
          <ShoppingBag size={48} className="text-slate-650 mb-4 animate-bounce" />
          <h3 className="text-sm font-bold text-slate-350">Your shopping list is empty</h3>
          <p className="mt-2 text-xs text-slate-500 max-w-sm px-6 leading-relaxed">
            Plan some meals in the **Weekly Planner** tab, or add custom pantry items above to compile your list!
          </p>
        </div>
      )}

      {/* Grouped Department Checklist */}
      {shoppingList.length > 0 && (
        <div className="space-y-6">
          {Object.entries(groupedItems).map(([department, items]) => (
            <div key={department} className="space-y-2">
              <h3 className="text-xs font-black text-slate-450 uppercase tracking-widest pl-1.5 mb-2 border-l-2 border-theme-primary/50">
                {department}
              </h3>
              
              <div className="flex flex-col gap-2">
                {items.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  const isCustom = item.id.startsWith('custom-');
                  
                  return (
                    <div
                      key={item.id}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border select-none transition-all duration-300 ${
                        isChecked
                          ? 'bg-slate-950-40 border-slate-905 text-slate-650'
                          : 'bg-slate-900-60 border-slate-850 text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      {/* Checkbox Click trigger */}
                      <div 
                        onClick={() => onToggleItem(item.id)}
                        className="flex-shrink-0 cursor-pointer"
                      >
                        {isChecked ? (
                          <CheckSquare size={18} className="text-theme-primary" />
                        ) : (
                          <Square size={18} className="text-slate-600 hover:text-slate-500" />
                        )}
                      </div>

                      {/* Quantity amount and name */}
                      <div 
                        onClick={() => onToggleItem(item.id)}
                        className="flex-grow flex items-center justify-between text-xs cursor-pointer"
                      >
                        <span className={isChecked ? 'line-through text-slate-600' : 'text-slate-200 font-semibold'}>
                          {item.name}
                        </span>
                        <span className={`font-bold ${isChecked ? 'line-through text-slate-650' : 'text-theme-primary'}`}>
                          {formatQuantity(item.amount)} {item.unit}
                        </span>
                      </div>

                      {/* Delete Custom Item Button */}
                      {isCustom && (
                        <button
                          onClick={() => onRemoveCustomItem(item.id)}
                          className="p-1 rounded bg-slate-900 text-slate-500 hover:text-rose-450 hover:bg-rose-500-10 ml-2 cursor-pointer"
                          title="Delete custom item"
                        >
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
