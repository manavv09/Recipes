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
    id: 'rec-20',
    title: 'Korean BBQ Bulgogi Bowl',
    description:
      'Thinly sliced marinated beef sizzled over high heat, served on jasmine rice with pickled daikon, cucumber ribbons, and sesame gochujang drizzle.',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 10,
    servings: 3,
    category: 'Asian Fusion',
    subcategory: 'Korean',
    tags: ['Meat', 'High-Protein', 'Korean', 'Bowl'],
    difficulty: 'Easy',
    calories: 490,
    rating: 4.9,
    macros: { protein: 38, carbs: 42, fat: 16 },
    videoUrl: 'https://www.youtube.com/watch?v=E_OJuFcCLhA',
    ingredients: [
      { name: 'Ribeye or Sirloin (thinly sliced)', amount: 500, unit: 'g', department: 'Meat' },
      { name: 'Soy Sauce', amount: 4, unit: 'tbsp', department: 'Pantry' },
      { name: 'Sesame Oil', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Brown Sugar', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Garlic Cloves (Minced)', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Ginger (Grated)', amount: 1, unit: 'tsp', department: 'Produce' },
      { name: 'Gochujang Paste', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Jasmine Rice', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Cucumber (Ribboned)', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Sesame Seeds', amount: 1, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Mix soy sauce, sesame oil, sugar, garlic, and ginger. Marinate beef at least 15 minutes.',
      'Cook jasmine rice per package directions.',
      'Whisk gochujang with a splash of sesame oil for the drizzle sauce.',
      'Sear beef in a very hot pan or cast iron in batches, 1–2 minutes per side.',
      'Assemble bowls: rice base, bulgogi, cucumber ribbons. Drizzle gochujang sauce and scatter sesame seeds.'
    ]
  },
  {
    id: 'rec-21',
    title: 'Mediterranean Chickpea Stew',
    description:
      'Hearty one-pot stew with chickpeas, roasted red peppers, baby spinach, and preserved lemon in a smoky tomato-cumin broth.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    category: 'Mediterranean',
    subcategory: 'Levantine',
    tags: ['Vegan', 'Vegetarian', 'High-Protein', 'Healthy', 'Quick'],
    difficulty: 'Easy',
    calories: 340,
    rating: 4.7,
    macros: { protein: 16, carbs: 48, fat: 9 },
    videoUrl: 'https://www.youtube.com/watch?v=zNX_GKKOi9E',
    ingredients: [
      { name: 'Canned Chickpeas (Drained)', amount: 2, unit: 'cans', department: 'Pantry' },
      { name: 'Crushed Tomatoes', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Roasted Red Peppers (Jarred)', amount: 1, unit: 'cups', department: 'Pantry' },
      { name: 'Baby Spinach', amount: 4, unit: 'cups', department: 'Produce' },
      { name: 'Onion (Diced)', amount: 1, unit: 'large', department: 'Produce' },
      { name: 'Garlic Cloves', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Cumin', amount: 2, unit: 'tsp', department: 'Pantry' },
      { name: 'Smoked Paprika', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Preserved Lemon (Rinsed, Chopped)', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Olive Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Sauté onion in olive oil 5 minutes until soft. Add garlic, cumin, and paprika; cook 1 minute.',
      'Add chickpeas, crushed tomatoes, and roasted peppers. Simmer 15 minutes.',
      'Stir in spinach and preserved lemon; wilt 2 minutes.',
      'Adjust seasoning. Serve with crusty bread or over couscous.'
    ]
  },
  {
    id: 'rec-22',
    title: 'Protein Overnight Oats',
    description:
      'High-protein no-cook breakfast: rolled oats soaked in Greek yogurt and almond milk, topped with berries, chia seeds, and almond butter.',
    image: 'https://images.unsplash.com/photo-1570838741272-d8fcf86bb234?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    category: 'Gym Diet',
    subcategory: 'Meal Prep',
    tags: ['Gym Diet', 'High-Protein', 'Vegetarian', 'Breakfast', 'Meal Prep', 'Quick'],
    difficulty: 'Easy',
    calories: 420,
    rating: 4.8,
    macros: { protein: 30, carbs: 48, fat: 11 },
    videoUrl: 'https://www.youtube.com/watch?v=HGcVHVMRgUE',
    ingredients: [
      { name: 'Rolled Oats', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Greek Yogurt (0% fat)', amount: 0.5, unit: 'cups', department: 'Dairy' },
      { name: 'Almond Milk (Unsweetened)', amount: 0.25, unit: 'cups', department: 'Dairy' },
      { name: 'Vanilla Protein Powder', amount: 1, unit: 'scoop', department: 'Pantry' },
      { name: 'Chia Seeds', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Mixed Berries', amount: 0.5, unit: 'cups', department: 'Produce' },
      { name: 'Almond Butter', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Honey', amount: 1, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Mix oats, yogurt, almond milk, protein powder, and chia seeds in a jar.',
      'Stir well until protein powder is dissolved.',
      'Refrigerate overnight or at least 4 hours.',
      'Top with berries, almond butter, and a drizzle of honey before eating.'
    ]
  },
  {
    id: 'rec-23',
    title: 'Miso Ramen from Scratch',
    description:
      'Rich, umami-packed Japanese miso ramen with a cloudy tonkotsu-style broth, chashu pork, soft-boiled marinated egg, nori, and corn.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    cookTime: 60,
    servings: 2,
    category: 'Asian Fusion',
    subcategory: 'Japanese',
    tags: ['Japanese', 'Comfort Food', 'Meat'],
    difficulty: 'Hard',
    calories: 620,
    rating: 4.9,
    macros: { protein: 36, carbs: 58, fat: 24 },
    videoUrl: 'https://www.youtube.com/watch?v=9WXNdHrGGpk',
    ingredients: [
      { name: 'Pork Belly (Rolled)', amount: 300, unit: 'g', department: 'Meat' },
      { name: 'Chicken Stock', amount: 4, unit: 'cups', department: 'Pantry' },
      { name: 'White Miso Paste', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Soy Sauce', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Mirin', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Ramen Noodles', amount: 2, unit: 'portions', department: 'Pantry' },
      { name: 'Eggs', amount: 2, unit: 'pcs', department: 'Dairy' },
      { name: 'Corn Kernels', amount: 0.5, unit: 'cups', department: 'Produce' },
      { name: 'Nori Sheets', amount: 2, unit: 'pcs', department: 'Pantry' },
      { name: 'Green Onions (Sliced)', amount: 3, unit: 'stalks', department: 'Produce' }
    ],
    instructions: [
      'Roll and tie pork belly. Sear all sides then simmer in soy sauce, mirin, and water 45 minutes.',
      'Soft-boil eggs 6.5 minutes, cool, peel, and marinate in soy sauce overnight.',
      'Warm chicken stock. Whisk in miso paste until dissolved — do not boil.',
      'Cook ramen noodles per package, then divide into bowls.',
      'Ladle hot miso broth, top with sliced chashu pork, halved marinated egg, corn, nori, and green onions.'
    ]
  },
  {
    id: 'rec-24',
    title: 'Greek Mezze Platter',
    description:
      'A vibrant spread of hummus, tzatziki, kalamata olives, stuffed grape leaves (dolmades), pita, and fresh vegetable crudités.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 0,
    servings: 4,
    category: 'Mediterranean',
    subcategory: 'Greek',
    tags: ['Vegetarian', 'Healthy', 'Greek', 'Party'],
    difficulty: 'Easy',
    calories: 310,
    rating: 4.7,
    macros: { protein: 10, carbs: 38, fat: 14 },
    videoUrl: 'https://www.youtube.com/watch?v=r_mbn1Ys5B0',
    ingredients: [
      { name: 'Canned Chickpeas (Drained)', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Tahini', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Greek Yogurt (Full Fat)', amount: 1, unit: 'cups', department: 'Dairy' },
      { name: 'Cucumber (Grated)', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Fresh Dill', amount: 2, unit: 'tbsp', department: 'Produce' },
      { name: 'Kalamata Olives', amount: 0.75, unit: 'cups', department: 'Pantry' },
      { name: 'Canned Dolmades (Stuffed Vine Leaves)', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Pita Bread', amount: 4, unit: 'pcs', department: 'Bakery' },
      { name: 'Lemon Juice', amount: 2, unit: 'tbsp', department: 'Produce' },
      { name: 'Garlic Cloves', amount: 2, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Blend chickpeas, tahini, lemon juice, garlic, and olive oil until smooth for hummus.',
      'Grate cucumber, squeeze dry, mix with yogurt, dill, garlic, and salt for tzatziki.',
      'Warm pita bread directly on a gas flame or in a dry pan until puffy.',
      'Arrange hummus, tzatziki, olives, dolmades, and vegetables on a large board.',
      'Serve with warm pita and a drizzle of olive oil over the hummus.'
    ]
  },
  {
    id: 'rec-25',
    title: 'Spicy Mexican Birria Tacos',
    description:
      'Slow-braised guajillo-ancho chile beef birria in corn tortillas, dipped in the rich consommé and seared crispy, topped with onion and cilantro.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    cookTime: 180,
    servings: 6,
    category: 'Mexican',
    subcategory: 'Tacos',
    tags: ['Meat', 'Mexican', 'Comfort Food', 'Spicy'],
    difficulty: 'Hard',
    calories: 520,
    rating: 4.9,
    macros: { protein: 40, carbs: 30, fat: 26 },
    videoUrl: 'https://www.youtube.com/watch?v=PtoSh_H5Gxs',
    ingredients: [
      { name: 'Beef Chuck Roast', amount: 1200, unit: 'g', department: 'Meat' },
      { name: 'Dried Guajillo Chiles', amount: 6, unit: 'pcs', department: 'Pantry' },
      { name: 'Dried Ancho Chiles', amount: 3, unit: 'pcs', department: 'Pantry' },
      { name: 'Beef Broth', amount: 3, unit: 'cups', department: 'Pantry' },
      { name: 'Canned Tomatoes', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Garlic Cloves', amount: 6, unit: 'pcs', department: 'Produce' },
      { name: 'Corn Tortillas', amount: 18, unit: 'pcs', department: 'Bakery' },
      { name: 'White Onion (Diced)', amount: 1, unit: 'large', department: 'Produce' },
      { name: 'Cilantro (Chopped)', amount: 0.5, unit: 'cups', department: 'Produce' },
      { name: 'Mozzarella (Shredded)', amount: 200, unit: 'g', department: 'Dairy' }
    ],
    instructions: [
      'Toast dried chiles in a dry pan 30 seconds. Soak in hot water 20 minutes, then blend with tomatoes, garlic, and 1 cup broth.',
      'Sear beef chuck all over. Place in a Dutch oven, pour chile sauce and remaining broth over.',
      'Braise covered at 325°F (165°C) for 3 hours until falling apart. Shred beef and reserve consommé.',
      'Dip tortillas in hot consommé, place on a hot griddle, add cheese and shredded birria, fold and sear until crispy.',
      'Serve with consommé for dipping, topped with onion and cilantro.'
    ]
  },
  {
    id: 'rec-26',
    title: 'Post-Workout Recovery Smoothie Bowl',
    description:
      'Thick blended acai and banana base loaded with granola, fresh kiwi, mango, coconut flakes, and a honey drizzle for muscle recovery.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    category: 'Gym Diet',
    subcategory: 'Meal Prep',
    tags: ['Gym Diet', 'Vegan', 'Vegetarian', 'Breakfast', 'High-Protein', 'Quick'],
    difficulty: 'Easy',
    calories: 480,
    rating: 4.7,
    macros: { protein: 24, carbs: 72, fat: 10 },
    videoUrl: 'https://www.youtube.com/watch?v=3k4L8Rp2B1k',
    ingredients: [
      { name: 'Frozen Acai Puree (Unsweetened)', amount: 100, unit: 'g', department: 'Produce' },
      { name: 'Frozen Banana', amount: 1, unit: 'large', department: 'Produce' },
      { name: 'Vanilla Protein Powder', amount: 1, unit: 'scoop', department: 'Pantry' },
      { name: 'Almond Milk', amount: 0.25, unit: 'cups', department: 'Dairy' },
      { name: 'Granola', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Fresh Kiwi (Sliced)', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Fresh Mango (Cubed)', amount: 0.5, unit: 'cups', department: 'Produce' },
      { name: 'Coconut Flakes (Toasted)', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Honey', amount: 1, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Blend frozen acai, banana, protein powder, and almond milk until thick and smooth. Add minimal liquid — it should be thick enough to eat with a spoon.',
      'Pour into a bowl and smooth the top.',
      'Arrange granola, kiwi, mango, and coconut flakes on top.',
      'Drizzle with honey and serve immediately.'
    ]
  },
  {
    id: 'rec-27',
    title: 'Shakshuka (Eggs in Spiced Tomato Sauce)',
    description:
      'North African-style eggs poached directly in a smoky, spiced tomato and red pepper sauce, topped with crumbled feta and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1590304832540-c4dc111a5e16?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    category: 'Mediterranean',
    subcategory: 'Levantine',
    tags: ['Vegetarian', 'Healthy', 'Breakfast', 'High-Protein', 'Quick'],
    difficulty: 'Easy',
    calories: 340,
    rating: 4.8,
    macros: { protein: 18, carbs: 26, fat: 18 },
    videoUrl: 'https://www.youtube.com/watch?v=2HyFEGnwJqU',
    ingredients: [
      { name: 'Eggs', amount: 4, unit: 'pcs', department: 'Dairy' },
      { name: 'Crushed Tomatoes', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Red Bell Pepper (Diced)', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Onion (Diced)', amount: 1, unit: 'medium', department: 'Produce' },
      { name: 'Garlic Cloves', amount: 3, unit: 'pcs', department: 'Produce' },
      { name: 'Cumin', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Smoked Paprika', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Cayenne Pepper', amount: 0.25, unit: 'tsp', department: 'Pantry' },
      { name: 'Feta Cheese (Crumbled)', amount: 50, unit: 'g', department: 'Dairy' },
      { name: 'Fresh Parsley (Chopped)', amount: 0.25, unit: 'cups', department: 'Produce' }
    ],
    instructions: [
      'Sauté onion and bell pepper in olive oil until soft, about 7 minutes. Add garlic and spices, cook 1 minute.',
      'Pour in crushed tomatoes, season with salt, and simmer 10 minutes until sauce thickens.',
      'Make 4 wells in the sauce and crack an egg into each.',
      'Cover and cook 5–7 minutes for runny yolks, longer for set.',
      'Top with crumbled feta and fresh parsley. Serve with crusty bread.'
    ]
  },
  {
    id: 'rec-28',
    title: 'Teriyaki Salmon Rice Bowl',
    description:
      'Glazed salmon fillets with homemade teriyaki sauce over steamed rice with edamame, avocado, and pickled ginger.',
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    category: 'Gym Diet',
    subcategory: 'High Protein',
    tags: ['Seafood', 'High-Protein', 'Healthy', 'Gym Diet', 'Gluten-Free'],
    difficulty: 'Easy',
    calories: 510,
    rating: 4.8,
    macros: { protein: 44, carbs: 42, fat: 18 },
    videoUrl: 'https://www.youtube.com/watch?v=ZXBqpbOGRSs',
    ingredients: [
      { name: 'Salmon Fillets', amount: 2, unit: 'pcs', department: 'Seafood' },
      { name: 'Soy Sauce', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Mirin', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Honey', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Jasmine Rice', amount: 1.5, unit: 'cups', department: 'Pantry' },
      { name: 'Frozen Edamame (Shelled)', amount: 1, unit: 'cups', department: 'Produce' },
      { name: 'Avocado (Sliced)', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Pickled Ginger', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Sesame Seeds', amount: 1, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Whisk soy sauce, mirin, and honey for teriyaki glaze.',
      'Cook jasmine rice. Blanch edamame in boiling water 3 minutes; drain.',
      'Pan-fry salmon skin-side down 4 minutes, flip, brush generously with teriyaki glaze, cook 3 more minutes.',
      'Assemble bowls: rice, glazed salmon, avocado, edamame, and pickled ginger.',
      'Drizzle any remaining glaze and finish with sesame seeds.'
    ]
  },
  {
    id: 'rec-29',
    title: 'Korean Kimchi Fried Rice (Kimchi Bokkeumbap)',
    description:
      'Bold, deeply savory fried rice with well-fermented kimchi, crispy pork belly bits, gochugaru, and a perfectly fried sunny-side-up egg on top.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    category: 'Asian Fusion',
    subcategory: 'Korean',
    tags: ['Meat', 'Korean', 'Quick', 'Comfort Food', 'Spicy'],
    difficulty: 'Easy',
    calories: 540,
    rating: 4.8,
    macros: { protein: 28, carbs: 58, fat: 22 },
    videoUrl: 'https://www.youtube.com/watch?v=5EaNCMnhvHc',
    ingredients: [
      { name: 'Day-Old Cooked Rice', amount: 3, unit: 'cups', department: 'Pantry' },
      { name: 'Kimchi (Well-Fermented)', amount: 1, unit: 'cups', department: 'Produce' },
      { name: 'Pork Belly (Diced Small)', amount: 150, unit: 'g', department: 'Meat' },
      { name: 'Gochugaru (Korean Chili Flakes)', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Soy Sauce', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Sesame Oil', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Eggs', amount: 2, unit: 'pcs', department: 'Dairy' },
      { name: 'Green Onions (Sliced)', amount: 3, unit: 'stalks', department: 'Produce' },
      { name: 'Nori (Crumbled)', amount: 1, unit: 'sheet', department: 'Pantry' }
    ],
    instructions: [
      'Render pork belly in a wok over medium-high heat until crispy. Remove and set aside.',
      'Add kimchi to the same wok and stir-fry 3 minutes until slightly caramelized.',
      'Add rice, breaking up clumps. Stir-fry everything 3 minutes on high heat.',
      'Season with soy sauce and gochugaru. Toss in pork belly bits and drizzle sesame oil.',
      'Fry eggs sunny-side up separately. Serve rice topped with a fried egg, green onions, and crumbled nori.'
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
