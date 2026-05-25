import React, { useState } from 'react';
import type { Recipe, Ingredient, Difficulty } from '../types';
import { X, Plus, Trash2, ArrowLeft, ArrowRight, Save, Dumbbell, Play } from 'lucide-react';

interface RecipeBuilderModalProps {
  onClose: () => void;
  onSave: (recipe: Recipe) => void;
}

export const RecipeBuilderModal: React.FC<RecipeBuilderModalProps> = ({
  onClose,
  onSave
}) => {
  const [step, setStep] = useState<number>(1);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cuisine, setCuisine] = useState('Healthy');
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

  // Convert youtube links to embed format
  const getEmbedVideoUrl = (url: string) => {
    if (!url) return '';
    try {
      if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      } else if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return url;
    } catch (e) {
      return url;
    }
  };

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
      cuisine: cuisine.trim(),
      tags: ['Homecooked', protein >= 25 ? 'High-Protein' : 'Healthy'],
      difficulty,
      calories: Number(calories) || 300,
      rating: 5.0,
      macros: {
        protein: Number(protein) || 0,
        carbs: Number(carbs) || 0,
        fat: Number(fat) || 0
      },
      videoUrl: getEmbedVideoUrl(videoUrl),
      ingredients,
      instructions
    };

    onSave(newRecipe);
    onClose();
  };

  return (
    <div className="modal-overlay flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="glass-panel w-full max-w-lg rounded-3xl border border-slate-800-80 shadow-2xl p-6 relative flex flex-col max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1.5 rounded-full text-slate-500 hover:text-white hover:bg-slate-900 border border-slate-800 transition-all cursor-pointer"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-100">Create Custom Recipe</h3>
          <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4].map((stepIdx) => (
              <div
                key={stepIdx}
                className={`h-1.5 flex-grow rounded-full transition-all duration-300 ${
                  step >= stepIdx ? 'bg-theme-primary' : 'bg-slate-800'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1.5 block">
            Step {step} of 4: {
              step === 1 ? 'General Details' :
              step === 2 ? 'Gym Nutrition & Video' :
              step === 3 ? 'Ingredients Checklist' : 'Cooking Instructions'
            }
          </span>
        </div>

        {/* STEP 1: GENERAL INFO */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Recipe Name *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Avocado Toast Deluxe"
                className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Short Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief summary of your recipe..."
                rows={2}
                className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200 resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">Cuisine</label>
                <input
                  type="text"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3 text-sm text-slate-200"
                />
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

        {/* Modal Footer Controls */}
        <div className="flex justify-between items-center border-t border-slate-900 pt-4 mt-6">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-850 hover:bg-slate-900 text-xs font-bold text-slate-300 transition-all cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-black text-xs transition-all shadow-md shadow-theme-glow cursor-pointer"
            >
              <span>Next</span>
              <ArrowRight size={14} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-black text-xs transition-all shadow-md shadow-theme-glow cursor-pointer"
            >
              <Save size={14} />
              <span>Save Recipe</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
