# 🍳 RecipeForge

> A high-performance **Gym Diet & Meal Planner** built with React 19, TypeScript, and Tailwind CSS v4 — designed for fitness enthusiasts who demand precision nutrition and elegant UI.

> [!IMPORTANT]
> **Status: Under Active Development**
> New modules, recipe data, and training utilities are being added continuously.

---

## ✨ Features

### 🏠 Dashboard Overview
A glanceable summary of your entire week — active meals, macro targets, favourite recipes, and quick-access shortcuts to every section of the app.

### 🔍 Recipe Explorer
Browse and search a curated library of recipes across multiple cuisines (including a dedicated **Indian Cuisine** collection). Filter by category, dietary preference, difficulty, or calorie range. Mark favourites, rate recipes, and open full detail views with embedded video tutorials.

### 📅 Weekly Meal Planner
An interactive 7-day grid for scheduling Breakfast, Lunch, and Dinner. Adjust serving sizes directly in the grid — macro totals update in real time. Empty slots invite quick scheduling with a single click.

### 💪 Gym Diet Planner
Enter your bodyweight, choose an activity level, and set a training goal (Bulk / Cut / Maintenance). The planner computes your:
- **BMR** (Basal Metabolic Rate) via the Mifflin–St Jeor formula
- **TDEE** (Total Daily Energy Expenditure)
- Personalised macro targets — up to **2.4 g protein / kg** on a cut

Matching recipes are automatically highlighted based on your active goal.

### 🛒 Smart Shopping List
Ingredients from every scheduled meal are automatically aggregated, deduplicated, and sorted by supermarket department. Add custom items manually, check off as you shop, and clear completed items in one tap.

### 🎨 Theme Accent Switcher
Four curated accent palettes — **Teal**, **Gold Autumn**, **Sunset Rose**, and **Cyberpunk Indigo** — with instant CSS-variable-based recolouring across the entire UI.

### 🥗 Diet Preference Filter
A persistent toggle (All / Veg / Vegan / Non-Veg) that filters recipes app-wide — from the explorer to the planner and gym suggestions.

### 📝 Custom Recipe Builder
A multi-step modal form for creating your own recipes: title, prep/cook times, difficulty, calories, macro splits, ingredient list, step-by-step instructions, and an optional YouTube tutorial link. Custom recipes are stored in `localStorage` and appear instantly alongside the built-in library.

### 🎬 Embedded Video Tutorials
Recipe detail drawers embed YouTube walkthroughs (auto-converted to embed URLs) so users can watch how-to videos without leaving the workspace.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 (Functional Components & Hooks) |
| Language | TypeScript ~6.0 (strict mode) |
| Bundler | Vite 8 (HMR, fast builds) |
| Styling | Tailwind CSS v4 + `tw-animate-css` |
| Component Primitives | Radix UI (Dialog, Select, Slider, Tabs, Checkbox, Progress…) |
| Component Utilities | `class-variance-authority`, `clsx`, `tailwind-merge` |
| Icons | Lucide React |
| Linting | ESLint 10 + `typescript-eslint` + `eslint-plugin-react-hooks` |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AssignMealModal.tsx      # Schedule a recipe into the weekly plan
│   ├── CategoryFilter.tsx       # Recipe category/subcategory filter bar
│   ├── DashboardOverview.tsx    # Home screen summary widgets
│   ├── DietToggle.tsx           # Veg / Vegan / Non-Veg preference switcher
│   ├── GymDietPlanner.tsx       # TDEE/BMR calculator + macro-matched recipes
│   ├── RecipeBuilderModal.tsx   # Multi-step custom recipe creation form
│   ├── RecipeCard.tsx           # Reusable recipe card with macros & actions
│   ├── RecipeDetailModal.tsx    # Full recipe drawer with video embed
│   ├── RecipeExplorer.tsx       # Searchable/filterable recipe library
│   ├── RecipeImage.tsx          # Lazy-loaded recipe image with fallback
│   ├── ShoppingList.tsx         # Aggregated grocery list with check-off
│   ├── Sidebar.tsx              # Navigation, theme switcher, diet toggle
│   ├── WeeklyPlanner.tsx        # 7-day meal grid
│   └── ui/                      # shadcn/ui-style primitives (Button, Badge…)
├── data/
│   ├── categories.ts            # Category definitions & migration helpers
│   ├── indianStates.ts          # Indian cuisine subcategory normalisation
│   └── recipes.ts               # Built-in recipe database (mock data)
├── lib/
│   └── theme.ts                 # Accent theme application via CSS variables
├── types/                       # Shared TypeScript interfaces (Recipe, GymGoal…)
├── utils/
│   ├── diet.ts                  # Diet preference filtering logic
│   ├── helpers.ts               # Shopping list compiler & misc utilities
│   ├── recipeImages.ts          # Recipe image URL resolver
│   └── youtube.ts               # YouTube URL → embed URL converter
├── App.tsx                      # Root component — state orchestration
├── index.css                    # Global styles & Tailwind directives
└── main.tsx                     # React 19 entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18+** (v20 LTS recommended)
- npm (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd <project-folder>

# 2. Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Opens at **[http://localhost:5173](http://localhost:5173)** with Hot Module Replacement active.

### Linting

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

Output is emitted to the `dist/` directory — TypeScript is compiled first (`tsc -b`), then Vite bundles assets.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 💾 Local Persistence

All user data is persisted to `localStorage` automatically — no backend required:

| Key | Stores |
|---|---|
| `recipeforge_tab` | Last active navigation tab |
| `recipeforge_theme` | Selected accent theme |
| `recipeforge_diet` | Dietary preference filter |
| `recipeforge_customrecipes` | User-created recipes |
| `recipeforge_favorites` | Favourite recipe IDs |
| `recipeforge_gymgoal` | Biometric & training goal data |
| `recipeforge_mealplan` | Weekly meal schedule |
| `recipeforge_customshopping` | Manually added shopping items |
| `recipeforge_checkeditems` | Checked-off grocery items |

---

## 🗺️ Roadmap

- [ ] Cloud sync (Firebase / Supabase)
- [ ] User authentication & profile management
- [ ] Barcode scanner for ingredient logging
- [ ] PDF export for weekly meal plans & shopping lists
- [ ] Nutrition API integration for live food data

---

## 📄 License

This project is private and not currently licensed for redistribution.

---

<p align="center">Built with ❤️ using React · TypeScript · Tailwind CSS · Vite</p>