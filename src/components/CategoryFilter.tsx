import { ChevronRight, LayoutGrid } from 'lucide-react';
import { RECIPE_CATEGORIES } from '@/data/categories';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface CategoryFilterProps {
  selectedCategory: string;
  selectedSubcategory: string | null;
  onSelectCategory: (category: string) => void;
  onSelectSubcategory: (subcategory: string | null) => void;
  recipeCounts: Record<string, number>;
  subcategoryCounts?: Record<string, number>;
}

export function CategoryFilter({
  selectedCategory,
  selectedSubcategory,
  onSelectCategory,
  onSelectSubcategory,
  recipeCounts,
  subcategoryCounts = {}
}: CategoryFilterProps) {
  const activeNode =
    selectedCategory === 'All'
      ? null
      : RECIPE_CATEGORIES.find((c) => c.label === selectedCategory);

  const handleCategoryClick = (label: string) => {
    if (label === 'All') {
      onSelectCategory('All');
      onSelectSubcategory(null);
      return;
    }
    if (selectedCategory === label) {
      onSelectSubcategory(null);
      return;
    }
    onSelectCategory(label);
    onSelectSubcategory(null);
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-sm font-medium">
            <LayoutGrid className="text-primary size-4" />
            Browse by cuisine
          </CardTitle>
          {(selectedCategory !== 'All' || selectedSubcategory) && (
            <Button
              variant="ghost"
              size="sm"
              className="text-primary h-7 text-xs"
              onClick={() => {
                onSelectCategory('All');
                onSelectSubcategory(null);
              }}
            >
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-2 pb-2">
            <Button
              size="sm"
              variant={selectedCategory === 'All' ? 'default' : 'outline'}
              onClick={() => handleCategoryClick('All')}
              className="shrink-0"
            >
              All
              <Badge variant="secondary" className="ml-1 bg-background/20">
                {recipeCounts['All'] ?? 0}
              </Badge>
            </Button>
            {RECIPE_CATEGORIES.map((cat) => (
              <Button
                key={cat.id}
                size="sm"
                variant={selectedCategory === cat.label ? 'default' : 'outline'}
                onClick={() => handleCategoryClick(cat.label)}
                className="shrink-0"
              >
                <span>{cat.emoji}</span>
                {cat.label}
                <Badge variant="secondary" className="ml-1 bg-background/20">
                  {recipeCounts[cat.label] ?? 0}
                </Badge>
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {activeNode && activeNode.subcategories.length > 0 && (
          <div className="bg-muted/50 rounded-lg border p-3">
            <div className="text-muted-foreground mb-2 flex flex-wrap items-center gap-1 text-xs font-medium">
              <span>{activeNode.emoji}</span>
              <span>{activeNode.label}</span>
              <ChevronRight className="size-3" />
              <span>
                {activeNode.id === 'indian'
                  ? 'Authentic state & UT cuisines (36 regions)'
                  : 'Style'}
              </span>
            </div>
            <ScrollArea className={cn(activeNode.id === 'indian' && 'max-h-44')}>
              <div className="flex flex-wrap gap-2 pr-2">
                <Button
                  size="sm"
                  variant={!selectedSubcategory ? 'secondary' : 'outline'}
                  onClick={() => onSelectSubcategory(null)}
                >
                  All regions
                </Button>
                {activeNode.subcategories.map((sub) => {
                  const count = subcategoryCounts[sub] ?? 0;
                  return (
                    <Button
                      key={sub}
                      size="sm"
                      variant={selectedSubcategory === sub ? 'secondary' : 'outline'}
                      onClick={() => onSelectSubcategory(sub)}
                      disabled={count === 0}
                      className={cn(
                        'h-auto whitespace-normal text-left',
                        selectedSubcategory === sub && 'ring-primary ring-1',
                        count === 0 && 'opacity-40'
                      )}
                    >
                      {sub}
                      {count > 0 && (
                        <Badge variant="secondary" className="ml-1 text-[10px]">
                          {count}
                        </Badge>
                      )}
                    </Button>
                  );
                })}
              </div>
            </ScrollArea>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
