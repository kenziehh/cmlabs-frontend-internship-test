import MealDetail from "@/sections/meal-detail/MealDetail";
import { getMealById } from "@/services/api/food";
import React from "react";

export default async function MealDetailPage({
  params,
}: {
  params: {
    categoryName: string;
    mealId: string;
  };
}) {
  const meal = await getMealById(params.mealId);
  return (
    <main>
      <MealDetail meal={meal} />
    </main>
  );
}
