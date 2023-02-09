import {v4 as uuidv4} from  'uuid';

const meals = [
  {
    id: uuidv4(),
    name: "Chipolte Burgers",
    mealType: "Dinner",
    foundAt: "Joe Wicks (teal)",
    page: 70,
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Cheesy Ham Stuffed Chicken",
    mealType: "Dinner",
    foundAt: "Joe Wicks (teal)",
    page: 65,
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Prawn and Tomato Rissotto",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "N/A",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Airfryer Salmon",
    mealType: "Dinner",
    foundAt: "The Dinner Bite",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: "https://www.thedinnerbite.com/air-fryer-salmon-with-skin/"
  },
  {
    id: uuidv4(),
    name: "Korean chicken rice bowl",
    mealType: "Dinner",
    foundAt: "Joe Wicks (teal)",
    page: "60",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Airfryer Chicken",
    mealType: "Dinner",
    foundAt: "N/A",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Cheesy Chorizo Pizza",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Pork and Apple Burger",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Crispy Breaded Chicken and Chips",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Pesto Crusted Salmon & Lemon Butter Sauce",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Firecracker Fried Chicken",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Spicy King Prawn and Chorzo Tagliatelle",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Pork and Cheesy Mash Pie",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Salmon Teriyaki Skewers and Sesame Wedges",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Double Cheese Baked BBQ Burgers",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Speedy Chicken Noodles",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Herby Lemon and Prawn Linguine",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Roasted Chicken and Chive Sauce",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Spicy Creamy CHicken Pasta",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Chorizo and Mozzarella Gnocchi",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Salmon and Chive Butter Sauce",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Roast Chicken Breast",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Buffalo Chicken Burger",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Crispy Chicken Strip Tacos",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Spicy Cajun Prawn Risotto",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Rosemary Chicken on Pea Risotto",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Creamy Bacon Pesto Pasta",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Sambal Teriyaki Chicken Stir Fry",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  {
    id: uuidv4(),
    name: "Chicken Tereyaki",
    mealType: "Dinner",
    foundAt: "Hello Fresh",
    page: "NA",
    ingredients: [
        { 
            mainIngredients: [], 
            seasoning: [] 
        }
    ],
    url: ""
  },
  
];

export default meals;
