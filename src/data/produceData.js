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
import sweetPotatoes from '../images/sweet potato2.jpg';
import honey from '../images/honeycomb 3.jpg';


export const produceData = [
  {
    id: 1,
    name: "Organic Tomatoes",
    category: "Vegetables",
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
      { id: "m1", name: "Green Valley Organic Market", url: "/markets/m1" },
      { id: "m2", name: "City Center Farmers Market", url: "/markets/m2" }
    ]
  },
  {
    id: 2,
    name: "Crisp Carrots",
    category: "Vegetables",
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
      { id: "m2", name: "City Center Farmers Market", url: "/markets/m2" }
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
      { id: "m3", name: "Riverfront Fresh Produce", url: "/markets/m3" }
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
      { id: "m1", name: "Green Valley Organic Market", url: "/markets/m1" },
      { id: "m3", name: "Riverfront Fresh Produce", url: "/markets/m3" }
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
      { id: "m2", name: "City Center Farmers Market", url: "/markets/m2" }
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
      { id: "m1", name: "Green Valley Organic Market", url: "/markets/m1" }
    ]
  },
  {
    id: 7,
    name: "Sweet Bell Pepper",
    category: "Vegetables",
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
      { id: "m2", name: "City Center Farmers Market", url: "/markets/m2" },
      { id: "m3", name: "Riverfront Fresh Produce", url: "/markets/m3" }
    ]
  },
  {
    id: 8,
    name: "Fresh Broccoli",
    category: "Vegetables",
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
      { id: "m1", name: "Green Valley Organic Market", url: "/markets/m1" }
    ]
  },
  {
    id: 9,
    name: "Sweet Corn",
    category: "Vegetables",
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
      { id: "m2", name: "City Center Farmers Market", url: "/markets/m2" },
      { id: "m3", name: "Riverfront Fresh Produce", url: "/markets/m3" }
    ]
  },
  {
    id: 10,
    name: "Cool Cucumber",
    category: "Vegetables",
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
      { id: "m1", name: "Green Valley Organic Market", url: "/markets/m1" },
      { id: "m2", name: "City Center Farmers Market", url: "/markets/m2" }
    ]
  },
  {
    id: 11,
    name: "Sweet Potatoes",
    category: "Vegetables",
    image: sweetPotatoes,
    seasonBadge: "In Season Now",
    briefDescription: "Nutrient-rich, sweet potatoes with a creamy texture.",
    fullDescription: "These sweet potatoes are perfect for roasting, mashing, or adding to soups and stews.",
    peakSeasonRange: "September - November",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "16 kcal" },
      { label: "Water Content", value: "95%" },
      { label: "Vitamin K", value: "19% DV" }
    ],
    linkedMarkets: [
      { id: "m1", name: "Riverfront Fresh Produce", url: "/markets/m1" },
      { id: "m2", name: "City Center Farmers Market", url: "/markets/m2" }
    ]
  },
    {
    id: 12,
    name: "Honeycomb",
    category: "Vegetables",
    image: honey,
    seasonBadge: "In Season Now",
    briefDescription: "Natural, pure honey harvested from local bees.",
    fullDescription: "Rich and aromatic, this honey is perfect for sweetening teas, baking, or drizzling over yogurt and toast.",
    peakSeasonRange: "September - November",
    inStock: true,
    nutritionalFacts: [
      { label: "Calories", value: "28 kcal" },
      { label: "Water Content", value: "95%" },
      { label: "Vitamin K", value: "19% DV" }
    ],
    linkedMarkets: [
      { id: "m1", name: "Riverfront Fresh Produce", url: "/markets/m1" },
      { id: "m2", name: "City Center Farmers Market", url: "/markets/m2" }
    ]
  }

];