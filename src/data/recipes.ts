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
    videoUrl: 'https://www.youtube.com/watch?v=mxa-4hN1-qM',
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
    videoUrl: 'https://www.youtube.com/watch?v=isLl3m_JUx4',
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
    videoUrl: 'https://www.youtube.com/watch?v=oj0gzO1STdg',
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
    videoUrl: 'https://www.youtube.com/watch?v=oLKmp9_Mxsc',
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
    videoUrl: 'https://www.youtube.com/watch?v=8wsVJw6O3P8',
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
    videoUrl: 'https://www.youtube.com/watch?v=ZW84Fr_rYq4',
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
    videoUrl: 'https://www.youtube.com/watch?v=h4IwrvuN9cQ',
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
    videoUrl: 'https://www.youtube.com/watch?v=QOlO9nIZ-sI',
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
    videoUrl: 'https://www.youtube.com/watch?v=yOqx2H5vVWM',
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
    videoUrl: 'https://www.youtube.com/watch?v=VP1uTgikarU',
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
    videoUrl: 'https://www.youtube.com/watch?v=roCX0AfBseQ',
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
    videoUrl: 'https://www.youtube.com/watch?v=ZJe3yL7NHdA',
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
    videoUrl: 'https://www.youtube.com/watch?v=P6QWoOQMvE8',
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
    videoUrl: 'https://www.youtube.com/watch?v=v1VUg6r4yFA',
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
  },
  {
    id: 'rec-15',
    title: 'Authentic Neapolitan Pizza',
    description:
      'True Italian Neapolitan pizza with a perfectly charred, puffy crust, simple San Marzano tomato sauce, fresh mozzarella, and aromatic basil.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 90,
    servings: 4,
    category: 'Italian',
    subcategory: 'Pizza & Bread',
    tags: ['Italian', 'Vegetarian', 'Authentic', 'Comfort Food'],
    difficulty: 'Hard',
    calories: 350,
    rating: 4.9,
    macros: { protein: 12, carbs: 54, fat: 10 },
    videoUrl: 'https://www.youtube.com/watch?v=xUEYRiZlyUM',
    ingredients: [
      { name: 'Tipo 00 Flour', amount: 500, unit: 'g', department: 'Pantry' },
      { name: 'Water', amount: 325, unit: 'ml', department: 'Pantry' },
      { name: 'Fine Sea Salt', amount: 15, unit: 'g', department: 'Pantry' },
      { name: 'Fresh Yeast', amount: 3, unit: 'g', department: 'Pantry' },
      { name: 'San Marzano Canned Tomatoes', amount: 400, unit: 'g', department: 'Pantry' },
      { name: 'Fresh Mozzarella (Fior di Latte)', amount: 250, unit: 'g', department: 'Dairy' },
      { name: 'Fresh Basil Leaves', amount: 10, unit: 'pcs', department: 'Produce' },
      { name: 'Extra Virgin Olive Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Dissolve yeast in room-temperature water. Gradually add flour and mix. Add salt and knead for 15-20 minutes until a smooth dough forms.',
      'Let the dough rest for 2 hours, then divide into 4 equal balls. Place in a covered container and let rise/ferment for 24 hours in the fridge.',
      'Bring dough to room temperature. Hand-stretch each ball from the center outward to preserve the puffy border (cornicione).',
      'Spread crushed San Marzano tomatoes, top with fresh mozzarella, fresh basil, and a drizzle of olive oil.',
      'Bake in a preheated pizza oven at 900°F for 90 seconds, or on a preheated pizza steel in a home oven at max temperature (~500°F) for 5-7 minutes.'
    ]
  },
  {
    id: 'rec-16',
    title: 'Masterclass Sourdough Bread',
    description:
      'Artisanal crusty sourdough bread with a wild open crumb, developed using natural wild yeast fermentation and the stretch-and-fold method.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    cookTime: 240,
    servings: 10,
    category: 'Italian',
    subcategory: 'Pizza & Bread',
    tags: ['Vegan', 'Vegetarian', 'Baking', 'Healthy'],
    difficulty: 'Hard',
    calories: 220,
    rating: 4.8,
    macros: { protein: 8, carbs: 45, fat: 1 },
    videoUrl: 'https://www.youtube.com/watch?v=msqU-ylXWUs',
    ingredients: [
      { name: 'Bread Flour', amount: 450, unit: 'g', department: 'Pantry' },
      { name: 'Whole Wheat Flour', amount: 50, unit: 'g', department: 'Pantry' },
      { name: 'Water (Lukewarm)', amount: 350, unit: 'ml', department: 'Pantry' },
      { name: 'Active Sourdough Starter', amount: 100, unit: 'g', department: 'Pantry' },
      { name: 'Fine Sea Salt', amount: 10, unit: 'g', department: 'Pantry' }
    ],
    instructions: [
      'Mix flours and 325ml of water. Let autolyse for 45 minutes.',
      'Add active sourdough starter and mix well. Rest 30 minutes, then add salt and remaining 25ml water.',
      'Perform 4 sets of stretch-and-folds every 30 minutes during the first 2 hours of bulk fermentation.',
      'Shape the dough into a tight round or oval (boule/batard) and place in a floured proofing basket (banneton). Ferment in the fridge overnight.',
      'Preheat a Dutch oven at 450°F (230°C). Score the cold dough and bake covered for 20 minutes, then uncovered for 20-25 minutes until golden brown.'
    ]
  },
  {
    id: 'rec-17',
    title: "Guga's Perfect Ribeye Steak",
    description:
      'Juicy ribeye steak cooked to medium-rare perfection using garlic, rosemary-infused butter basting, and high-heat searing.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    category: 'Gym Diet',
    subcategory: 'High Protein',
    tags: ['Meat', 'High-Protein', 'Low-Carb', 'Keto', 'Gym Diet'],
    difficulty: 'Medium',
    calories: 590,
    rating: 4.9,
    macros: { protein: 46, carbs: 1, fat: 45 },
    videoUrl: 'https://www.youtube.com/watch?v=zicSNoVU86w',
    ingredients: [
      { name: 'Prime Ribeye Steak (1.5 inch thick)', amount: 2, unit: 'pcs', department: 'Meat' },
      { name: 'Coarse Sea Salt', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Black Pepper', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Butter', amount: 3, unit: 'tbsp', department: 'Dairy' },
      { name: 'Garlic Cloves (Crushed)', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Fresh Rosemary Sprigs', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Fresh Thyme Sprigs', amount: 3, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Pat the steaks dry and season generously with salt and pepper on all sides. Let sit at room temperature for 30 minutes.',
      'Heat a cast iron skillet over high heat until smoking hot. Sear steaks for 2 minutes per side to develop a golden-brown crust.',
      'Reduce heat to medium. Add butter, garlic, rosemary, and thyme to the skillet.',
      'Tilt the pan and spoon the melted butter over the steaks continuously for 2-3 minutes until internal temperature reaches 130°F (for medium-rare).',
      'Remove steaks, rest for 5-8 minutes before slicing to lock in all juices. Serve hot!'
    ]
  },
  {
    id: 'rec-18',
    title: "Joshua Weissman's Ultimate Cheeseburger",
    description:
      'Gourmet homemade cheeseburger with toasted brioche buns, double smashed beef patties, cheddar cheese, and signature burger sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    category: 'Gym Diet',
    subcategory: 'Bulking',
    tags: ['Meat', 'High-Protein', 'Comfort Food', 'Bulking', 'Gym Diet'],
    difficulty: 'Medium',
    calories: 680,
    rating: 4.8,
    macros: { protein: 42, carbs: 32, fat: 40 },
    videoUrl: 'https://www.youtube.com/watch?v=oFSgLH8AN7w',
    ingredients: [
      { name: 'Ground Beef (80/20)', amount: 300, unit: 'g', department: 'Meat' },
      { name: 'Brioche Buns', amount: 2, unit: 'pcs', department: 'Bakery' },
      { name: 'Cheddar Cheese Slices', amount: 4, unit: 'pcs', department: 'Dairy' },
      { name: 'Mayonnaise', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Ketchup', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Sweet Pickle Relish', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Butter', amount: 1, unit: 'tbsp', department: 'Dairy' },
      { name: 'Garlic Powder', amount: 0.5, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Form ground beef into four 75g balls. Mix mayonnaise, ketchup, relish, and garlic powder for the burger sauce.',
      'Toast brioche buns in a pan with butter until golden-brown, then set aside.',
      'Heat a cast iron skillet on high until smoking. Place beef balls in pan and smash them completely flat using a spatula.',
      'Season with salt and pepper. Cook for 2 minutes until a dark crust forms, then flip.',
      'Immediately top each patty with cheddar cheese. Stack patties as cheese melts and remove from heat.',
      'Spread sauce on buns, insert double patties, and serve hot.'
    ]
  },
  {
    id: 'rec-19',
    title: 'Cantonese Crispy Pork Belly (Siu Yuk)',
    description:
      'Traditional Cantonese roasted pork belly with an unbelievably crispy, blistered skin and juicy, seasoned meat.',
    image: 'https://images.unsplash.com/photo-1602404089979-a474c38ecd4e?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 90,
    servings: 6,
    category: 'Asian Fusion',
    subcategory: 'Japanese',
    tags: ['Meat', 'Authentic', 'Comfort Food'],
    difficulty: 'Hard',
    calories: 480,
    rating: 4.9,
    macros: { protein: 28, carbs: 2, fat: 40 },
    videoUrl: 'https://www.youtube.com/watch?v=A33iR_Lp_WQ',
    ingredients: [
      { name: 'Pork Belly (Skin-on)', amount: 1000, unit: 'g', department: 'Meat' },
      { name: 'Shaoxing Wine', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Five Spice Powder', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'White Pepper', amount: 0.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Coarse Sea Salt', amount: 300, unit: 'g', department: 'Pantry' },
      { name: 'White Vinegar', amount: 1, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Boil pork belly skin-side down for 5 minutes. Pat completely dry, then prick the skin with tiny holes.',
      'Rub meat (not the skin) with Shaoxing wine, five spice powder, and white pepper.',
      'Flip pork skin-side up, brush with vinegar, and let dry in fridge uncovered overnight.',
      'Form a foil box around pork, exposing only the skin. Cover the skin with a thick layer of coarse salt.',
      'Roast at 400°F (200°C) for 50 minutes. Remove salt crust, and roast at 450°F (230°C) for 20-30 minutes until skin is completely blistered and crispy.'
    ]
  }
];

/**
 * Full catalog: base recipes + one authentic dish per Indian state/UT.
 */
export const mockRecipes: Recipe[] = [...baseRecipes, ...indianStateRecipes];
