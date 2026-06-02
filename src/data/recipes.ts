import type { Recipe } from '../types';
import { indianStateRecipes } from './indianRecipes';

const baseRecipes: Recipe[] = [
  {
    id: 'rec-1',
    title: 'Tuscan Butter Salmon',
    description:
      'Pan-seared salmon fillets in a rich, creamy garlic butter sauce with spinach, sun-dried tomatoes, and parmesan.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    category: 'Italian',
    subcategory: 'Seafood',
    tags: ['Seafood', 'Gluten-Free', 'Keto', 'Low-Carb', 'High-Protein'],
    difficulty: 'Easy',
    calories: 450,
    rating: 4.8,
    macros: { protein: 34, carbs: 5, fat: 32 },
    videoUrl: 'https://www.youtube.com/embed/Y-9k9S7m9y0',
    ingredients: [
      { name: 'Salmon Fillets', amount: 4, unit: 'pcs', department: 'Seafood' },
      { name: 'Olive Oil', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Butter', amount: 3, unit: 'tbsp', department: 'Dairy' },
      { name: 'Garlic Cloves (Minced)', amount: 5, unit: 'pcs', department: 'Produce' },
      { name: 'Heavy Cream', amount: 1.5, unit: 'cups', department: 'Dairy' },
      { name: 'Chicken Broth', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Grated Parmesan', amount: 0.75, unit: 'cups', department: 'Dairy' },
      { name: 'Sun-dried Tomatoes', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Baby Spinach', amount: 3, unit: 'cups', department: 'Produce' }
    ],
    instructions: [
      'Season salmon fillets on both sides with salt and pepper.',
      'Heat olive oil in a large skillet over medium-high heat. Sear salmon for 4 minutes per side until golden, then remove and set aside.',
      'Reduce heat to medium. Add butter and garlic, cooking for 1 minute until fragrant.',
      'Pour in chicken broth and heavy cream, bringing to a simmer. Stir in parmesan cheese and sun-dried tomatoes, letting the sauce thicken for 3 minutes.',
      'Add baby spinach and allow to wilt in the sauce.',
      'Return salmon to the skillet, spoon sauce over the fillets, and cook for 2 more minutes until heated through. Serve hot!'
    ]
  },
  {
    id: 'rec-2',
    title: 'Thai Basil Tofu (Pad Krapow)',
    description:
      'A vibrant, spicy stir-fry featuring crispy crumbled tofu, fresh red chilies, bell peppers, and fragrant holy basil.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    category: 'Thai',
    subcategory: 'Stir-Fry',
    tags: ['Vegan', 'Vegetarian', 'Spicy', 'Quick', 'Low-Carb'],
    difficulty: 'Medium',
    calories: 320,
    rating: 4.5,
    macros: { protein: 18, carbs: 15, fat: 20 },
    videoUrl: 'https://www.youtube.com/embed/5T56e_e88Ew',
    ingredients: [
      { name: 'Extra Firm Tofu', amount: 1, unit: 'block', department: 'Produce' },
      { name: 'Garlic Cloves', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Thai Bird Eye Chilies', amount: 3, unit: 'pcs', department: 'Produce' },
      { name: 'Red Bell Pepper (Sliced)', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Soy Sauce', amount: 1.5, unit: 'tbsp', department: 'Pantry' },
      { name: 'Dark Soy Sauce', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Maple Syrup', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Fresh Thai Basil Leaves', amount: 1.5, unit: 'cups', department: 'Produce' },
      { name: 'Vegetable Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Drain tofu and press with a paper towel to remove excess moisture. Crumble it into small bite-sized bits.',
      'Finely chop the garlic and Thai chilies together to form a paste.',
      'In a small bowl, whisk together soy sauce, dark soy sauce, and maple syrup.',
      'Heat vegetable oil in a wok over high heat. Add the garlic-chili paste and stir-fry for 30 seconds.',
      'Add crumbled tofu and cook for 5 minutes until it starts to brown.',
      'Add sliced red bell peppers and stir-fry for another minute.',
      'Pour in the sauce and stir rapidly to coat.',
      'Turn off the heat and toss in Thai basil leaves. Serve over jasmine rice.'
    ]
  },
  {
    id: 'rec-3',
    title: 'Creamy Mushroom Risotto',
    description:
      'Slow-cooked Arborio rice rich with earthy forest mushrooms, white wine, shallots, and fresh thyme.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    category: 'Italian',
    subcategory: 'Risotto',
    tags: ['Vegetarian', 'Gluten-Free', 'Comfort Food'],
    difficulty: 'Hard',
    calories: 510,
    rating: 4.7,
    macros: { protein: 11, carbs: 68, fat: 22 },
    videoUrl: 'https://www.youtube.com/embed/n30D-Yc1iig',
    ingredients: [
      { name: 'Arborio Rice', amount: 1.5, unit: 'cups', department: 'Pantry' },
      { name: 'Mixed Mushrooms', amount: 400, unit: 'g', department: 'Produce' },
      { name: 'Vegetable Broth', amount: 5, unit: 'cups', department: 'Pantry' },
      { name: 'Dry White Wine', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Shallot (Finely Chopped)', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Butter', amount: 4, unit: 'tbsp', department: 'Dairy' },
      { name: 'Grated Parmesan', amount: 0.5, unit: 'cups', department: 'Dairy' },
      { name: 'Fresh Thyme Leaves', amount: 2, unit: 'tsp', department: 'Produce' },
      { name: 'Olive Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Bring vegetable broth to a low simmer and keep warm.',
      'Sauté mushrooms with thyme until browned. Remove and set aside.',
      'Sauté shallots in butter until soft. Add rice and toast for 2 minutes.',
      'Pour in wine and stir until absorbed.',
      'Add broth one ladle at a time, stirring until creamy and al dente (~20 min).',
      'Stir in mushrooms and parmesan. Rest 2 minutes and serve.'
    ]
  },
  {
    id: 'rec-4',
    title: 'Sweet Potato & Black Bean Tacos',
    description:
      'Spiced roasted sweet potatoes and black beans in warm corn tortillas with avocado lime crema.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    category: 'Mexican',
    subcategory: 'Tacos',
    tags: ['Vegetarian', 'Gluten-Free', 'Healthy'],
    difficulty: 'Easy',
    calories: 380,
    rating: 4.4,
    macros: { protein: 12, carbs: 58, fat: 11 },
    videoUrl: 'https://www.youtube.com/embed/Q3_V5Q8sSGs',
    ingredients: [
      { name: 'Sweet Potatoes (Diced)', amount: 2, unit: 'large', department: 'Produce' },
      { name: 'Canned Black Beans (Rinsed)', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Taco Seasoning', amount: 1.5, unit: 'tbsp', department: 'Pantry' },
      { name: 'Corn Tortillas', amount: 8, unit: 'pcs', department: 'Bakery' },
      { name: 'Avocado', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Sour Cream or Greek Yogurt', amount: 0.5, unit: 'cups', department: 'Dairy' },
      { name: 'Lime Juice', amount: 2, unit: 'tbsp', department: 'Produce' },
      { name: 'Cilantro (Chopped)', amount: 0.25, unit: 'cups', department: 'Produce' },
      { name: 'Olive Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Roast seasoned sweet potatoes at 400°F for 20 minutes.',
      'Warm black beans with cumin and salt.',
      'Blend avocado, sour cream, lime juice, and cilantro for crema.',
      'Warm tortillas and assemble with beans, potatoes, and crema.'
    ]
  },
  {
    id: 'rec-5',
    title: 'Greek Lemon Herb Chicken',
    description:
      'Tender chicken breasts marinated in Greek yogurt, lemon, garlic, and oregano, grilled to juicy perfection.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    category: 'Gym Diet',
    subcategory: 'High Protein',
    tags: ['Meat', 'High-Protein', 'Low-Carb', 'Healthy', 'Gym Diet'],
    difficulty: 'Easy',
    calories: 410,
    rating: 4.9,
    macros: { protein: 42, carbs: 8, fat: 22 },
    videoUrl: 'https://www.youtube.com/embed/7V-w754d92E',
    ingredients: [
      { name: 'Chicken Breasts', amount: 4, unit: 'pcs', department: 'Meat' },
      { name: 'Greek Yogurt', amount: 0.75, unit: 'cups', department: 'Dairy' },
      { name: 'Lemon (Zested and Juiced)', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Garlic Cloves (Minced)', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Dried Oregano', amount: 1.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Extra Virgin Olive Oil', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Fresh Cucumber (Diced)', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Cherry Tomatoes (Halved)', amount: 1, unit: 'cups', department: 'Produce' }
    ],
    instructions: [
      'Combine yogurt, lemon, garlic, oregano, oil, salt, and pepper for marinade.',
      'Marinate chicken for at least 20 minutes.',
      'Grill 6–8 minutes per side until 165°F internal.',
      'Rest 5 minutes and serve with cucumber-tomato salad.'
    ]
  },
  {
    id: 'rec-6',
    title: 'Matcha Fluffy Pancakes',
    description:
      'Thick, fluffy soufflé-style pancakes with Japanese matcha, fresh berries, and maple syrup.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    category: 'Asian Fusion',
    subcategory: 'Japanese',
    tags: ['Vegetarian', 'Breakfast', 'Sweet'],
    difficulty: 'Medium',
    calories: 360,
    rating: 4.6,
    macros: { protein: 10, carbs: 52, fat: 12 },
    videoUrl: 'https://www.youtube.com/embed/hJ8yHj95v64',
    ingredients: [
      { name: 'All-Purpose Flour', amount: 1, unit: 'cups', department: 'Pantry' },
      { name: 'Matcha Powder', amount: 1.5, unit: 'tbsp', department: 'Pantry' },
      { name: 'Baking Powder', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Sugar', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Egg', amount: 1, unit: 'pcs', department: 'Dairy' },
      { name: 'Milk', amount: 0.75, unit: 'cups', department: 'Dairy' },
      { name: 'Melted Butter', amount: 2, unit: 'tbsp', department: 'Dairy' },
      { name: 'Fresh Blueberries', amount: 0.5, unit: 'cups', department: 'Produce' },
      { name: 'Maple Syrup', amount: 4, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Whisk dry ingredients. Mix wet ingredients separately.',
      'Fold wet into dry until just combined.',
      'Cook pancakes on a greased skillet until bubbles form, then flip.',
      'Stack with blueberries and maple syrup.'
    ]
  },
  {
    id: 'rec-7',
    title: 'Butter Chicken (Murgh Makhani)',
    description:
      'Classic Punjabi-style butter chicken in a velvety tomato-cream sauce with garam masala and kasuri methi.',
    image: 'https://images.unsplash.com/photo-1603894584379-ff147475b63d?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Punjab',
    tags: ['Indian', 'Authentic', 'Comfort Food', 'High-Protein'],
    difficulty: 'Medium',
    calories: 520,
    rating: 4.9,
    macros: { protein: 32, carbs: 28, fat: 34 },
    videoUrl: 'https://www.youtube.com/embed/a03U45jFtDs',
    ingredients: [
      { name: 'Chicken Thighs (Boneless)', amount: 600, unit: 'g', department: 'Meat' },
      { name: 'Greek Yogurt', amount: 0.5, unit: 'cups', department: 'Dairy' },
      { name: 'Garam Masala', amount: 2, unit: 'tsp', department: 'Pantry' },
      { name: 'Crushed Tomatoes', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Heavy Cream', amount: 0.75, unit: 'cups', department: 'Dairy' },
      { name: 'Butter', amount: 4, unit: 'tbsp', department: 'Dairy' },
      { name: 'Ginger-Garlic Paste', amount: 2, unit: 'tbsp', department: 'Produce' },
      { name: 'Kasuri Methi', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Basmati Rice', amount: 2, unit: 'cups', department: 'Pantry' }
    ],
    instructions: [
      'Marinate chicken in yogurt, garam masala, and salt for 30 minutes.',
      'Grill or pan-sear chicken until charred. Slice and set aside.',
      'Sauté ginger-garlic in butter, add tomatoes and simmer 15 minutes.',
      'Blend sauce until smooth, return to pan, add cream and chicken.',
      'Finish with kasuri methi. Serve with basmati rice and naan.'
    ]
  },
  {
    id: 'rec-8',
    title: 'Chettinad Pepper Chicken',
    description:
      'Fiery Tamil Nadu specialty with black pepper, curry leaves, and roasted spice paste.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008296fbe?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Tamil Nadu',
    tags: ['Indian', 'Authentic', 'Spicy', 'High-Protein'],
    difficulty: 'Medium',
    calories: 440,
    rating: 4.7,
    macros: { protein: 38, carbs: 12, fat: 26 },
    videoUrl: 'https://www.youtube.com/embed/0H8-_6WadUQ',
    ingredients: [
      { name: 'Chicken Pieces', amount: 800, unit: 'g', department: 'Meat' },
      { name: 'Black Peppercorns', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Fennel Seeds', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Curry Leaves', amount: 15, unit: 'pcs', department: 'Produce' },
      { name: 'Onions (Sliced)', amount: 2, unit: 'large', department: 'Produce' },
      { name: 'Tomatoes (Chopped)', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Coconut Oil', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Turmeric Powder', amount: 0.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Coriander Leaves', amount: 0.25, unit: 'cups', department: 'Produce' }
    ],
    instructions: [
      'Dry-roast pepper and fennel; grind to a coarse paste with ginger-garlic.',
      'Marinate chicken with turmeric, salt, and half the spice paste.',
      'Sauté onions in coconut oil until golden. Add curry leaves and tomatoes.',
      'Add chicken and remaining paste. Cook covered until tender.',
      'Garnish with coriander. Serve with rice or parotta.'
    ]
  },
  {
    id: 'rec-9',
    title: 'Dal Baati Churma',
    description:
      'Rajasthani feast of baked wheat baati, smoky panchmel dal, and sweet crumbled churma.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008296fbe?auto=format&fit=crop&w=800&q=80',
    prepTime: 40,
    cookTime: 50,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Rajasthan',
    tags: ['Indian', 'Authentic', 'Vegetarian', 'Comfort Food'],
    difficulty: 'Hard',
    calories: 580,
    rating: 4.6,
    macros: { protein: 18, carbs: 72, fat: 24 },
    videoUrl: 'https://www.youtube.com/embed/8WBJ4K0Gj8E',
    ingredients: [
      { name: 'Whole Wheat Flour', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Mixed Lentils (Panchmel)', amount: 1.5, unit: 'cups', department: 'Pantry' },
      { name: 'Ghee', amount: 0.5, unit: 'cups', department: 'Dairy' },
      { name: 'Cumin Seeds', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Red Chili Powder', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Jaggery', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Semolina', amount: 0.25, unit: 'cups', department: 'Pantry' },
      { name: 'Asafoetida', amount: 0.25, unit: 'tsp', department: 'Pantry' },
      { name: 'Garlic Cloves', amount: 6, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Knead wheat dough with ghee and bake round baatis until golden.',
      'Pressure-cook soaked lentils with turmeric. Temper with cumin, garlic, and chili.',
      'Crush one baati with jaggery and ghee for churma.',
      'Serve hot baati broken open, dipped in dal, with churma on the side.'
    ]
  },
  {
    id: 'rec-10',
    title: 'Coq au Vin',
    description:
      'French braised chicken in red wine with mushrooms, pearl onions, and lardons.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    cookTime: 90,
    servings: 6,
    category: 'French Cuisine',
    subcategory: 'Classic',
    tags: ['French', 'Comfort Food', 'Wine'],
    difficulty: 'Hard',
    calories: 490,
    rating: 4.8,
    macros: { protein: 36, carbs: 14, fat: 28 },
    videoUrl: 'https://www.youtube.com/embed/8o-D0qmt6wY',
    ingredients: [
      { name: 'Chicken Leg Quarters', amount: 6, unit: 'pcs', department: 'Meat' },
      { name: 'Bacon Lardons', amount: 150, unit: 'g', department: 'Meat' },
      { name: 'Pearl Onions', amount: 12, unit: 'pcs', department: 'Produce' },
      { name: 'Cremini Mushrooms', amount: 250, unit: 'g', department: 'Produce' },
      { name: 'Red Wine', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Chicken Stock', amount: 1.5, unit: 'cups', department: 'Pantry' },
      { name: 'Tomato Paste', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Fresh Thyme', amount: 4, unit: 'sprigs', department: 'Produce' },
      { name: 'Butter', amount: 2, unit: 'tbsp', department: 'Dairy' }
    ],
    instructions: [
      'Season and sear chicken until golden. Set aside.',
      'Render lardons, sauté onions and mushrooms.',
      'Deglaze with wine, add stock, tomato paste, and thyme.',
      'Return chicken, braise covered 75 minutes until fall-off-the-bone tender.',
      'Skim fat, adjust seasoning, and serve with crusty bread or potatoes.'
    ]
  },
  {
    id: 'rec-11',
    title: 'Ratatouille Niçoise',
    description:
      'Provençal layered vegetables baked in herb tomato sauce — a classic French vegetarian showpiece.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    prepTime: 35,
    cookTime: 55,
    servings: 6,
    category: 'French Cuisine',
    subcategory: 'Provence',
    tags: ['French', 'Vegetarian', 'Healthy'],
    difficulty: 'Medium',
    calories: 220,
    rating: 4.5,
    macros: { protein: 6, carbs: 24, fat: 12 },
    videoUrl: 'https://www.youtube.com/embed/BFdQUU5Y0fU',
    ingredients: [
      { name: 'Zucchini', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Yellow Squash', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Eggplant', amount: 1, unit: 'large', department: 'Produce' },
      { name: 'Roma Tomatoes', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Crushed Tomatoes', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Garlic Cloves', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Fresh Thyme', amount: 2, unit: 'tsp', department: 'Produce' },
      { name: 'Olive Oil', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Fresh Basil', amount: 0.25, unit: 'cups', department: 'Produce' }
    ],
    instructions: [
      'Spread tomato-garlic sauce in a baking dish.',
      'Slice vegetables thinly and shingle in alternating rows.',
      'Drizzle with olive oil, thyme, salt, and pepper.',
      'Cover with parchment and bake at 375°F for 40 minutes.',
      'Uncover, bake 15 more minutes. Finish with fresh basil.'
    ]
  },
  {
    id: 'rec-12',
    title: 'High-Protein Meal Prep Bowls',
    description:
      'Weekly gym prep: grilled chicken, quinoa, roasted broccoli, and lemon-tahini drizzle.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 25,
    servings: 5,
    category: 'Gym Diet',
    subcategory: 'Meal Prep',
    tags: ['Gym Diet', 'High-Protein', 'Meal Prep', 'Healthy'],
    difficulty: 'Easy',
    calories: 420,
    rating: 4.8,
    macros: { protein: 45, carbs: 38, fat: 12 },
    videoUrl: 'https://www.youtube.com/embed/3XyZ1bQZ3xY',
    ingredients: [
      { name: 'Chicken Breast', amount: 1000, unit: 'g', department: 'Meat' },
      { name: 'Quinoa (Dry)', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Broccoli Florets', amount: 4, unit: 'cups', department: 'Produce' },
      { name: 'Olive Oil', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Tahini', amount: 0.25, unit: 'cups', department: 'Pantry' },
      { name: 'Lemon Juice', amount: 3, unit: 'tbsp', department: 'Produce' },
      { name: 'Smoked Paprika', amount: 2, unit: 'tsp', department: 'Pantry' },
      { name: 'Garlic Powder', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Meal Prep Containers', amount: 5, unit: 'pcs', department: 'Other' }
    ],
    instructions: [
      'Season chicken with paprika, garlic powder, salt, and pepper. Bake at 400°F for 22 minutes.',
      'Cook quinoa per package directions. Roast broccoli with olive oil for 18 minutes.',
      'Whisk tahini, lemon juice, and water for dressing.',
      'Divide into 5 containers: quinoa base, sliced chicken, broccoli, and dressing on the side.',
      'Refrigerate up to 4 days. Reheat before eating.'
    ]
  },
  {
    id: 'rec-13',
    title: 'Cacio e Pepe',
    description:
      'Roman pasta perfection — Pecorino Romano and cracked black pepper emulsified in starchy pasta water.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    category: 'Italian',
    subcategory: 'Pasta',
    tags: ['Italian', 'Vegetarian', 'Quick'],
    difficulty: 'Medium',
    calories: 480,
    rating: 4.7,
    macros: { protein: 18, carbs: 62, fat: 18 },
    videoUrl: 'https://www.youtube.com/embed/3AAdKl1bN28',
    ingredients: [
      { name: 'Spaghetti', amount: 200, unit: 'g', department: 'Pantry' },
      { name: 'Pecorino Romano (Grated)', amount: 1, unit: 'cups', department: 'Dairy' },
      { name: 'Black Peppercorns', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Salt', amount: 1, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Toast cracked pepper in a dry pan until fragrant.',
      'Cook pasta in well-salted water until al dente. Reserve 1 cup pasta water.',
      'Off heat, toss pasta with cheese and pepper, adding pasta water to create a creamy sauce.',
      'Serve immediately with extra cheese and pepper.'
    ]
  },
  {
    id: 'rec-14',
    title: 'Lean Cutting Chicken Salad',
    description:
      'Low-calorie gym bowl with grilled chicken, mixed greens, cucumber, and light mustard vinaigrette.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 12,
    servings: 2,
    category: 'Gym Diet',
    subcategory: 'Cutting',
    tags: ['Gym Diet', 'Low-Carb', 'High-Protein', 'Salad'],
    difficulty: 'Easy',
    calories: 285,
    rating: 4.6,
    macros: { protein: 38, carbs: 10, fat: 10 },
    videoUrl: 'https://www.youtube.com/embed/7V-w754d92E',
    ingredients: [
      { name: 'Chicken Breast', amount: 2, unit: 'pcs', department: 'Meat' },
      { name: 'Mixed Greens', amount: 4, unit: 'cups', department: 'Produce' },
      { name: 'Cucumber (Sliced)', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Cherry Tomatoes', amount: 1, unit: 'cups', department: 'Produce' },
      { name: 'Dijon Mustard', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Apple Cider Vinegar', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Olive Oil', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Lemon Juice', amount: 1, unit: 'tbsp', department: 'Produce' }
    ],
    instructions: [
      'Season and grill chicken until cooked through. Slice thin.',
      'Whisk mustard, vinegar, lemon, oil, salt, and pepper.',
      'Toss greens, cucumber, and tomatoes with dressing.',
      'Top with chicken and serve immediately.'
    ]
  }
];

/**
 * Full catalog: base recipes + one authentic dish per Indian state/UT.
 */
export const mockRecipes: Recipe[] = [...baseRecipes, ...indianStateRecipes];
