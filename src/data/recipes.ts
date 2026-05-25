import type { Recipe } from '../types';

/**
 * Mock Recipes Database with Gym Diet Macros and Video Tutorials
 */
export const mockRecipes: Recipe[] = [
  {
    id: 'rec-1',
    title: 'Tuscan Butter Salmon',
    description: 'Pan-seared salmon fillets in a rich, creamy garlic butter sauce with spinach, sun-dried tomatoes, and parmesan.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    cuisine: 'Italian',
    tags: ['Seafood', 'Gluten-Free', 'Keto', 'Low-Carb', 'High-Protein'],
    difficulty: 'Easy',
    calories: 450,
    rating: 4.8,
    macros: {
      protein: 34,
      carbs: 5,
      fat: 32
    },
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
    description: 'A vibrant, spicy stir-fry featuring crispy crumbled tofu, fresh red chilies, bell peppers, and fragrant holy basil.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    cuisine: 'Thai',
    tags: ['Vegan', 'Vegetarian', 'Spicy', 'Quick', 'Low-Carb'],
    difficulty: 'Medium',
    calories: 320,
    rating: 4.5,
    macros: {
      protein: 18,
      carbs: 15,
      fat: 20
    },
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
      'Finely chop the garlic and Thai chilies together (or crush using a mortar and pestle) to form a paste.',
      'In a small bowl, whisk together soy sauce, dark soy sauce, and maple syrup to create the stir-fry sauce.',
      'Heat vegetable oil in a wok or large skillet over high heat. Add the garlic-chili paste and stir-fry for 30 seconds (be careful, it gets spicy!).',
      'Add crumbled tofu and cook for 5 minutes, stirring occasionally, until it starts to brown.',
      'Add the sliced red bell peppers and stir-fry for another minute.',
      'Pour in the sauce and stir rapidly to coat the tofu and vegetables.',
      'Turn off the heat and toss in the Thai basil leaves. Stir until the leaves are wilted. Serve immediately over hot jasmine rice.'
    ]
  },
  {
    id: 'rec-3',
    title: 'Creamy Mushroom Risotto',
    description: 'Slow-cooked Arborio rice rich with earthy forest mushrooms, white wine, shallots, and fresh thyme, finished with butter and truffle oil.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    cuisine: 'Italian',
    tags: ['Vegetarian', 'Gluten-Free', 'Comfort Food'],
    difficulty: 'Hard',
    calories: 510,
    rating: 4.7,
    macros: {
      protein: 11,
      carbs: 68,
      fat: 22
    },
    videoUrl: 'https://www.youtube.com/embed/n30D-Yc1iig',
    ingredients: [
      { name: 'Arborio Rice', amount: 1.5, unit: 'cups', department: 'Pantry' },
      { name: 'Mixed Mushrooms (Cremini/Shiitake)', amount: 400, unit: 'g', department: 'Produce' },
      { name: 'Vegetable Broth', amount: 5, unit: 'cups', department: 'Pantry' },
      { name: 'Dry White Wine', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Shallot (Finely Chopped)', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Butter', amount: 4, unit: 'tbsp', department: 'Dairy' },
      { name: 'Grated Parmesan', amount: 0.5, unit: 'cups', department: 'Dairy' },
      { name: 'Fresh Thyme Leaves', amount: 2, unit: 'tsp', department: 'Produce' },
      { name: 'Olive Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'In a saucepan, bring the vegetable broth to a low simmer and keep it warm throughout the cooking process.',
      'In a large deep skillet, heat olive oil and 1 tablespoon of butter over medium-high heat. Add sliced mushrooms and thyme, sautéing until browned (about 5-6 minutes). Remove mushrooms and set aside.',
      'Add remaining butter to the same skillet and sauté shallots until soft and translucent (2 minutes).',
      'Add Arborio rice, stirring constantly for 2 minutes to toast the grains slightly.',
      'Pour in the white wine, stirring constantly until the wine is fully absorbed by the rice.',
      'Add a ladleful (about 1/2 cup) of the warm vegetable broth. Stir continuously until absorbed. Repeat this process, adding broth one ladle at a time and stirring constantly. This releases the rice starches and makes it creamy. Takes about 20 minutes.',
      'When the rice is al dente, stir in the sautéed mushrooms, grated parmesan, and season with salt and pepper.',
      'Remove from heat, let sit for 2 minutes, and serve with an extra dusting of parmesan and a drizzle of olive oil.'
    ]
  },
  {
    id: 'rec-4',
    title: 'Sweet Potato & Black Bean Tacos',
    description: 'Spiced roasted sweet potatoes and black beans in warm corn tortillas, topped with avocado lime crema, pickled red onions, and cotija cheese.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    cuisine: 'Mexican',
    tags: ['Vegetarian', 'Gluten-Free', 'Healthy', 'Gym Diet'],
    difficulty: 'Easy',
    calories: 380,
    rating: 4.4,
    macros: {
      protein: 12,
      carbs: 58,
      fat: 11
    },
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
      'Preheat oven to 400°F (200°C). Toss diced sweet potatoes with olive oil and taco seasoning on a baking sheet.',
      'Roast for 20 minutes, flipping halfway, until sweet potatoes are tender and browned on the edges.',
      'While roasting, warm the black beans in a small pot with a splash of water and a pinch of cumin and salt.',
      'Make the Avocado Crema: Blend the avocado, sour cream, lime juice, and cilantro until completely smooth.',
      'Warm the corn tortillas in a dry skillet over medium-high heat for 30 seconds on each side.',
      'Assemble tacos by layering warm tortillas with black beans, roasted sweet potatoes, a drizzle of avocado crema, and optionally top with cotija cheese or cilantro.'
    ]
  },
  {
    id: 'rec-5',
    title: 'Greek Lemon Herb Chicken',
    description: 'Tender chicken breasts marinated in Greek yogurt, lemon juice, garlic, oregano, and dill, grilled to juicy perfection.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    cuisine: 'Greek',
    tags: ['Meat', 'High-Protein', 'Low-Carb', 'Healthy', 'Gym Diet'],
    difficulty: 'Easy',
    calories: 410,
    rating: 4.9,
    macros: {
      protein: 42,
      carbs: 8,
      fat: 22
    },
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
      'In a medium bowl, combine Greek yogurt, lemon juice, lemon zest, minced garlic, oregano, olive oil, salt, and pepper.',
      'Place chicken breasts in a zip-lock bag or shallow dish, pour the yogurt marinade over them, and refrigerate for at least 20 minutes (up to 4 hours).',
      'Preheat grill pan or outdoor grill to medium-high heat. Lightly oil the grill grates.',
      'Remove chicken from marinade, wiping off excess. Grill chicken for 6-8 minutes per side, or until internal temperature reaches 165°F (74°C).',
      'Let the chicken rest for 5 minutes before slicing.',
      'Serve chicken warm with a side salad of chopped cucumber, cherry tomatoes, and a squeeze of fresh lemon juice.'
    ]
  },
  {
    id: 'rec-6',
    title: 'Matcha Fluffy Pancakes',
    description: 'Thick, fluffy soufflé-style pancakes flavored with premium Japanese matcha green tea, served with fresh berries and maple syrup.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    cuisine: 'Japanese-Fusion',
    tags: ['Vegetarian', 'Breakfast', 'Sweet'],
    difficulty: 'Medium',
    calories: 360,
    rating: 4.6,
    macros: {
      protein: 10,
      carbs: 52,
      fat: 12
    },
    videoUrl: 'https://www.youtube.com/embed/hJ8yHj95v64',
    ingredients: [
      { name: 'All-Purpose Flour', amount: 1, unit: 'cups', department: 'Pantry' },
      { name: 'Matcha Powder (Ceremonial)', amount: 1.5, unit: 'tbsp', department: 'Pantry' },
      { name: 'Baking Powder', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Sugar', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Egg', amount: 1, unit: 'pcs', department: 'Dairy' },
      { name: 'Milk', amount: 0.75, unit: 'cups', department: 'Dairy' },
      { name: 'Melted Butter', amount: 2, unit: 'tbsp', department: 'Dairy' },
      { name: 'Fresh Blueberries', amount: 0.5, unit: 'cups', department: 'Produce' },
      { name: 'Maple Syrup', amount: 4, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'In a large bowl, whisk together the flour, matcha powder, baking powder, sugar, and a pinch of salt.',
      'In another bowl, whisk the egg, milk, and melted butter together.',
      'Pour the wet ingredients into the dry ingredients and gently fold until just combined (some small lumps are fine; do not overmix or the pancakes will be dense).',
      'Heat a non-stick skillet or griddle over medium heat and lightly grease with a little butter.',
      'Pour 1/4 cup of batter for each pancake. Cook until bubbles start to form on the surface (about 3 minutes).',
      'Flip gently and cook the other side for another 2 minutes until cooked through and slightly springy to touch.',
      'Stack the pancakes, top with fresh blueberries, and drizzle with maple syrup.'
    ]
  }
];
