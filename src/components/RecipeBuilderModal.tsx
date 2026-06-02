import { useState } from 'react';
import type { Recipe, Ingredient, Difficulty } from '@/types';
import { RECIPE_CATEGORIES } from '@/data/categories';
import { INDIAN_STATE_CUISINES } from '@/data/indianStates';
import { toYouTubeEmbedUrl } from '@/utils/youtube';
import { Plus, Trash2, ArrowLeft, ArrowRight, Save, Dumbbell, Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';

interface RecipeBuilderModalProps {
  onClose: () => void;
  onSave: (recipe: Recipe) => void;
}

export function RecipeBuilderModal({
  onClose,
  onSave
}: RecipeBuilderModalProps) {
  const [step, setStep] = useState<number>(1);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(RECIPE_CATEGORIES[0].label);
  const [subcategory, setSubcategory] = useState<string>('');
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
  const [image, setImage] = useState('');
  const [prepTime, setPrepTime] = useState<number>(15);
  const [cookTime, setCookTime] = useState<number>(15);
  const [servings, setServings] = useState<number>(2);
  
  // Macros & Video
  const [calories, setCalories] = useState<number>(350);
  const [protein, setProtein] = useState<number>(25);
  const [carbs, setCarbs] = useState<number>(30);
  const [fat, setFat] = useState<number>(10);
  const [videoUrl, setVideoUrl] = useState('');

  // Ingredients builder state
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [ingName, setIngName] = useState('');
  const [ingAmount, setIngAmount] = useState<number>(1);
  const [ingUnit, setIngUnit] = useState('g');
  const [ingDept, setIngDept] = useState('Produce');

  // Instructions builder state
  const [instructions, setInstructions] = useState<string[]>([]);
  const [instText, setInstText] = useState('');

  const handleAddIngredient = () => {
    if (!ingName.trim()) return;
    const newIng: Ingredient = {
      name: ingName.trim(),
      amount: ingAmount,
      unit: ingUnit,
      department: ingDept
    };
    setIngredients([...ingredients, newIng]);
    setIngName('');
    setIngAmount(1);
  };

  const handleRemoveIngredient = (idx: number) => {
    setIngredients(ingredients.filter((_, i) => i !== idx));
  };

  const handleAddInstruction = () => {
    if (!instText.trim()) return;
    setInstructions([...instructions, instText.trim()]);
    setInstText('');
  };

  const handleRemoveInstruction = (idx: number) => {
    setInstructions(instructions.filter((_, i) => i !== idx));
  };

  const activeCategoryNode = RECIPE_CATEGORIES.find((c) => c.label === category);
  const subcategoryOptions =
    category === 'Indian Cuisine'
      ? [...INDIAN_STATE_CUISINES]
      : (activeCategoryNode?.subcategories ?? []);

  const handleSubmit = () => {
    if (!title.trim() || ingredients.length === 0 || instructions.length === 0) {
      alert('Please fill out Title, and add at least one ingredient and instruction step.');
      return;
    }

    const defaultImage = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80';
    
    const newRecipe: Recipe = {
      id: `custom-rec-${Date.now()}`,
      title: title.trim(),
      description: description.trim() || 'A delicious home-cooked recipe.',
      image: image.trim() || defaultImage,
      prepTime: Number(prepTime) || 10,
      cookTime: Number(cookTime) || 10,
      servings: Number(servings) || 2,
      category,
      subcategory: subcategory || undefined,
      tags: [
        'Homecooked',
        category === 'Gym Diet' ? 'Gym Diet' : category,
        category === 'Indian Cuisine' ? 'Authentic' : '',
        protein >= 25 ? 'High-Protein' : 'Healthy'
      ].filter(Boolean),
      difficulty,
      calories: Number(calories) || 300,
      rating: 5.0,
      macros: {
        protein: Number(protein) || 0,
        carbs: Number(carbs) || 0,
        fat: Number(fat) || 0
      },
      videoUrl: videoUrl.trim() ? toYouTubeEmbedUrl(videoUrl) : undefined,
      ingredients,
      instructions
    };

    onSave(newRecipe);
    onClose();
  };

  const stepLabels = ['Details', 'Nutrition & video', 'Ingredients', 'Instructions'];

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="flex max-h-[90vh] max-w-lg flex-col gap-0 overflow-hidden p-0 sm:max-w-lg">
        <DialogHeader className="space-y-3 p-6 pb-4">
          <DialogTitle>Create custom recipe</DialogTitle>
          <DialogDescription>
            Step {step} of 4 — {stepLabels[step - 1]}
          </DialogDescription>
          <Progress value={(step / 4) * 100} className="h-1.5" />
        </DialogHeader>

        <ScrollArea className="max-h-[50vh] px-6">

        {/* STEP 1: GENERAL INFO */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Recipe name *</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Avocado toast" />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">
                  Cuisine Category
                </label>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setSubcategory('');
                  }}
                  className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200 font-semibold cursor-pointer"
                >
                  {RECIPE_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.label}>
                      {cat.emoji} {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">
                  {category === 'Indian Cuisine'
                    ? 'State / UT (authentic regional)'
                    : 'Regional / Style'}
                </label>
                <select
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                  disabled={subcategoryOptions.length === 0}
                  className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200 font-semibold cursor-pointer disabled:opacity-50"
                >
                  <option value="">— Optional —</option>
                  {subcategoryOptions.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200 font-semibold cursor-pointer"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Prep Time (min)</label>
                <input
                  type="number"
                  min="1"
                  value={prepTime}
                  onChange={(e) => setPrepTime(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Cook Time (min)</label>
                <input
                  type="number"
                  min="0"
                  value={cookTime}
                  onChange={(e) => setCookTime(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Servings</label>
                <input
                  type="number"
                  min="1"
                  value={servings}
                  onChange={(e) => setServings(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Image URL (Optional)</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://..."
                className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
              />
            </div>
          </div>
        )}

        {/* STEP 2: GYM NUTRITION & VIDEO */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-theme-primary mb-2">
              <Dumbbell size={16} />
              <h4 className="text-xs font-bold uppercase tracking-wider">Macros & Gym Prep Inputs</h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Calories (kcal)</label>
                <input
                  type="number"
                  min="0"
                  value={calories}
                  onChange={(e) => setCalories(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Protein (g)</label>
                <input
                  type="number"
                  min="0"
                  value={protein}
                  onChange={(e) => setProtein(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Carbs (g)</label>
                <input
                  type="number"
                  min="0"
                  value={carbs}
                  onChange={(e) => setCarbs(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Fat (g)</label>
                <input
                  type="number"
                  min="0"
                  value={fat}
                  onChange={(e) => setFat(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-900">
              <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1 flex items-center gap-1.5">
                <Play size={12} className="text-rose-500" />
                <span>YouTube Video Tutorial Link</span>
              </label>
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
              />
              <span className="text-[10px] text-slate-500 italic block pl-1">
                Link to a video guide on how to prepare this recipe.
              </span>
            </div>
          </div>
        )}

        {/* STEP 3: INGREDIENTS */}
        {step === 3 && (
          <div className="space-y-4 flex-grow flex flex-col min-h-0">
            {/* Inline Builder Inputs */}
            <div className="bg-slate-900 border border-slate-850 p-4 rounded-2xl space-y-3">
              <div className="flex flex-col gap-1">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider">Ingredient Name</label>
                <input
                  type="text"
                  value={ingName}
                  onChange={(e) => setIngName(e.target.value)}
                  placeholder="e.g. Skinless Chicken Breast"
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl p-2.5 text-xs text-slate-200"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col gap-1">
                  <label className="text-micro font-bold text-slate-500 uppercase tracking-wider">Qty</label>
                  <input
                    type="number"
                    min="0.1"
                    step="any"
                    value={ingAmount}
                    onChange={(e) => setIngAmount(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl p-2.5 text-xs text-slate-200"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-micro font-bold text-slate-500 uppercase tracking-wider">Unit</label>
                  <input
                    type="text"
                    value={ingUnit}
                    onChange={(e) => setIngUnit(e.target.value)}
                    placeholder="g, pcs, tbsp"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl p-2.5 text-xs text-slate-200"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-micro font-bold text-slate-500 uppercase tracking-wider">Dept</label>
                  <select
                    value={ingDept}
                    onChange={(e) => setIngDept(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl p-2.5 text-xs text-slate-200 cursor-pointer"
                  >
                    <option value="Produce">Produce</option>
                    <option value="Meat">Meat</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Pantry">Pantry</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddIngredient}
                className="w-full flex items-center justify-center gap-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-bold text-theme-primary transition-all cursor-pointer"
              >
                <Plus size={14} />
                <span>Add Ingredient</span>
              </button>
            </div>

            {/* Ingredients Checklist */}
            <div className="flex-grow overflow-y-auto max-h-[220px] pr-1 space-y-2">
              <span className="text-micro font-bold text-slate-500 uppercase tracking-wider">Added Ingredients ({ingredients.length})</span>
              {ingredients.length === 0 ? (
                <div className="text-slate-500 text-xs italic py-4 text-center">No ingredients added yet.</div>
              ) : (
                ingredients.map((ing, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-slate-905 border border-slate-850 px-3 py-2 rounded-xl text-xs">
                    <span>
                      <strong className="text-theme-primary">{ing.amount} {ing.unit}</strong> - {ing.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(idx)}
                      className="p-1 rounded bg-slate-900 text-slate-500 hover:text-rose-450 hover:bg-rose-500-10"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* STEP 4: INSTRUCTIONS */}
        {step === 4 && (
          <div className="space-y-4 flex-grow flex flex-col min-h-0">
            <div className="bg-slate-900 border border-slate-850 p-4 rounded-2xl space-y-3">
              <div className="flex flex-col gap-1">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider">Add Cooking Step</label>
                <textarea
                  value={instText}
                  onChange={(e) => setInstText(e.target.value)}
                  placeholder="e.g. Sauté the garlic in heated butter until fragrant..."
                  rows={2}
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl p-2.5 text-xs text-slate-200 resize-none"
                />
              </div>

              <button
                type="button"
                onClick={handleAddInstruction}
                className="w-full flex items-center justify-center gap-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-bold text-theme-primary transition-all cursor-pointer"
              >
                <Plus size={14} />
                <span>Add Step</span>
              </button>
            </div>

            <div className="flex-grow overflow-y-auto max-h-[220px] pr-1 space-y-2">
              <span className="text-micro font-bold text-slate-500 uppercase tracking-wider">Instructions Steps ({instructions.length})</span>
              {instructions.length === 0 ? (
                <div className="text-slate-500 text-xs italic py-4 text-center">No instruction steps added yet.</div>
              ) : (
                instructions.map((stepStr, idx) => (
                  <div key={idx} className="flex gap-2 bg-slate-905 border border-slate-850 p-3 rounded-xl text-xs items-start">
                    <span className="w-5 h-5 rounded-lg bg-theme-glow text-theme-primary font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="flex-grow leading-relaxed text-slate-300">{stepStr}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveInstruction(idx)}
                      className="p-1 rounded bg-slate-900 text-slate-500 hover:text-rose-450 hover:bg-rose-500-10 flex-shrink-0"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        </ScrollArea>

        <DialogFooter className="gap-2 border-t p-4 sm:justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              <ArrowLeft className="size-4" />
              Back
            </Button>
          ) : (
            <div />
          )}
          {step < 4 ? (
            <Button onClick={() => setStep(step + 1)}>
              Next
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit}>
              <Save className="size-4" />
              Save recipe
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
