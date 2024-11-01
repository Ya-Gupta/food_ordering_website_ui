import MealItems from "./MealItems";
import { FoodItems } from "../backend/data/constant";

export default function Meals() {
  console.log(FoodItems);
  return (
    <ul id="meals">
      {FoodItems.map((item) => (
        <MealItems key={item.id} meal={item} />
      ))}
    </ul>
  );
}
