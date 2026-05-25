import React, { useState, useEffect } from 'react';
import type { Recipe } from '../types';
import { DAYS } from './WeeklyPlanner';
import { X, Calendar, Users, Coffee, Utensils, Moon } from 'lucide-react';

interface AssignMealModalProps {
  recipes: Recipe[];
  prefilledDay: string | null;
  prefilledMealType: 'breakfast' | 'lunch' | 'dinner' | null;
  prefilledRecipe: Recipe | null;
  onClose: () => void;
  onConfirm: (
    recipe: Recipe,
    day: string,
    mealType: 'breakfast' | 'lunch' | 'dinner',
    servings: number
  ) => void;
}

export const AssignMealModal: React.FC<AssignMealModalProps> = ({
  recipes,
  prefilledDay,
  prefilledMealType,
  prefilledRecipe,
  onClose,
  onConfirm
}) => {
  // 1. STATE BINDINGS
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedMealType, setSelectedMealType] = useState<'breakfast' | 'lunch' | 'dinner'>('dinner');
  const [servings, setServings] = useState<number>(4);

  // Sync state if modal is triggered with prefilled values
  useEffect(() => {
    if (prefilledRecipe) {
      setSelectedRecipeId(prefilledRecipe.id);
      setServings(prefilledRecipe.servings);
    } else if (recipes.length > 0) {
      setSelectedRecipeId(recipes[0].id);
      setServings(recipes[0].servings);
    }

    if (prefilledDay) {
      setSelectedDay(prefilledDay);
    }
    if (prefilledMealType) {
      setSelectedMealType(prefilledMealType);
    }
  }, [prefilledRecipe, prefilledDay, prefilledMealType, recipes]);

  // Adjust servings based on chosen recipe if user changes recipe selection
  const handleRecipeChange = (recipeId: string) => {
    setSelectedRecipeId(recipeId);
    const chosen = recipes.find((r) => r.id === recipeId);
    if (chosen) {
      setServings(chosen.servings);
    }
  };

  const handleIncrement = () => setServings((prev) => Math.min(prev + 1, 20));
  const handleDecrement = () => setServings((prev) => Math.max(prev - 1, 1));

  // Find currently active recipe object
  const currentRecipe = recipes.find((r) => r.id === selectedRecipeId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentRecipe) return;

    onConfirm(currentRecipe, selectedDay, selectedMealType, servings);
    onClose();
  };

  return (
    <div className="modal-overlay flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="glass-panel w-full max-w-md rounded-3xl border border-slate-800-80 shadow-2xl p-6 relative animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1-5 rounded-full text-slate-500 hover:text-white hover:bg-slate-900 border border-slate-800-60 backdrop-blur-md transition-all duration-300"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2 text-teal-400 mb-6">
          <Calendar size={20} />
          <h3 className="text-lg font-bold text-slate-100">Schedule Meal Plan</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 1. RECIPE PICKER */}
          <div className="flex flex-col gap-2">
            <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">
              Select Recipe
            </label>
            {prefilledRecipe ? (
              // If prefilled, show static read-only info
              <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-3 rounded-2xl">
                <img
                  src={prefilledRecipe.image}
                  alt={prefilledRecipe.title}
                  className="w-10 h-10 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-200">{prefilledRecipe.title}</h4>
                  <span className="text-micro text-teal-450 uppercase font-semibold">{prefilledRecipe.cuisine} cuisine</span>
                </div>
              </div>
            ) : (
              // If not prefilled, show select dropdown
              <select
                value={selectedRecipeId}
                onChange={(e) => handleRecipeChange(e.target.value)}
                className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3-5 text-sm text-slate-200 font-semibold focus:outline-none focus:border-teal-500/50 transition-colors cursor-pointer"
              >
                {recipes.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.title} ({r.cuisine})
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* 2. DAY OF THE WEEK */}
          <div className="flex flex-col gap-2">
            <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">
              Day of the Week
            </label>
            {prefilledDay ? (
              <div className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3-5 text-sm text-slate-400 font-bold uppercase tracking-wider">
                {prefilledDay}
              </div>
            ) : (
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3-5 text-sm text-slate-200 font-semibold focus:outline-none focus:border-teal-500/50 transition-colors cursor-pointer"
              >
                {DAYS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* 3. MEAL TYPE SELECTOR */}
          <div className="flex flex-col gap-2">
            <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">
              Meal Slot
            </label>
            {prefilledMealType ? (
              <div className="w-full bg-slate-900 border border-slate-850 rounded-2xl p-3-5 text-sm text-slate-400 font-bold uppercase tracking-wider flex items-center gap-2">
                {prefilledMealType === 'breakfast' && <Coffee size={14} className="text-amber-400" />}
                {prefilledMealType === 'lunch' && <Utensils size={14} className="text-teal-400" />}
                {prefilledMealType === 'dinner' && <Moon size={14} className="text-indigo-400" />}
                <span>{prefilledMealType}</span>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {(['breakfast', 'lunch', 'dinner'] as const).map((type) => {
                  const isActive = selectedMealType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedMealType(type)}
                      className={`flex flex-col items-center justify-center py-2-5 rounded-xl border text-xs font-bold capitalize transition-all duration-300 ${
                        isActive
                          ? 'bg-teal-500-10 border-teal-500-55 text-teal-400'
                          : 'bg-slate-905 border-slate-850 text-slate-400 hover:border-slate-800'
                      }`}
                    >
                      {type === 'breakfast' && <Coffee size={14} className="mb-1" />}
                      {type === 'lunch' && <Utensils size={14} className="mb-1" />}
                      {type === 'dinner' && <Moon size={14} className="mb-1" />}
                      {type}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 4. SERVINGS DIAL */}
          <div className="flex flex-col gap-2">
            <label className="text-micro font-bold text-slate-500 uppercase tracking-wider pl-1">
              Servings
            </label>
            <div className="flex items-center justify-between bg-slate-900 border border-slate-850 p-3-5 rounded-2xl">
              <span className="text-xs text-slate-450 flex items-center gap-1-5">
                <Users size={14} />
                Adjust servings count:
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="w-6 text-center text-sm font-extrabold text-teal-400">
                  {servings}
                </span>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-extrabold py-3.5 text-sm transition-all duration-300 shadow-xl shadow-teal-500-10 cursor-pointer"
          >
            <span>Confirm Schedule</span>
          </button>
        </form>
      </div>
    </div>
  );
};
