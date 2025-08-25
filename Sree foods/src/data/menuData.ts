export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const menuCategories = [
  'Fried Rice',
  'Biryani Variants', 
  'Rice Bowls',
  'Quick Comfort Rice',
  'Indo-Chinese Rice'
];

export const menuItems: MenuItem[] = [
  // Fried Rice
  {
    id: 1,
    name: "Veg Fried Rice",
    category: "Fried Rice",
    price: 120,
    image: "/api/placeholder/300/200",
    description: "Aromatic basmati rice wok-tossed with fresh vegetables and soy sauce"
  },
  {
    id: 2,
    name: "Chicken Fried Rice", 
    category: "Fried Rice",
    price: 150,
    image: "/api/placeholder/300/200",
    description: "Tender chicken pieces with fragrant rice and mixed vegetables"
  },
  {
    id: 3,
    name: "Egg Fried Rice",
    category: "Fried Rice", 
    price: 130,
    image: "/api/placeholder/300/200",
    description: "Fluffy scrambled eggs mixed with perfectly seasoned fried rice"
  },
  {
    id: 4,
    name: "Schezwan Fried Rice",
    category: "Fried Rice",
    price: 160, 
    image: "/api/placeholder/300/200",
    description: "Spicy Schezwan sauce tossed with rice and colorful vegetables"
  },
  {
    id: 5,
    name: "Paneer Fried Rice",
    category: "Fried Rice",
    price: 150,
    image: "/api/placeholder/300/200", 
    description: "Soft paneer cubes with aromatic rice and fresh herbs"
  },

  // Biryani Variants
  {
    id: 6,
    name: "Chicken Biryani",
    category: "Biryani Variants",
    price: 180,
    image: "/api/placeholder/300/200",
    description: "Aromatic basmati rice layered with succulent chicken and spices"
  },
  {
    id: 7,
    name: "Mutton Biryani", 
    category: "Biryani Variants",
    price: 220,
    image: "/api/placeholder/300/200",
    description: "Tender mutton slow-cooked with fragrant spices and basmati rice"
  },
  {
    id: 8,
    name: "Veg Biryani",
    category: "Biryani Variants",
    price: 150,
    image: "/api/placeholder/300/200",
    description: "Fragrant rice with mixed vegetables, nuts and aromatic spices"
  },
  {
    id: 9,
    name: "Egg Biryani",
    category: "Biryani Variants", 
    price: 160,
    image: "/api/placeholder/300/200",
    description: "Boiled eggs layered with spiced rice and caramelized onions"
  },
  {
    id: 10,
    name: "Paneer Biryani",
    category: "Biryani Variants",
    price: 170,
    image: "/api/placeholder/300/200",
    description: "Soft paneer cubes with aromatic biryani rice and mint"
  },

  // Rice Bowls
  {
    id: 11,
    name: "Teriyaki Chicken Rice Bowl",
    category: "Rice Bowls", 
    price: 200,
    image: "/api/placeholder/300/200",
    description: "Glazed teriyaki chicken over steamed rice with vegetables"
  },
  {
    id: 12,
    name: "BBQ Chicken Rice Bowl",
    category: "Rice Bowls",
    price: 200, 
    image: "/api/placeholder/300/200",
    description: "Smoky BBQ chicken with rice, corn and fresh salad"
  },
  {
    id: 13,
    name: "Veggie Rice Bowl",
    category: "Rice Bowls",
    price: 150,
    image: "/api/placeholder/300/200",
    description: "Healthy mix of seasonal vegetables over steamed rice"
  },
  {
    id: 14,
    name: "Spicy Korean Rice Bowl",
    category: "Rice Bowls",
    price: 180,
    image: "/api/placeholder/300/200", 
    description: "Korean-style spicy rice bowl with kimchi and vegetables"
  },
  {
    id: 15,
    name: "Thai Basil Chicken Rice",
    category: "Rice Bowls",
    price: 190,
    image: "/api/placeholder/300/200",
    description: "Fragrant Thai basil chicken over jasmine rice"
  },

  // Quick Comfort Rice
  {
    id: 16,
    name: "Lemon Rice",
    category: "Quick Comfort Rice",
    price: 100,
    image: "/api/placeholder/300/200",
    description: "Tangy lemon rice with curry leaves and peanuts"
  },
  {
    id: 17,
    name: "Tomato Rice", 
    category: "Quick Comfort Rice",
    price: 100,
    image: "/api/placeholder/300/200",
    description: "Flavorful rice cooked with fresh tomatoes and spices"
  },
  {
    id: 18,
    name: "Curd Rice",
    category: "Quick Comfort Rice",
    price: 90,
    image: "/api/placeholder/300/200",
    description: "Comforting curd rice with curry leaves and mustard seeds"
  },
  {
    id: 19,
    name: "Tamarind Rice",
    category: "Quick Comfort Rice",
    price: 110, 
    image: "/api/placeholder/300/200",
    description: "Tangy tamarind rice with roasted peanuts and spices"
  },

  // Indo-Chinese Rice
  {
    id: 20,
    name: "Manchurian Rice (Veg)",
    category: "Indo-Chinese Rice",
    price: 150,
    image: "/api/placeholder/300/200",
    description: "Vegetable manchurian balls over fried rice"
  },
  {
    id: 21,
    name: "Manchurian Rice (Chicken)",
    category: "Indo-Chinese Rice", 
    price: 180,
    image: "/api/placeholder/300/200",
    description: "Chicken manchurian balls with spicy fried rice"
  },
  {
    id: 22,
    name: "Chili Garlic Rice",
    category: "Indo-Chinese Rice",
    price: 160,
    image: "/api/placeholder/300/200", 
    description: "Spicy rice with chili garlic sauce and vegetables"
  },
  {
    id: 23,
    name: "Hakka Rice", 
    category: "Indo-Chinese Rice",
    price: 140,
    image: "/api/placeholder/300/200",
    description: "Traditional Hakka-style fried rice with soy sauce"
  }
];