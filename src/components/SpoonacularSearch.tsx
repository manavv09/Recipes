/**
 * SpoonacularSearch component
 *
 * Lets users search the Spoonacular recipe database and import
 * recipes directly into their RecipeForge custom library.
 */

import { useState } from 'react';
import {
  searchSpoonacularRecipes,
  fetchSpoonacularRecipeDetail
} from '@/services/spoonacular';
import type { Recipe } from '@/types';
import { Search, Download, AlertCircle, KeyRound, Loader2, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface SpoonacularSearchProps {
  onImport: (recipe: Recipe) => void;
}

interface SearchResult {
  id: number;
  title: string;
  image: string;
}

const DIET_OPTIONS = [
  { value: 'none', label: 'Any diet' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'ketogenic', label: 'Keto' },
  { value: 'gluten free', label: 'Gluten-Free' },
  { value: 'paleo', label: 'Paleo' }
];

export function SpoonacularSearch({ onImport }: SpoonacularSearchProps) {
  const [query, setQuery] = useState('');
  const [diet, setDiet] = useState('none');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [importingId, setImportingId] = useState<number | null>(null);
  const [importedIds, setImportedIds] = useState<Set<number>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [noApiKey, setNoApiKey] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setError(null);
    setNoApiKey(false);
    setHasSearched(true);

    const { results: found, error: err } = await searchSpoonacularRecipes(
      query.trim(),
      diet !== 'none' ? diet : undefined
    );

    setIsSearching(false);

    if (err) {
      setNoApiKey(!!err.noApiKey);
      setError(err.message);
      setResults([]);
    } else {
      setResults(found);
    }
  };

  const handleImport = async (id: number) => {
    setImportingId(id);
    const { recipe, error: err } = await fetchSpoonacularRecipeDetail(id);
    setImportingId(null);

    if (err || !recipe) {
      setError(err?.message ?? 'Failed to import recipe.');
      return;
    }

    onImport(recipe);
    setImportedIds((prev) => new Set([...prev, id]));
  };

  const isConfigured = !noApiKey;

  return (
    <div className="space-y-6">
      {/* API Key Notice */}
      {noApiKey && (
        <Card className="border-amber-500/40 bg-amber-500/5">
          <CardContent className="flex gap-3 pt-6">
            <KeyRound className="text-amber-500 mt-0.5 size-5 shrink-0" />
            <div className="space-y-1.5">
              <p className="text-sm font-semibold">Spoonacular API key required</p>
              <p className="text-muted-foreground text-sm">
                To use live recipe search, add your free key to a{' '}
                <code className="bg-muted rounded px-1 py-0.5 text-xs">.env</code> file:
              </p>
              <pre className="bg-muted rounded-md p-3 text-xs font-mono mt-2">
                VITE_SPOONACULAR_KEY=your_key_here
              </pre>
              <p className="text-muted-foreground text-xs">
                Get a free key at{' '}
                <a
                  href="https://spoonacular.com/food-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  spoonacular.com/food-api
                </a>
                {' '}(150 req/day free).
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search bar */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            id="spoonacular-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="e.g. chicken tikka, protein pasta, miso soup…"
            className="pl-9"
          />
        </div>
        <Select value={diet} onValueChange={setDiet}>
          <SelectTrigger className="w-full sm:w-[160px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {DIET_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          id="spoonacular-search-btn"
          onClick={handleSearch}
          disabled={isSearching || !query.trim()}
          className="shrink-0"
        >
          {isSearching ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Search className="size-4" />
          )}
          Search
        </Button>
      </div>

      {/* Non-key errors */}
      {error && !noApiKey && (
        <div className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle className="size-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <>
          <p className="text-muted-foreground text-sm">
            Found <span className="text-foreground font-medium">{results.length}</span> recipes
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((r) => {
              const isImported = importedIds.has(r.id);
              const isLoadingThis = importingId === r.id;
              return (
                <Card
                  key={r.id}
                  className="overflow-hidden transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    {isImported && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <Badge variant="secondary" className="gap-1 text-sm">
                          ✓ Imported
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-semibold leading-snug line-clamp-2">{r.title}</p>
                    <Button
                      id={`import-recipe-${r.id}`}
                      size="sm"
                      variant={isImported ? 'secondary' : 'default'}
                      className="mt-3 w-full gap-1.5"
                      disabled={isImported || isLoadingThis || !isConfigured}
                      onClick={() => handleImport(r.id)}
                    >
                      {isLoadingThis ? (
                        <Loader2 className="size-3.5 animate-spin" />
                      ) : (
                        <Download className="size-3.5" />
                      )}
                      {isImported ? 'Imported' : 'Import to library'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      )}

      {/* Empty state after search */}
      {hasSearched && results.length === 0 && !error && !isSearching && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center py-16 text-center">
            <ChefHat className="text-muted-foreground mb-4 size-12" />
            <CardTitle className="text-base">No recipes found</CardTitle>
            <CardDescription className="mt-2">
              Try a different keyword or remove the diet filter.
            </CardDescription>
          </CardContent>
        </Card>
      )}

      {/* Pre-search prompt */}
      {!hasSearched && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center py-16 text-center">
            <Search className="text-muted-foreground mb-4 size-12" />
            <CardTitle className="text-base">Search millions of recipes</CardTitle>
            <CardDescription className="mt-2 max-w-sm">
              Type a dish name, ingredient, or cuisine above and import any recipe directly into your library.
            </CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
