import tomatoes from '../images/tomato2.jpg';
import carrots from '../images/carrot3.jpg';
import strawberries from '../images/strawberry3.jpg';
import apple from '../images/apple 3.jpg';
import avocado from '../images/avocado2.jpg';
import basilLeaf from '../images/basil leaf 1.jpg';
import bellPepper from '../images/bellepepper1.jpg';
import broccoli from '../images/broccoli2.jpg';
import corn from '../images/corn1.jpg';
import cucumber from '../images/cuccumber1.jpg';
import lettuce from '../images/lettuce.jpg';
import ohaLeaves from '../images/ohaLeaves.jpg';
import yam from '../images/yam.jpg';
import stockFish from '../images/stockFish.jpg';
import goatMeat from '../images/goatMeat.jpg';
import pumpkinSeed from '../images/pumpkinSeed.jpg';
import beans from '../images/beans.jpg';
import frozenFish from '../images/frozenFish.jpg';
import chicken from '../images/chicken.jpg';
import crayfish from '../images/crayfish.jpg';
import uguLeaf from '../images/uguLeaf.jpg';
import bitterLeaf from '../images/bitterLeaf.jpg';

export const produceData = [
  {
    id: 1,
    name: "Organic Tomatoes",
    category: "Vegetables/Herbs",
    image: tomatoes,
    seasonBadge: "In Season Now",
    briefDescription: "Rich in antioxidants and harvested daily from local organic farms.",
    fullDescription: "Organic tomatoes are hand-picked at peak maturity to ensure maximum sweetness and nutritional value.",
    peakSeasonRange: "May - October",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "22 kcal" },
      { label: "Vitamin C", value: "28% DV" },
      { label: "Potassium", value: "292 mg" }
    ],
    linkedMarkets: [
      { id: "m5", name: "Gwarinpa Produce Market", url: "/markets/m5" },
      { id: "m12", name: "Wuye District Market", url: "/markets/m12" }
    ]
  },
  {
    id: 2,
    name: "Crisp Carrots",
    category: "Vegetables/Herbs",
    image: carrots,
    seasonBadge: "In Season Now",
    briefDescription: "Sweet, crunchy root vegetables packed with Beta-Carotene.",
    fullDescription: "Freshly pulled from local soil, these carrots offer unmatched crispness for raw snacks or roasting.",
    peakSeasonRange: "August - December",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "41 kcal" },
      { label: "Vitamin A", value: "119% DV" }
    ],
    linkedMarkets: [
      { id: "m1", name: "Wuse Major Market", url: "/markets/m1" },
      { id: "m16", name: "Dutse Alhaji Market", url: "/markets/m16" }
    ]
  },
  {
    id: 3,
    name: "Wild Strawberries",
    category: "Fruits",
    image: strawberries,
    seasonBadge: "Out of Season",
    briefDescription: "Fragrant and naturally sweet local berries.",
    fullDescription: "Grown in limited seasonal patches during summer months.",
    peakSeasonRange: "May - August",
    inStock: false,
    nutritionalFacts: [
      { label: "Calories", value: "32 kcal" },
      { label: "Fiber", value: "2 g" }
    ],
    linkedMarkets: [
      { id: "m3", name: "Maitama Fresh Market", url: "/markets/m3" }
    ]
  },
  {
    id: 4,
    name: "Crisp Apples",
    category: "Fruits",
    image: apple,
    seasonBadge: "In Season Now",
    briefDescription: "Juicy, crisp apples fresh from regional orchards.",
    fullDescription: "Perfect balance of sweet and tart flavors, harvested at peak crispness for snacking or baking.",
    peakSeasonRange: "September - November",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "95 kcal" },
      { label: "Fiber", value: "4.4 g" },
      { label: "Vitamin C", value: "14% DV" }
    ],
    linkedMarkets: [
      { id: "m14", name: "Life Camp Fresh Stop", url: "/markets/m14" },
      { id: "m8", name: "Kubwa Family Market", url: "/markets/m8" }
    ]
  },
  {
    id: 5,
    name: "Creamy Avocado",
    category: "Fruits",
    image: avocado,
    seasonBadge: "In Season Now",
    briefDescription: "Rich and buttery avocados packed with healthy fats.",
    fullDescription: "Smooth texture and mild flavor make these ideal for salads, spreads, and toast toppings.",
    peakSeasonRange: "February - September",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "160 kcal" },
      { label: "Healthy Fats", value: "15 g" },
      { label: "Potassium", value: "485 mg" }
    ],
    linkedMarkets: [
      { id: "m4", name: "Asokoro Farmers Market", url: "/markets/m4" }
    ]
  },
  {
    id: 6,
    name: "Fresh Basil Leaf",
    category: "Herbs",
    image: basilLeaf,
    seasonBadge: "In Season Now",
    briefDescription: "Aromatic basil leaves picked fresh for maximum aroma.",
    fullDescription: "Essential herb with vibrant flavor, perfect for pestos, sauces, and garnishing fresh dishes.",
    peakSeasonRange: "June - September",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "1 kcal" },
      { label: "Vitamin K", value: "27% DV" }
    ],
    linkedMarkets: [
      { id: "m13", name: "Jahi Organic Market", url: "/markets/m13" },
      { id: "m11", name: "Utako Weekend Market", url: "/markets/m11" }
    ]
  },
  {
    id: 7,
    name: "Sweet Bell Pepper",
    category: "Vegetables/Herbs",
    image: bellPepper,
    seasonBadge: "In Season Now",
    briefDescription: "Vibrant and crunchy bell peppers rich in vitamins.",
    fullDescription: "Naturally sweet flavor profile, fantastic for slicing into salads, stir-fries, or roasting whole.",
    peakSeasonRange: "July - October",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "31 kcal" },
      { label: "Vitamin C", value: "169% DV" },
      { label: "Vitamin B6", value: "17% DV" }
    ],
    linkedMarkets: [
      { id: "m2", name: "Garki Green Market", url: "/markets/m2" },
      { id: "m17", name: "Apo Legislative Market", url: "/markets/m17" }
    ]
  },
  {
    id: 8,
    name: "Fresh Broccoli",
    category: "Vegetables/Herbs",
    image: broccoli,
    seasonBadge: "Out of Season",
    briefDescription: "Nutrient-dense green florets full of essential fiber.",
    fullDescription: "Farm-fresh broccoli florets offering crispness and mild flavor, great steamed or roasted.",
    peakSeasonRange: "October - April",
    inStock: false,
    nutritionalFacts: [
      { label: "Calories", value: "55 kcal" },
      { label: "Fiber", value: "5 g" },
      { label: "Vitamin C", value: "135% DV" }
    ],
    linkedMarkets: [
      { id: "m15", name: "Katampe Hilltop Market", url: "/markets/m15" }
    ]
  },
  {
    id: 9,
    name: "Sweet Corn",
    category: "Vegetables/Herbs",
    image: corn,
    seasonBadge: "In Season Now",
    briefDescription: "Tender, sweet golden corn cobs harvested locally.",
    fullDescription: "Bursting with natural sweetness, ideal for summer grilling, boiling, or adding to fresh salsas.",
    peakSeasonRange: "May - September",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "96 kcal" },
      { label: "Fiber", value: "2.4 g" },
      { label: "Magnesium", value: "37 mg" }
    ],
    linkedMarkets: [
      { id: "m7", name: "Lugbe Community Market", url: "/markets/m7" },
      { id: "m10", name: "Karu Roadside Market", url: "/markets/m10" }
    ]
  },
  {
    id: 10,
    name: "Cucumber",
    category: "Vegetables/Herbs",
    image: cucumber,
    seasonBadge: "In Season Now",
    briefDescription: "Refreshing, crisp cucumbers with high water content.",
    fullDescription: "Hydrating and mild, these cucumbers provide a crisp crunch for fresh salads and side dishes.",
    peakSeasonRange: "May - August",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "16 kcal" },
      { label: "Water Content", value: "95%" },
      { label: "Vitamin K", value: "19% DV" }
    ],
    linkedMarkets: [
      { id: "m6", name: "Jabi Lakeside Market", url: "/markets/m6" },
      { id: "m9", name: "Nyanya Harvest Market", url: "/markets/m9" }
    ]
  },
  {
    id: 11,
    name: "Crisp Lettuce",
    category: "Vegetables/Herbs",
    image: lettuce,
    seasonBadge: "In Season Now",
    briefDescription: "Fresh, crisp leafy green perfect for salads and wraps.",
    fullDescription: "Hydrating and crunchy, harvested daily to ensure maximum freshness for salads and light meals.",
    peakSeasonRange: "All Year",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "15 kcal" },
      { label: "Vitamin K", value: "102% DV" },
      { label: "Water Content", value: "95%" }
    ],
    linkedMarkets: [
      { id: "m3", name: "Maitama Fresh Market", url: "/markets/m3" },
      { id: "m13", name: "Jahi Organic Market", url: "/markets/m13" }
    ]
  },
  {
    id: 12,
    name: "Fresh Oha Leaves",
    category: "Herbs/Leaves",
    image: ohaLeaves,
    seasonBadge: "In Season Now",
    briefDescription: "Traditional aromatic leaves essential for authentic Oha soup.",
    fullDescription: "Tender and flavorful green leaves carefully picked for preparing traditional soups.",
    peakSeasonRange: "All Year",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "30 kcal" },
      { label: "Fiber", value: "3 g" },
      { label: "Iron", value: "15% DV" }
    ],
    linkedMarkets: [
      { id: "m1", name: "Wuse Major Market", url: "/markets/m1" },
      { id: "m2", name: "Garki Green Market", url: "/markets/m2" }
    ]
  },
  {
    id: 13,
    name: "Fresh Yam Tuber",
    category: "Tubers",
    image: yam,
    seasonBadge: "In Season Now",
    briefDescription: "Nutrient-rich staple crop ideal for boiling, mashing, or frying.",
    fullDescription: "High-quality yam tubers sourced from top agricultural regions, perfect for pounding or boiling.",
    peakSeasonRange: "August - December",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "118 kcal" },
      { label: "Carbohydrates", value: "27 g" },
      { label: "Potassium", value: "816 mg" }
    ],
    linkedMarkets: [
      { id: "m9", name: "Nyanya Harvest Market", url: "/markets/m9" },
      { id: "m16", name: "Dutse Alhaji Market", url: "/markets/m16" }
    ]
  },
  {
    id: 14,
    name: "Stock Fish",
    category: "Meat & Seafood",
    image: stockFish,
    seasonBadge: "Available Year-Round",
    briefDescription: "Naturally dried fish offering deep, rich umami flavor.",
    fullDescription: "Premium air-dried stockfish, perfect for enhancing the richness of soups and stews.",
    peakSeasonRange: "All Year",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "290 kcal" },
      { label: "Protein", value: "62 g" },
      { label: "Sodium", value: "150 mg" }
    ],
    linkedMarkets: [
      { id: "m1", name: "Wuse Major Market", url: "/markets/m1" },
      { id: "m17", name: "Apo Legislative Market", url: "/markets/m17" }
    ]
  },
  {
    id: 15,
    name: "Fresh Goat Meat",
    category: "Meat & Seafood",
    image: goatMeat,
    seasonBadge: "Available Year-Round",
    briefDescription: "Lean and flavorful meat, popular for soups, pepper soup, and suya.",
    fullDescription: "Freshly dressed, high-quality goat meat cut to order for stews, soups, and specialized dishes.",
    peakSeasonRange: "All Year",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "143 kcal" },
      { label: "Protein", value: "27 g" },
      { label: "Iron", value: "18% DV" }
    ],
    linkedMarkets: [
      { id: "m2", name: "Garki Green Market", url: "/markets/m2" },
      { id: "m8", name: "Kubwa Family Market", url: "/markets/m8" }
    ]
  },
  {
    id: 16,
    name: "Pumpkin Seeds (Egusi)",
    category: "Grains & Seeds",
    image: pumpkinSeed,
    seasonBadge: "In Season Now",
    briefDescription: "Nutritious seeds used for making traditional Egusi soup.",
    fullDescription: "Cleaned and shelled seeds packed with healthy fats, ideal for traditional soups and pestos.",
    peakSeasonRange: "July - November",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "559 kcal" },
      { label: "Protein", value: "30 g" },
      { label: "Healthy Fats", value: "49 g" }
    ],
    linkedMarkets: [
      { id: "m10", name: "Karu Roadside Market", url: "/markets/m10" },
      { id: "m11", name: "Utako Weekend Market", url: "/markets/m11" }
    ]
  },
  {
    id: 17,
    name: "Honey Beans",
    category: "Grains & Seeds",
    image: beans,
    seasonBadge: "In Season Now",
    briefDescription: "Protein-packed beans with a naturally sweet taste.",
    fullDescription: "Cleaned, high-yield beans perfect for boiling, making bean cakes (Akara), or Moi-Moi.",
    peakSeasonRange: "All Year",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "347 kcal" },
      { label: "Protein", value: "21 g" },
      { label: "Fiber", value: "16 g" }
    ],
    linkedMarkets: [
      { id: "m7", name: "Lugbe Community Market", url: "/markets/m7" },
      { id: "m16", name: "Dutse Alhaji Market", url: "/markets/m16" }
    ]
  },
  {
    id: 18,
    name: "Frozen Fish Mix (Titus, Croaker, Catfish)",
    category: "Meat & Seafood",
    image: frozenFish,
    seasonBadge: "Available Year-Round",
    briefDescription: "Freshly frozen premium ocean and freshwater fish selection.",
    fullDescription: "Hygienically frozen Titus (Mackerel), Croaker, and Catfish rich in Essential Omega-3 fatty acids.",
    peakSeasonRange: "All Year",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "205 kcal" },
      { label: "Protein", value: "22 g" },
      { label: "Omega-3", value: "2.5 g" }
    ],
    linkedMarkets: [
      { id: "m6", name: "Jabi Lakeside Market", url: "/markets/m6" },
      { id: "m12", name: "Wuye District Market", url: "/markets/m12" }
    ]
  },
  {
    id: 19,
    name: "Farm Fresh Chicken",
    category: "Meat & Seafood",
    image: chicken,
    seasonBadge: "Available Year-Round",
    briefDescription: "Tender, high-protein poultry sourced from local farms.",
    fullDescription: "Freshly prepped poultry suitable for grilling, roasting, boiling, or frying.",
    peakSeasonRange: "All Year",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "239 kcal" },
      { label: "Protein", value: "27 g" },
      { label: "Fat", value: "14 g" }
    ],
    linkedMarkets: [
      { id: "m4", name: "Asokoro Farmers Market", url: "/markets/m4" },
      { id: "m14", name: "Life Camp Fresh Stop", url: "/markets/m14" }
    ]
  },
  {
    id: 20,
    name: "Ground Crayfish",
    category: "Meat & Seafood",
    image: crayfish,
    seasonBadge: "Available Year-Round",
    briefDescription: "Aromatic dried crayfish used to season traditional dishes.",
    fullDescription: "Rich in flavor and calcium, ground crayfish acts as an essential seasoning for local dishes.",
    peakSeasonRange: "All Year",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "87 kcal" },
      { label: "Protein", value: "18 g" },
      { label: "Calcium", value: "20% DV" }
    ],
    linkedMarkets: [
      { id: "m5", name: "Gwarinpa Produce Market", url: "/markets/m5" },
      { id: "m15", name: "Katampe Hilltop Market", url: "/markets/m15" }
    ]
  },
  {
    id: 21,
    name: "Fresh Ugu Leaf (Fluted Pumpkin)",
    category: "Vegetables/Herbs",
    image: uguLeaf,
    seasonBadge: "In Season Now",
    briefDescription: "Nutrient-packed leafy vegetable rich in iron and blood-building properties.",
    fullDescription: "Vibrant fluted pumpkin leaves (Ugu), widely used for soups, juicing, and stir-fries.",
    peakSeasonRange: "June - December",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "45 kcal" },
      { label: "Iron", value: "25% DV" },
      { label: "Folic Acid", value: "30% DV" }
    ],
    linkedMarkets: [
      { id: "m1", name: "Wuse Major Market", url: "/markets/m1" },
      { id: "m9", name: "Nyanya Harvest Market", url: "/markets/m9" }
    ]
  },
  {
    id: 22,
    name: "Fresh Bitter Leaf",
    category: "Vegetables/Herbs",
    image: bitterLeaf,
    seasonBadge: "In Season Now",
    briefDescription: "Health-boosting green leaf renowned for medicinal qualities and soup.",
    fullDescription: "Washed or unwashed bitter leaf harvested fresh, optimal for traditional soups and tonic juices.",
    peakSeasonRange: "All Year",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "25 kcal" },
      { label: "Fiber", value: "4 g" },
      { label: "Vitamin A", value: "15% DV" }
    ],
    linkedMarkets: [
      { id: "m2", name: "Garki Green Market", url: "/markets/m2" },
      { id: "m11", name: "Utako Weekend Market", url: "/markets/m11" }
    ]
  }
];