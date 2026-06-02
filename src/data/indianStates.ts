/**
 * All 28 Indian states + union territories with distinct regional cuisines.
 * Used as subcategories under "Indian Cuisine" for authentic state-wise browsing.
 */
export const INDIAN_STATE_CUISINES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  // Union territories (distinct food cultures)
  'Delhi (NCT)',
  'Jammu & Kashmir',
  'Ladakh',
  'Puducherry',
  'Chandigarh',
  'Andaman & Nicobar',
  'Dadra & Nagar Haveli and Daman & Diu',
  'Lakshadweep'
] as const;

export type IndianStateCuisine = (typeof INDIAN_STATE_CUISINES)[number];

/** Legacy subcategory labels → official state/UT name */
export const INDIAN_SUBCATEGORY_ALIASES: Record<string, IndianStateCuisine | string> = {
  Punjabi: 'Punjab',
  Tamil: 'Tamil Nadu',
  Rajasthani: 'Rajasthan',
  Bengali: 'West Bengal',
  'South Indian': 'Kerala',
  Chettinad: 'Tamil Nadu',
  Mughlai: 'Delhi (NCT)',
  Kashmiri: 'Jammu & Kashmir',
  Goan: 'Goa',
  Gujarati: 'Gujarat',
  Maharashtrian: 'Maharashtra',
  Hyderabadi: 'Telangana',
  Awadhi: 'Uttar Pradesh',
  Konkani: 'Goa'
};

export function normalizeIndianSubcategory(sub?: string): string | undefined {
  if (!sub) return undefined;
  return INDIAN_SUBCATEGORY_ALIASES[sub] ?? sub;
}
