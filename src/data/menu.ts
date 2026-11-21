export type MenuCategory =
  | "Starters"
  | "Fish"
  | "Crab & Lobster"
  | "Prawns"
  | "Thalis"
  | "Curries & Rice"
  | "Veg"
  | "Breads"
  | "Drinks & Desserts";

export type IconName = "crab" | "fish" | "prawn" | "thali" | "leaf" | "glass";

export interface MenuItem {
  category: MenuCategory;
  name: string;
  desc: string;
  price: string;
  veg: boolean;
}

export const CATEGORIES: MenuCategory[] = [
  "Starters",
  "Fish",
  "Crab & Lobster",
  "Prawns",
  "Thalis",
  "Curries & Rice",
  "Veg",
  "Breads",
  "Drinks & Desserts",
];

export const CATEGORY_ICONS: Record<MenuCategory, IconName> = {
  Starters: "fish",
  Fish: "fish",
  "Crab & Lobster": "crab",
  Prawns: "prawn",
  Thalis: "thali",
  "Curries & Rice": "thali",
  Veg: "leaf",
  Breads: "leaf",
  "Drinks & Desserts": "glass",
};

export const MENU_ITEMS: MenuItem[] = [
  { category: "Starters", name: "Bombil Fry", desc: "Crisp Bombay duck with coastal spice.", price: "₹___", veg: false },
  { category: "Starters", name: "Kolambi Koliwada", desc: "Crispy prawns, Koliwada-style.", price: "₹___", veg: false },
  { category: "Starters", name: "Surmai Tikka", desc: "Charred kingfish bites.", price: "₹___", veg: false },
  { category: "Starters", name: "Chicken Sukka", desc: "Dry-roasted Malvani chicken.", price: "₹___", veg: false },
  { category: "Fish", name: "Surmai Fry", desc: "Firm steaks, lightly fried.", price: "₹___", veg: false },
  { category: "Fish", name: "Pomfret Tawa Fry", desc: "Whole pomfret on the tawa.", price: "MP", veg: false },
  { category: "Fish", name: "Rawas Fry", desc: "Indian salmon, crisp edges.", price: "₹___", veg: false },
  { category: "Fish", name: "Bangda Fry", desc: "Mackerel with Malvani masala.", price: "₹___", veg: false },
  { category: "Crab & Lobster", name: "Crab Masala", desc: "Sweet crab in house masala.", price: "MP", veg: false },
  { category: "Crab & Lobster", name: "Butter Garlic Crab", desc: "Garlic-butter coastal classic.", price: "MP", veg: false },
  { category: "Crab & Lobster", name: "Lobster Masala", desc: "Lobster in rich Malvani gravy.", price: "MP", veg: false },
  { category: "Prawns", name: "Prawns Gassi", desc: "Coconut-rich prawn curry.", price: "₹___", veg: false },
  { category: "Prawns", name: "Prawns Koliwada", desc: "Spicy battered prawns.", price: "₹___", veg: false },
  { category: "Prawns", name: "Prawns Butter Pepper Garlic", desc: "Peppery garlic prawns.", price: "₹___", veg: false },
  { category: "Thalis", name: "Malvani Fish Thali", desc: "Fry, curry, rice & sol kadhi.", price: "₹___", veg: false },
  { category: "Thalis", name: "Prawn Thali", desc: "Coastal prawn plate with sides.", price: "₹___", veg: false },
  { category: "Thalis", name: "Veg Malvani Thali", desc: "Seasonal veg with rice & kadhi.", price: "₹___", veg: true },
  { category: "Curries & Rice", name: "Fish Curry", desc: "Everyday Malvani fish curry.", price: "₹___", veg: false },
  { category: "Curries & Rice", name: "Chicken Gassi", desc: "Coconut chicken curry.", price: "₹___", veg: false },
  { category: "Curries & Rice", name: "Neer Dosa", desc: "Soft rice crepes.", price: "₹___", veg: true },
  { category: "Curries & Rice", name: "Steamed Rice", desc: "Plain steamed rice.", price: "₹___", veg: true },
  { category: "Veg", name: "Suran Fry", desc: "Crisp yam fries.", price: "₹___", veg: true },
  { category: "Veg", name: "Kaju Sukka", desc: "Dry cashew masala.", price: "₹___", veg: true },
  { category: "Veg", name: "Tendli Bhaji", desc: "Ivy gourd with coconut.", price: "₹___", veg: true },
  { category: "Breads", name: "Chapati", desc: "Soft whole-wheat roti.", price: "₹___", veg: true },
  { category: "Breads", name: "Bhakri", desc: "Traditional rice bhakri.", price: "₹___", veg: true },
  { category: "Breads", name: "Puri", desc: "Puffed fried bread.", price: "₹___", veg: true },
  { category: "Drinks & Desserts", name: "Sol Kadhi", desc: "Kokum & coconut cooler.", price: "₹___", veg: true },
  { category: "Drinks & Desserts", name: "Fresh Lime Soda", desc: "Sweet, salt or mixed.", price: "₹___", veg: true },
  { category: "Drinks & Desserts", name: "Gulab Jamun", desc: "Warm syrupy dumplings.", price: "₹___", veg: true },
];
