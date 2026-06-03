import type { Recipe } from '../types';

export const newRecipes: Recipe[] = [
  {
    id: 'user-rec-1',
    title: 'Pizza Margherita',
    description: 'Classic Neapolitan pizza topped with simple San Marzano tomato sauce, fresh mozzarella, fresh basil, and extra virgin olive oil.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    category: 'Italian',
    subcategory: 'Pizza & Bread',
    tags: ['Vegetarian', 'Italian', 'Classic', 'Comfort Food'],
    difficulty: 'Medium',
    calories: 320,
    rating: 4.8,
    macros: { protein: 14, carbs: 42, fat: 12 },
    ingredients: [
      { name: 'Pizza Dough', amount: 1, unit: 'ball', department: 'Bakery' },
      { name: 'San Marzano Tomatoes', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Fresh Mozzarella', amount: 120, unit: 'g', department: 'Dairy' },
      { name: 'Fresh Basil Leaves', amount: 6, unit: 'pcs', department: 'Produce' },
      { name: 'Olive Oil', amount: 1, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Preheat oven and baking steel/stone to 500°F (260°C).',
      'Stretch pizza dough on a floured surface to a 10-inch circle.',
      'Spread crushed San Marzano tomatoes, top with fresh mozzarella and fresh basil leaves.',
      'Bake for 7-9 minutes until crust is charred and cheese is bubbly. Drizzle with olive oil.'
    ]
  },
  {
    id: 'user-rec-2',
    title: 'Maki Sushi Roll',
    description: 'Fresh sushi rolls filled with sushi-grade tuna, avocado, cucumber wrapped in seasoned sushi rice and nori sheets.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 20,
    servings: 2,
    category: 'Asian Fusion',
    subcategory: 'Japanese',
    tags: ['Seafood', 'Gluten-Free', 'Japanese', 'Healthy'],
    difficulty: 'Hard',
    calories: 290,
    rating: 4.7,
    macros: { protein: 16, carbs: 48, fat: 4 },
    ingredients: [
      { name: 'Sushi Rice', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Nori Sheets', amount: 2, unit: 'pcs', department: 'Pantry' },
      { name: 'Sushi-grade Tuna', amount: 150, unit: 'g', department: 'Seafood' },
      { name: 'Avocado (Sliced)', amount: 0.5, unit: 'pcs', department: 'Produce' },
      { name: 'Cucumber (Julienned)', amount: 0.5, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Cook and season sushi rice with vinegar, sugar, and salt.',
      'Place nori sheet shiny side down on a bamboo mat, spread rice evenly leaving 1 inch at the top.',
      'Arrange tuna strips, avocado, and cucumber across the middle.',
      'Roll tightly using the bamboo mat. Slice into 8 bite-sized rounds and serve with soy sauce.'
    ]
  },
  {
    id: 'user-rec-3',
    title: 'Butter Chicken Classic',
    description: 'Tender marinated chicken pieces grilled and simmered in a rich, buttery, spiced tomato cream sauce.',
    image: 'https://images.unsplash.com/photo-1603894584379-ff147475b63d?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Punjab',
    tags: ['Indian', 'Comfort Food', 'High-Protein', 'Creamy'],
    difficulty: 'Medium',
    calories: 490,
    rating: 4.9,
    macros: { protein: 32, carbs: 14, fat: 34 },
    ingredients: [
      { name: 'Chicken Thighs (Boneless)', amount: 600, unit: 'g', department: 'Meat' },
      { name: 'Greek Yogurt', amount: 0.5, unit: 'cup', department: 'Dairy' },
      { name: 'Butter', amount: 3, unit: 'tbsp', department: 'Dairy' },
      { name: 'Heavy Cream', amount: 0.5, unit: 'cup', department: 'Dairy' },
      { name: 'Tomato Puree', amount: 1.5, unit: 'cups', department: 'Pantry' }
    ],
    instructions: [
      'Marinate chicken in yogurt, lemon juice, ginger-garlic paste, and garam masala for 30 minutes.',
      'Pan-sear chicken until golden and slightly charred. Set aside.',
      'Melt butter in skillet, cook tomato puree and spices, then blend until smooth.',
      'Stir in heavy cream, add chicken, and simmer for 10 minutes. Garnish with cilantro.'
    ]
  },
  {
    id: 'user-rec-4',
    title: 'Aromatic Chicken Biryani',
    description: 'World-renowned layered dish of spiced long-grain basmati rice and marinated chicken, cooked over low heat.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    cookTime: 45,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Hyderabad',
    tags: ['Indian', 'Spicy', 'Authentic', 'High-Protein'],
    difficulty: 'Hard',
    calories: 580,
    rating: 4.9,
    macros: { protein: 35, carbs: 68, fat: 18 },
    ingredients: [
      { name: 'Basmati Rice', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Chicken Pieces', amount: 500, unit: 'g', department: 'Meat' },
      { name: 'Yogurt', amount: 0.5, unit: 'cup', department: 'Dairy' },
      { name: 'Onions (Sliced)', amount: 2, unit: 'large', department: 'Produce' },
      { name: 'Biryani Spices', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Marinate chicken in yogurt, ginger-garlic paste, and spices for 1 hour.',
      'Parboil basmati rice with whole spices until 70% cooked.',
      'Caramelize sliced onions in ghee until deep brown.',
      'Layer parboiled rice, marinated chicken, fried onions, and saffron water in a heavy pot. Seal and cook on low heat for 35 minutes.'
    ]
  },
  {
    id: 'user-rec-5',
    title: 'Authentic Pad Thai',
    description: 'Stir-fried rice noodles with tofu, shrimp, egg, bean sprouts, peanuts, in a sweet and sour tamarind glaze.',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    category: 'Thai',
    subcategory: 'Stir-Fry',
    tags: ['Thai', 'Seafood', 'Noodles', 'Quick'],
    difficulty: 'Medium',
    calories: 460,
    rating: 4.7,
    macros: { protein: 18, carbs: 65, fat: 14 },
    ingredients: [
      { name: 'Flat Rice Noodles', amount: 150, unit: 'g', department: 'Pantry' },
      { name: 'Shrimp', amount: 100, unit: 'g', department: 'Seafood' },
      { name: 'Tofu (Cubed)', amount: 80, unit: 'g', department: 'Produce' },
      { name: 'Tamarind Paste', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Roasted Peanuts (Crushed)', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Soak rice noodles in warm water for 30 minutes until pliable.',
      'Stir-fry shrimp and tofu in a wok until cooked; push to side and scramble the egg.',
      'Toss in noodles, tamarind paste, fish sauce, palm sugar, and bean sprouts.',
      'Stir-fry rapidly on high heat until dry. Garnish with crushed peanuts and lime.'
    ]
  },
  {
    id: 'user-rec-6',
    title: 'Shoyu Ramen Bowl',
    description: 'Hearty Japanese ramen bowl with a savory soy-sauce-based broth, tender pork chashu, soft-boiled egg, and nori.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 40,
    servings: 2,
    category: 'Asian Fusion',
    subcategory: 'Japanese',
    tags: ['Japanese', 'Comfort Food', 'Noodles', 'Spicy'],
    difficulty: 'Hard',
    calories: 560,
    rating: 4.8,
    macros: { protein: 28, carbs: 62, fat: 20 },
    ingredients: [
      { name: 'Ramen Noodles', amount: 2, unit: 'packs', department: 'Pantry' },
      { name: 'Chicken Broth', amount: 4, unit: 'cups', department: 'Pantry' },
      { name: 'Soy Sauce (Shoyu)', amount: 4, unit: 'tbsp', department: 'Pantry' },
      { name: 'Soft-boiled Egg', amount: 1, unit: 'pcs', department: 'Dairy' },
      { name: 'Pork Belly (Sliced)', amount: 4, unit: 'slices', department: 'Meat' }
    ],
    instructions: [
      'Simmer pork slices in soy sauce, mirin, and ginger until tender.',
      'Heat chicken broth, stir in shoyu tare (soy sauce reduction).',
      'Cook ramen noodles separately, drain, and transfer to bowls.',
      'Pour hot broth over noodles, top with pork, soft-boiled egg, green onions, and nori.'
    ]
  },
  {
    id: 'user-rec-7',
    title: 'Tacos al Pastor',
    description: 'Crispy marinated pork shaved from a spit, served in warm corn tortillas with roasted pineapple, onion, and fresh cilantro.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 15,
    servings: 3,
    category: 'Mexican',
    subcategory: 'Tacos',
    tags: ['Mexican', 'Authentic', 'Pork', 'Spicy'],
    difficulty: 'Medium',
    calories: 420,
    rating: 4.9,
    macros: { protein: 24, carbs: 32, fat: 22 },
    ingredients: [
      { name: 'Pork Shoulder (Thinly Sliced)', amount: 500, unit: 'g', department: 'Meat' },
      { name: 'Achiote Paste', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Pineapple (Sliced)', amount: 1, unit: 'cup', department: 'Produce' },
      { name: 'Corn Tortillas', amount: 9, unit: 'pcs', department: 'Bakery' },
      { name: 'Cilantro (Chopped)', amount: 0.5, unit: 'cup', department: 'Produce' }
    ],
    instructions: [
      'Marinate pork in blended achiote paste, vinegar, pineapple juice, and spices overnight.',
      'Singe marinated pork strips on a blazing hot skillet until browned and crispy.',
      'Char pineapple slices on the same pan, then dice small.',
      'Assemble tacos with pork, pineapple, white onion, cilantro, and squeeze with lime.'
    ]
  },
  {
    id: 'user-rec-8',
    title: 'Traditional Beef Pho',
    description: 'Aromatic Vietnamese noodle soup featuring a clear, rich beef bone broth, rice banh pho noodles, and tender thin beef slices.',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 120,
    servings: 4,
    category: 'Asian Fusion',
    subcategory: 'Vietnamese',
    tags: ['Vietnamese', 'Healthy', 'Noodles', 'Gluten-Free'],
    difficulty: 'Hard',
    calories: 380,
    rating: 4.9,
    macros: { protein: 26, carbs: 54, fat: 7 },
    ingredients: [
      { name: 'Flat Rice Noodles', amount: 300, unit: 'g', department: 'Pantry' },
      { name: 'Beef Chuck/Bones', amount: 1000, unit: 'g', department: 'Meat' },
      { name: 'Beef Sirloin (Thinly Sliced)', amount: 200, unit: 'g', department: 'Meat' },
      { name: 'Ginger & Onions (Charred)', amount: 1, unit: 'set', department: 'Produce' },
      { name: 'Star Anise & Cloves', amount: 1, unit: 'set', department: 'Pantry' }
    ],
    instructions: [
      'Boil beef bones and discard first boil. Simmer with charred ginger, onion, and spices for 2 hours.',
      'Strain broth, season with fish sauce, sugar, and salt.',
      'Cook rice noodles per package instructions and place in bowls.',
      'Arrange raw sirloin slices on top, ladle boiling broth to cook the beef instantly. Serve with herbs.'
    ]
  },
  {
    id: 'user-rec-9',
    title: 'Classic Beef Lasagna',
    description: 'Rich bolognese beef ragu, creamy bechamel, and mozzarella cheese layered between sheets of pasta and baked golden.',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    category: 'Italian',
    subcategory: 'Pasta',
    tags: ['Italian', 'Comfort Food', 'Beef', 'Baking'],
    difficulty: 'Hard',
    calories: 620,
    rating: 4.8,
    macros: { protein: 35, carbs: 42, fat: 34 },
    ingredients: [
      { name: 'Lasagna Sheets', amount: 12, unit: 'pcs', department: 'Pantry' },
      { name: 'Ground Beef', amount: 500, unit: 'g', department: 'Meat' },
      { name: 'Crushed Tomatoes', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Bechamel Sauce', amount: 2, unit: 'cups', department: 'Dairy' },
      { name: 'Mozzarella (Shredded)', amount: 2, unit: 'cups', department: 'Dairy' }
    ],
    instructions: [
      'Brown beef and cook with onions, garlic, and crushed tomatoes for 20 minutes to make ragu.',
      'Boil lasagna sheets until al dente.',
      'Layer meat sauce, bechamel, lasagna sheets, and cheese in a baking dish.',
      'Bake at 375°F (190°C) for 35 minutes until bubbling and golden on top.'
    ]
  },
  {
    id: 'user-rec-10',
    title: 'Gourmet Beef Hamburger',
    description: 'Juicy grass-fed beef patty grilled to medium, topped with cheddar cheese, lettuce, tomato, and secret burger sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    category: 'Gym Diet',
    subcategory: 'Bulking',
    tags: ['Beef', 'High-Protein', 'Bulking', 'Fast Food'],
    difficulty: 'Easy',
    calories: 580,
    rating: 4.8,
    macros: { protein: 38, carbs: 28, fat: 32 },
    ingredients: [
      { name: 'Ground Beef Patty (80/20)', amount: 2, unit: 'pcs', department: 'Meat' },
      { name: 'Burger Buns', amount: 2, unit: 'pcs', department: 'Bakery' },
      { name: 'Cheddar Cheese Slices', amount: 2, unit: 'pcs', department: 'Dairy' },
      { name: 'Lettuce & Tomato', amount: 1, unit: 'set', department: 'Produce' },
      { name: 'Mayonnaise & Mustard', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Preheat grill or heavy skillet to medium-high heat.',
      'Season beef patties generously with salt, pepper, and garlic powder.',
      'Sear patties 4 minutes per side; add cheddar cheese for the last minute.',
      'Toast buns, spread sauces, assemble with beef, lettuce, and tomato.'
    ]
  },
  {
    id: 'user-rec-11',
    title: 'Restaurant Chicken Tikka Masala',
    description: 'Spiced yogurt-marinated chicken pieces roasted in an oven and served in a creamy, orange-colored spiced curry sauce.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 20,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Delhi',
    tags: ['Indian', 'Spicy', 'High-Protein', 'Creamy'],
    difficulty: 'Medium',
    calories: 450,
    rating: 4.9,
    macros: { protein: 34, carbs: 12, fat: 28 },
    ingredients: [
      { name: 'Chicken Breasts (Cubed)', amount: 600, unit: 'g', department: 'Meat' },
      { name: 'Yogurt', amount: 0.5, unit: 'cup', department: 'Dairy' },
      { name: 'Tomato Paste', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Garam Masala & Paprika', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Heavy Cream', amount: 0.5, unit: 'cup', department: 'Dairy' }
    ],
    instructions: [
      'Marinate chicken cubes in spiced yogurt for 1 hour, then broil/grill until charred.',
      'Sauté garlic, ginger, and onions in butter; stir in tomato paste and spices.',
      'Add cream and water to form a smooth sauce, then stir in cooked chicken.',
      'Simmer 10 minutes until chicken is tender. Serve with rice.'
    ]
  },
  {
    id: 'user-rec-12',
    title: 'Beef Bourguignon Classic',
    description: 'Traditional French beef stew braised in rich Pinot Noir red wine, beef broth, carrots, mushrooms, and pearl onions.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 120,
    servings: 6,
    category: 'French Cuisine',
    subcategory: 'Burgundy',
    tags: ['French', 'Comfort Food', 'Beef', 'Wine'],
    difficulty: 'Hard',
    calories: 520,
    rating: 4.9,
    macros: { protein: 42, carbs: 15, fat: 28 },
    ingredients: [
      { name: 'Beef Stew Meat', amount: 1000, unit: 'g', department: 'Meat' },
      { name: 'Red Wine (Pinot Noir)', amount: 3, unit: 'cups', department: 'Pantry' },
      { name: 'Bacon Lardons', amount: 150, unit: 'g', department: 'Meat' },
      { name: 'Carrots (Sliced)', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Cremini Mushrooms', amount: 200, unit: 'g', department: 'Produce' }
    ],
    instructions: [
      'Fry bacon in a large pot to render fat. Sear beef in the bacon grease until browned.',
      'Add garlic, carrots, and onions; stir in flour to coat.',
      'Pour in red wine and beef stock. Simmer covered for 2 hours until beef is fork-tender.',
      'Sauté mushrooms separately in butter and stir into stew before serving.'
    ]
  },
  {
    id: 'user-rec-13',
    title: 'Crispy Beer-Battered Fish and Chips',
    description: 'Flaky cod fillets coated in a light, crispy beer batter, deep-fried to golden perfection, served with thick potato chips.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    category: 'British',
    subcategory: 'Pub Food',
    tags: ['Seafood', 'Fried', 'British', 'Comfort Food'],
    difficulty: 'Medium',
    calories: 610,
    rating: 4.7,
    macros: { protein: 24, carbs: 58, fat: 30 },
    ingredients: [
      { name: 'Cod Fillets', amount: 400, unit: 'g', department: 'Seafood' },
      { name: 'Flour', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Light Beer (Cold)', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Russet Potatoes', amount: 3, unit: 'large', department: 'Produce' },
      { name: 'Baking Powder', amount: 1, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Slice potatoes into thick chips, soak, dry, and par-fry in oil at 320°F.',
      'Whisk flour, baking powder, salt, and cold beer together for a smooth batter.',
      'Dust cod fillets in flour, dip in batter, and fry at 375°F until crispy and golden.',
      'Double-fry chips at 375°F until crispy. Serve with tartar sauce.'
    ]
  },
  {
    id: 'user-rec-14',
    title: 'Peking Duck',
    description: 'Crispy-skinned roasted duck seasoned with Chinese five-spice, served with thin mandarin pancakes, hoisin sauce, and scallions.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 40,
    cookTime: 90,
    servings: 4,
    category: 'Asian Fusion',
    subcategory: 'Chinese',
    tags: ['Duck', 'Authentic', 'Chinese', 'Crispy'],
    difficulty: 'Hard',
    calories: 680,
    rating: 4.9,
    macros: { protein: 32, carbs: 24, fat: 50 },
    ingredients: [
      { name: 'Whole Duck', amount: 1, unit: 'pcs', department: 'Meat' },
      { name: 'Five-Spice Powder', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Hoisin Sauce', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Mandarin Pancakes', amount: 12, unit: 'pcs', department: 'Bakery' },
      { name: 'Cucumber & Scallions', amount: 1, unit: 'set', department: 'Produce' }
    ],
    instructions: [
      'Blanch duck skin with boiling water. Hang to air-dry for 24 hours in the fridge.',
      'Season cavity with five spice. Roast duck skin-side up at 375°F (190°C) for 80 minutes.',
      'Slice duck meat and crispy skin into thin portions.',
      'Assemble by spreading hoisin sauce on a pancake, placing duck, cucumber, and scallions, then rolling.'
    ]
  },
  {
    id: 'user-rec-15',
    title: 'Spiced Chicken Shawarma Wrap',
    description: 'Levantine grilled marinated chicken wrapped in warm pita bread with pickles, lettuce, and garlic toum sauce.',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 15,
    servings: 3,
    category: 'Mediterranean',
    subcategory: 'Levantine',
    tags: ['Mediterranean', 'High-Protein', 'Wrap', 'Spicy'],
    difficulty: 'Medium',
    calories: 460,
    rating: 4.8,
    macros: { protein: 34, carbs: 36, fat: 18 },
    ingredients: [
      { name: 'Chicken Thighs', amount: 500, unit: 'g', department: 'Meat' },
      { name: 'Shawarma Spices', amount: 1.5, unit: 'tbsp', department: 'Pantry' },
      { name: 'Pita Breads', amount: 3, unit: 'pcs', department: 'Bakery' },
      { name: 'Garlic Toum Sauce', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Pickles & Lettuce', amount: 1, unit: 'set', department: 'Produce' }
    ],
    instructions: [
      'Marinate chicken in lemon juice, garlic, olive oil, and shawarma spices for 2 hours.',
      'Sauté chicken on high heat until cooked and charred, then slice into thin ribbons.',
      'Warm pita bread, spread garlic sauce, place chicken, lettuce, and pickles.',
      'Roll tightly in foil and toast on a dry pan for 1 minute.'
    ]
  },
  {
    id: 'user-rec-16',
    title: 'Seafood Paella Valenciana',
    description: 'Traditional Spanish saffron-scented rice cooked with calamari, prawns, mussels, sweet peas, and red peppers.',
    image: 'https://images.unsplash.com/photo-1534080391025-a87b998d5820?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    category: 'Spanish',
    subcategory: 'Valencia',
    tags: ['Spanish', 'Seafood', 'Rice', 'Comfort Food'],
    difficulty: 'Hard',
    calories: 520,
    rating: 4.8,
    macros: { protein: 28, carbs: 64, fat: 15 },
    ingredients: [
      { name: 'Bomba Rice', amount: 1.5, unit: 'cups', department: 'Pantry' },
      { name: 'Prawns & Mussels', amount: 400, unit: 'g', department: 'Seafood' },
      { name: 'Saffron Threads', amount: 1, unit: 'pinch', department: 'Pantry' },
      { name: 'Chicken Broth', amount: 3.5, unit: 'cups', department: 'Pantry' },
      { name: 'Red Bell Pepper (Diced)', amount: 1, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Sauté bell pepper and garlic in olive oil in a wide paella pan.',
      'Stir in Bomba rice, coating with oil. Pour in warm saffron-infused broth.',
      'Simmer without stirring for 15 minutes to develop a crispy rice bottom (socarrat).',
      'Press prawns and mussels into the rice, cook covered for 8 more minutes until seafood opens.'
    ]
  },
  {
    id: 'user-rec-17',
    title: 'Jamaican Jerk Chicken',
    description: 'Fiery grilled chicken marinated in a fragrant, spicy mixture of Scotch bonnet peppers, allspice, thyme, and scallions.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    category: 'Caribbean',
    subcategory: 'Jerk',
    tags: ['Chicken', 'High-Protein', 'Spicy', 'Caribbean'],
    difficulty: 'Medium',
    calories: 440,
    rating: 4.7,
    macros: { protein: 38, carbs: 8, fat: 28 },
    ingredients: [
      { name: 'Chicken Drumsticks', amount: 8, unit: 'pcs', department: 'Meat' },
      { name: 'Scotch Bonnet Pepper', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Allspice Powder', amount: 1.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Thyme Sprigs', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Soy Sauce', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Blend peppers, allspice, thyme, garlic, ginger, and soy sauce to form jerk paste.',
      'Coat chicken drumsticks in paste, marinate in fridge for 4 hours.',
      'Grill chicken over medium-high heat, turning frequently, for 20-25 minutes.',
      'Serve with Jamaican rice and peas.'
    ]
  },
  {
    id: 'user-rec-18',
    title: 'Tom Yum Goong',
    description: 'Hot and sour Thai soup cooked with fresh prawns, lemongrass, kaffir lime leaves, galangal, and straw mushrooms.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    category: 'Thai',
    subcategory: 'Soup',
    tags: ['Thai', 'Seafood', 'Spicy', 'Healthy', 'Low-Carb'],
    difficulty: 'Medium',
    calories: 180,
    rating: 4.8,
    macros: { protein: 16, carbs: 12, fat: 6 },
    ingredients: [
      { name: 'Prawns (Head-on)', amount: 10, unit: 'pcs', department: 'Seafood' },
      { name: 'Lemongrass Stalks', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Galangal (Sliced)', amount: 4, unit: 'slices', department: 'Produce' },
      { name: 'Kaffir Lime Leaves', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Thai Chili Paste', amount: 1.5, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Boil water, add bruised lemongrass, galangal, and lime leaves; simmer 5 minutes.',
      'Stir in Thai chili paste and fish sauce.',
      'Add prawns and mushrooms, cook 3 minutes until prawns turn pink.',
      'Turn off heat, stir in fresh lime juice, and garnish with cilantro.'
    ]
  },
  {
    id: 'user-rec-19',
    title: 'Coq au Vin Classic',
    description: 'Homestyle French braised chicken cooked in rich red Burgundy wine, bacon lardons, button mushrooms, and sweet baby onions.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 60,
    servings: 4,
    category: 'French Cuisine',
    subcategory: 'Classic',
    tags: ['French', 'Comfort Food', 'Chicken', 'Wine'],
    difficulty: 'Medium',
    calories: 470,
    rating: 4.8,
    macros: { protein: 34, carbs: 12, fat: 26 },
    ingredients: [
      { name: 'Chicken Thighs (Skin-on)', amount: 4, unit: 'pcs', department: 'Meat' },
      { name: 'Bacon Lardons', amount: 100, unit: 'g', department: 'Meat' },
      { name: 'Red Wine', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Pearl Onions', amount: 8, unit: 'pcs', department: 'Produce' },
      { name: 'Mushrooms', amount: 150, unit: 'g', department: 'Produce' }
    ],
    instructions: [
      'Render fat from bacon lardons in a heavy dutch oven. Sauté mushrooms and pearl onions; remove and set aside.',
      'Sear chicken thighs in the remaining bacon fat until skin is crispy.',
      'Pour in red wine, chicken stock, garlic, and thyme. Cover and simmer for 40 minutes.',
      'Add mushrooms and onions back, simmer uncovered for 10 minutes until sauce is glossy.'
    ]
  },
  {
    id: 'user-rec-20',
    title: 'Korean Fried Chicken',
    description: 'Double-fried extra-crispy chicken wings coated in a sweet, savory, and mildly spicy gochujang glaze.',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    category: 'Asian Fusion',
    subcategory: 'Korean',
    tags: ['Chicken', 'Crispy', 'Fried', 'Spicy', 'Korean'],
    difficulty: 'Medium',
    calories: 590,
    rating: 4.9,
    macros: { protein: 30, carbs: 42, fat: 32 },
    ingredients: [
      { name: 'Chicken Wings', amount: 500, unit: 'g', department: 'Meat' },
      { name: 'Potato Starch', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Gochujang Paste', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Soy Sauce', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Honey', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Coat chicken wings in seasoned potato starch.',
      'Deep-fry in oil at 340°F (170°C) for 8 minutes. Let rest 2 minutes.',
      'Double-fry at 375°F (190°C) for 3 minutes until extra crunchy.',
      'Simmer gochujang, soy sauce, honey, and sesame oil, then toss wings in hot glaze.'
    ]
  },
  {
    id: 'user-rec-21',
    title: 'Paneer Butter Masala',
    description: 'Creamy and sweet Indian cottage cheese curry in a velvety tomato-cashew onion butter gravy.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Punjab',
    tags: ['Indian', 'Vegetarian', 'Comfort Food', 'High-Protein', 'Creamy'],
    difficulty: 'Easy',
    calories: 410,
    rating: 4.8,
    macros: { protein: 24, carbs: 16, fat: 28 },
    ingredients: [
      { name: 'Paneer Cubes', amount: 400, unit: 'g', department: 'Dairy' },
      { name: 'Canned Crushed Tomatoes', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Cashews (Soaked)', amount: 10, unit: 'pcs', department: 'Pantry' },
      { name: 'Butter', amount: 3, unit: 'tbsp', department: 'Dairy' },
      { name: 'Garam Masala', amount: 1, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Blend tomatoes and soaked cashews together into a smooth paste.',
      'Melt butter in a pan, sauté ginger-garlic paste, then pour in cashew-tomato paste.',
      'Add spices, salt, and water; cook for 8 minutes until butter separates.',
      'Add paneer cubes, cook for 3 minutes, then stir in cream and kasuri methi.'
    ]
  },
  {
    id: 'user-rec-22',
    title: 'Palak Paneer',
    description: 'Healthy and satisfying North Indian dish made of fresh paneer cubes in a spiced, smooth spinach puree.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568fa7098?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Punjab',
    tags: ['Indian', 'Vegetarian', 'Healthy', 'High-Protein', 'Gluten-Free'],
    difficulty: 'Easy',
    calories: 340,
    rating: 4.7,
    macros: { protein: 26, carbs: 12, fat: 22 },
    ingredients: [
      { name: 'Paneer Cubes', amount: 400, unit: 'g', department: 'Dairy' },
      { name: 'Fresh Spinach', amount: 4, unit: 'cups', department: 'Produce' },
      { name: 'Green Chilies', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Onion (Diced)', amount: 1, unit: 'medium', department: 'Produce' },
      { name: 'Garlic Cloves', amount: 4, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Blanch spinach leaves and green chilies in boiling water for 2 minutes, then shock in ice water and blend.',
      'Sauté chopped onion and garlic in oil until translucent.',
      'Add spices and the spinach paste; simmer for 5 minutes.',
      'Add paneer cubes and let simmer for 3 minutes. Garnish with a splash of cream.'
    ]
  },
  {
    id: 'user-rec-23',
    title: 'Margherita Pizza Classic',
    description: 'Flatbread pizza topped with sweet tomato sauce, fresh mozzarella cheese slices, and torn basil.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    category: 'Italian',
    subcategory: 'Pizza & Bread',
    tags: ['Vegetarian', 'Italian', 'Quick', 'Comfort Food'],
    difficulty: 'Easy',
    calories: 310,
    rating: 4.6,
    macros: { protein: 12, carbs: 45, fat: 9 },
    ingredients: [
      { name: 'Flatbread or Naan', amount: 2, unit: 'pcs', department: 'Bakery' },
      { name: 'Pizza Sauce', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Mozzarella Cheese', amount: 100, unit: 'g', department: 'Dairy' },
      { name: 'Fresh Basil', amount: 4, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Place flatbreads on a baking sheet, spread with pizza sauce.',
      'Top with mozzarella cheese slices.',
      'Bake for 10-12 minutes until cheese is melted and crust is crispy. Top with fresh basil.'
    ]
  },
  {
    id: 'user-rec-24',
    title: 'Vegetable Lasagna',
    description: 'Roasted zucchini, bell peppers, spinach, and layered pasta sheets baked with rich marinara and ricotta cheese.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    category: 'Italian',
    subcategory: 'Pasta',
    tags: ['Vegetarian', 'Italian', 'Healthy', 'Comfort Food'],
    difficulty: 'Medium',
    calories: 450,
    rating: 4.7,
    macros: { protein: 22, carbs: 48, fat: 18 },
    ingredients: [
      { name: 'Lasagna Sheets', amount: 12, unit: 'pcs', department: 'Pantry' },
      { name: 'Zucchini & Bell Pepper', amount: 2, unit: 'cups', department: 'Produce' },
      { name: 'Marinara Sauce', amount: 3, unit: 'cups', department: 'Pantry' },
      { name: 'Ricotta Cheese', amount: 1.5, unit: 'cups', department: 'Dairy' },
      { name: 'Baby Spinach', amount: 2, unit: 'cups', department: 'Produce' }
    ],
    instructions: [
      'Sauté diced zucchini, peppers, and spinach in olive oil until soft.',
      'Layer marinara sauce, lasagna sheets, sautéed vegetables, ricotta, and mozzarella cheese in a baking dish.',
      'Repeat layers, finishing with mozzarella on top.',
      'Bake at 375°F (190°C) for 35-40 minutes until golden and bubbling.'
    ]
  },
  {
    id: 'user-rec-25',
    title: 'Falafel Wraps',
    description: 'Crisp chickpea falafel patties wrapped in warm pita with lettuce, cucumber, tomato, and creamy tahini sauce.',
    image: 'https://images.unsplash.com/photo-1547058886-af77813be9a5?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    category: 'Mediterranean',
    subcategory: 'Levantine',
    tags: ['Vegetarian', 'Vegan', 'Mediterranean', 'Wrap'],
    difficulty: 'Easy',
    calories: 390,
    rating: 4.7,
    macros: { protein: 12, carbs: 54, fat: 12 },
    ingredients: [
      { name: 'Falafel Patties', amount: 6, unit: 'pcs', department: 'Pantry' },
      { name: 'Pita Bread', amount: 2, unit: 'pcs', department: 'Bakery' },
      { name: 'Tahini Sauce', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Cucumber & Tomato (Diced)', amount: 1, unit: 'cup', department: 'Produce' },
      { name: 'Shredded Lettuce', amount: 0.5, unit: 'cup', department: 'Produce' }
    ],
    instructions: [
      'Bake or shallow-fry pre-formed falafel patties until crispy.',
      'Warm pita bread in a pan for 30 seconds.',
      'Place falafels in pita, add shredded lettuce, diced cucumber, and tomatoes.',
      'Drizzle with creamy tahini sauce, wrap tightly, and serve.'
    ]
  },
  {
    id: 'user-rec-26',
    title: 'Traditional Greek Salad',
    description: 'Crisp cucumbers, ripe tomatoes, red onions, kalamata olives, and block feta cheese tossed in Greek oregano vinaigrette.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    category: 'Mediterranean',
    subcategory: 'Greek',
    tags: ['Vegetarian', 'Gluten-Free', 'Salad', 'Healthy', 'Quick'],
    difficulty: 'Easy',
    calories: 220,
    rating: 4.7,
    macros: { protein: 6, carbs: 12, fat: 18 },
    ingredients: [
      { name: 'Cucumber (Chopped)', amount: 1, unit: 'large', department: 'Produce' },
      { name: 'Cherry Tomatoes (Halved)', amount: 1.5, unit: 'cups', department: 'Produce' },
      { name: 'Feta Cheese', amount: 100, unit: 'g', department: 'Dairy' },
      { name: 'Kalamata Olives', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Red Onion (Sliced)', amount: 0.25, unit: 'cup', department: 'Produce' }
    ],
    instructions: [
      'Toss chopped cucumbers, cherry tomatoes, olives, and red onion together in a salad bowl.',
      'Drizzle with extra virgin olive oil, lemon juice, salt, and dried oregano.',
      'Place a thick slab of feta cheese on top, crumble slightly, and serve chilled.'
    ]
  },
  {
    id: 'user-rec-27',
    title: 'Homestyle Aloo Gobi',
    description: 'Classic dry Indian curry of potatoes and cauliflower sautéed with turmeric, ginger, and cumin seeds.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568fa7098?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Uttar Pradesh',
    tags: ['Indian', 'Vegetarian', 'Vegan', 'Healthy', 'Gluten-Free'],
    difficulty: 'Easy',
    calories: 210,
    rating: 4.5,
    macros: { protein: 5, carbs: 32, fat: 8 },
    ingredients: [
      { name: 'Cauliflower Florets', amount: 3, unit: 'cups', department: 'Produce' },
      { name: 'Potatoes (Diced)', amount: 2, unit: 'medium', department: 'Produce' },
      { name: 'Cumin Seeds', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Turmeric Powder', amount: 0.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Ginger-Garlic Paste', amount: 1, unit: 'tbsp', department: 'Produce' }
    ],
    instructions: [
      'Heat oil in a pan, temper cumin seeds and ginger-garlic paste.',
      'Add potatoes and cauliflower florets with turmeric, chili powder, and salt.',
      'Sauté on medium heat for 5 minutes, then cover and cook for 15 minutes until vegetables are tender.',
      'Garnish with garam masala and fresh coriander leaves.'
    ]
  },
  {
    id: 'user-rec-28',
    title: 'Vegetarian Moussaka',
    description: 'Layered Greek bake of roasted eggplants, sweet potatoes, and green lentils in tomato herb gravy, topped with creamy bechamel.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 45,
    servings: 4,
    category: 'Mediterranean',
    subcategory: 'Greek',
    tags: ['Vegetarian', 'Mediterranean', 'Comfort Food', 'Baking'],
    difficulty: 'Hard',
    calories: 420,
    rating: 4.6,
    macros: { protein: 15, carbs: 48, fat: 18 },
    ingredients: [
      { name: 'Eggplant (Sliced)', amount: 2, unit: 'large', department: 'Produce' },
      { name: 'Brown Lentils (Cooked)', amount: 1.5, unit: 'cups', department: 'Pantry' },
      { name: 'Tomato Sauce', amount: 1.5, unit: 'cups', department: 'Pantry' },
      { name: 'Bechamel Sauce', amount: 2, unit: 'cups', department: 'Dairy' },
      { name: 'Parmesan (Grated)', amount: 0.5, unit: 'cup', department: 'Dairy' }
    ],
    instructions: [
      'Roast eggplant slices with olive oil and salt at 400°F (200°C) for 20 minutes.',
      'Simmer lentils in tomato sauce with garlic, cinnamon, oregano, and salt.',
      'Layer eggplant and lentil tomato mixture in a baking dish, then pour bechamel on top.',
      'Sprinkle with grated parmesan and bake for 35 minutes until top is golden and bubbling.'
    ]
  },
  {
    id: 'user-rec-29',
    title: 'Simple Caprese Salad',
    description: 'Sliced vine-ripened tomatoes, fresh mozzarella, fresh basil leaves, drizzled with olive oil and sweet balsamic glaze.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    category: 'Italian',
    subcategory: 'Salad',
    tags: ['Vegetarian', 'Italian', 'Healthy', 'Gluten-Free', 'Quick'],
    difficulty: 'Easy',
    calories: 190,
    rating: 4.8,
    macros: { protein: 10, carbs: 8, fat: 14 },
    ingredients: [
      { name: 'Roma Tomatoes', amount: 3, unit: 'pcs', department: 'Produce' },
      { name: 'Fresh Mozzarella Log', amount: 150, unit: 'g', department: 'Dairy' },
      { name: 'Fresh Basil Leaves', amount: 10, unit: 'pcs', department: 'Produce' },
      { name: 'Balsamic Glaze', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Olive Oil', amount: 1, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Slice tomatoes and mozzarella into 1/4-inch thick discs.',
      'Layer tomatoes, mozzarella, and fresh basil leaves alternately on a serving platter.',
      'Drizzle with extra virgin olive oil, balsamic glaze, and sprinkle with coarse sea salt.'
    ]
  },
  {
    id: 'user-rec-30',
    title: 'Creamy Mac and Cheese',
    description: 'Elbow macaroni tossed in a rich, velvety cheddar and gruyere cheese sauce, baked with breadcrumbs.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    category: 'Italian',
    subcategory: 'Pasta',
    tags: ['Vegetarian', 'Comfort Food', 'Cheese', 'Baking'],
    difficulty: 'Easy',
    calories: 540,
    rating: 4.8,
    macros: { protein: 22, carbs: 58, fat: 24 },
    ingredients: [
      { name: 'Elbow Macaroni', amount: 250, unit: 'g', department: 'Pantry' },
      { name: 'Cheddar Cheese (Shredded)', amount: 2, unit: 'cups', department: 'Dairy' },
      { name: 'Milk', amount: 2, unit: 'cups', department: 'Dairy' },
      { name: 'Butter', amount: 3, unit: 'tbsp', department: 'Dairy' },
      { name: 'Flour', amount: 3, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Boil macaroni until al dente; drain.',
      'Melt butter in a pan, whisk in flour, cook 1 minute, then slowly whisk in milk to make a white sauce.',
      'Remove from heat, stir in shredded cheddar cheese until melted and creamy.',
      'Toss with macaroni and pour into a baking dish. Bake at 375°F for 15 minutes.'
    ]
  },
  {
    id: 'user-rec-31',
    title: 'Spiced Chana Masala',
    description: 'Tangy and spiced Punjabi chickpea curry cooked with onions, tomatoes, and a special chole spice blend.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008296fbe?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Punjab',
    tags: ['Indian', 'Vegetarian', 'Vegan', 'High-Protein', 'Gluten-Free'],
    difficulty: 'Easy',
    calories: 280,
    rating: 4.7,
    macros: { protein: 12, carbs: 42, fat: 8 },
    ingredients: [
      { name: 'Canned Chickpeas', amount: 2, unit: 'cans', department: 'Pantry' },
      { name: 'Onion (Diced)', amount: 1, unit: 'large', department: 'Produce' },
      { name: 'Roma Tomatoes (Finely Chopped)', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Chana Masala Spice Mix', amount: 1.5, unit: 'tbsp', department: 'Pantry' },
      { name: 'Ginger-Garlic Paste', amount: 1, unit: 'tbsp', department: 'Produce' }
    ],
    instructions: [
      'Sauté onions and ginger-garlic paste in oil until brown.',
      'Add chopped tomatoes and cook for 5 minutes until soft.',
      'Add Chana Masala spices and cook 1 minute. Stir in drained chickpeas and 1 cup water.',
      'Simmer on low heat for 15 minutes until gravy is thick. Serve with rice or bhature.'
    ]
  },
  {
    id: 'user-rec-32',
    title: 'Yellow Dal Tadka',
    description: 'Yellow split lentils cooked with turmeric and tempered with ghee, cumin seeds, garlic, and dried red chilies.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'Punjab',
    tags: ['Indian', 'Vegetarian', 'Comfort Food', 'Healthy', 'Gluten-Free'],
    difficulty: 'Easy',
    calories: 220,
    rating: 4.8,
    macros: { protein: 14, carbs: 32, fat: 6 },
    ingredients: [
      { name: 'Toor Dal (Split Pigeon Peas)', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Tomatoes (Diced)', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Ghee', amount: 2, unit: 'tbsp', department: 'Dairy' },
      { name: 'Cumin Seeds', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Garlic Cloves (Minced)', amount: 4, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Pressure-cook toor dal with tomatoes, turmeric, salt, and water until soft.',
      'Heat ghee in a small pan, fry cumin seeds, garlic, and dried chilies until fragrant.',
      'Pour this hot tempered oil (tadka) directly over the boiled dal.',
      'Cover immediately to trap the smoky garlic aroma, then serve with rice.'
    ]
  },
  {
    id: 'user-rec-33',
    title: 'Vegan Buddha Bowl',
    description: 'Nutritious lunch bowl composed of seasoned quinoa, roasted sweet potatoes, crispy tofu, avocado, and tahini.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    category: 'Gym Diet',
    subcategory: 'High Protein',
    tags: ['Vegan', 'Vegetarian', 'Healthy', 'High-Protein', 'Gym Diet'],
    difficulty: 'Easy',
    calories: 410,
    rating: 4.7,
    macros: { protein: 20, carbs: 52, fat: 15 },
    ingredients: [
      { name: 'Quinoa', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Firm Tofu (Cubed)', amount: 200, unit: 'g', department: 'Produce' },
      { name: 'Sweet Potato (Diced)', amount: 1, unit: 'large', department: 'Produce' },
      { name: 'Avocado', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Tahini', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Roast cubed tofu and sweet potatoes with salt and pepper at 400°F (200°C) for 20 minutes.',
      'Cook quinoa according to instructions.',
      'Assemble bowl: half quinoa, roasted potatoes, tofu, and sliced avocado.',
      'Drizzle with tahini mixed with lemon juice and a splash of water.'
    ]
  },
  {
    id: 'user-rec-34',
    title: 'Creamy Classic Hummus',
    description: 'Smooth Middle Eastern chickpea dip blended with tahini, fresh garlic, lemon juice, and olive oil.',
    image: 'https://images.unsplash.com/photo-1547058886-af77813be9a5?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    category: 'Mediterranean',
    subcategory: 'Levantine',
    tags: ['Vegetarian', 'Vegan', 'Healthy', 'Gluten-Free', 'Quick'],
    difficulty: 'Easy',
    calories: 190,
    rating: 4.8,
    macros: { protein: 6, carbs: 18, fat: 12 },
    ingredients: [
      { name: 'Canned Chickpeas (Rinsed)', amount: 2, unit: 'cans', department: 'Pantry' },
      { name: 'Tahini Paste', amount: 0.25, unit: 'cup', department: 'Pantry' },
      { name: 'Lemon Juice', amount: 3, unit: 'tbsp', department: 'Produce' },
      { name: 'Garlic Cloves', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Olive Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Process tahini and lemon juice in a food processor for 1 minute.',
      'Add garlic, olive oil, and salt, blending until smooth.',
      'Add drained chickpeas in two batches, processing until thick and creamy. Add ice water if needed.'
    ]
  },
  {
    id: 'user-rec-35',
    title: 'Classic French Ratatouille',
    description: 'Provençal layered squash, eggplant, zucchini, and bell peppers slow-baked in a garlic-herb tomato sauce.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    category: 'French Cuisine',
    subcategory: 'Provence',
    tags: ['French', 'Vegetarian', 'Vegan', 'Healthy', 'Gluten-Free'],
    difficulty: 'Medium',
    calories: 180,
    rating: 4.6,
    macros: { protein: 4, carbs: 22, fat: 9 },
    ingredients: [
      { name: 'Zucchini & Squash', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Eggplant', amount: 1, unit: 'pcs', department: 'Produce' },
      { name: 'Roma Tomatoes', amount: 3, unit: 'pcs', department: 'Produce' },
      { name: 'Tomato Puree', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Olive Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Pour seasoned tomato puree into the bottom of a round baking dish.',
      'Thinly slice squash, zucchini, eggplant, and tomatoes.',
      'Layer vegetable discs alternately in a spiral. Drizzle with olive oil, thyme, and garlic.',
      'Bake covered with parchment at 375°F (190°C) for 35 minutes, then uncovered for 10 minutes.'
    ]
  },
  {
    id: 'user-rec-36',
    title: 'Spiced Jackfruit Vegan Tacos',
    description: 'Smoky shredded pulled jackfruit tacos in corn tortillas, topped with avocado lime slaw.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    category: 'Mexican',
    subcategory: 'Tacos',
    tags: ['Vegan', 'Vegetarian', 'Mexican', 'Spicy', 'Healthy'],
    difficulty: 'Easy',
    calories: 290,
    rating: 4.5,
    macros: { protein: 8, carbs: 42, fat: 9 },
    ingredients: [
      { name: 'Canned Young Green Jackfruit', amount: 2, unit: 'cans', department: 'Pantry' },
      { name: 'Taco Seasoning', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Corn Tortillas', amount: 6, unit: 'pcs', department: 'Bakery' },
      { name: 'Shredded Cabbage', amount: 1, unit: 'cup', department: 'Produce' },
      { name: 'Avocado', amount: 0.5, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Drain, rinse, and shred jackfruit, removing hard core parts.',
      'Sauté jackfruit with taco seasoning, onions, and tomato paste until soft, then shred further to look like pork.',
      'Mash avocado with lime juice and toss with shredded cabbage.',
      'Warm tortillas, spoon in jackfruit, top with slaw.'
    ]
  },
  {
    id: 'user-rec-37',
    title: 'Tofu Vegetable Stir Fry',
    description: 'Crispy pan-fried tofu cubes and fresh snap peas, broccoli, and peppers tossed in a sweet-soy-sesame glaze.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    category: 'Gym Diet',
    subcategory: 'High Protein',
    tags: ['Vegan', 'Vegetarian', 'High-Protein', 'Healthy', 'Quick'],
    difficulty: 'Easy',
    calories: 310,
    rating: 4.6,
    macros: { protein: 18, carbs: 24, fat: 14 },
    ingredients: [
      { name: 'Extra Firm Tofu (Pressed)', amount: 250, unit: 'g', department: 'Produce' },
      { name: 'Broccoli & Snap Peas', amount: 2, unit: 'cups', department: 'Produce' },
      { name: 'Soy Sauce', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Sesame Oil', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Garlic & Ginger (Minced)', amount: 1.5, unit: 'tsp', department: 'Produce' }
    ],
    instructions: [
      'Cut tofu into cubes and fry in sesame oil until all sides are crispy.',
      'Add broccoli, snap peas, garlic, and ginger; cook 4 minutes until crisp-tender.',
      'Pour in soy sauce mixed with a dash of honey or maple syrup.',
      'Stir-fry on high heat for 2 minutes until glaze coats the stir-fry.'
    ]
  },
  {
    id: 'user-rec-38',
    title: 'Hearty Lentil Soup',
    description: 'Thick comforting winter soup filled with brown lentils, diced celery, carrots, potatoes, and fresh spinach.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    category: 'Mediterranean',
    subcategory: 'Levantine',
    tags: ['Vegan', 'Vegetarian', 'Healthy', 'Comfort Food', 'Gluten-Free'],
    difficulty: 'Easy',
    calories: 270,
    rating: 4.6,
    macros: { protein: 16, carbs: 42, fat: 5 },
    ingredients: [
      { name: 'Brown Lentils', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Carrots & Celery (Diced)', amount: 1, unit: 'cup', department: 'Produce' },
      { name: 'Vegetable Broth', amount: 4, unit: 'cups', department: 'Pantry' },
      { name: 'Tomato Paste', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Baby Spinach', amount: 1.5, unit: 'cups', department: 'Produce' }
    ],
    instructions: [
      'Sauté carrots, celery, and onion in olive oil until soft, about 6 minutes.',
      'Add tomato paste, garlic, cumin, and rinse lentils.',
      'Pour in vegetable broth. Simmer covered for 25 minutes until lentils are tender.',
      'Stir in spinach and let wilt. Season with lemon juice.'
    ]
  },
  {
    id: 'user-rec-39',
    title: 'Middle Eastern Mujadara',
    description: 'A comforting, fragrant Levantine dish of green lentils and basmati rice topped with crispy caramelized onion ribbons.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    category: 'Mediterranean',
    subcategory: 'Levantine',
    tags: ['Vegan', 'Vegetarian', 'Healthy', 'Comfort Food'],
    difficulty: 'Medium',
    calories: 340,
    rating: 4.7,
    macros: { protein: 12, carbs: 62, fat: 6 },
    ingredients: [
      { name: 'Green Lentils', amount: 0.75, unit: 'cup', department: 'Pantry' },
      { name: 'Basmati Rice', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Onions (Sliced into Rings)', amount: 3, unit: 'large', department: 'Produce' },
      { name: 'Cumin & Coriander', amount: 1.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Olive Oil', amount: 3, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Boil green lentils in water for 15 minutes until partially cooked; drain.',
      'Sauté onion rings in olive oil over medium-low heat for 20 minutes until dark brown and caramelized.',
      'Toast rice, cumin, and coriander in pot; add lentils, water, and cook covered 15 minutes.',
      'Fluff rice and serve topped with crispy caramelized onions.'
    ]
  },
  {
    id: 'user-rec-40',
    title: 'Coconut Chickpea Curry',
    description: 'Creamy vegan curry of chickpeas and fresh vegetables simmered in spiced coconut milk.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    category: 'Indian Cuisine',
    subcategory: 'South India',
    tags: ['Indian', 'Vegan', 'Vegetarian', 'Gluten-Free', 'Creamy'],
    difficulty: 'Easy',
    calories: 310,
    rating: 4.8,
    macros: { protein: 10, carbs: 36, fat: 15 },
    ingredients: [
      { name: 'Canned Chickpeas', amount: 2, unit: 'cans', department: 'Pantry' },
      { name: 'Coconut Milk', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Spinach & Tomatoes', amount: 1.5, unit: 'cups', department: 'Produce' },
      { name: 'Curry Powder & Turmeric', amount: 2, unit: 'tsp', department: 'Pantry' },
      { name: 'Onion & Garlic', amount: 1, unit: 'set', department: 'Produce' }
    ],
    instructions: [
      'Sauté onions and garlic in a pot until soft.',
      'Stir in curry powder and turmeric. Pour in coconut milk and add chickpeas.',
      'Simmer on medium heat for 10 minutes.',
      'Fold in spinach and diced tomatoes. Cook 2 more minutes until wilted.'
    ]
  },
  {
    id: 'user-rec-41',
    title: 'Classic Italian Tiramisu',
    description: 'Traditional Italian dessert of coffee-dipped ladyfingers layered with whipped mascarpone cheese and cocoa powder.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 0,
    servings: 6,
    category: 'Desserts',
    subcategory: 'Italian',
    tags: ['Vegetarian', 'Dessert', 'Sweet', 'Italian'],
    difficulty: 'Medium',
    calories: 420,
    rating: 4.9,
    macros: { protein: 6, carbs: 44, fat: 24 },
    ingredients: [
      { name: 'Mascarpone Cheese', amount: 250, unit: 'g', department: 'Dairy' },
      { name: 'Ladyfinger Cookies', amount: 24, unit: 'pcs', department: 'Bakery' },
      { name: 'Strong Espresso (Cooled)', amount: 1.5, unit: 'cups', department: 'Pantry' },
      { name: 'Heavy Cream', amount: 1, unit: 'cup', department: 'Dairy' },
      { name: 'Cocoa Powder', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Whip heavy cream and fold into softened mascarpone cheese with sugar and vanilla.',
      'Dip ladyfinger cookies briefly in cooled espresso.',
      'Layer dipped ladyfingers in a baking dish, cover with half of the mascarpone cream.',
      'Repeat with a second layer, dust top with cocoa powder, and chill for 4 hours.'
    ]
  },
  {
    id: 'user-rec-42',
    title: 'New York Cheesecake',
    description: 'Rich, dense, and creamy vanilla cheesecake baked over a sweet graham cracker crust, topped with strawberry coulis.',
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 60,
    servings: 12,
    category: 'Desserts',
    subcategory: 'American',
    tags: ['Vegetarian', 'Dessert', 'Sweet', 'Baking'],
    difficulty: 'Hard',
    calories: 480,
    rating: 4.8,
    macros: { protein: 8, carbs: 48, fat: 28 },
    ingredients: [
      { name: 'Cream Cheese', amount: 600, unit: 'g', department: 'Dairy' },
      { name: 'Graham Cracker Crumbs', amount: 1.5, unit: 'cups', department: 'Bakery' },
      { name: 'Butter (Melted)', amount: 4, unit: 'tbsp', department: 'Dairy' },
      { name: 'Sugar', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Eggs', amount: 3, unit: 'pcs', department: 'Dairy' }
    ],
    instructions: [
      'Mix graham crumbs and melted butter; press into a springform pan and bake 8 minutes.',
      'Beat cream cheese and sugar until smooth; add eggs one at a time, followed by vanilla.',
      'Pour filling into crust. Bake in a water bath at 325°F (160°C) for 60 minutes.',
      'Cool slowly in oven with door ajar, then refrigerate overnight.'
    ]
  },
  {
    id: 'user-rec-43',
    title: 'Fudgy Chocolate Brownies',
    description: 'Chewy and rich dark chocolate brownies with a crackly top and melted chocolate chips.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 20,
    servings: 9,
    category: 'Desserts',
    subcategory: 'American',
    tags: ['Vegetarian', 'Dessert', 'Sweet', 'Baking'],
    difficulty: 'Easy',
    calories: 290,
    rating: 4.8,
    macros: { protein: 4, carbs: 36, fat: 16 },
    ingredients: [
      { name: 'Butter', amount: 0.5, unit: 'cup', department: 'Dairy' },
      { name: 'Sugar', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Cocoa Powder', amount: 0.75, unit: 'cup', department: 'Pantry' },
      { name: 'Eggs', amount: 2, unit: 'pcs', department: 'Dairy' },
      { name: 'Chocolate Chips', amount: 0.5, unit: 'cup', department: 'Pantry' }
    ],
    instructions: [
      'Melt butter and stir in sugar and cocoa powder.',
      'Whisk in eggs and vanilla until shiny.',
      'Fold in flour and chocolate chips; pour into a lined baking square.',
      'Bake at 350°F (175°C) for 20-22 minutes. Do not overbake to keep center fudgy.'
    ]
  },
  {
    id: 'user-rec-44',
    title: 'Sweet Gulab Jamun',
    description: 'Popular Indian sweet consisting of fried milk solids (khoya) dumplings soaked in a sticky cardamom saffron sugar syrup.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568fa7098?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    category: 'Desserts',
    subcategory: 'Indian',
    tags: ['Indian', 'Vegetarian', 'Sweet', 'Dessert'],
    difficulty: 'Medium',
    calories: 320,
    rating: 4.9,
    macros: { protein: 5, carbs: 58, fat: 8 },
    ingredients: [
      { name: 'Milk Powder', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Ghee', amount: 2, unit: 'tbsp', department: 'Dairy' },
      { name: 'Sugar', amount: 1.5, unit: 'cups', department: 'Pantry' },
      { name: 'Cardamom Pods', amount: 3, unit: 'pcs', department: 'Pantry' },
      { name: 'Oil for frying', amount: 1.5, unit: 'cups', department: 'Pantry' }
    ],
    instructions: [
      'Boil sugar, water, and cardamom for 10 minutes to make a sticky syrup.',
      'Knead milk powder, a splash of milk, flour, and ghee into a smooth dough.',
      'Shape into small balls with no cracks. Fry in oil on very low heat until dark golden.',
      'Drain fried balls and soak in warm sugar syrup for at least 1 hour before serving.'
    ]
  },
  {
    id: 'user-rec-45',
    title: 'Crispy Sweet Baklava',
    description: 'Flaky layered phyllo pastry dessert stuffed with chopped nuts (pistachios/walnuts) and sweetened with honey syrup.',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 35,
    servings: 12,
    category: 'Desserts',
    subcategory: 'Turkish',
    tags: ['Vegetarian', 'Dessert', 'Sweet', 'Baking'],
    difficulty: 'Hard',
    calories: 360,
    rating: 4.8,
    macros: { protein: 5, carbs: 42, fat: 20 },
    ingredients: [
      { name: 'Phyllo Dough Sheets', amount: 1, unit: 'pack', department: 'Bakery' },
      { name: 'Walnuts & Pistachios (Chopped)', amount: 2, unit: 'cups', department: 'Produce' },
      { name: 'Butter (Melted)', amount: 1, unit: 'cup', department: 'Dairy' },
      { name: 'Honey', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Sugar', amount: 1, unit: 'cup', department: 'Pantry' }
    ],
    instructions: [
      'Layer phyllo sheets in a baking dish, brushing each layer with melted butter.',
      'Spread chopped nuts every 8-10 layers of phyllo.',
      'Cut into diamonds and bake at 350°F (175°C) for 35 minutes until golden brown.',
      'Pour boiled sugar and honey syrup over the hot baked baklava. Let cool completely.'
    ]
  },
  {
    id: 'user-rec-46',
    title: 'Japanese Strawberry Mochi',
    description: 'Soft and chewy sweet rice cake (daifuku) wrapping a fresh whole strawberry and sweet red bean paste.',
    image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 5,
    servings: 4,
    category: 'Desserts',
    subcategory: 'Japanese',
    tags: ['Vegetarian', 'Gluten-Free', 'Dessert', 'Sweet'],
    difficulty: 'Medium',
    calories: 180,
    rating: 4.8,
    macros: { protein: 3, carbs: 40, fat: 0 },
    ingredients: [
      { name: 'Glutinous Rice Flour (Shiratamako)', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Sweet Red Bean Paste (Anko)', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Fresh Strawberries', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Cornstarch (for dusting)', amount: 0.25, unit: 'cup', department: 'Pantry' }
    ],
    instructions: [
      'Wrap each strawberry in a thin layer of sweet red bean paste, leaving tip exposed.',
      'Whisk rice flour, sugar, and water, then microwave covered for 2 minutes. Stir and repeat.',
      'Dust surface with cornstarch, roll hot sticky dough out, and cut into 4 circles.',
      'Wrap dough circles around bean-wrapped strawberries, sealing tightly.'
    ]
  },
  {
    id: 'user-rec-47',
    title: 'Classic French Crème Brûlée',
    description: 'Rich custard base flavored with real vanilla beans, topped with a hard, caramelized sugar crust.',
    image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    category: 'Desserts',
    subcategory: 'French',
    tags: ['French', 'Vegetarian', 'Gluten-Free', 'Dessert'],
    difficulty: 'Medium',
    calories: 340,
    rating: 4.8,
    macros: { protein: 4, carbs: 24, fat: 26 },
    ingredients: [
      { name: 'Heavy Cream', amount: 2, unit: 'cups', department: 'Dairy' },
      { name: 'Egg Yolks', amount: 5, unit: 'pcs', department: 'Dairy' },
      { name: 'Sugar', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Vanilla Bean or Extract', amount: 1, unit: 'pcs', department: 'Pantry' }
    ],
    instructions: [
      'Heat heavy cream and vanilla bean until hot. Whisk egg yolks and sugar.',
      'Slowly temper hot cream into yolks. Strain and pour into ramekins.',
      'Bake in a water bath at 325°F (160°C) for 35-40 minutes until set but jiggly.',
      'Chill 4 hours. Sprinkle sugar on top and caramelize with a kitchen blowtorch.'
    ]
  },
  {
    id: 'user-rec-48',
    title: 'Cinnamon Sugar Churros',
    description: 'Deep-fried golden choux dough sticks rolled in aromatic cinnamon sugar, served with warm dark chocolate sauce.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    category: 'Desserts',
    subcategory: 'Spanish',
    tags: ['Vegetarian', 'Sweet', 'Dessert', 'Fried'],
    difficulty: 'Medium',
    calories: 310,
    rating: 4.7,
    macros: { protein: 4, carbs: 42, fat: 14 },
    ingredients: [
      { name: 'Flour', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Butter', amount: 4, unit: 'tbsp', department: 'Dairy' },
      { name: 'Sugar', amount: 0.25, unit: 'cup', department: 'Pantry' },
      { name: 'Ground Cinnamon', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Dark Chocolate Chips', amount: 0.5, unit: 'cup', department: 'Pantry' }
    ],
    instructions: [
      'Boil water, butter, and a pinch of sugar. Stir in flour until a dough ball forms.',
      'Cool slightly, transfer to a piping bag fitted with a star tip.',
      'Pipe strips into hot frying oil, cutting with scissors. Fry until golden-brown.',
      'Toss immediately in cinnamon sugar. Serve with melted chocolate dip.'
    ]
  },
  {
    id: 'user-rec-49',
    title: 'Traditional American Apple Pie',
    description: 'Flaky buttery double crust pie filled with sweet, cinnamon-spiced sliced Granny Smith apples.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    cookTime: 50,
    servings: 8,
    category: 'Desserts',
    subcategory: 'American',
    tags: ['Vegetarian', 'Dessert', 'Sweet', 'Baking'],
    difficulty: 'Hard',
    calories: 410,
    rating: 4.8,
    macros: { protein: 4, carbs: 58, fat: 18 },
    ingredients: [
      { name: 'Pie Crust Dough', amount: 2, unit: 'pcs', department: 'Bakery' },
      { name: 'Granny Smith Apples (Sliced)', amount: 6, unit: 'cups', department: 'Produce' },
      { name: 'Brown Sugar', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Cinnamon & Nutmeg', amount: 1.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Butter', amount: 2, unit: 'tbsp', department: 'Dairy' }
    ],
    instructions: [
      'Toss sliced apples with brown sugar, flour, cinnamon, and nutmeg.',
      'Roll out one pie crust into a pie dish. Fill with apple mixture and dot with butter.',
      'Cover with second rolled crust, crimp edges, and cut slits on top for steam.',
      'Bake at 425°F (220°C) for 20 minutes, then reduce to 375°F (190°C) for 30 minutes.'
    ]
  },
  {
    id: 'user-rec-50',
    title: 'Fresh Berry Pavlova',
    description: 'Crispy marshmallowy meringue cake topped with freshly whipped vanilla cream and a medley of fresh summer berries.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    prepTime: 20,
    cookTime: 75,
    servings: 6,
    category: 'Desserts',
    subcategory: 'Australian',
    tags: ['Vegetarian', 'Gluten-Free', 'Dessert', 'Sweet'],
    difficulty: 'Medium',
    calories: 240,
    rating: 4.7,
    macros: { protein: 4, carbs: 38, fat: 8 },
    ingredients: [
      { name: 'Egg Whites', amount: 4, unit: 'pcs', department: 'Dairy' },
      { name: 'Superfine Sugar', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Heavy Whipping Cream', amount: 1, unit: 'cup', department: 'Dairy' },
      { name: 'Fresh Strawberries & Raspberries', amount: 1.5, unit: 'cups', department: 'Produce' },
      { name: 'Cornstarch', amount: 1, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Whip egg whites until soft peaks; slowly add sugar until stiff and glossy. Fold in cornstarch.',
      'Shape meringue into a 8-inch disk on parchment, baking at 250°F (120°C) for 75 minutes.',
      'Turn off oven, let meringue cool completely inside with door ajar.',
      'Top with whipped cream and a generous spread of fresh berries.'
    ]
  }
];
