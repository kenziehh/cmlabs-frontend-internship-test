import CategoryDetail from "@/sections/category-detail/CategoryDetail";
import { getMealsByCategoryName } from "@/services/api/food";
import React from "react";

export default async function page({
  params,
}: {
  params: { categoryName: string };
}) {
  const meals = (await getMealsByCategoryName(params.categoryName)) as Meal[];

  return (
    <main>
      <CategoryDetail meals={meals} categoryName={params.categoryName} />
    </main>
  );
}
