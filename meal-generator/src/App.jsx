import { useState } from "react";
import Meal from "./components/Meal";

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function App({meals}) {
  const [newMeals, setNewMeals] = useState(meals);
  const mealComponents = newMeals.map((meal, index) => <Meal day={DAYS[index]} key={meal.id} props={meal}/>)

  function getRandomMeals() {
    let uniqueMeals = [];
  
    while (uniqueMeals.length < 7) {
      let randomIndex = Math.floor(Math.random() * meals.length);
      let randomMeal = meals[randomIndex];
      
      if (!uniqueMeals.includes(randomMeal)) {
        uniqueMeals.push(randomMeal);
      }
    }
    setNewMeals(uniqueMeals);
  }

  return (
    <div className="App w-4/5 m-auto">
      <h1 className="text-4xl font-bold text-center">Meal Planner</h1>
      <button
        className="bg-slate-600 text-white px-2 rounded-md hover:bg-slate-700 my-2"
        onClick={getRandomMeals}
      >
        Generate Meals
      </button>
      <div className="days-container flex flex-wrap border-2 space-x-2">
        {mealComponents}
      </div>
    </div>
  );
}

export default App;
