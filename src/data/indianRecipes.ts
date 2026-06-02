import type { Recipe } from '@/types';
import { INDIAN_STATE_CUISINES } from './indianStates';

const IMG =
  'https://images.unsplash.com/photo-1585937421612-70a008296fbe?auto=format&fit=crop&w=800&q=80';
const IMG_CURRY =
  'https://images.unsplash.com/photo-1603894584379-ff147475b63d?auto=format&fit=crop&w=800&q=80';
const IMG_RICE =
  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80';
const IMG_SNACK =
  'https://images.unsplash.com/photo-1601050690597-df0568fa7098?auto=format&fit=crop&w=800&q=80';
const IMG_FISH =
  'https://images.unsplash.com/photo-1626700051175-6818013e1f4a?auto=format&fit=crop&w=800&q=80';

type IndianRecipeSeed = Omit<Recipe, 'id' | 'category'> & { state: (typeof INDIAN_STATE_CUISINES)[number] };

const seeds: IndianRecipeSeed[] = [
  {
    state: 'Andhra Pradesh',
    title: 'Andhra Spicy Gongura Chicken',
    description: 'Tangy sorrel-leaf chicken curry with fiery Guntur chilies — classic coastal Andhra comfort food.',
    image: IMG_CURRY,
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Spicy', 'High-Protein'],
    difficulty: 'Medium',
    calories: 480,
    rating: 4.7,
    macros: { protein: 34, carbs: 18, fat: 28 },
    ingredients: [
      { name: 'Chicken', amount: 750, unit: 'g', department: 'Meat' },
      { name: 'Gongura Leaves', amount: 2, unit: 'cups', department: 'Produce' },
      { name: 'Guntur Chili Powder', amount: 1.5, unit: 'tbsp', department: 'Pantry' },
      { name: 'Onions', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Garlic', amount: 6, unit: 'cloves', department: 'Produce' },
      { name: 'Mustard Seeds', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Oil', amount: 3, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Sauté mustard seeds, onions, and garlic until golden.',
      'Add chicken, turmeric, salt, and chili; brown well.',
      'Stir in chopped gongura and cook until leaves wilt and oil separates.',
      'Simmer with a splash of water until chicken is tender. Serve with rice.'
    ]
  },
  {
    state: 'Arunachal Pradesh',
    title: 'Arunachali Smoked Pork with Bamboo Shoot',
    description: 'Traditional tribal-style smoked pork stir-fried with fermented bamboo and local herbs.',
    image: IMG,
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    tags: ['Indian', 'Authentic', 'High-Protein'],
    difficulty: 'Medium',
    calories: 520,
    rating: 4.5,
    ingredients: [
      { name: 'Smoked Pork', amount: 500, unit: 'g', department: 'Meat' },
      { name: 'Fermented Bamboo Shoot', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Bhut Jolokia (or bird eye chili)', amount: 3, unit: 'pcs', department: 'Produce' },
      { name: 'Ginger', amount: 1, unit: 'tbsp', department: 'Produce' },
      { name: 'Garlic', amount: 5, unit: 'cloves', department: 'Produce' },
      { name: 'Mustard Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Slice smoked pork thin. Rinse bamboo shoot to reduce sourness.',
      'Heat mustard oil until smoking lightly; fry chilies and aromatics.',
      'Add pork and bamboo shoot; stir-fry on high heat 25 minutes.',
      'Finish with fresh herbs. Serve with steamed rice.'
    ]
  },
  {
    state: 'Assam',
    title: 'Assamese Masor Tenga (Tangy Fish Curry)',
    description: 'Lightly spiced fish in a bright tomato-lemon gravy — Assam\'s everyday homestyle classic.',
    image: IMG_FISH,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Seafood', 'Gluten-Free'],
    difficulty: 'Easy',
    calories: 320,
    rating: 4.6,
    ingredients: [
      { name: 'Rohu or Catfish Fillets', amount: 600, unit: 'g', department: 'Seafood' },
      { name: 'Roma Tomatoes', amount: 3, unit: 'pcs', department: 'Produce' },
      { name: 'Lemon Juice', amount: 3, unit: 'tbsp', department: 'Produce' },
      { name: 'Mustard Oil', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Panch Phoron', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Turmeric', amount: 0.5, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Marinate fish with turmeric and salt.',
      'Fry panch phoron in mustard oil; add tomatoes and cook to a pulp.',
      'Add water, lemon juice, and slit green chilies; simmer.',
      'Gently add fish pieces and cook 8–10 minutes. Serve hot with rice.'
    ]
  },
  {
    state: 'Bihar',
    title: 'Bihari Litti Chokha',
    description: 'Whole-wheat litti stuffed with sattu, served with smoky roasted eggplant-tomato chokha.',
    image: IMG_SNACK,
    prepTime: 40,
    cookTime: 30,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian'],
    difficulty: 'Hard',
    calories: 420,
    rating: 4.8,
    ingredients: [
      { name: 'Whole Wheat Flour', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Sattu (Roasted Gram Flour)', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Eggplant', amount: 2, unit: 'large', department: 'Produce' },
      { name: 'Tomatoes', amount: 3, unit: 'pcs', department: 'Produce' },
      { name: 'Mustard Oil', amount: 4, unit: 'tbsp', department: 'Pantry' },
      { name: 'Pickle Spices', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Ghee', amount: 2, unit: 'tbsp', department: 'Dairy' }
    ],
    instructions: [
      'Mix sattu with mustard oil, spices, and herbs for filling.',
      'Form dough balls, stuff with sattu, and bake or roast littis until crisp.',
      'Char-roast eggplant and tomatoes; mash into chokha with mustard oil.',
      'Break open litti, pour ghee inside, and serve with chokha.'
    ]
  },
  {
    state: 'Chhattisgarh',
    title: 'Chhattisgarhi Fara (Steamed Rice Dumplings)',
    description: 'Soft steamed rice flour dumplings in tempered garlic-chili oil — a Chhattisgarh breakfast staple.',
    image: IMG_RICE,
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian', 'Gluten-Free'],
    difficulty: 'Medium',
    calories: 280,
    rating: 4.4,
    ingredients: [
      { name: 'Rice Flour', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Cumin Seeds', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Garlic', amount: 6, unit: 'cloves', department: 'Produce' },
      { name: 'Green Chilies', amount: 3, unit: 'pcs', department: 'Produce' },
      { name: 'Mustard Oil', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Coriander Leaves', amount: 0.25, unit: 'cups', department: 'Produce' }
    ],
    instructions: [
      'Knead rice flour with hot water and salt into a soft dough.',
      'Shape small dumplings and steam 15 minutes until glossy.',
      'Temper mustard oil with cumin, garlic, and chilies.',
      'Toss fara in tempering and garnish with coriander.'
    ]
  },
  {
    state: 'Goa',
    title: 'Goan Fish Curry (Xitti Kodi)',
    description: 'Coconut-tamarind fish curry with kokum — the soul of Goan Hindu home cooking.',
    image: IMG_FISH,
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Seafood', 'Gluten-Free'],
    difficulty: 'Medium',
    calories: 380,
    rating: 4.8,
    ingredients: [
      { name: 'Kingfish or Pomfret', amount: 600, unit: 'g', department: 'Seafood' },
      { name: 'Coconut Milk', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Tamarind Pulp', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Kokum', amount: 4, unit: 'pcs', department: 'Pantry' },
      { name: 'Red Chili Paste', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Coconut Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Grind coconut, chilies, and spices to a fine paste.',
      'Simmer paste with coconut milk, tamarind, and kokum.',
      'Slide in fish and cook gently without breaking.',
      'Serve with steamed rice and fried kormola (optional).'
    ]
  },
  {
    state: 'Gujarat',
    title: 'Gujarati Undhiyu',
    description: 'Winter mixed vegetable medley slow-cooked with methi muthiya — Gujarat\'s festive one-pot dish.',
    image: IMG,
    prepTime: 45,
    cookTime: 50,
    servings: 6,
    tags: ['Indian', 'Authentic', 'Vegetarian'],
    difficulty: 'Hard',
    calories: 340,
    rating: 4.7,
    ingredients: [
      { name: 'Purple Yam', amount: 200, unit: 'g', department: 'Produce' },
      { name: 'Baby Eggplant', amount: 6, unit: 'pcs', department: 'Produce' },
      { name: 'Green Beans', amount: 150, unit: 'g', department: 'Produce' },
      { name: 'Green Banana', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Methi Muthiya', amount: 12, unit: 'pcs', department: 'Pantry' },
      { name: 'Coconut-Coriander Masala', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Peanut Oil', amount: 4, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Stuff eggplants with masala. Shallow-fry root vegetables lightly.',
      'Layer vegetables in a heavy pot with muthiya and remaining masala.',
      'Cook covered on low heat 45 minutes, shaking pot occasionally.',
      'Finish with coconut and cilantro. Serve with puri or rotli.'
    ]
  },
  {
    state: 'Haryana',
    title: 'Haryanvi Bajra Khichdi with Kadhi',
    description: 'Pearl millet khichdi paired with yogurt-besan kadhi — hearty North Indian farm-style meal.',
    image: IMG_RICE,
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian'],
    difficulty: 'Easy',
    calories: 390,
    rating: 4.5,
    ingredients: [
      { name: 'Bajra (Pearl Millet)', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Moong Dal', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Yogurt', amount: 2, unit: 'cups', department: 'Dairy' },
      { name: 'Besan', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Fenugreek Seeds', amount: 0.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Ghee', amount: 2, unit: 'tbsp', department: 'Dairy' }
    ],
    instructions: [
      'Pressure-cook bajra and moong dal with water until soft.',
      'Whisk yogurt and besan; simmer kadhi with turmeric and spices.',
      'Temper kadhi with fenugreek and red chilies in ghee.',
      'Serve khichdi topped with ghee alongside kadhi.'
    ]
  },
  {
    state: 'Himachal Pradesh',
    title: 'Himachali Dham (Festive Thali)',
    description: 'Traditional temple-style feast with madra, rajma, and khatta — slow-cooked in mustard oil.',
    image: IMG,
    prepTime: 30,
    cookTime: 90,
    servings: 6,
    tags: ['Indian', 'Authentic', 'Vegetarian'],
    difficulty: 'Hard',
    calories: 450,
    rating: 4.6,
    ingredients: [
      { name: 'Chana Dal', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Kidney Beans', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Yogurt', amount: 1, unit: 'cup', department: 'Dairy' },
      { name: 'Mustard Oil', amount: 4, unit: 'tbsp', department: 'Pantry' },
      { name: 'Khoya', amount: 0.25, unit: 'cups', department: 'Dairy' },
      { name: 'Tamarind', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Cook dal and rajma separately until creamy.',
      'Prepare madra by simmering beans in yogurt-spice gravy with mustard oil.',
      'Make khatta (sweet-sour tamarind sauce).',
      'Arrange on leaf plates with rice and boor ki kari.'
    ]
  },
  {
    state: 'Jharkhand',
    title: 'Jharkhandi Dhuska with Ghugni',
    description: 'Fermented rice-lentil fritters served with spiced yellow pea curry — popular Jharkhand street food.',
    image: IMG_SNACK,
    prepTime: 30,
    cookTime: 25,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian'],
    difficulty: 'Medium',
    calories: 410,
    rating: 4.5,
    ingredients: [
      { name: 'Rice', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Urad Dal', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Dried Yellow Peas', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Onions', amount: 1, unit: 'large', department: 'Produce' },
      { name: 'Ginger-Garlic Paste', amount: 1, unit: 'tbsp', department: 'Produce' },
      { name: 'Oil for frying', amount: 2, unit: 'cups', department: 'Pantry' }
    ],
    instructions: [
      'Soak rice and dal; grind to a thick batter and ferment overnight.',
      'Cook yellow peas with onions and spices for ghugni.',
      'Drop spoonfuls of batter into hot oil; fry dhuska until puffed and golden.',
      'Serve hot dhuska topped with ghugni and chutney.'
    ]
  },
  {
    state: 'Karnataka',
    title: 'Karnataka Bisi Bele Bath',
    description: 'Hot lentil-rice melange with vegetables and aromatic masala — Bangalore\'s comfort bowl.',
    image: IMG_RICE,
    prepTime: 20,
    cookTime: 45,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian'],
    difficulty: 'Medium',
    calories: 430,
    rating: 4.8,
    ingredients: [
      { name: 'Rice', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Toor Dal', amount: 0.5, unit: 'cup', department: 'Pantry' },
      { name: 'Bisi Bele Powder', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Mixed Vegetables', amount: 2, unit: 'cups', department: 'Produce' },
      { name: 'Tamarind', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Ghee', amount: 2, unit: 'tbsp', department: 'Dairy' }
    ],
    instructions: [
      'Pressure-cook rice, dal, and vegetables together until mushy.',
      'Stir in bisi bele masala, tamarind, and water to desired consistency.',
      'Simmer 15 minutes. Temper with curry leaves and ghee.',
      'Serve piping hot with boondi and papad.'
    ]
  },
  {
    state: 'Kerala',
    title: 'Kerala Appam with Vegetable Stew',
    description: 'Lacy fermented rice pancakes with coconut milk vegetable ishtu — classic Syrian-Christian Kerala breakfast.',
    image: IMG_RICE,
    prepTime: 30,
    cookTime: 25,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian', 'Gluten-Free'],
    difficulty: 'Medium',
    calories: 360,
    rating: 4.9,
    ingredients: [
      { name: 'Rice Flour', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Coconut Milk', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Mixed Vegetables', amount: 3, unit: 'cups', department: 'Produce' },
      { name: 'Yeast', amount: 0.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Cardamom', amount: 4, unit: 'pods', department: 'Pantry' },
      { name: 'Coconut Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Ferment rice batter with coconut milk and yeast until bubbly.',
      'Swirl thin batter in appam pan; cook covered until lacy edges form.',
      'Simmer vegetables in coconut milk with ginger and pepper.',
      'Serve soft-centered appam with warm stew.'
    ]
  },
  {
    state: 'Madhya Pradesh',
    title: 'Indori Poha Jalebi Breakfast',
    description: 'Fluffy turmeric poha with sev and fennel — paired with crisp jalebi, Madhya Pradesh\'s iconic morning combo.',
    image: IMG_SNACK,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian', 'Breakfast'],
    difficulty: 'Easy',
    calories: 380,
    rating: 4.7,
    ingredients: [
      { name: 'Thick Poha', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Onions', amount: 1, unit: 'large', department: 'Produce' },
      { name: 'Mustard Seeds', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Turmeric', amount: 0.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Sev', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Fennel Seeds', amount: 1, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Rinse poha and drain. Temper oil with mustard and fennel.',
      'Sauté onions, turmeric, and green chilies; add poha and steam lightly.',
      'Finish with sev, coriander, and lemon juice.',
      'Serve immediately with hot jalebi on the side.'
    ]
  },
  {
    state: 'Maharashtra',
    title: 'Mumbai Vada Pav',
    description: 'Spiced potato fritter in a soft pav with garlic chutney — Maharashtra\'s beloved street burger.',
    image: IMG_SNACK,
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian', 'Street Food'],
    difficulty: 'Medium',
    calories: 440,
    rating: 4.9,
    ingredients: [
      { name: 'Potatoes (Boiled)', amount: 4, unit: 'large', department: 'Produce' },
      { name: 'Besan', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Pav Buns', amount: 8, unit: 'pcs', department: 'Bakery' },
      { name: 'Garlic Chutney', amount: 0.25, unit: 'cups', department: 'Pantry' },
      { name: 'Green Chutney', amount: 0.25, unit: 'cups', department: 'Pantry' },
      { name: 'Oil for frying', amount: 2, unit: 'cups', department: 'Pantry' }
    ],
    instructions: [
      'Mash potatoes with mustard seeds, curry leaves, and spices.',
      'Shape balls, coat in besan batter, and deep-fry until golden.',
      'Slit pav, spread chutneys, and tuck in hot vada.',
      'Serve with fried green chilies.'
    ]
  },
  {
    state: 'Manipur',
    title: 'Manipuri Eromba',
    description: 'Mashed vegetables and fish with fiery umorok chili — bold, fermented flavors from the Northeast.',
    image: IMG,
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Spicy'],
    difficulty: 'Medium',
    calories: 350,
    rating: 4.4,
    ingredients: [
      { name: 'Smoked or Fried Fish', amount: 300, unit: 'g', department: 'Seafood' },
      { name: 'Potatoes', amount: 3, unit: 'medium', department: 'Produce' },
      { name: 'Umorok (King Chili)', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Fermented Fish (Ngari)', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Spring Onions', amount: 4, unit: 'stalks', department: 'Produce' }
    ],
    instructions: [
      'Boil potatoes and mash coarsely.',
      'Flake fish and mix with mashed potato, ngari, and roasted chili paste.',
      'Adjust salt; do not overcook to preserve aroma.',
      'Garnish with spring onions. Serve with steamed rice.'
    ]
  },
  {
    state: 'Meghalaya',
    title: 'Khasi Jadoh (Red Rice with Pork)',
    description: 'Fragrant red rice cooked with pork blood and spices — Meghalaya\'s soul-warming tribal dish.',
    image: IMG,
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    tags: ['Indian', 'Authentic', 'High-Protein'],
    difficulty: 'Medium',
    calories: 510,
    rating: 4.5,
    ingredients: [
      { name: 'Red Rice', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Pork (with fat)', amount: 500, unit: 'g', department: 'Meat' },
      { name: 'Ginger-Garlic Paste', amount: 2, unit: 'tbsp', department: 'Produce' },
      { name: 'Black Pepper', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Bay Leaves', amount: 2, unit: 'pcs', department: 'Pantry' }
    ],
    instructions: [
      'Brown pork pieces with ginger-garlic and spices.',
      'Add washed red rice and stir to coat.',
      'Add water and cook covered until rice is tender.',
      'Rest 10 minutes before serving with pickled chutney.'
    ]
  },
  {
    state: 'Mizoram',
    title: 'Mizo Bai (Mixed Vegetable Stew)',
    description: 'Mild fermented vegetable stew with pork — Mizoram\'s everyday homestyle one-pot meal.',
    image: IMG,
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Gluten-Free'],
    difficulty: 'Easy',
    calories: 320,
    rating: 4.3,
    ingredients: [
      { name: 'Pork (cubed)', amount: 400, unit: 'g', department: 'Meat' },
      { name: 'Mixed Greens', amount: 3, unit: 'cups', department: 'Produce' },
      { name: 'Baking Soda (pinch)', amount: 0.25, unit: 'tsp', department: 'Pantry' },
      { name: 'Green Chilies', amount: 3, unit: 'pcs', department: 'Produce' },
      { name: 'Ginger', amount: 1, unit: 'inch', department: 'Produce' }
    ],
    instructions: [
      'Simmer pork with ginger, chilies, and salt until almost tender.',
      'Add chopped vegetables and a pinch of baking soda.',
      'Cook gently without stirring too much until greens soften.',
      'Serve with steamed rice.'
    ]
  },
  {
    state: 'Nagaland',
    title: 'Naga Smoked Pork with Axone',
    description: 'Smoky pork with fermented soybean (axone) and bamboo shoot — iconic Naga flavor profile.',
    image: IMG,
    prepTime: 15,
    cookTime: 45,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Spicy', 'High-Protein'],
    difficulty: 'Medium',
    calories: 540,
    rating: 4.6,
    ingredients: [
      { name: 'Smoked Pork', amount: 600, unit: 'g', department: 'Meat' },
      { name: 'Axone (Fermented Soybean)', amount: 3, unit: 'tbsp', department: 'Pantry' },
      { name: 'Bamboo Shoot', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Raja Mircha', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Garlic', amount: 6, unit: 'cloves', department: 'Produce' }
    ],
    instructions: [
      'Cut smoked pork into bite pieces. Rinse axone lightly.',
      'Cook pork with axone, bamboo shoot, and chilies in minimal water.',
      'Slow-cook until fat renders and flavors meld.',
      'Serve with plain rice and boiled greens.'
    ]
  },
  {
    state: 'Odisha',
    title: 'Odia Pakhala Bhata',
    description: 'Fermented rice soaked in water with yogurt and fried sides — Odisha\'s summer cooling meal.',
    image: IMG_RICE,
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian'],
    difficulty: 'Easy',
    calories: 290,
    rating: 4.5,
    ingredients: [
      { name: 'Cooked Rice (day old)', amount: 4, unit: 'cups', department: 'Pantry' },
      { name: 'Water', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Yogurt', amount: 0.5, unit: 'cups', department: 'Dairy' },
      { name: 'Mustard Oil', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Green Chilies', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Fried Badi', amount: 8, unit: 'pcs', department: 'Pantry' }
    ],
    instructions: [
      'Soak rice in water with a pinch of salt for 2–8 hours.',
      'Stir in yogurt and temper with mustard oil and chilies.',
      'Serve chilled or at room temperature.',
      'Accompany with fried badi, papad, and roasted vegetables.'
    ]
  },
  {
    state: 'Telangana',
    title: 'Hyderabadi Dum Biryani',
    description: 'Layered basmati rice and marinated mutton slow-cooked in dum — Telangana\'s royal centerpiece.',
    image: IMG_CURRY,
    prepTime: 40,
    cookTime: 90,
    servings: 6,
    tags: ['Indian', 'Authentic', 'High-Protein'],
    difficulty: 'Hard',
    calories: 560,
    rating: 4.9,
    macros: { protein: 28, carbs: 52, fat: 26 },
    ingredients: [
      { name: 'Basmati Rice', amount: 3, unit: 'cups', department: 'Pantry' },
      { name: 'Mutton or Chicken', amount: 1, unit: 'kg', department: 'Meat' },
      { name: 'Yogurt', amount: 1, unit: 'cup', department: 'Dairy' },
      { name: 'Fried Onions', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Biryani Masala', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Saffron Milk', amount: 0.25, unit: 'cups', department: 'Dairy' },
      { name: 'Ghee', amount: 4, unit: 'tbsp', department: 'Dairy' }
    ],
    instructions: [
      'Marinate meat in yogurt, masala, and half the fried onions overnight.',
      'Parboil rice with whole spices; drain.',
      'Layer rice and meat in a heavy pot; top with saffron and ghee.',
      'Seal and dum-cook 45 minutes. Serve with mirchi ka salan.'
    ]
  },
  {
    state: 'Sikkim',
    title: 'Sikkimese Chicken Momos',
    description: 'Steamed dumplings with juicy chicken filling and tomato chutney — Himalayan street favorite.',
    image: IMG_SNACK,
    prepTime: 45,
    cookTime: 15,
    servings: 4,
    tags: ['Indian', 'Authentic', 'High-Protein'],
    difficulty: 'Medium',
    calories: 380,
    rating: 4.8,
    ingredients: [
      { name: 'All-Purpose Flour', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Ground Chicken', amount: 400, unit: 'g', department: 'Meat' },
      { name: 'Ginger-Garlic', amount: 2, unit: 'tbsp', department: 'Produce' },
      { name: 'Soy Sauce', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Cabbage (finely chopped)', amount: 1, unit: 'cup', department: 'Produce' },
      { name: 'Tomatoes (for chutney)', amount: 3, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Make dough; rest 20 minutes. Mix filling ingredients.',
      'Shape wrappers and fill; pleat momos tightly.',
      'Steam 12–15 minutes until wrappers turn translucent.',
      'Serve with spicy tomato-sesame chutney.'
    ]
  },
  {
    state: 'Tripura',
    title: 'Tripuri Mui Borok Fish Stew',
    description: 'Bermuda variety fish stew with local herbs and bamboo shoot — Tripura\'s staple tribal recipe.',
    image: IMG_FISH,
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Seafood'],
    difficulty: 'Easy',
    calories: 310,
    rating: 4.4,
    ingredients: [
      { name: 'Freshwater Fish', amount: 600, unit: 'g', department: 'Seafood' },
      { name: 'Bamboo Shoot', amount: 0.5, unit: 'cups', department: 'Pantry' },
      { name: 'Green Chilies', amount: 4, unit: 'pcs', department: 'Produce' },
      { name: 'Turmeric', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Mustard Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Clean fish and marinate with turmeric and salt.',
      'Simmer bamboo shoot with chilies and water.',
      'Add fish gently and cook until just done.',
      'Finish with raw mustard oil drizzle and herbs.'
    ]
  },
  {
    state: 'Uttar Pradesh',
    title: 'Lucknowi Galouti Kebab',
    description: 'Silken minced lamb kebabs with awadhi spices — melt-in-the-mouth Nawabi classic from UP.',
    image: IMG_CURRY,
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    tags: ['Indian', 'Authentic', 'High-Protein'],
    difficulty: 'Medium',
    calories: 420,
    rating: 4.9,
    macros: { protein: 26, carbs: 8, fat: 32 },
    ingredients: [
      { name: 'Minced Lamb', amount: 500, unit: 'g', department: 'Meat' },
      { name: 'Raw Papaya Paste', amount: 2, unit: 'tbsp', department: 'Produce' },
      { name: 'Awadhi Kebab Masala', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Ghee', amount: 3, unit: 'tbsp', department: 'Dairy' },
      { name: 'Rose Water', amount: 1, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Knead mince with papaya paste and spices until sticky.',
      'Rest mixture 4 hours for tenderizing.',
      'Shape flat patties and cook on a griddle with ghee.',
      'Serve on ulte tawe ka paratha with onion rings.'
    ]
  },
  {
    state: 'Uttarakhand',
    title: 'Garhwali Kafuli (Spinach Curry)',
    description: 'Thick spinach and fenugreek curry with rice flour — nutritious Pahadi winter staple.',
    image: IMG,
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian', 'Healthy'],
    difficulty: 'Easy',
    calories: 260,
    rating: 4.5,
    ingredients: [
      { name: 'Spinach', amount: 4, unit: 'cups', department: 'Produce' },
      { name: 'Fenugreek Leaves', amount: 1, unit: 'cup', department: 'Produce' },
      { name: 'Rice Flour', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Garlic', amount: 4, unit: 'cloves', department: 'Produce' },
      { name: 'Cumin', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Mustard Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Blanch and puree greens with green chilies.',
      'Cook puree with garlic, cumin, and spices.',
      'Stir in rice flour slurry to thicken.',
      'Serve with mandua roti or steamed rice.'
    ]
  },
  {
    state: 'West Bengal',
    title: 'Bengali Kosha Mangsho',
    description: 'Slow-braised mutton in rich onion-spice gravy — Kolkata\'s festive Sunday obsession.',
    image: IMG_CURRY,
    prepTime: 25,
    cookTime: 90,
    servings: 6,
    tags: ['Indian', 'Authentic', 'High-Protein'],
    difficulty: 'Hard',
    calories: 520,
    rating: 4.9,
    macros: { protein: 30, carbs: 14, fat: 38 },
    ingredients: [
      { name: 'Mutton', amount: 1, unit: 'kg', department: 'Meat' },
      { name: 'Onions (sliced)', amount: 4, unit: 'large', department: 'Produce' },
      { name: 'Ginger-Garlic Paste', amount: 3, unit: 'tbsp', department: 'Produce' },
      { name: 'Bengali Garam Masala', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Yogurt', amount: 0.5, unit: 'cups', department: 'Dairy' },
      { name: 'Mustard Oil', amount: 4, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Brown onions in mustard oil until deep mahogany.',
      'Add mutton and bhuno (stir-fry) on high heat 20 minutes.',
      'Add yogurt, spices, and water; slow-cook until tender.',
      'Serve with luchi or steamed rice.'
    ]
  },
  {
    state: 'Delhi (NCT)',
    title: 'Delhi Chole Bhature',
    description: 'Spiced chickpea curry with fluffy fried bhatura — Old Delhi\'s legendary brunch.',
    image: IMG_SNACK,
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian', 'Street Food'],
    difficulty: 'Medium',
    calories: 520,
    rating: 4.8,
    ingredients: [
      { name: 'Chickpeas (soaked)', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Tea Bags (for color)', amount: 2, unit: 'pcs', department: 'Pantry' },
      { name: 'Chole Masala', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Maida', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Yogurt', amount: 0.25, unit: 'cups', department: 'Dairy' },
      { name: 'Oil for frying', amount: 2, unit: 'cups', department: 'Pantry' }
    ],
    instructions: [
      'Pressure-cook chickpeas with tea and chole masala until soft.',
      'Make bhatura dough with maida and yogurt; rest and roll.',
      'Deep-fry bhatura until puffed and golden.',
      'Serve chole with onion, pickle, and fried chilies.'
    ]
  },
  {
    state: 'Jammu & Kashmir',
    title: 'Kashmiri Rogan Josh',
    description: 'Aromatic lamb in red chili-fennel gravy — the crown jewel of Wazwan cuisine.',
    image: IMG_CURRY,
    prepTime: 30,
    cookTime: 90,
    servings: 6,
    tags: ['Indian', 'Authentic', 'High-Protein'],
    difficulty: 'Hard',
    calories: 490,
    rating: 4.9,
    macros: { protein: 32, carbs: 10, fat: 36 },
    ingredients: [
      { name: 'Lamb', amount: 1, unit: 'kg', department: 'Meat' },
      { name: 'Kashmiri Red Chili', amount: 2, unit: 'tbsp', department: 'Pantry' },
      { name: 'Fennel Powder', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Ginger Powder', amount: 1, unit: 'tsp', department: 'Pantry' },
      { name: 'Yogurt (whisked)', amount: 1, unit: 'cup', department: 'Dairy' },
      { name: 'Ghee', amount: 4, unit: 'tbsp', department: 'Dairy' }
    ],
    instructions: [
      'Brown lamb in ghee with whole spices.',
      'Add chili-fennel paste and bhuno until oil separates.',
      'Stir in yogurt slowly; add water and simmer until tender.',
      'Finish with garam masala. Serve with saffron rice.'
    ]
  },
  {
    state: 'Ladakh',
    title: 'Ladakhi Sku (Wheat Noodle Stew)',
    description: 'Hearty thumb-sized wheat noodles in root vegetable broth — warming high-altitude comfort food.',
    image: IMG,
    prepTime: 25,
    cookTime: 40,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian'],
    difficulty: 'Medium',
    calories: 370,
    rating: 4.4,
    ingredients: [
      { name: 'Wheat Flour', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Turnip', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Carrots', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Spinach', amount: 2, unit: 'cups', department: 'Produce' },
      { name: 'Aromatic Stock', amount: 4, unit: 'cups', department: 'Pantry' }
    ],
    instructions: [
      'Knead firm dough; roll and tear thumb-sized noodle pieces.',
      'Simmer root vegetables in stock until almost tender.',
      'Add noodles and greens; cook until noodles are chewy-soft.',
      'Season with local herbs. Serve steaming hot.'
    ]
  },
  {
    state: 'Puducherry',
    title: 'Pondicherry Creole Fish Curry',
    description: 'French-Tamil fusion fish curry with coconut and mild spices — Puducherry\'s coastal heritage on a plate.',
    image: IMG_FISH,
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Seafood'],
    difficulty: 'Easy',
    calories: 340,
    rating: 4.6,
    ingredients: [
      { name: 'Fish Fillets', amount: 600, unit: 'g', department: 'Seafood' },
      { name: 'Coconut Milk', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Shallots', amount: 6, unit: 'pcs', department: 'Produce' },
      { name: 'Tomatoes', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Mild Curry Powder', amount: 1, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Sauté shallots and tomatoes until jammy.',
      'Add curry powder and coconut milk; simmer gently.',
      'Poach fish 8–10 minutes. Do not boil vigorously.',
      'Serve with French bread or steamed rice.'
    ]
  },
  {
    state: 'Chandigarh',
    title: 'Chandigarh Amritsari Kulcha',
    description: 'Stuffed leavened bread from tandoor with chole — Punjab-heartland classic loved in Chandigarh.',
    image: IMG_SNACK,
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Vegetarian'],
    difficulty: 'Medium',
    calories: 460,
    rating: 4.7,
    ingredients: [
      { name: 'Maida', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Potato Filling', amount: 2, unit: 'cups', department: 'Produce' },
      { name: 'Chole', amount: 2, unit: 'cups', department: 'Pantry' },
      { name: 'Butter', amount: 4, unit: 'tbsp', department: 'Dairy' },
      { name: 'Ajwain', amount: 1, unit: 'tsp', department: 'Pantry' }
    ],
    instructions: [
      'Prepare spiced potato filling with coriander and chilies.',
      'Stuff kulcha dough balls and roll thick.',
      'Bake in tandoor or oven at highest heat until blistered.',
      'Brush with butter and serve with chole and pickle.'
    ]
  },
  {
    state: 'Andaman & Nicobar',
    title: 'Andaman Coconut Fish Curry',
    description: 'Island-style fresh catch simmered in coconut, curry leaves, and tropical lime.',
    image: IMG_FISH,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Seafood', 'Gluten-Free'],
    difficulty: 'Easy',
    calories: 330,
    rating: 4.5,
    ingredients: [
      { name: 'Reef Fish', amount: 600, unit: 'g', department: 'Seafood' },
      { name: 'Coconut Milk', amount: 1, unit: 'can', department: 'Pantry' },
      { name: 'Curry Leaves', amount: 12, unit: 'pcs', department: 'Produce' },
      { name: 'Lime Juice', amount: 2, unit: 'tbsp', department: 'Produce' },
      { name: 'Green Chili', amount: 2, unit: 'pcs', department: 'Produce' }
    ],
    instructions: [
      'Marinate fish with turmeric and salt.',
      'Simmer coconut milk with curry leaves and chilies.',
      'Add fish and cook gently until opaque.',
      'Finish with lime juice. Serve with island rice.'
    ]
  },
  {
    state: 'Dadra & Nagar Haveli and Daman & Diu',
    title: 'Daman Portuguese-Style Fish Recheado',
    description: 'Goan-Portuguese stuffed fish with tangy recheado masala — coastal UT fusion specialty.',
    image: IMG_FISH,
    prepTime: 25,
    cookTime: 30,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Seafood'],
    difficulty: 'Medium',
    calories: 360,
    rating: 4.5,
    ingredients: [
      { name: 'Whole Pomfret (slit)', amount: 2, unit: 'pcs', department: 'Seafood' },
      { name: 'Recheado Paste', amount: 4, unit: 'tbsp', department: 'Pantry' },
      { name: 'Vinegar', amount: 1, unit: 'tbsp', department: 'Pantry' },
      { name: 'Onions (sliced)', amount: 2, unit: 'pcs', department: 'Produce' },
      { name: 'Oil', amount: 3, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Stuff fish slits generously with recheado paste.',
      'Pan-fry fish until crisp outside and cooked within.',
      'Sauté onions in same pan with remaining paste.',
      'Serve with vinegar-onion salad and bread.'
    ]
  },
  {
    state: 'Lakshadweep',
    title: 'Lakshadweep Tuna Coconut Curry',
    description: 'Fresh tuna cubes in spiced coconut gravy with the islands\' signature chili warmth.',
    image: IMG_FISH,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    tags: ['Indian', 'Authentic', 'Seafood', 'High-Protein'],
    difficulty: 'Easy',
    calories: 350,
    rating: 4.5,
    macros: { protein: 32, carbs: 8, fat: 20 },
    ingredients: [
      { name: 'Fresh Tuna', amount: 600, unit: 'g', department: 'Seafood' },
      { name: 'Coconut (grated)', amount: 1, unit: 'cup', department: 'Pantry' },
      { name: 'Turmeric', amount: 0.5, unit: 'tsp', department: 'Pantry' },
      { name: 'Green Chilies', amount: 3, unit: 'pcs', department: 'Produce' },
      { name: 'Coconut Oil', amount: 2, unit: 'tbsp', department: 'Pantry' }
    ],
    instructions: [
      'Extract coconut milk from grated coconut (or use canned).',
      'Sauté tuna briefly with turmeric in coconut oil.',
      'Add coconut milk and chilies; simmer 10 minutes.',
      'Serve with rice or kattan chammandi.'
    ]
  }
];

/** States already covered in main recipes.ts */
const EXISTING_STATES = new Set(['Punjab', 'Tamil Nadu', 'Rajasthan']);

export const indianStateRecipes: Recipe[] = seeds
  .filter((s) => !EXISTING_STATES.has(s.state))
  .map((seed, index) => {
    const { state, ...rest } = seed;
    return {
      ...rest,
      id: `rec-in-${state.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 24)}-${index}`,
      category: 'Indian Cuisine',
      subcategory: state
    };
  });
